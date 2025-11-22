const hours = [
    { day: 'Hétfő', time: '14:00 - 18:00' },
    { day: 'Kedd', time: '14:00 - 18:00' },
    { day: 'Szerda', time: '14:00 - 19:00' },
    { day: 'Csütörtök', time: '14:00 - 19:00' },
    { day: 'Péntek', time: '14:00 - 20:00' },
    { day: 'Szombat', time: '10:00 - 20:00' },
    { day: 'Vasárnap', time: '10:00 - 20:00' }
]

export default function Open() {
    return (
        <section class="max-w-4xl mx-auto px-4 py-16 space-y-6">
            <article class="rect-card">
                <p class="text-sm uppercase tracking-[0.3em] text-accent-dark">Nyitvatartás</p>
                <h2 class="text-3xl font-heading mt-3">Heti menetrend</h2>
                <p class="text-sm text-text mt-2">A fedett pálya időpontjai hetente változhatnak. Indulás előtt kérjük ellenőrizd a frissített táblázatot.</p>
            </article>
            <div class="rect-card p-0 overflow-hidden">
                <table class="w-full text-left text-sm">
                    <tbody>
                        {hours.map(row => (
                            <tr key={row.day} class="border-b border-gray-100">
                                <th class="uppercase tracking-widest text-xs bg-[#f8fafa] px-6 py-4 w-32">{row.day}</th>
                                <td class="px-6 py-4 font-semibold">{row.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div class="rect-card bg-accent text-white">
                <h3 class="text-xl font-heading">Jéglabirintus</h3>
                <p class="text-sm mt-2">Egész nap 8:00-20:00 között nyitva, függetlenül a fedett pálya időpontjaitól.</p>
            </div>
        </section>
    )
}
