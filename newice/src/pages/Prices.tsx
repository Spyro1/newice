const weekdayPublic = [
    { title: 'Gyermek (≤14 év)', price: '2 300 Ft / alkalom', desc: 'Hétköznap közönségjég idősávokra.' },
    { title: 'Felnőtt (>14 év)', price: '3 000 Ft / alkalom', desc: 'Hétköznap közönségjég idősávokra.' }
]

const weekendPublic = [
    { title: 'Gyermek (≤14 év)', price: '3 000 Ft / alkalom', desc: 'Hétvége, munkaszüneti és iskolaszüneti napok.' },
    { title: 'Felnőtt (>14 év)', price: '4 000 Ft / alkalom', desc: 'Hétvége, munkaszüneti és iskolaszüneti napok.' }
]

const familyTickets = [
    { title: '2 felnőtt + 2 gyermek (hétköznap)', price: '8 500 Ft', desc: 'Egyszeri közönségjég alkalom.' },
    { title: '2 felnőtt + 3 gyermek (hétköznap)', price: '11 000 Ft', desc: 'Egyszeri közönségjég alkalom.' },
    { title: '2 felnőtt + 2 gyermek (hétvége / szünet)', price: '11 000 Ft', desc: 'Emelt hétvégi díjszabás.' },
    { title: '2 felnőtt + 3 gyermek (hétvége / szünet)', price: '13 500 Ft', desc: 'Emelt hétvégi díjszabás.' }
]

const skateRental = [
    { title: 'Korcsolya bérlés ≤14 év', price: '1 500 Ft / alkalom', desc: 'Fertőtlenítve minden használat után.' },
    { title: 'Korcsolya bérlés >14 év', price: '2 000 Ft / alkalom', desc: 'Korlátozott méret készlet – érkezz időben.' }
]

const rinkRental = [
    { title: 'Pályabérlés H–Cs', price: '40 000 Ft / 50 perc', desc: 'Fedett jégpálya + elő sátor.' },
    { title: 'Pályabérlés P–V', price: '50 000 Ft / 50 perc', desc: 'Korlátozott hétvégi idősávok.' },
    { title: 'Teljes komplexum (jég + folyosó)', price: '150 000 Ft / 50 perc', desc: 'Külön kérésre, előzetes egyeztetéssel.' }
]

const education = [
    { title: 'Kori suli (kezdő / középhaladó)', price: '6 000 Ft / fő / alkalom', desc: 'Testvér kedvezmény: 5 500 Ft.' },
    { title: 'Haladó / Felnőtt oktatás', price: '7 000 Ft / fő / alkalom', desc: 'Család kedvezmény: 6 500 Ft.' },
    { title: 'Havi bérlet (hétfő, szerda, szombat)', price: '69 000 Ft / hó', desc: 'Tagdíj jellegű – nem visszatéríthető.' },
    { title: 'Hoki suli (kezdő)', price: '5 000 Ft / fő / alkalom', desc: '5 alkalmas bérlet: 20 000 Ft (kezdőknek).' }
]

const extras = [
    { label: 'Magán kori oktatás', price: 'Egyeztetés szerint' },
    { label: 'Pálya bérlés részletek', price: 'Lásd /palyaberles' },
    { label: 'Jégdiszkó', price: 'Kiemelt esemény díjszabás' }
]

