export default function Contact() {
    return (
        <section class="max-w-4xl mx-auto px-4 py-16 grid gap-8 lg:grid-cols-2">
            <article class="rect-card space-y-3">
                <h2 class="text-2xl font-heading">Kapcsolat</h2>
                <p class="text-sm text-text">2040 Budaörs, Sportkomplexum</p>
                <a class="text-lg text-accent" href="tel:+36305699567">+36 30 569 9567</a>
                <a class="text-lg text-accent" href="mailto:newiceinfo@gmail.com">newiceinfo@gmail.com</a>
                <p class="text-sm text-text">Kérjük foglalás vagy pályabérlés előtt érdeklődj telefonon.</p>
            </article>
            <form class="rect-card space-y-3">
                <input class="w-full border border-gray-200 px-3 py-2" type="text" placeholder="Név" />
                <input class="w-full border border-gray-200 px-3 py-2" type="email" placeholder="Email" />
                <textarea class="w-full border border-gray-200 px-3 py-2" rows="5" placeholder="Üzenet" />
                <button class="btn-accent w-full" type="button">Küldés</button>
            </form>
        </section>
    )
}
