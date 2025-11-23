import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

type DayKey = 'hetfo' | 'kedd' | 'szerda' | 'csutortok' | 'pentek' | 'szombat' | 'vasarnap'

interface SlotItem {
    id: string
    day: DayKey
    start: number
    end: number
    label: string
    color: string
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

// Legacy mapping (was type -> color); kept for migration only.
const legacyTypeColors: Record<string, string> = {
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
                const parsed = JSON.parse(raw) as any[]
                return parsed.map(p => ({
                    id: p.id,
                    day: p.day,
                    start: p.start,
                    end: p.end,
                    label: p.label,
                    color: p.color || '#0d84a3',
                })) as SlotItem[]
            }
        } catch { /* ignore */ }
        return initial.map(p => ({ ...p, color: p.color || '#0d84a3' }))
    })
    const [formOpen, setFormOpen] = useState(false)
    const [draft, setDraft] = useState<Partial<SlotItem>>({ day: 'hetfo', start: 8, end: 9, label: '', color: '#0d84a3' })
    const [editingId, setEditingId] = useState<string | null>(null)
    const [confirmDelete, setConfirmDelete] = useState<SlotItem | null>(null)

    // Persist slots whenever they change (avoids stale closure issues during rapid add/edit sequences)
    useEffect(() => {
        try { localStorage.setItem('weekCalendarSlots', JSON.stringify(slots)) } catch { /* ignore */ }
    }, [slots])

    const openNew = () => { setEditingId(null); setDraft({ day: 'hetfo', start: 8, end: 9, label: '', color: palette[0] }); setFormOpen(true) }
    const openEdit = (slot: SlotItem) => {
        if (!admin) return
        setEditingId(slot.id)
        setDraft({ day: slot.day, start: slot.start, end: slot.end, label: slot.label, color: slot.color })
        setFormOpen(true)
    }
    const closeForm = () => setFormOpen(false)

    const addSlot = (e: React.FormEvent) => {
        e.preventDefault()
        if (!draft.day || draft.start === undefined || draft.end === undefined || !draft.label || !draft.color) return
        if (draft.end <= draft.start) return
        setSlots(prev => {
            // overlap check against latest state
            const overlap = prev.some(s => s.id !== editingId && s.day === draft.day && Math.max(s.start, draft.start!) < Math.min(s.end, draft.end!))
            if (overlap) { alert('Átfedés a meglévő idősávval.'); return prev }
            if (editingId) {
                return prev.map(s => s.id === editingId ? { ...s, day: draft.day!, start: draft.start!, end: draft.end!, label: draft.label!, color: draft.color! } : s)
            }
            const next: SlotItem = { id: generateId(), day: draft.day as DayKey, start: draft.start!, end: draft.end!, label: draft.label!, color: draft.color! }
            return [...prev, next]
        })
        closeForm()
    }

    const removeSlot = (id: string) => {
        if (!admin) return
        setSlots(prev => prev.filter(s => s.id !== id))
        setConfirmDelete(null)
    }

    // Group by day
    const byDay = useMemo(() => {
        const map: Record<DayKey, SlotItem[]> = { hetfo: [], kedd: [], szerda: [], csutortok: [], pentek: [], szombat: [], vasarnap: [] }
        slots.forEach(s => map[s.day].push(s))
        Object.values(map).forEach(list => list.sort((a, b) => a.start - b.start))
        return map
    }, [slots])

    const totalHours = hourRange.end - hourRange.start
    const rowHeight = 44 // px per hour
    const headerCellRef = useRef<HTMLDivElement | null>(null)
    const [headerHeight, setHeaderHeight] = useState<number>(40)
    useEffect(() => {
        function measure() {
            if (headerCellRef.current) setHeaderHeight(headerCellRef.current.getBoundingClientRect().height)
        }
        measure()
        window.addEventListener('resize', measure)
        return () => window.removeEventListener('resize', measure)
    }, [])
    const calendarHeight = headerHeight + totalHours * rowHeight
    const palette = ['#0d84a3', '#0d6f57', '#b4761e', '#a83b7c', '#5a6b73', '#8d0f45', '#0e5c28', '#4a1d7d']

    // Selection (interval creation by drag)
    const [selecting, setSelecting] = useState<null | { day: DayKey; start: number; current: number; el: HTMLDivElement }>(null)

    // Dragging existing slot
    const [dragging, setDragging] = useState<null | { id: string; originalStart: number; duration: number; day: DayKey; el: HTMLDivElement }>(null)
    const dragMovedRef = useRef(false)
    const slotsRef = useRef(slots)
    useEffect(() => { slotsRef.current = slots }, [slots])

    // Column refs
    const colRefs = useRef<Record<DayKey, HTMLDivElement | null>>({ hetfo: null, kedd: null, szerda: null, csutortok: null, pentek: null, szombat: null, vasarnap: null })

    const beginSelection = (day: DayKey, e: React.MouseEvent<HTMLDivElement>) => {
        if (!admin) return
        const el = e.currentTarget
        const rect = el.getBoundingClientRect()
        const offsetY = e.clientY - rect.top
        let hour = hourRange.start + Math.floor(offsetY / rowHeight)
        hour = Math.min(Math.max(hour, hourRange.start), hourRange.end - 1)
        setSelecting({ day, start: hour, current: hour + 1, el })
    }

    const beginDrag = (slot: SlotItem, e: React.MouseEvent<HTMLDivElement>) => {
        if (!admin) return
        e.stopPropagation()
        const el = e.currentTarget
        setDragging({ id: slot.id, originalStart: slot.start, duration: slot.end - slot.start, day: slot.day, el })
        dragMovedRef.current = false
    }

    useEffect(() => {
        if (!selecting) return
        function onMove(e: MouseEvent) {
            setSelecting(sel => {
                if (!sel) return null
                const rect = sel.el.getBoundingClientRect()
                const offsetY = e.clientY - rect.top
                let h = hourRange.start + Math.ceil(offsetY / rowHeight)
                h = Math.min(Math.max(h, sel.start + 1), hourRange.end)
                return { ...sel, current: h }
            })
        }
        function onUp() {
            setSelecting(sel => {
                if (!sel) return null
                setDraft({ day: sel.day, start: sel.start, end: sel.current, label: '', color: '#0d84a3' })
                setFormOpen(true)
                return null
            })
        }
        window.addEventListener('mousemove', onMove)
        window.addEventListener('mouseup', onUp, { once: true })
        return () => { window.removeEventListener('mousemove', onMove) }
    }, [selecting])

    useEffect(() => {
        if (!dragging) return
        function onMove(e: MouseEvent) {
            if (!dragging) return
            const ref = colRefs.current[dragging.day]
            if (!ref) return
            const rect = ref.getBoundingClientRect()
            const offsetY = e.clientY - rect.top
            let diff = Math.round(offsetY / rowHeight) - (dragging.originalStart - hourRange.start)
            if (diff !== 0) dragMovedRef.current = true
            let newStart = dragging.originalStart + diff
            newStart = Math.min(Math.max(newStart, hourRange.start), hourRange.end - dragging.duration)
            setSlots(prev => prev.map(s => s.id === dragging.id ? { ...s, start: newStart, end: newStart + dragging.duration } : s))
        }
        function onUp(e: MouseEvent) {
            if (!dragging) return
            const currentList = slotsRef.current
            const moved = currentList.find(s => s.id === dragging.id)
            if (moved) {
                const overlap = currentList.some(s => s.id !== moved.id && s.day === moved.day && Math.max(s.start, moved.start) < Math.min(s.end, moved.end))
                if (overlap) {
                    // revert
                    setSlots(prev => prev.map(s => s.id === moved.id ? { ...s, start: dragging.originalStart, end: dragging.originalStart + dragging.duration } : s))
                } else {
                    // successful drag end; persistence handled by slots change effect
                }
            }
            const wasMoved = dragMovedRef.current
            const clickedSlot = slotsRef.current.find(s => s.id === dragging.id)
            setDragging(null)
            if (admin && clickedSlot && !wasMoved) {
                // treat as click -> edit
                openEdit(clickedSlot)
            }
        }
        window.addEventListener('mousemove', onMove)
        window.addEventListener('mouseup', onUp, { once: true })
        return () => { window.removeEventListener('mousemove', onMove) }
    }, [dragging, admin])

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="text-2xl font-heading">Heti naptár</h3>
                {admin && <button onClick={openNew} className="btn-ice text-sm">Új idősáv</button>}
            </div>
            <div className="overflow-x-auto rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm relative" style={{ height: calendarHeight }}>
                <div className="min-w-[900px] grid" style={{ gridTemplateColumns: `80px repeat(7, 1fr)` }}>
                    {/* Hour column header */}
                    <div ref={headerCellRef} className="bg-white/5 border border-white/10 p-2 text-xs uppercase tracking-[0.2em] text-white/60">Idő</div>
                    {Object.entries(dayLabels).map(([dayKey, label]) => (
                        <div key={dayKey} className="bg-white/5 border border-white/10 p-2 text-xs uppercase tracking-[0.15em] text-center text-white/70">{label}</div>
                    ))}
                    {/* Body rows (hour labels only) */}
                    {Array.from({ length: totalHours }).map((_, i) => {
                        const hour = hourRange.start + i
                        return (
                            <React.Fragment key={hour}>
                                <div className="border border-white/10 px-2 flex items-center text-sm text-white/60" style={{ height: rowHeight }}>{String(hour).padStart(2, '0')}:00</div>
                                {Object.keys(dayLabels).map(dk => {
                                    const day = dk as DayKey
                                    return (
                                        <div
                                            key={day + ':' + hour}
                                            className="border border-white/10 relative"
                                            style={{ height: rowHeight }}
                                        />
                                    )
                                })}
                            </React.Fragment>
                        )
                    })}
                </div>
                {/* Overlay slot layers */}
                <div className="grid absolute left-0 right-0" style={{ top: headerHeight, gridTemplateColumns: `80px repeat(7, 1fr)`, height: totalHours * rowHeight }}>
                    <div style={{ height: totalHours * rowHeight }} />
                    {Object.keys(dayLabels).map(dk => {
                        const day = dk as DayKey
                        return (
                            <div
                                key={day}
                                ref={el => { colRefs.current[day] = el }}
                                className="relative"
                                style={{ height: totalHours * rowHeight }}
                                onMouseDown={e => beginSelection(day, e)}
                                role="presentation"
                            >
                                {/* Slots */}
                                {byDay[day].map(slot => {
                                    const top = (slot.start - hourRange.start) * rowHeight
                                    const height = (slot.end - slot.start) * rowHeight
                                    const maxTop = totalHours * rowHeight - height
                                    const clampedTop = Math.min(top, maxTop)
                                    const oneHour = slot.end - slot.start === 1
                                    // Decide styling based on duration & mode
                                    let paddingClass: string
                                    let gapClass: string
                                    let textSizeClass: string
                                    if (oneHour) {
                                        if (admin) { // condensed but keep space for text
                                            paddingClass = 'p-1 pr-6' // extra right padding for delete button absolute
                                            gapClass = 'gap-0'
                                            textSizeClass = 'text-[11px]'
                                        } else { // user mode: show like normal
                                            paddingClass = 'p-2'
                                            gapClass = 'gap-1'
                                            textSizeClass = 'text-xs'
                                        }
                                    } else {
                                        paddingClass = 'p-2'
                                        gapClass = 'gap-1'
                                        textSizeClass = 'text-xs'
                                    }
                                    return (
                                        <div
                                            key={slot.id}
                                            onMouseDown={e => beginDrag(slot, e)}
                                            className={`absolute left-1 right-1 rounded-md shadow-sm cursor-move select-none text-white flex flex-col ${paddingClass} ${gapClass} ${textSizeClass}`}
                                            style={{ top: clampedTop, height, background: slot.color, opacity: 0.95, pointerEvents: 'auto' }}
                                        >
                                            <div className="font-semibold leading-tight truncate" title={slot.label}>{slot.label}</div>
                                            <div className="opacity-90 text-[10px] leading-tight">{slot.start}:00 – {slot.end}:00</div>
                                            {admin && (
                                                oneHour ? (
                                                    <button
                                                        onMouseDown={(e) => e.stopPropagation()}
                                                        onClick={(e) => { e.stopPropagation(); setConfirmDelete(slot) }}
                                                        className="absolute top-1 right-1 text-[10px] bg-black/40 px-2 py-0.5 rounded"
                                                        style={{ pointerEvents: 'auto' }}
                                                    >Törlés</button>
                                                ) : (
                                                    <div className="mt-auto flex justify-end gap-1">
                                                        <button
                                                            onMouseDown={(e) => e.stopPropagation()}
                                                            onClick={(e) => { e.stopPropagation(); setConfirmDelete(slot) }}
                                                            className="text-[10px] bg-black/40 px-2 py-0.5 rounded"
                                                            style={{ pointerEvents: 'auto' }}
                                                        >Törlés</button>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    )
                                })}
                                {/* Selection preview */}
                                {selecting && selecting.day === day && (
                                    <div
                                        className="absolute left-1 right-1 rounded-md border border-cyan-300/60 bg-cyan-400/30"
                                        style={{ top: (selecting.start - hourRange.start) * rowHeight, height: (selecting.current - selecting.start) * rowHeight }}
                                    />
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
            {formOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                    <form onSubmit={addSlot} className="frosted-card p-6 w-full max-w-md space-y-5">
                        <h4 className="text-xl font-heading">{editingId ? 'Idősáv szerkesztése' : 'Új idősáv'}</h4>
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
                                <input value={draft.label} autoFocus onChange={e => setDraft(d => ({ ...d, label: e.target.value }))} className="bg-white/10 border border-white/30 rounded px-3 py-2 text-white focus:border-cyan-400 outline-none" />
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
                                    {palette.map(c => (
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
                            <button type="submit" className="btn-ice">{editingId ? 'Mentés' : 'Létrehozás'}</button>
                            <button type="button" onClick={closeForm} className="btn-ghost">Mégse</button>
                        </div>
                    </form>
                </div>
            )}
            {confirmDelete && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm">
                    <div className="frosted-card w-full max-w-sm p-6 space-y-4">
                        <h4 className="text-lg font-heading">Törlés megerősítése</h4>
                        <p className="text-sm text-white/80">Biztosan törlöd az idősávot?</p>
                        <div className="text-xs bg-black/30 rounded p-3 space-y-1">
                            <div><span className="opacity-60">Megnevezés:</span> {confirmDelete.label}</div>
                            <div><span className="opacity-60">Nap:</span> {dayLabels[confirmDelete.day]}</div>
                            <div><span className="opacity-60">Idő:</span> {confirmDelete.start}:00 – {confirmDelete.end}:00</div>
                        </div>
                        <div className="flex gap-3 pt-2">
                            <button onClick={() => removeSlot(confirmDelete.id)} className="btn-ice">Törlés</button>
                            <button onClick={() => setConfirmDelete(null)} className="btn-ghost">Mégse</button>
                        </div>
                    </div>
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