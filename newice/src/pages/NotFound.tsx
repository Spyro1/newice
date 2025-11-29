import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <section className="min-h-[60vh] flex items-center justify-center px-4 text-white">
            <div className="frosted-card text-center max-w-lg w-full p-6 space-y-4 sm:p-8 md:p-10">
                <span className="badge-ice">404</span>
                <h2 className="text-3xl font-heading sm:text-4xl">A keresett oldal nem található</h2>
                <p className="text-white/70 text-sm sm:text-base">Úgy tűnik, elcsúsztál a jégen. Térj vissza a kezdőlapra, és válassz új útvonalat!</p>
                <Link className="btn-ice inline-flex" to="/">Vissza a kezdőlapra</Link>
            </div>
        </section>
    )
}
