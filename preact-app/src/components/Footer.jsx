const socials = [
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/NewIceJegpalyaBudaors/?ref=embed_page',
        icon: (
            <svg viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M13.5 21v-7.25H16l.38-3h-2.88V8.17c0-.84.24-1.42 1.47-1.42h1.57V4.05A21.2 21.2 0 0 0 14.43 4c-2.26 0-3.82 1.38-3.82 3.92V10.7H8v3h2.6V21h2.9Z" />
            </svg>
        )
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/newicejegpalya?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
        icon: (
            <svg viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M16.5 3h-9A4.5 4.5 0 0 0 3 7.5v9A4.5 4.5 0 0 0 7.5 21h9a4.5 4.5 0 0 0 4.5-4.5v-9A4.5 4.5 0 0 0 16.5 3Zm3 12.75a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3ZM12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4Zm0 6.1A2.1 2.1 0 1 1 14.1 12 2.1 2.1 0 0 1 12 14.1Zm5.02-6.9a1 1 0 1 1-1-1 1 1 0 0 1 1 1Z" />
            </svg>
        )
    }
]

export default function Footer() {
    return (
        <footer class="relative overflow-hidden bg-[#010f1b] text-white/90">
            <div class="absolute inset-0 opacity-50">
                <img src="/assets/img/hero_4.jpg" alt="Icy texture" class="w-full h-full object-cover" />
                <div class="absolute inset-0 bg-[#010f1b]/90" />
            </div>

            <div class="relative max-w-6xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-3">
                <div class="space-y-3">
                    <p class="text-3xl font-heading uppercase tracking-[0.4em] text-white">NewIce</p>
                    <p class="text-sm text-white/70">2040 Budaörs, Sportkomplexum<br />Budaörsi út 12.</p>
                    <div class="flex gap-3 pt-2">
                        {socials.map(({ name, href, icon }) => (
                            <a
                                key={name}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={name}
                                class="h-11 w-11 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white hover:text-accent hover:border-accent transition"
                            >
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <p class="font-semibold mb-3 text-white tracking-wide uppercase text-xs">Elérhetőség</p>
                    <div class="space-y-2 text-sm text-white/75">
                        <p>Telefon: <a class="text-white" href="tel:+36305699567">+36 30 569 9567</a></p>
                        <p>Email: <a class="text-white" href="mailto:newiceinfo@gmail.com">newiceinfo@gmail.com</a></p>
                        <p>Foglalás: hétköznap 8:00-18:00</p>
                    </div>
                </div>

                <div>
                    <p class="font-semibold mb-3 text-white tracking-wide uppercase text-xs">Gyorslinkek</p>
                    <div class="grid gap-2 text-sm text-white/70">
                        <a class="hover:text-white transition" href="/open">Nyitvatartás</a>
                        <a class="hover:text-white transition" href="/prices">Áraink</a>
                        <a class="hover:text-white transition" href="/gallery">Galéria</a>
                        <a class="hover:text-white transition" href="/rules">Házirend</a>
                    </div>
                </div>
            </div>

            <div class="relative text-center text-xs text-white/60 border-t border-white/10 py-4 bg-[#030f1a]/80">
                © {new Date().getFullYear()} NewIce — Minden jog fenntartva • Web: Szenes Márton
            </div>
        </footer>
    )
}
