const tickets = [
    { title: 'Felnőtt belépő', price: '2 000 Ft', desc: 'Egyszeri alkalom, teljes idősávra érvényes.' },
    { title: 'Diák / Gyermek', price: '1 500 Ft', desc: '14 éves korig, diákigazolvánnyal.' },
    { title: 'Korcsolyabérlés', price: '800 Ft', desc: '39-46 méretig, fertőtlenítve adjuk át.' }
]

const rental = [
    { title: 'Pályabérlés', price: '40 000 Ft / 50 perc', desc: 'Csapatoknak, céges eseményekhez.' },
    { title: 'Meghosszabbítás', price: '40 000 Ft / 50 perc', desc: 'Amegkezdett időszak automatikusan hosszabbodik.' }
]

export default function Prices() {
    return (
        <section class="max-w-6xl mx-auto px-4 py-16 space-y-10">
            <header class="text-center">
                <p class="text-sm uppercase tracking-[0.3em] text-accent-dark">Áraink</p>
                <h2 class="text-3xl font-heading mt-3">Közönségjég</h2>
            </header>

            <div class="grid gap-6 md:grid-cols-3">
                {tickets.map(item => (
                    <article key={item.title} class="rect-card">
                        <h3 class="text-xl font-heading">{item.title}</h3>
                        <p class="text-3xl font-bold text-accent mt-3">{item.price}</p>
                        <p class="text-sm text-text mt-2">{item.desc}</p>
                    </article>
                ))}
            </div>

            <header class="text-center">
                <p class="text-sm uppercase tracking-[0.3em] text-accent-dark">Pályabérlés</p>
            </header>

            <div class="grid gap-6 md:grid-cols-2">
                {rental.map(item => (
                    <article key={item.title} class="rect-card">
                        <h3 class="text-xl font-heading">{item.title}</h3>
                        <p class="text-3xl font-bold text-accent mt-3">{item.price}</p>
                        <p class="text-sm text-text mt-2">{item.desc}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}
