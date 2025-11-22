export default function NotFound() {
    return (
        <section class="min-h-[60vh] flex items-center justify-center px-4">
            <div class="rect-card text-center max-w-md">
                <p class="text-sm uppercase tracking-[0.3em] text-accent-dark">404</p>
                <h2 class="text-3xl font-heading mt-3">A keresett oldal nem található</h2>
                <a class="btn-accent mt-6" href="/">Vissza a kezdőlapra</a>
            </div>
        </section>
    )
}
