const placeholders = Array.from({ length: 8 }).map((_, idx) => idx)

export default function Gallery() {
    return (
        <section class="max-w-6xl mx-auto px-4 py-16">
            <div class="text-center mb-10">
                <p class="text-sm uppercase tracking-[0.3em] text-accent-dark">Galéria</p>
                <h2 class="text-3xl font-heading mt-3">Hangulatképek a pályáról</h2>
            </div>
            <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {placeholders.map(key => (
                    <div key={key} class="aspect-square bg-[#d9f5f7] flex items-center justify-center text-accent-dark font-semibold">
                        Fotó {key + 1}
                    </div>
                ))}
            </div>
        </section>
    )
}
