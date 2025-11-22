const rules = [
    'A pályán bukósisak és kesztyű viselése ajánlott.',
    'A jégre kizárólag korcsolyában lehet belépni.',
    'Tilos dohányozni és ételt bevinni a jégfelületre.',
    'A pályafelügyelő utasításait mindenki köteles követni.',
    'A pályán való tartózkodás saját felelősségre történik.'
]

export default function Rules() {
    return (
        <section class="max-w-4xl mx-auto px-4 py-16 space-y-6">
            <header class="rect-card">
                <p class="text-sm uppercase tracking-[0.3em] text-accent-dark">Házirend</p>
                <h2 class="text-3xl font-heading mt-3">Biztonságos korcsolyázás</h2>
                <p class="text-sm text-text mt-2">Köszönjük, hogy betartod szabályainkat, így mindenki gondtalanul élvezheti a jeget.</p>
            </header>
            <ul class="rect-card space-y-3 text-text">
                {rules.map(rule => (
                    <li key={rule}>• {rule}</li>
                ))}
            </ul>
        </section>
    )
}
