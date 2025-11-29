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
    { title: 'Gyermek (≤14 év)', price: '1 500 Ft / alkalom', desc: 'Fertőtlenítve minden használat után.' },
    { title: 'Felnőtt (>14 év)', price: '2 000 Ft / alkalom', desc: 'Korlátozott méret készlet – érkezz időben.' }
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

const sectionTitleClass = 'text-2xl font-heading'
const cardWrapperClass = 'frosted-card px-5 py-4 space-y-3 sm:px-6 sm:py-5'
const cardHeadingClass = 'text-sm font-heading uppercase tracking-[0.15em] text-white/90 sm:text-base'
const cardPriceClass = 'text-xl font-heading text-accent sm:text-2xl'
const cardCopyClass = 'text-white/65 text-xs sm:text-sm'

export default function Prices() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-16 text-white space-y-12 md:space-y-14 md:py-20">
            <header className="text-center space-y-3">
                <span className="badge-ice">Áraink</span>
                <h1 className="text-3xl font-heading sm:text-4xl">Közönségjég, bérlés, oktatás</h1>
                <p className="text-white/70 text-xs sm:text-sm md:text-base">Az árak bruttó értékek, forintban.</p>
            </header>

            <div className="space-y-8 sm:space-y-10">
                <h2 className={sectionTitleClass}>Közönségjég hétköznap</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    {weekdayPublic.map(item => (
                        <article key={item.title} className={cardWrapperClass}>
                            <h3 className={cardHeadingClass}>{item.title}</h3>
                            <p className={cardPriceClass}>{item.price}</p>
                            <p className={cardCopyClass}>{item.desc}</p>
                        </article>
                    ))}
                </div>
            </div>

            <div className="space-y-8 sm:space-y-10">
                <h2 className={sectionTitleClass}>Közönségjég hétvége / szünet</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    {weekendPublic.map(item => (
                        <article key={item.title} className={cardWrapperClass}>
                            <h3 className={cardHeadingClass}>{item.title}</h3>
                            <p className={cardPriceClass}>{item.price}</p>
                            <p className={cardCopyClass}>{item.desc}</p>
                        </article>
                    ))}
                </div>
            </div>

            <div className="space-y-8">
                <h2 className={sectionTitleClass}>Családi belépők</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {familyTickets.map(item => (
                        <article key={item.title} className="frosted-card px-4 py-4 space-y-3 sm:px-5">
                            <h3 className="text-xs font-heading uppercase tracking-[0.2em] text-white/80 sm:text-sm">{item.title}</h3>
                            <p className="text-lg font-heading text-accent sm:text-xl">{item.price}</p>
                            <p className={cardCopyClass}>{item.desc}</p>
                        </article>
                    ))}
                </div>
            </div>

            <div className="space-y-8">
                <h2 className={sectionTitleClass}>Korcsolya bérlés</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    {skateRental.map(item => (
                        <article key={item.title} className={cardWrapperClass}>
                            <h3 className={cardHeadingClass}>{item.title}</h3>
                            <p className={cardPriceClass}>{item.price}</p>
                            <p className={cardCopyClass}>{item.desc}</p>
                        </article>
                    ))}
                </div>
            </div>

            <div className="space-y-8">
                <h2 className={sectionTitleClass}>Pályabérlés</h2>
                <div className="grid gap-6 md:grid-cols-3">
                    {rinkRental.map(item => (
                        <article key={item.title} className={cardWrapperClass}>
                            <h3 className={cardHeadingClass}>{item.title}</h3>
                            <p className={cardPriceClass}>{item.price}</p>
                            <p className={cardCopyClass}>{item.desc}</p>
                        </article>
                    ))}
                </div>
                <p className="text-white/60 text-xs">Teljes komplexum bérléséhez előzetes egyeztetés szükséges. További részletek: <a href="https://newice.hu/palyaberles" target="_blank" rel="noreferrer" className="text-accent underline">pályabérlés</a></p>
            </div>

            <div className="space-y-8">
                <h2 className={sectionTitleClass}>Oktatás / Hoki suli</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {education.map(item => (
                        <article key={item.title} className="frosted-card px-4 py-4 space-y-3 sm:px-5">
                            <h3 className="text-xs font-heading uppercase tracking-[0.15em] text-white/80 sm:text-sm">{item.title}</h3>
                            <p className="text-lg font-heading text-accent sm:text-xl">{item.price}</p>
                            <p className={cardCopyClass}>{item.desc}</p>
                        </article>
                    ))}
                </div>
                <p className="text-white/60 text-xs">Hoki utánpótlás és részletes edzésrend: <a href="http://budaorsvillamok.hu" target="_blank" rel="noreferrer" className="text-accent underline">budaorsvillamok.hu</a></p>
            </div>

            <div className="frosted-card p-5 space-y-3 sm:p-6">
                <h3 className="text-lg font-heading sm:text-xl">Egyéb</h3>
                <ul className="grid gap-3 text-sm text-white/75 sm:grid-cols-2 md:grid-cols-3">
                    {extras.map(extra => (
                        <li key={extra.label} className="flex items-center justify-between bg-white/5 rounded-xl px-3 py-2 sm:px-4 sm:py-3">
                            <span className="text-xs sm:text-sm">{extra.label}</span>
                            <span className="text-accent text-[0.7rem] sm:text-xs">{extra.price}</span>
                        </li>
                    ))}
                </ul>
                <p className="text-white/50 text-xs leading-relaxed">Az árak tájékoztató jellegűek, változhatnak szezon közben. Mindig ellenőrizd a hivatalos oldalt frissítés előtt. A havi bérlet tagdíj jellegű, nem visszatéríthető.</p>
            </div>
        </section>
    )
}
