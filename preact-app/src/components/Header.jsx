import { Link } from 'preact-router/match'

const navLink = 'px-3 py-2 text-sm tracking-wide uppercase hover:text-accent transition-colors text-white/80'

export default function Header() {
    return (
        <header class="bg-[#1f2e3a]/95 backdrop-blur text-white sticky top-0 z-20 shadow-md">
            <div class="max-w-6xl mx-auto flex flex-wrap gap-4 items-center justify-between px-4 py-4">
                <a href="/" class="flex items-center gap-3 text-white">
                    <img src="/assets/img/logo.png" alt="NewIce" class="h-10 w-10 object-contain" />
                    <div>
                        <p class="text-xl font-bold tracking-widest">NewIce</p>
                        <p class="text-xs text-white/70">Fedett jégpálya Budaörsön</p>
                    </div>
                </a>

                <nav class="flex flex-wrap gap-2">
                    <Link href="/" activeClassName="text-accent" class={navLink}>Kezdőlap</Link>
                    <Link href="/about-us" activeClassName="text-accent" class={navLink}>Rólunk</Link>
                    <Link href="/gallery" activeClassName="text-accent" class={navLink}>Galéria</Link>
                    <Link href="/open" activeClassName="text-accent" class={navLink}>Nyitvatartás</Link>
                    <Link href="/prices" activeClassName="text-accent" class={navLink}>Áraink</Link>
                    <Link href="/contact" activeClassName="text-accent" class={navLink}>Kapcsolat</Link>
                    <Link href="/rules" activeClassName="text-accent" class={navLink}>Házirend</Link>
                </nav>
            </div>
        </header>
    )
}
