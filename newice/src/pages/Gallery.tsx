import { assetUrl } from '../utils/assetUrl'

const gallery = [
    { src: assetUrl('/assets/img/hero_1.jpg'), caption: 'Reggeli közönségjég' },
    { src: assetUrl('/assets/img/hero_2.jpg'), caption: 'Családi csúszás' },
    { src: assetUrl('/assets/img/hero_3.jpg'), caption: 'Glow disco hangulat' },
    { src: assetUrl('/assets/img/hero_4.jpg'), caption: 'Csapat edzés akcióban' },
    { src: assetUrl('/assets/img/placeholder.webp'), caption: 'Placeholder' },
    { src: assetUrl('/assets/img/actual/aktualis-korcsolya-oktatas.png'), caption: 'Aktuális akadálypálya' }
]

export default function Gallery() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-16 text-white md:py-20">
            <div className="text-center mb-10 space-y-3 md:mb-12">
                <span className="badge-ice">Galéria</span>
                <h2 className="text-3xl font-heading sm:text-4xl">Egy nap a jégen</h2>
                <p className="text-white/70 text-sm sm:text-base">Válogatás az elmúlt szezon kedvenc pillanataiból.</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
                {gallery.map((item, index) => (
                    <figure key={`${item.src}-${index}`} className="relative group overflow-hidden rounded-3xl border border-white/10">
                        <img src={item.src} alt={item.caption} className="h-52 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-64 lg:h-72" />
                        <figcaption className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4 text-sm">
                            {item.caption}
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    )
}
