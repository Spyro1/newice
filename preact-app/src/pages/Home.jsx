const highlights = [
    {
        title: 'Közönségjég egész nap',
        text: 'Átlátható idősávok családoknak és kezdőknek – kristálytiszta jég, chill zene, meleg italok.',
        icon: '/assets/img/icons/ice-skating.png'
    },
    {
        title: 'Hokisuli & edzések',
        text: 'Haladó edzések és korcsolya-oktatók várják a csapatokat, cégeket és iskolákat.',
        icon: '/assets/img/icons/hockey-sticks.png'
    },
    {
        title: 'Disco jég',
        text: 'Minden péntek este fényshow-val és DJ-vel. Korhatár nélkül, limitált férőhely!',
        icon: '/assets/img/icons/disco-ball.png'
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
        image: '/assets/img/hero_3.jpg'
    },
    {
        title: 'Csapatbérlés prime idősávban',
        time: 'Hétfő – Csütörtök 06:00 – 08:00',
        badge: 'Foglalt gyorsan',
        desc: 'Vállalati vagy hokicsapat számára fenntartott edzésidő, profi jégmesterekkel.',
        image: '/assets/img/hero_4.jpg'
    }
]

export default function Home() {
    return (
        <div class="space-y-24 pb-24 text-white">
            <section class="relative overflow-hidden">
                <div class="absolute inset-0">
                    <img src="/assets/img/hero_1.jpg" alt="Ice skaters" class="w-full h-full object-cover" />
                    <div class="absolute inset-0 bg-gradient-to-br from-[#010b16]/90 via-[#021e2f]/70 to-[#022a40]/70" />
                    <div class="absolute inset-0 grid-lines opacity-40" />
                </div>
                <div class="relative z-10 max-w-6xl mx-auto px-4 py-28 flex flex-col lg:flex-row gap-10 items-center">
                    <div class="space-y-6 lg:w-1/2">
                        <span class="badge-ice">Fedett jég 365 nap</span>
                        <h1 class="text-4xl md:text-6xl font-heading leading-tight">
                            Korlátlan korcsolya-élmény a <span class="text-accent">NewIce</span> pályán
                        </h1>
                        <p class="text-white/80 text-lg">
                            Hajnalban edzés, délután közönségjég, este disco. Kényelmes lounge, digitális beléptetés és prémium jégfelület vár.
                        </p>
                        <div class="flex flex-wrap gap-4">
                            <a href="/open" class="btn-ice">Nyitvatartás</a>
                            <a href="/gallery" class="btn-ghost">Nézd meg a hangulatot</a>
                        </div>
                        <div class="flex gap-6 pt-4 text-sm text-white/80">
                            <div>
                                <p class="text-3xl font-heading">1000m²</p>
                                <p>tükörjég minden napon</p>
                            </div>
                            <div>
                                <p class="text-3xl font-heading">+15</p>
                                <p>oktató és edző</p>
                            </div>
                            <div>
                                <p class="text-3xl font-heading">4</p>
                                <p>dedikált lounge zóna</p>
                            </div>
                        </div>
                    </div>

                    <div class="relative lg:w-1/2 image-stack">
                        <img src="/assets/img/hero_2.jpg" alt="Family skating" class="relative w-full h-[420px] object-cover" />
                        <div class="absolute -bottom-10 -left-6 bg-white/10 backdrop-blur rounded-2xl px-6 py-4 border border-white/20 shadow-2xl">
                            <p class="text-sm uppercase tracking-[0.3em] text-accent">Élő hőmérséklet</p>
                            <p class="text-3xl font-heading">-3.5°C</p>
                            <p class="text-xs text-white/70">Optimális korcsolyához</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="max-w-6xl mx-auto px-4">
                <div class="grid gap-6 md:grid-cols-3">
                    {highlights.map(item => (
                        <article key={item.title} class="frosted-card p-6 space-y-4 shine">
                            <img src={item.icon} alt={item.title} class="h-12 w-12" />
                            <h3 class="text-2xl font-heading">{item.title}</h3>
                            <p class="text-white/70 text-sm">{item.text}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section class="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                <div class="space-y-5">
                    <span class="badge-ice">Aktuális</span>
                    <h2 class="text-4xl font-heading">Jéglabirintus hétvégenként nonstop</h2>
                    <p class="text-white/75">A fedett csarnokban az aktuális akadálypálya pályarendszere vár. Foglalj sávot online, a helyek gyorsan fogynak!</p>
                    <ul class="space-y-3 text-white/80">
                        <li>• Foglalható blokkok: 08:00, 10:00, 12:00, 14:00</li>
                        <li>• Maximum 40 fő egyszerre a labirintusban</li>
                        <li>• LED kijelzőn követhető az időeredmény</li>
                    </ul>
                    <div class="flex gap-4 pt-2">
                        <a href="/open" class="btn-ice">Foglalj sávot</a>
                        <a href="/contact" class="btn-ghost">Szülinapi csomag</a>
                    </div>
                </div>
                <div class="relative rounded-[2rem] overflow-hidden shine">
                    <img src="/assets/img/actual/aktualis-korcsolya-oktatas.png" alt="Aktuális program" class="w-full object-cover" />
                    <div class="absolute bottom-6 right-6 bg-black/60 px-5 py-3 rounded-2xl text-xs uppercase tracking-[0.2em]">Frissítve ma 10:00</div>
                </div>
            </section>

            <section class="max-w-6xl mx-auto px-4 grid lg:grid-cols-3 gap-6">
                {experiences.map(item => (
                    <article key={item.title} class="frosted-card p-6 h-full">
                        <span class="text-accent text-xs uppercase tracking-[0.4em]">{item.tag}</span>
                        <h3 class="text-2xl font-heading mt-4">{item.title}</h3>
                        <p class="text-white/75 text-sm mt-3">{item.copy}</p>
                    </article>
                ))}
            </section>

            <section class="max-w-6xl mx-auto px-4">
                <div class="flex flex-col lg:flex-row items-center gap-8">
                    {events.map(event => (
                        <article key={event.title} class="frosted-card lg:flex-1 overflow-hidden">
                            <div class="grid lg:grid-cols-2">
                                <img src={event.image} alt={event.title} class="h-full w-full object-cover" />
                                <div class="p-6 space-y-3">
                                    <span class="badge-ice">{event.badge}</span>
                                    <h3 class="text-3xl font-heading">{event.title}</h3>
                                    <p class="text-white/70 text-sm">{event.time}</p>
                                    <p class="text-white/80 text-sm">{event.desc}</p>
                                    <a href="/contact" class="btn-ghost w-max">Részletek</a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    )
}
