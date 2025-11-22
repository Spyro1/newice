const tickets = [
    { title: 'Felnőtt belépő', price: '2 400 Ft', desc: '2 órás sávra érvényes, tartalmazza az öltözőhasználatot.', icon: '/assets/img/icons/ice-skating-people.png' },
    { title: 'Diák / Gyermek', price: '1 900 Ft', desc: '14 éves korig, hétvégén is ugyanennyi.', icon: '/assets/img/icons/ice-skating-boy.png' },
    { title: 'Korcsolyabérlés', price: '1 200 Ft', desc: '36-47 méretig, minden kör után fertőtlenítve.', icon: '/assets/img/icons/skates.png' }
]

const rental = [
    { title: 'Pályabérlés csapatoknak', price: '48 000 Ft / 55 perc', desc: 'Görgőzött jég, saját öltöző, technikai támogatás.', icon: '/assets/img/icons/ice-hockey.png' },
    { title: 'Disco / privát buli', price: '85 000 Ft / 90 perc', desc: 'Fény és hangtechnika, DJ pult, lounge szolgáltatás.', icon: '/assets/img/icons/disco-ball.png' }
]

const extras = [
    { label: 'Pengézés + fertőtlenítés', price: '1 500 Ft/pár' },
    { label: 'Hot chocolate pass', price: '900 Ft/fő' },
    { label: 'Fotós csomag', price: '15 000 Ft/esemény' }
]

export default function Prices() {
    return (
        <section class="max-w-6xl mx-auto px-4 py-20 text-white space-y-12">
            <header class="text-center space-y-3">
                <span class="badge-ice">Árak</span>
                <h2 class="text-4xl font-heading">Válassz élményt</h2>
                <p class="text-white/70">Áraink bruttó összegek, helyszíni és online fizetéssel is kérhetők.</p>
            </header>

            <div class="grid gap-6 md:grid-cols-3">
                {tickets.map(item => (
                    <article key={item.title} class="frosted-card p-6 space-y-4">
                        <img src={item.icon} alt="ikon" class="h-12 w-12" />
                        <h3 class="text-2xl font-heading">{item.title}</h3>
                        <p class="text-4xl font-heading text-accent">{item.price}</p>
                        <p class="text-white/70 text-sm">{item.desc}</p>
                    </article>
                ))}
            </div>

            <div class="grid gap-6 md:grid-cols-2">
                {rental.map(item => (
                    <article key={item.title} class="frosted-card p-6 space-y-3">
                        <div class="flex items-center gap-3">
                            <img src={item.icon} alt="ikon" class="h-12 w-12" />
                            <div>
                                <h3 class="text-2xl font-heading">{item.title}</h3>
                                <p class="text-white/70 text-sm">{item.desc}</p>
                            </div>
                        </div>
                        <p class="text-4xl font-heading text-accent">{item.price}</p>
                    </article>
                ))}
            </div>

            <div class="frosted-card p-6 space-y-3">
                <h3 class="text-xl font-heading">Kiegészítők</h3>
                <ul class="grid md:grid-cols-3 gap-3 text-sm text-white/75">
                    {extras.map(extra => (
                        <li key={extra.label} class="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3">
                            <span>{extra.label}</span>
                            <span class="text-accent">{extra.price}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
