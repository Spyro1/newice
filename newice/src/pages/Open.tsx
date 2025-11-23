import { Link } from 'react-router-dom'

const schedule = [
    {
        status: 'Közönségjég',
        type: 'open',
        slots: [
            { time: '06:00 – 10:00', details: 'Csendes csúszás, utolsó belépés 09:00' },
            { time: '10:00 – 14:00', details: 'Családi sáv, segédeszközök a helyszínen' }
        ]
    },
    {
        status: 'Csapat edzés / foglalt',
        type: 'team',
        slots: [
            { time: '14:00 – 17:00', details: 'Hokicsapatok és iskolai csoportok' },
            { time: '17:00 – 18:30', details: 'Pályabérlés előzetes foglalással' }
        ]
    },
    {
        status: 'Közönségjég + Disco',
        type: 'disco',
        slots: [
            { time: '19:00 – 20:30', details: 'Nyitott mindenki számára, hangulatvilágítás' },
            { time: '20:30 – 23:30 (Péntek, Szombat)', details: 'Glow Disco – DJ, fényshow, 14+ korhatár' }
        ]
    },
    {
        status: 'Karbantartás / Zárva',
        type: 'closed',
        slots: [
            { time: '23:30 – 06:00', details: 'Jégápolás, karbantartás, privát rendezvények' }
        ]
    }
]

const weeklyNote = [
    { day: 'Hétfő – Csütörtök', info: 'Közönségjég 06:00 – 14:00, este edzések' },
    { day: 'Péntek', info: 'Disco jég 20:30 – 23:30, limitált belépő' },
    { day: 'Szombat – Vasárnap', info: 'Extra családi sávok 08:00 – 12:00' }
]

export default function Open() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-20 space-y-10 text-white">
            <div className="text-center space-y-3">
                <span className="badge-ice">Nyitvatartás</span>
                <h2 className="text-4xl font-heading">Heti menetrend</h2>
                <p className="text-white/70">A táblázatban a fő idősávokat és azok státuszát látod. Foglalás előtt mindig ellenőrizd az aktuális napot!</p>
            </div>

            <div className="frosted-card p-0 overflow-hidden">
                <table className="schedule-grid text-sm text-white/80">
                    <tbody>
                        {schedule.map(block => (
                            block.slots.map((slot, idx) => (
                                <tr key={`${block.status}-${slot.time}`} className="bg-white/5">
                                    {idx === 0 && (
                                        <td rowSpan={block.slots.length} className={`align-top w-48 text-center font-semibold uppercase tracking-[0.2em] text-xs px-4 py-6 schedule-status-${block.type}`}>
                                            {block.status}
                                        </td>
                                    )}
                                    <td className="w-40 px-6 py-4 text-white">{slot.time}</td>
                                    <td className="px-6 py-4">{slot.details}</td>
                                </tr>
                            ))
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                {weeklyNote.map(note => (
                    <article key={note.day} className="frosted-card p-5">
                        <p className="text-xs uppercase tracking-[0.3em] text-white/60">{note.day}</p>
                        <p className="text-lg font-heading text-white">{note.info}</p>
                    </article>
                ))}
            </div>

            <div className="frosted-card p-6 space-y-3">
                <h3 className="text-2xl font-heading">Jéglabirintus</h3>
                <p className="text-white/75">Hétvégenként 08:00 – 20:00 között folyamatosan nyitva, függetlenül az edzésidőktől. Maximum 40 fő bent tartózkodása engedélyezett, 45 perces blokkokra osztva.</p>
                <Link to="/contact" className="btn-ice w-max">Labirintus foglalás</Link>
            </div>
        </section>
    )
}
