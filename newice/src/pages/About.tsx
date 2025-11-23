import { assetUrl } from '../utils/assetUrl'

const timeline = [
    { year: '2012', text: 'Első szezon – családias fedett pálya Budaörsön.' },
    { year: '2014', text: 'Rendezvények, céges események és születésnapi partik terjedése.' },
    { year: '2018', text: 'Utánpótlás hokisuli és korcsolya tanfolyamok bővülése.' },
    { year: '2022', text: 'Évi 30–40 ezer vendég, stabil oktatási és rendezvény portfólió.' },
    { year: '2024', text: 'Jéglabirintus szezonbővítés (nov–feb), szolgáltatások finomhangolása.' }
]

const services = [
    'Közönség korcsolyázás',
    'Korcsolya oktatás több szinten (gyerek, felnőtt)',
    'Hoki suli és utánpótlás',
    'Pályabérlés (cégek, csapatok, rendezvények)',
    'Szülinapi partik és privát események',
    'Óvodai / iskolai sportprogramok',
    'Jégdiszkó és tematikus események',
    'Korcsolya és sporteszköz bérlés',
    'Reklámfelület bérlés'
]

const values = [
    { title: 'Minőség & Biztonság', desc: 'Rendszeresen karbantartott jégfelület, kontrollált létszám, felügyelet.' },
    { title: 'Közösség & Élmény', desc: 'Egészséges kikapcsolódás minden korosztálynak – család, amatőr és versenyszint.' },
    { title: 'Rugalmasság', desc: 'Kisebb és közepes rendezvények befogadása testreszabott támogatással.' }
]

export default function About() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-20 text-white space-y-16">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-4">
                    <span className="badge-ice">Rólunk</span>
                    <h1 className="text-4xl font-heading">Családias fedett jégpálya Budaörsön</h1>
                    <p className="text-white/75">Több mint egy évtized tapasztalata és a korcsolyasport szeretete formálta a NewIce közösségét. Szeptembertől júniusig stabil, minőségi jégfelületet biztosítunk rekreációhoz, tanuláshoz és versenyfelkészüléshez.</p>
                    <p className="text-white/70">Célunk egyszerre élményt és biztonságot nyújtani: közönségjég, tanfolyamok, hoki utánpótlás, tematikus események és jégdiszkó – mind gondosan szervezve.</p>
                </div>
                <div className="image-stack">
                    <img src={assetUrl('/assets/img/hero_4.jpg')} alt="Csapat a jégen" className="w-full h-[420px] object-cover" />
                </div>
            </div>

            <div className="grid lg:grid-cols-[2fr,1fr] gap-10">
                <div className="space-y-6">
                    <div className="frosted-card p-8 space-y-6">
                        <h2 className="text-3xl font-heading">Idővonal</h2>
                        <div className="space-y-5">
                            {timeline.map(item => (
                                <div key={item.year} className="flex gap-4 items-start">
                                    <span className="text-accent text-sm tracking-[0.3em] mt-1">{item.year}</span>
                                    <p className="text-white/80">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="frosted-card p-8 space-y-6">
                        <h2 className="text-3xl font-heading">Szolgáltatások</h2>
                        <ul className="grid md:grid-cols-2 gap-3 text-white/75 text-sm">
                            {services.map(s => (
                                <li key={s} className="flex items-center gap-2"><span className="text-accent">•</span>{s}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="space-y-4">
                    {values.map(value => (
                        <article key={value.title} className="frosted-card p-6">
                            <h3 className="text-xl font-heading">{value.title}</h3>
                            <p className="text-white/75 text-sm mt-2">{value.desc}</p>
                        </article>
                    ))}
                    <div className="frosted-card p-6 space-y-3">
                        <h3 className="text-xl font-heading">Látogatottság</h3>
                        <p className="text-white/70 text-sm">Évente 30–40 ezer vendég (gyermek és felnőtt) választ minket; a programkínálatot folyamatosan frissítjük szezon közben.</p>
                        <p className="text-white/50 text-xs">Összefoglaló; a teljes eredeti szöveg és frissítések: <a href="https://newice.hu/rolunk" target="_blank" rel="noreferrer" className="text-accent underline">newice.hu/rolunk</a></p>
                    </div>
                </div>
            </div>
        </section>
    )
}
