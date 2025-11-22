const contactChips = [
    { label: 'Telefon', value: '+36 30 569 9567', href: 'tel:+36305699567' },
    { label: 'Email', value: 'newiceinfo@gmail.com', href: 'mailto:newiceinfo@gmail.com' },
    { label: 'Cím', value: '2040 Budaörs, Sportkomplexum' }
]

export default function Contact() {
    return (
        <section class="max-w-6xl mx-auto px-4 py-20 grid gap-10 lg:grid-cols-[1.2fr,0.8fr] text-white">
            <div class="space-y-6">
                <div class="frosted-card p-8 space-y-4">
                    <span class="badge-ice">Kapcsolat</span>
                    <h2 class="text-4xl font-heading">Foglalás & infó</h2>
                    <p class="text-white/70">Írj vagy csörgess, és 1 munkanapon belül egyeztetünk időpontot pályabérlésre, oktatásra vagy eseményre.</p>
                    <div class="flex flex-wrap gap-3 pt-2">
                        {contactChips.map(chip => (
                            <a key={chip.label} href={chip.href ?? '#'} class="px-4 py-2 rounded-full border border-white/15 text-sm text-white/80 hover:border-accent">
                                <span class="text-white/50 mr-2">{chip.label}:</span>{chip.value}
                            </a>
                        ))}
                    </div>
                </div>

                <form class="frosted-card p-8 space-y-4">
                    <div class="grid md:grid-cols-2 gap-4">
                        <input class="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl" type="text" placeholder="Név" />
                        <input class="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl" type="email" placeholder="Email" />
                    </div>
                    <input class="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl" type="text" placeholder="Melyik szolgáltatás érdekel?" />
                    <textarea class="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl" rows="5" placeholder="Üzenet" />
                    <button class="btn-ice w-full" type="button">Üzenet küldése</button>
                </form>
            </div>

            <div class="frosted-card p-0 overflow-hidden">
                <img src="/assets/img/hero_4.jpg" alt="Jégpálya" class="h-80 w-full object-cover" />
                <div class="p-6 space-y-2 text-white/80 text-sm">
                    <p>Parkolás: ingyenes, 120 férőhelyes felszíni parkoló.</p>
                    <p>Tömegközlekedés: 40-es busz Budaörs Sportcsarnok megálló.</p>
                    <p>Nyitvatartás: lásd részletesen a nyitvatartás oldalt.</p>
                </div>
            </div>
        </section>
    )
}
