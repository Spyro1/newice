import React, { useCallback, useMemo, useState } from 'react'

type DayKey = 'hetfo' | 'kedd' | 'szerda' | 'csutortok' | 'pentek' | 'szombat' | 'vasarnap'

// Keep legacy "type" for migration but new slots use "color"
interface SlotItem {
    id: string
    day: DayKey
    start: number
    end: number
    label: string
    color?: string // arbitrary color chosen by user
    type?: 'kozonseg' | 'oktatas' | 'foglalt' | 'hoki' | 'berles' | 'diszko'
}

const dayLabels: Record<DayKey, string> = {
    hetfo: 'Hétfő',
    kedd: 'Kedd',
    szerda: 'Szerda',
    csutortok: 'Csütörtök',
    pentek: 'Péntek',
    szombat: 'Szombat',
    vasarnap: 'Vasárnap'
}

const hourRange = { start: 7, end: 23 } // 7:00 .. 23:00

const legacyTypeColors: Record<NonNullable<SlotItem['type']>, string> = {
    kozonseg: '#0891b2',
    oktatas: '#16a34a',
    foglalt: '#dc2626',
    hoki: '#7e22ce',
    berles: '#eab308',
    diszko: '#db2777'
}

function generateId() { return Math.random().toString(36).slice(2) }

interface WeekCalendarProps {
    initial?: SlotItem[]
    admin?: boolean
}