export default function Prices() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-20 text-white space-y-14">
            <header className="text-center space-y-3">
                <span className="badge-ice">Áraink</span>
                <h1 className="text-4xl font-heading">Közönségjég, bérlés, oktatás</h1>
                <p className="text-white/70 text-sm md:text-base">Az árak bruttó értékek, forintban.</p>
            </header>

            <div className="space-y-10">
                <h2 className="text-2xl font-heading">Közönségjég hétköznap</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    {weekdayPublic.map(item => (
                        <article key={item.title} className="frosted-card p-6 space-y-3">
                            <h3 className="text-xl font-heading">{item.title}</h3>
                            <p className="text-3xl font-heading text-accent">{item.price}</p>
                            <p className="text-white/70 text-sm">{item.desc}</p>
                        </article>
                    ))}
                </div>
            </div>

            <div className="space-y-10">
                <h2 className="text-2xl font-heading">Közönségjég hétvége / szünet</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    {weekendPublic.map(item => (
                        <article key={item.title} className="frosted-card p-6 space-y-3">
                            <h3 className="text-xl font-heading">{item.title}</h3>
                            <p className="text-3xl font-heading text-accent">{item.price}</p>
                            <p className="text-white/70 text-sm">{item.desc}</p>
                        </article>
                    ))}
                </div>
            </div>

            <div className="space-y-8">
                <h2 className="text-2xl font-heading">Családi belépők</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {familyTickets.map(item => (
                        <article key={item.title} className="frosted-card p-5 space-y-2">
                            <h3 className="text-sm font-heading uppercase tracking-[0.2em]">{item.title}</h3>
                            <p className="text-2xl font-heading text-accent">{item.price}</p>
                            <p className="text-white/60 text-xs">{item.desc}</p>
                        </article>
                    ))}
                </div>
            </div>

            <div className="space-y-8">
                <h2 className="text-2xl font-heading">Korcsolya bérlés</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    {skateRental.map(item => (
                        <article key={item.title} className="frosted-card p-6 space-y-2">
                            <h3 className="text-lg font-heading">{item.title}</h3>
                            <p className="text-3xl font-heading text-accent">{item.price}</p>
                            <p className="text-white/65 text-sm">{item.desc}</p>
                        </article>
                    ))}
                </div>
            </div>

            <div className="space-y-8">
                <h2 className="text-2xl font-heading">Pályabérlés</h2>
                <div className="grid gap-6 md:grid-cols-3">
                    {rinkRental.map(item => (
                        <article key={item.title} className="frosted-card p-6 space-y-2">
                            <h3 className="text-sm font-heading uppercase tracking-[0.15em]">{item.title}</h3>
                            <p className="text-2xl font-heading text-accent">{item.price}</p>
                            <p className="text-white/60 text-xs">{item.desc}</p>
                        </article>
                    ))}
                </div>
                <p className="text-white/60 text-xs">Teljes komplexum bérléséhez előzetes egyeztetés szükséges. További részletek: <a href="https://newice.hu/palyaberles" target="_blank" rel="noreferrer" className="text-accent underline">pályabérlés</a></p>
            </div>

            <div className="space-y-8">
                <h2 className="text-2xl font-heading">Oktatás / Hoki suli</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {education.map(item => (
                        <article key={item.title} className="frosted-card p-5 space-y-2">
                            <h3 className="text-sm font-heading uppercase tracking-[0.15em]">{item.title}</h3>
                            <p className="text-xl font-heading text-accent">{item.price}</p>
                            <p className="text-white/60 text-xs">{item.desc}</p>
                        </article>
                    ))}
                </div>
                <p className="text-white/60 text-xs">Hoki utánpótlás és részletes edzésrend: <a href="http://budaorsvillamok.hu" target="_blank" rel="noreferrer" className="text-accent underline">budaorsvillamok.hu</a></p>
            </div>

            <div className="frosted-card p-6 space-y-3">
                <h3 className="text-xl font-heading">Egyéb</h3>
                <ul className="grid md:grid-cols-3 gap-3 text-sm text-white/75">
                    {extras.map(extra => (
                        <li key={extra.label} className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3">
                            <span>{extra.label}</span>
                            <span className="text-accent text-xs">{extra.price}</span>
                        </li>
                    ))}
                </ul>
                <p className="text-white/50 text-xs leading-relaxed">Az árak tájékoztató jellegűek, változhatnak szezon közben. Mindig ellenőrizd a hivatalos oldalt frissítés előtt. A havi bérlet tagdíj jellegű, nem visszatéríthető.</p>
            </div>
        </section>
    )
}
