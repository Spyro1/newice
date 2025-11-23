import { Link } from 'react-router-dom'
import { assetUrl } from '../utils/assetUrl'

const highlights = [
    {
        title: 'Közönségjég egész nap',
        text: 'Átlátható idősávok családoknak és kezdőknek – kristálytiszta jég, chill zene, meleg italok.',
        icon: assetUrl('/assets/img/icons/ice-skating.png')
    },
    {
        title: 'Hokisuli & edzések',
        text: 'Haladó edzések és korcsolya-oktatók várják a csapatokat, cégeket és iskolákat.',
        icon: assetUrl('/assets/img/icons/hockey-sticks.png')
    },
    {
        title: 'Disco jég',
        text: 'Minden péntek este fényshow-val és DJ-vel. Korhatár nélkül, limitált férőhely!',
        icon: assetUrl('/assets/img/icons/disco-ball.png')
    }
]

const experiences = [
    {
        tag: 'Oktatás',
        title: 'Gyors fejlődés játékos módszerekkel',
        copy: '4–6 fős mini csoportokban dolgozunk, így mindenkire jut figyelem. A haladók hokis edzőkkel mélyíthetik a technikát.'
    },
    {
        tag: 'Események',
        title: 'Céges csúszás vagy szülinapi jégdisco',
        copy: 'Privát pályabérlés dekorral, cateringgel, meglepetés tortával – mi adjuk a jeget, te a társaságot.'
    },
    {
        tag: 'Recharge zóna',
        title: 'Forró csoki & waffle bar',
        copy: 'A jég mellett kávézó és lounge vár meleg takarókkal, így a kísérőknek is élmény a délután.'
    }
]

const events = [
    {
        title: 'Glow Disco Friday',
        time: 'Péntek 20:30 – 23:30',
        badge: 'Nyitott',
        desc: 'UV-fény, DJ, jégkoktélok. Limitált jegyek a helyszínen és online.',
        image: assetUrl('/assets/img/hero_3.jpg')
    },
    {
        title: 'Csapatbérlés prime idősávban',
        time: 'Hétfő – Csütörtök 06:00 – 08:00',
        badge: 'Foglalt gyorsan',
        desc: 'Vállalati vagy hokicsapat számára fenntartott edzésidő, profi jégmesterekkel.',
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
                        <span className="badge-ice">Fedett jég 365 nap</span>
                        <h1 className="text-4xl md:text-6xl font-heading leading-tight">
                            Korlátlan korcsolya-élmény a <span className="text-accent">NewIce</span> pályán
                        </h1>
                        <p className="text-white/80 text-lg">
                            Hajnalban edzés, délután közönségjég, este disco. Kényelmes lounge, digitális beléptetés és prémium jégfelület vár.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/open" className="btn-ice">Nyitvatartás</Link>
                            <Link to="/gallery" className="btn-ghost">Nézd meg a hangulatot</Link>
                        </div>
                        <div className="flex gap-6 pt-4 text-sm text-white/80">
                            <div>
                                <p className="text-3xl font-heading">1000m²</p>
                                <p>tükörjég minden napon</p>
                            </div>
                            <div>
                                <p className="text-3xl font-heading">+15</p>
                                <p>oktató és edző</p>
                            </div>
                            <div>
                                <p className="text-3xl font-heading">4</p>
                                <p>dedikált lounge zóna</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative lg:w-1/2 image-stack">
                        <img src={assetUrl('/assets/img/hero_2.jpg')} alt="Family skating" className="relative w-full h-[420px] object-cover" />
                        <div className="absolute -bottom-10 -left-6 bg-white/10 backdrop-blur rounded-2xl px-6 py-4 border border-white/20 shadow-2xl">
                            <p className="text-sm uppercase tracking-[0.3em] text-accent">Élő hőmérséklet</p>
                            <p className="text-3xl font-heading">-3.5°C</p>
                            <p className="text-xs text-white/70">Optimális korcsolyához</p>
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
                    <h2 className="text-4xl font-heading">Jéglabirintus hétvégenként nonstop</h2>
                    <p className="text-white/75">A fedett csarnokban az aktuális akadálypálya pályarendszere vár. Foglalj sávot online, a helyek gyorsan fogynak!</p>
                    <ul className="space-y-3 text-white/80">
                        <li>• Foglalható blokkok: 08:00, 10:00, 12:00, 14:00</li>
                        <li>• Maximum 40 fő egyszerre a labirintusban</li>
                        <li>• LED kijelzőn követhető az időeredmény</li>
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