export const WeekCalendar: React.FC<WeekCalendarProps> = ({ initial = [], admin = false }) => {
    const [slots, setSlots] = useState<SlotItem[]>(() => {
        try {
            const raw = localStorage.getItem('weekCalendarSlots')
            if (raw) {
                const parsed: SlotItem[] = JSON.parse(raw)
                // migrate legacy type -> color if needed
                parsed.forEach(s => {
                    if (!s.color && s.type) s.color = legacyTypeColors[s.type]
                })
                return parsed
            }
        } catch { /* ignore */ }
        // migrate any provided initial slots
        initial.forEach(s => { if (!s.color && s.type) s.color = legacyTypeColors[s.type as NonNullable<SlotItem['type']>] })
        return initial
    })
    const [formOpen, setFormOpen] = useState(false)
    const [draft, setDraft] = useState<Partial<SlotItem>>({ day: 'hetfo', start: 8, end: 9, label: '', color: '#39d5ff' })

    const persist = useCallback((next: SlotItem[]) => {
        setSlots(next)
        try { localStorage.setItem('weekCalendarSlots', JSON.stringify(next)) } catch { /* ignore */ }
    }, [])

    const openNew = () => { setDraft({ day: 'hetfo', start: 8, end: 9, label: '', color: '#39d5ff' }); setFormOpen(true) }
    const closeForm = () => setFormOpen(false)

    const addSlot = (e: React.FormEvent) => {
        e.preventDefault()
        if (!draft.day || draft.start === undefined || draft.end === undefined || !draft.label || !draft.color) return
        if (draft.end <= draft.start) return
        // prevent overlap (simple check)
        const overlap = slots.some(s => s.day === draft.day && Math.max(s.start, draft.start!) < Math.min(s.end, draft.end!))
        if (overlap) { alert('Átfedés a meglévő idősávval.'); return }
        const next: SlotItem = { id: generateId(), day: draft.day, start: draft.start!, end: draft.end!, label: draft.label!, color: draft.color }
        persist([...slots, next])
        closeForm()
    }

    const removeSlot = (id: string) => {
        if (!admin) return
        persist(slots.filter(s => s.id !== id))
    }

    // Group by day for rendering
    const byDay = useMemo(() => {
        const map: Record<DayKey, SlotItem[]> = { hetfo: [], kedd: [], szerda: [], csutortok: [], pentek: [], szombat: [], vasarnap: [] }
        slots.forEach(s => map[s.day].push(s))
        Object.values(map).forEach(list => list.sort((a, b) => a.start - b.start))
        return map
    }, [slots])

    const hours = useMemo(() => Array.from({ length: hourRange.end - hourRange.start + 1 }, (_, i) => hourRange.start + i), [])

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="text-2xl font-heading">Heti naptár</h3>
                {admin && <button onClick={openNew} className="btn-ice text-sm">Új idősáv</button>}
            </div>
            <div className="overflow-x-auto rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="grid-lines min-w-[900px] grid" style={{ gridTemplateColumns: `80px repeat(7, 1fr)` }}>
                    {/* Header row */}
                    <div className="bg-white/5 border border-white/10 p-2 text-xs uppercase tracking-[0.2em] text-white/60">Idő</div>
                    {Object.entries(dayLabels).map(([dayKey, label]) => (
                        <div key={dayKey} className="bg-white/5 border border-white/10 p-2 text-xs uppercase tracking-[0.15em] text-center text-white/70">{label}</div>
                    ))}
                    {/* Grid rows */}
                    {hours.map(h => (
                        <React.Fragment key={h}>
                            <div className="border border-white/10 px-2 py-4 text-sm text-white/60">{String(h).padStart(2, '0')}:00</div>
                            {Object.keys(dayLabels).map(dk => {
                                const day = dk as DayKey
                                // find slot covering this hour start
                                const slot = byDay[day].find(s => s.start === h)
                                // check if this hour is inside a slot but not its start => render empty to let span from start cell
                                const insideExisting = byDay[day].some(s => h > s.start && h < s.end)
                                if (insideExisting) return <div key={day + ':' + h} className="hidden" aria-hidden />
                                if (slot) {
                                    const span = slot.end - slot.start
                                    return (
                                        <div
                                            key={day + ':' + h}
                                            className={`relative border border-white/10 p-2 flex flex-col gap-1 text-xs text-white rounded-md shadow-sm`}
                                            style={{ gridRow: `span ${span}`, background: slot.color ? slot.color : (slot.type ? legacyTypeColors[slot.type] : 'var(--accent)'), opacity: 0.85 }}
                                        >
                                            <div className="font-semibold leading-tight">{slot.label}</div>
                                            <div className="opacity-80">{slot.start}:00 – {slot.end}:00</div>
                                            {admin && (
                                                <button onClick={() => removeSlot(slot.id)} className="mt-auto self-end text-[10px] bg-black/30 px-2 py-0.5 rounded">Törlés</button>
                                            )}
                                        </div>
                                    )
                                }
                                return <div key={day + ':' + h} className="border border-white/10 bg-white/3" />
                            })}
                        </React.Fragment>
                    ))}
                </div>
            </div>
            {formOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                    <form onSubmit={addSlot} className="frosted-card p-6 w-full max-w-md space-y-5">
                        <h4 className="text-xl font-heading">Új idősáv</h4>
                        <div className="grid gap-3">
                            <label className="flex flex-col gap-1 text-sm">
                                <span>Nap</span>
                                <select
                                    value={draft.day}
                                    onChange={e => setDraft(d => ({ ...d, day: e.target.value as DayKey }))}
                                    className="bg-white/10 border border-white/30 rounded px-3 py-2 text-white focus:border-cyan-400 outline-none appearance-none"
                                >
                                    {Object.entries(dayLabels).map(([k, v]) => <option key={k} value={k} className="bg-[#06293d] text-white">{v}</option>)}
                                </select>
                            </label>
                            <div className="grid grid-cols-2 gap-3">
                                <label className="flex flex-col gap-1 text-sm">
                                    <span>Kezdés (óra)</span>
                                    <input type="number" min={hourRange.start} max={hourRange.end - 1} value={draft.start} onChange={e => setDraft(d => ({ ...d, start: Number(e.target.value) }))} className="bg-white/10 border border-white/30 rounded px-3 py-2 text-white focus:border-cyan-400 outline-none" />
                                </label>
                                <label className="flex flex-col gap-1 text-sm">
                                    <span>Befejezés (óra)</span>
                                    <input type="number" min={hourRange.start + 1} max={hourRange.end} value={draft.end} onChange={e => setDraft(d => ({ ...d, end: Number(e.target.value) }))} className="bg-white/10 border border-white/30 rounded px-3 py-2 text-white focus:border-cyan-400 outline-none" />
                                </label>
                            </div>
                            <label className="flex flex-col gap-1 text-sm">
                                <span>Megnevezés</span>
                                <input value={draft.label} onChange={e => setDraft(d => ({ ...d, label: e.target.value }))} className="bg-white/10 border border-white/30 rounded px-3 py-2 text-white focus:border-cyan-400 outline-none" />
                            </label>
                            <div className="flex flex-col gap-2 text-sm">
                                <span>Szín</span>
                                <div className="flex items-center gap-3 flex-wrap">
                                    <input
                                        type="color"
                                        value={draft.color}
                                        onChange={e => setDraft(d => ({ ...d, color: e.target.value }))}
                                        className="h-10 w-16 rounded cursor-pointer border border-white/30 bg-white/10"
                                    />
                                    {['#39d5ff', '#5ff9c8', '#ffd79e', '#ffc7f1', '#c9d6df', '#db2777', '#16a34a', '#7e22ce'].map(c => (
                                        <button
                                            type="button"
                                            key={c}
                                            onClick={() => setDraft(d => ({ ...d, color: c }))}
                                            className="h-8 w-8 rounded-md border border-white/20 hover:border-cyan-300 focus:outline-none"
                                            style={{ background: c }}
                                            aria-label={"Szín kiválasztása " + c}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3 pt-2">
                            <button type="submit" className="btn-ice">Mentés</button>
                            <button type="button" onClick={closeForm} className="btn-ghost">Mégse</button>
                        </div>
                    </form>
                </div>
            )}
            {admin && (
                <div className="text-xs text-white/50 space-y-1">
                    <p>Exportált JSON:</p>
                    <pre className="bg-black/40 p-2 rounded max-h-40 overflow-auto">{JSON.stringify(slots, null, 2)}</pre>
                </div>
            )}
        </div>
    )
}

export default WeekCalendar