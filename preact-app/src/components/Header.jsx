import { useEffect, useState } from 'preact/hooks'
import { Link } from 'preact-router/match'

const navItems = [
    { href: '/', label: 'Kezdőlap' },
    { href: '/about-us', label: 'Rólunk' },
    { href: '/gallery', label: 'Galéria' },
    { href: '/open', label: 'Nyitvatartás' },
    { href: '/prices', label: 'Áraink' },
    { href: '/rules', label: 'Házirend' },
    { href: '/contact', label: 'Elérhetőség' }
]

const navLink = 'relative px-1.5 lg:px-2 py-2 text-[0.64rem] md:text-[0.7rem] lg:text-sm tracking-[0.18em] md:tracking-[0.2em] lg:tracking-[0.22em] uppercase text-white/70 hover:text-white transition whitespace-nowrap'
const activeNav = "text-white after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:w-6 after:h-0.5 after:bg-accent"
const mobileNavLink = 'relative text-2xl font-heading uppercase tracking-[0.35em] text-white/60 pl-6'
const mobileActiveNav = "text-white before:content-[''] before:absolute before:-left-6 before:top-1/2 before:-translate-y-1/2 before:h-8 before:w-0.5 before:bg-accent"

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    const closeMenu = () => setMenuOpen(false)

    useEffect(() => {
        if (menuOpen) {
            document.body.style.setProperty('overflow', 'hidden')
        } else {
            document.body.style.removeProperty('overflow')
        }
        return () => document.body.style.removeProperty('overflow')
    }, [menuOpen])

    return (
        <>
            <header class="sticky top-0 z-50">
                <div class="backdrop-blur-xl bg-[#031221]/80 border-b border-white/5">
                    <div class="max-w-6xl xl:max-w-7xl mx-auto flex items-center gap-3 sm:gap-5 px-4 sm:px-6 py-4">
                        <div class="flex items-center gap-3 w-full md:w-auto">
                            <a href="/" class="flex flex-shrink-0 items-center gap-3 text-white min-w-[200px]">
                                <img src="/assets/img/logo.png" alt="NewIce" class="h-12 w-12 object-contain drop-shadow-lg" />
                                <div>
                                    <p class="text-2xl font-heading tracking-widest">NewIce</p>
                                    <p class="text-xs tracking-[0.3em] text-white/60 uppercase">Budaörsi jégpálya</p>
                                </div>
                            </a>

                            <button
                                type="button"
                                class="md:hidden h-12 w-12 rounded-full border border-white/20 text-white flex flex-col items-center justify-center gap-1 ml-auto flex-shrink-0"
                                aria-label="Menü megnyitása"
                                aria-expanded={menuOpen}
                                onClick={() => setMenuOpen(open => !open)}
                            >
                                <span class={`h-0.5 w-6 bg-white transition ${menuOpen ? 'translate-y-1.5 rotate-45' : ''}`}></span>
                                <span class={`h-0.5 w-6 bg-white transition ${menuOpen ? 'opacity-0' : ''}`}></span>
                                <span class={`h-0.5 w-6 bg-white transition ${menuOpen ? '-translate-y-1.5 -rotate-45' : ''}`}></span>
                            </button>
                        </div>

                        <nav class="hidden md:flex flex-1 items-center justify-end gap-2 lg:gap-3 rounded-full bg-white/5 border border-white/10 px-3 lg:px-4 xl:px-5 py-2">
                            {navItems.map(item => (
                                <Link key={item.href} href={item.href} activeClassName={activeNav} class={navLink}>
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>

            </header>
            {menuOpen && (
                <div class="md:hidden fixed inset-0 bg-[#010815]/95 backdrop-blur-lg z-40 pt-28 pb-10 overflow-y-auto">
                    <div class="flex flex-col gap-5 px-6">
                        {navItems.map(item => (
                            <Link
                                key={`mobile-${item.href}`}
                                href={item.href}
                                activeClassName={mobileActiveNav}
                                class={mobileNavLink}
                                onClick={closeMenu}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}
