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
        <section class="max-w-6xl mx-auto px-4 py-20 space-y-10 text-white">
            <div class="text-center space-y-3">
                <span class="badge-ice">Nyitvatartás</span>
                <h2 class="text-4xl font-heading">Heti menetrend</h2>
                <p class="text-white/70">A táblázatban a fő idősávokat és azok státuszát látod. Foglalás előtt mindig ellenőrizd az aktuális napot!</p>
            </div>

            <div class="frosted-card p-0 overflow-hidden">
                <table class="schedule-grid text-sm text-white/80">
                    <tbody>
                        {schedule.map(block => (
                            block.slots.map((slot, idx) => (
                                <tr key={`${block.status}-${slot.time}`} class="bg-white/5">
                                    {idx === 0 && (
                                        <td rowSpan={block.slots.length} class={`align-top w-48 text-center font-semibold uppercase tracking-[0.2em] text-xs px-4 py-6 schedule-status-${block.type}`}>
                                            {block.status}
                                        </td>
                                    )}
                                    <td class="w-40 px-6 py-4 text-white">{slot.time}</td>
                                    <td class="px-6 py-4">{slot.details}</td>
                                </tr>
                            ))
                        ))}
                    </tbody>
                </table>
            </div>

            <div class="grid gap-4 md:grid-cols-3">
                {weeklyNote.map(note => (
                    <article key={note.day} class="frosted-card p-5">
                        <p class="text-xs uppercase tracking-[0.3em] text-white/60">{note.day}</p>
                        <p class="text-lg font-heading text-white">{note.info}</p>
                    </article>
                ))}
            </div>

            <div class="frosted-card p-6 space-y-3">
                <h3 class="text-2xl font-heading">Jéglabirintus</h3>
                <p class="text-white/75">Hétvégenként 08:00 – 20:00 között folyamatosan nyitva, függetlenül az edzésidőktől. Maximum 40 fő bent tartózkodása engedélyezett, 45 perces blokkokra osztva.</p>
                <a href="/contact" class="btn-ice w-max">Labirintus foglalás</a>
            </div>
        </section>
    )
}
