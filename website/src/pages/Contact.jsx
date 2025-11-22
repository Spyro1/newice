const contactChips = [
    { label: 'Telefon', value: '+36 30 569 9567', href: 'tel:+36305699567' },
    { label: 'Email', value: 'newiceinfo@gmail.com', href: 'mailto:newiceinfo@gmail.com' },
    { label: 'Cím', value: '2040 Budaörs, Sportkomplexum' }
]

export default function Contact() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-20 grid gap-10 lg:grid-cols-[1.2fr,0.8fr] text-white">
            <div className="space-y-6">
                <div className="frosted-card p-8 space-y-4">
                    <span className="badge-ice">Kapcsolat</span>
                    <h2 className="text-4xl font-heading">Foglalás & infó</h2>
                    <p className="text-white/70">Írj vagy csörgess, és 1 munkanapon belül egyeztetünk időpontot pályabérlésre, oktatásra vagy eseményre.</p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        {contactChips.map(chip => (
                            <a key={chip.label} href={chip.href ?? '#'} className="px-4 py-2 rounded-full border border-white/15 text-sm text-white/80 hover:border-accent">
                                <span className="text-white/50 mr-2">{chip.label}:</span>{chip.value}
                            </a>
                        ))}
                    </div>
                </div>

                <form className="frosted-card p-8 space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                        <input className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl" type="text" placeholder="Név" />
                        <input className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl" type="email" placeholder="Email" />
                    </div>
                    <input className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl" type="text" placeholder="Melyik szolgáltatás érdekel?" />
                    <textarea className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl" rows="5" placeholder="Üzenet" />
                    <button className="btn-ice w-full" type="button">Üzenet küldése</button>
                </form>
            </div>

            <div className="frosted-card p-0 overflow-hidden">
                <img src="/assets/img/hero_4.jpg" alt="Jégpálya" className="h-80 w-full object-cover" />
                <div className="p-6 space-y-2 text-white/80 text-sm">
                    <p>Parkolás: ingyenes, 120 férőhelyes felszíni parkoló.</p>
                    <p>Tömegközlekedés: 40-es busz Budaörs Sportcsarnok megálló.</p>
                    <p>Nyitvatartás: lásd részletesen a nyitvatartás oldalt.</p>
                </div>
            </div>
        </section>
    )
}
