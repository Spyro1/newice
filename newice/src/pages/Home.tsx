import { Link } from 'react-router-dom'
import { assetUrl } from '../utils/assetUrl'

const highlights = [
    {
        title: 'Közönségjég',
        text: 'Rengeteg szabad idősáv szeptember elejétől júniusig – mindig tájékozódj az aktuális pályabeosztás menüpontban!',
        icon: assetUrl('/assets/img/icons/ice-skating.png')
    },
    {
        title: 'Oktatás és tanfolyam',
        text: 'Korcsolya- és hokitanfolyamok kis csoportokban, kezdőknek és haladóknak. Októbertől induló turnusok.',
        icon: assetUrl('/assets/img/icons/hockey-sticks.png')
    },
    {
        title: 'Jégdiszkó',
        text: 'Látványos fényekkel és zenével, kiemelt szombat estéken – ne maradj le a szezon bulijairól!',
        icon: assetUrl('/assets/img/icons/disco-ball.png')
    }
]

const experiences = [
    {
        tag: 'Pálya',
        title: 'Fedett jégfelület',
        copy: '450 m² kiváló minőségű, rendszeresen karbantartott jég – időjárástól függetlenül szeptembertől júniusig.'
    },
    {
        tag: 'Oktatás',
        title: 'Kori & hoki suli',
        copy: 'Tanfolyamok és edzések korcsolyázásra, hoki alapokra és utánpótlásra. Kisebb csoportok, személyre szabott figyelem.'
    },
    {
        tag: 'Események',
        title: 'Bérlés & programok',
        copy: 'Szülinapok, céges rendezvények, zártkörű események – pályabérlés rugalmas idősávokkal, támogatással.'
    }
]

const events = [
    {
        title: 'Jégdiszkó szombat este',
        time: 'Kéthetente szombaton 19-től',
        badge: 'Esemény',
        desc: 'DJ, fények, party hangulat – figyeld a dátumokat, ne maradj le!',
        image: assetUrl('/assets/img/hero_3.jpg')
    },
    {
        title: 'Pályabérlés',
        time: 'Rugalmas idősávok egyeztetéssel',
        badge: 'Bérlés',
        desc: 'Csapatoknak, szülinapokra, cégeknek – kérj ajánlatot elérhetőségeinken.',
        image: assetUrl('/assets/img/hero_4.jpg')
    }
]

export default function Home() {
    return (
        <div className="space-y-24 pb-24 text-white">
            <section className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <img src={assetUrl('/assets/img/hero_1.jpg')} alt="Ice skaters" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#010b16]/90 via-[#021e2f]/70 to-[#022a40]/70" />
                    <div className="absolute inset-0 grid-lines opacity-40" />
                </div>
                <div className="relative z-10 max-w-6xl mx-auto px-4 py-28 flex flex-col lg:flex-row gap-10 items-center">
                    <div className="space-y-6 lg:w-1/2">
                        <span className="badge-ice">Szeptember–Június</span>
                        <h1 className="text-4xl md:text-6xl font-heading leading-tight">
                            Korcsolyázz nálunk Budaörsön, a <span className="text-accent">NewIce</span> pályán!
                        </h1>
                        <p className="text-white/80 text-lg">
                            Modern, családias hangulatú fedett jégpálya Budaörsön. Rekreáció, edzés, közönségjég és látványos események – mindig friss, gondozott jégfelülettel.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/open" className="btn-ice">Nyitvatartás</Link>
                            <Link to="/gallery" className="btn-ghost">Galéria</Link>
                        </div>
                        <div className="flex gap-6 pt-4 text-sm text-white/80">
                            <div>
                                <p className="text-3xl font-heading">450m²</p>
                                <p>fedett jég</p>
                            </div>
                            <div>
                                <p className="text-3xl font-heading">Oktatás</p>
                                <p>kori & hoki</p>
                            </div>
                            <div>
                                <p className="text-3xl font-heading">Bérlés</p>
                                <p>rendezvényekre</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative lg:w-1/2 image-stack">
                        <img src={assetUrl('/assets/img/hero_2.jpg')} alt="Family skating" className="relative w-full h-[420px] object-cover" />
                        <div className="absolute -bottom-10 -left-6 bg-white/10 backdrop-blur rounded-2xl px-6 py-4 border border-white/20 shadow-2xl">
                            <p className="text-sm uppercase tracking-[0.3em] text-accent">Jég hőmérséklete</p>
                            <p className="text-3xl font-heading">-3.5°C</p>
                            <p className="text-xs text-white/70">Tökéletes a csúszáshoz</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4">
                <div className="grid gap-6 md:grid-cols-3">
                    {highlights.map(item => (
                        <article key={item.title} className="frosted-card p-6 space-y-4 shine">
                            <img src={item.icon} alt={item.title} className="h-12 w-12" />
                            <h3 className="text-2xl font-heading">{item.title}</h3>
                            <p className="text-white/70 text-sm">{item.text}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-5">
                    <span className="badge-ice">Aktuális</span>
                    <h2 className="text-4xl font-heading">Aktuális közönségjég & programok</h2>
                    <p className="text-white/75">Mindig ellenőrizd az aktuális pályabeosztást közönségjég előtt. Tanfolyam indulások, jégdiszkó dátumok és bérlési lehetőségek egy helyen.</p>
                    <ul className="space-y-3 text-white/80">
                        <li>• Közönségjég – friss időpontok</li>
                        <li>• Októberi tanfolyam start</li>
                        <li>• Következő jégdiszkó dátum</li>
                    </ul>
                    <div className="flex gap-4 pt-2">
                        <Link to="/open" className="btn-ice">Időpontok</Link>
                        <Link to="/prices" className="btn-ghost">Áraink</Link>
                    </div>
                </div>
                <div className="relative rounded-[2rem] overflow-hidden shine">
                    <img src={assetUrl('/assets/img/actual/aktualis-korcsolya-oktatas.png')} alt="Aktuális program" className="w-full object-cover" />
                    <div className="absolute bottom-6 right-6 bg-black/60 px-5 py-3 rounded-2xl text-xs uppercase tracking-[0.2em]">Frissítve ma 10:00</div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 grid lg:grid-cols-3 gap-6">
                {experiences.map(item => (
                    <article key={item.title} className="frosted-card p-6 h-full">
                        <span className="text-accent text-xs uppercase tracking-[0.4em]">{item.tag}</span>
                        <h3 className="text-2xl font-heading mt-4">{item.title}</h3>
                        <p className="text-white/75 text-sm mt-3">{item.copy}</p>
                    </article>
                ))}
            </section>

            <section className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    {events.map(event => (
                        <article key={event.title} className="frosted-card lg:flex-1 overflow-hidden">
                            <div className="grid lg:grid-cols-2">
                                <img src={event.image} alt={event.title} className="h-full w-full object-cover" />
                                <div className="p-6 space-y-3">
                                    <span className="badge-ice">{event.badge}</span>
                                    <h3 className="text-3xl font-heading">{event.title}</h3>
                                    <p className="text-white/70 text-sm">{event.time}</p>
                                    <p className="text-white/80 text-sm">{event.desc}</p>
                                    <Link to="/contact" className="btn-ghost w-max">Részletek</Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    )
}
