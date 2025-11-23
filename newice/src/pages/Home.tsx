import { Link } from 'react-router-dom'
import { assetUrl } from '../utils/assetUrl'

const highlights = [
    {
        title: 'Közönségjég',
        text: 'Gyere korizni a családdal vagy a barátokkal! Jó zene, forrócsoki és szuper jég vár.',
        icon: assetUrl('/assets/img/icons/ice-skating.png')
    },
    {
        title: 'Hoki és oktatás',
        text: 'Szeretnél megtanulni korizni vagy jégkorongozni? Profi oktatóink segítenek, akár teljesen kezdő vagy, akkor is megéri eljönni!',
        icon: assetUrl('/assets/img/icons/hockey-sticks.png')
    },
    {
        title: 'Jégdisco',
        text: 'Kéthetente szombat esténként buli a jégen! Fények, zene, DJ! Hozd a barátaidat is!',
        icon: assetUrl('/assets/img/icons/disco-ball.png')
    }
]

const experiences = [
    {
        tag: 'Oktatás',
        title: 'Tanulj játszva!',
        copy: 'Kis csoportokban oktatunk, hogy mindenkire jusson idő. Kezdőket és haladókat is várunk szeretettel.'
    },
    {
        tag: 'Események',
        title: 'Rendezvények',
        copy: 'Szülinap, céges buli vagy csak egy zártkörű csúszás? Béreljétek ki a pályát, mi segítünk a szervezésben.'
    },
    {
        tag: 'Pihenés',
        title: 'Büfé és melegedő',
        copy: 'Ha elfáradtál, vagy csak kísérőként jöttél, a büfében forró csokival, gofrival, forró teával és sok más finomsággal várunk.'
    }
]

const events = [
    {
        title: 'Szombati Jégdisco',
        time: 'Szombat 19:00 – 22:00',
        badge: 'Nyitott',
        desc: 'Minden második szombaton! Szuper zenék, fények és hangulat.',
        image: assetUrl('/assets/img/hero_3.jpg')
    },
    {
        title: 'Pályabérlés csapatoknak',
        time: 'Hétfő – Csütörtök 06:00 – 08:00',
        badge: 'Foglalt',
        desc: 'Reggeli és esti edzési lehetőség amatőr és profi csapatoknak. Érdeklődj elérhetőségeinken!',
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
                        <span className="badge-ice">Egész évben nyitva</span>
                        <h1 className="text-4xl md:text-6xl font-heading leading-tight">
                            Korizz nálunk Budaörsön, a <span className="text-accent">NewIce</span> pályán!
                        </h1>
                        <p className="text-white/80 text-lg">
                            Legyen szó edzésről, délutáni csúszásról vagy esti buliról, nálunk mindig jó a hangulat. Fedett pálya, kényelmes öltözők és büfé vár.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/open" className="btn-ice">Nyitvatartás</Link>
                            <Link to="/gallery" className="btn-ghost">Galéria</Link>
                        </div>
                        <div className="flex gap-6 pt-4 text-sm text-white/80">
                            <div>
                                <p className="text-3xl font-heading">1000m²</p>
                                <p>jégfelület</p>
                            </div>
                            <div>
                                <p className="text-3xl font-heading">+15</p>
                                <p>profi oktató</p>
                            </div>
                            <div>
                                <p className="text-3xl font-heading">4</p>
                                <p>kényelmes pihenő</p>
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
                    <h2 className="text-4xl font-heading">Hétvégi jéglabirintus</h2>
                    <p className="text-white/75">Próbáld ki különleges akadálypályánkat hétvégente! Izgalmas kihívás kicsiknek és nagyoknak. Foglalj sávot online, a helyek gyorsan fogynak!</p>
                    <ul className="space-y-3 text-white/80">
                        <li>• Indulások: 08:00, 10:00, 12:00, 14:00</li>
                        <li>• Egyszerre max. 40 fő</li>
                        <li>• Mérd az idődet!</li>
                    </ul>
                    <div className="flex gap-4 pt-2">
                        <Link to="/open" className="btn-ice">Foglalj sávot</Link>
                        <Link to="/contact" className="btn-ghost">Szülinapi csomag</Link>
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
