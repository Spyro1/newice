export default function NotFound() {
    return (
        <section class="min-h-[60vh] flex items-center justify-center px-4 text-white">
            <div class="frosted-card text-center max-w-lg w-full p-10 space-y-4">
                <span class="badge-ice">404</span>
                <h2 class="text-4xl font-heading">A keresett oldal nem található</h2>
                <p class="text-white/70">Úgy tűnik, elcsúsztál a jégen. Térj vissza a kezdőlapra, és válassz új útvonalat!</p>
                <a class="btn-ice inline-flex" href="/">Vissza a kezdőlapra</a>
            </div>
        </section>
    )
}
