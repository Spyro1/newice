export default function Home() {
    return (
        <div>
            <section class="relative min-h-[70vh] flex items-center justify-center text-white">
                <div class="absolute inset-0">
                    <div class="h-full w-full bg-[url('/assets/img/hero-bg.jpg')] bg-cover bg-center" aria-hidden="true" />
                    <div class="absolute inset-0 bg-black/55" />
                </div>
                <div class="relative z-10 max-w-3xl text-center px-4">
                    <p class="uppercase tracking-[0.35em] text-sm">NewIce</p>
                    <h1 class="text-4xl md:text-5xl font-heading font-bold mt-3">A tél egész évben nálunk kezdődik</h1>
                    <p class="mt-5 text-lg text-white/80">Közönségjég, oktatás, pályabérlés és hokisuli egy helyen.</p>
                    <div class="mt-8 flex flex-wrap justify-center gap-3 text-sm">
                        <a href="/open" class="btn-accent">Nyitvatartás</a>
                        <a href="/prices" class="btn-accent bg-accent-dark">Áraink</a>
                    </div>
                </div>
            </section>

            <section class="max-w-6xl mx-auto px-4 py-16 grid gap-8 lg:grid-cols-[2fr,1fr]">
                <div class="space-y-6">
                    <article class="rect-card">
                        <p class="text-sm uppercase tracking-[0.3em] text-accent-dark">Aktuális</p>
                        <h2 class="text-3xl font-heading mt-4">Jéglabirintus egész nap nyitva 8:00-20:00</h2>
                        <p class="mt-4 text-text">Kérjük indulás előtt nézd meg a nyitvatartást, mert a fedett pálya heti bontásban változik a csapatok és foglalások miatt.</p>
                        <a class="btn-accent mt-6" href="/open">Nyitvatartás</a>
                    </article>

                    <div class="grid gap-6 md:grid-cols-3">
                        {[
                            { title: 'Korcsolyabérlés', text: 'Minden méretben elérhető, fertőtlenítve adjuk át.' },
                            { title: 'Oktatás', text: 'Gyermek és felnőtt szintek, csoportos vagy privát.' },
                            { title: 'Pályabérlés', text: 'Csapatoknak, céges eseménynek, születésnapra.' }
                        ].map(item => (
                            <article class="rect-card" key={item.title}>
                                <h3 class="font-semibold text-lg">{item.title}</h3>
                                <p class="text-sm mt-2 text-text">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>

                <aside class="rect-card space-y-4">
                    <h3 class="text-xl font-heading">Kapcsolat</h3>
                    <p class="text-sm text-text">2040 Budaörs • +36 30 569 9567 • newiceinfo@gmail.com</p>
                    <a class="btn-accent w-full text-center" href="/contact">Írj nekünk</a>
                </aside>
            </section>
        </div>
    )
}
