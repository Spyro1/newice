import { assetUrl } from '../utils/assetUrl'

const rules = [
    {
        title: 'Védőfelszerelés',
        desc: 'Sisak és kesztyű viselése erősen ajánlott, hokiedzésen kötelező.',
        icon: '/assets/img/icons/helmet.png'
    },
    {
        title: 'Jégfelület megóvása',
        desc: 'Cipővel tilos a jégre lépni, étel/ital csak a lelátón fogyasztható.',
        icon: '/assets/img/icons/puck.png'
    },
    {
        title: 'Pályafelügyelet',
        desc: 'A személyzet jelzése azonnal követendő a balesetek megelőzéséért.',
        icon: '/assets/img/icons/group.png'
    },
    {
        title: 'Felelősség',
        desc: 'A pályán való tartózkodás saját felelősségre történik, szülői kíséret 10 év alatt kötelező.',
        icon: '/assets/img/icons/family.png'
    }
]

export default function Rules() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-20 space-y-10 text-white">
            <header className="text-center space-y-3">
                <span className="badge-ice">Házirend</span>
                <h2 className="text-4xl font-heading">Biztonságos jég mindenkiért</h2>
                <p className="text-white/70">Az alábbi szabályokkal biztosítjuk, hogy minden korosztály gondtalanul élvezhesse a csúszást.</p>
            </header>
            <div className="grid gap-6 md:grid-cols-2">
                {rules.map(rule => (
                    <article key={rule.title} className="frosted-card p-6 flex gap-4 items-start">
                        <img src={assetUrl(rule.icon)} alt="ikon" className="h-12 w-12" />
                        <div>
                            <h3 className="text-2xl font-heading">{rule.title}</h3>
                            <p className="text-white/75 text-sm">{rule.desc}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
