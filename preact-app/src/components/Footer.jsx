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
        <footer class="bg-[#101b24] text-white/90">
            <div class="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
                <div>
                    <p class="text-2xl font-heading uppercase tracking-widest text-white">NewIce</p>
                    <p class="text-sm text-white/70 mt-2">2040 Budaörs, sport komplexum</p>
                </div>
                <div>
                    <p class="font-semibold mb-2 text-white">Elérhetőség</p>
                    <p class="text-sm text-white/70">+36 30 569 9567</p>
                    <p class="text-sm text-white/70">newiceinfo@gmail.com</p>
                </div>
                <div>
                    <p class="font-semibold mb-2 text-white">Kövess minket</p>
                    <div class="flex gap-3">
                        {socials.map(({ name, href, icon }) => (
                            <a
                                key={name}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={name}
                                class="h-10 w-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white hover:text-accent hover:border-accent transition"
                            >
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div class="text-center text-xs text-white/70 border-t border-white/10 py-4 bg-[#162532]">
                © 2025 NewIce — Minden jog fenntartva • Web: Szenes Márton
            </div>
        </footer>
    )
}
