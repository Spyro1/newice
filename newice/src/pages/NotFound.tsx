import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <section className="min-h-[60vh] flex items-center justify-center px-4 text-white">
            <div className="frosted-card text-center max-w-lg w-full p-10 space-y-4">
                <span className="badge-ice">404</span>
                <h2 className="text-4xl font-heading">A keresett oldal nem található</h2>
                <p className="text-white/70">Úgy tűnik, elcsúsztál a jégen. Térj vissza a kezdőlapra, és válassz új útvonalat!</p>
                <Link className="btn-ice inline-flex" to="/">Vissza a kezdőlapra</Link>
            </div>
        </section>
    )
}
