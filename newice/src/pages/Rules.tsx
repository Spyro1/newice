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
        <section className="max-w-6xl mx-auto px-4 py-16 space-y-8 text-white md:space-y-10 md:py-20">
            <header className="text-center space-y-3">
                <span className="badge-ice">Házirend</span>
                <h2 className="text-3xl font-heading sm:text-4xl">Biztonságos jég mindenkiért</h2>
                <p className="text-white/70 text-sm sm:text-base">Az alábbi szabályokkal biztosítjuk, hogy minden korosztály gondtalanul élvezhesse a csúszást.</p>
            </header>
            <div className="grid gap-6 md:grid-cols-2">
                {rules.map(rule => (
                    <article key={rule.title} className="frosted-card p-5 flex gap-4 items-start sm:p-6">
                        <img src={assetUrl(rule.icon)} alt="ikon" className="h-12 w-12" />
                        <div>
                            <h3 className="text-xl font-heading sm:text-2xl">{rule.title}</h3>
                            <p className="text-white/75 text-sm">{rule.desc}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
