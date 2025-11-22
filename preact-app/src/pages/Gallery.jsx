const gallery = [
    { src: '/assets/img/hero_1.jpg', caption: 'Reggeli közönségjég' },
    { src: '/assets/img/hero_2.jpg', caption: 'Családi csúszás' },
    { src: '/assets/img/hero_3.jpg', caption: 'Glow disco hangulat' },
    { src: '/assets/img/hero_4.jpg', caption: 'Csapat edzés akcióban' },
    { src: '/assets/img/hero_5.jpg', caption: 'Lounge & kávézó' },
    { src: '/assets/img/actual/aktualis-korcsolya-oktatas.png', caption: 'Aktuális akadálypálya' }
]

export default function Gallery() {
    return (
        <section class="max-w-6xl mx-auto px-4 py-20 text-white">
            <div class="text-center mb-12 space-y-3">
                <span class="badge-ice">Galéria</span>
                <h2 class="text-4xl font-heading">Egy nap a jégen</h2>
                <p class="text-white/70">Válogatás az elmúlt szezon kedvenc pillanataiból.</p>
            </div>
            <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {gallery.map((item, index) => (
                    <figure key={`${item.src}-${index}`} class="relative group overflow-hidden rounded-3xl border border-white/10">
                        <img src={item.src} alt={item.caption} class="h-60 sm:h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
                        <figcaption class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4 text-sm">
                            {item.caption}
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    )
}
