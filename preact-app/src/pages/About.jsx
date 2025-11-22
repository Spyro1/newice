const timeline = [
    { year: '2016', text: 'Megnyit a NewIce, első teljesen fedett pálya a budaörsi térségben.' },
    { year: '2019', text: 'Elindul a hokisuli és a családi hétvége program.' },
    { year: '2022', text: 'Új hűtőrendszer + diszkrét fénytechnika a disco jéghez.' },
    { year: '2024', text: 'Digitális beléptetés, lounge és prémium büfé megújulása.' }
]

const values = [
    { title: 'Fenntartható üzemeltetés', desc: 'Energiatakarékos hűtés és LED-világítás, vízvisszaforgatással.' },
    { title: 'Biztonság mindenek felett', desc: 'Sávonként pályafelügyelő és kötelező pályaszabály ismertetés.' },
    { title: 'Közösségépítés', desc: 'Iskolai, kisközösségi és céges programokat támogatunk saját szervezéssel.' }
]

export default function About() {
    return (
        <section class="max-w-6xl mx-auto px-4 py-20 text-white space-y-16">
            <div class="grid lg:grid-cols-2 gap-10 items-center">
                <div class="space-y-4">
                    <span class="badge-ice">Rólunk</span>
                    <h1 class="text-4xl font-heading">Innovatív jégpálya, ahol a tél sosem ér véget</h1>
                    <p class="text-white/75">A NewIce több, mint egy jégfelület: egy inspiráló tér, ahol egyszerre fér meg a családi korcsolyázás, az utánpótlásnevelés és az esti buli. Saját jégmestereink 2 óránként újratükrözik a pályát, így minden turnus csillogó felülettel indul.</p>
                    <p class="text-white/70">Küldetésünk, hogy élménnyé tegyük a mozgást, legyen szó első csúszásról vagy profi hokis edzésről.</p>
                </div>
                <div class="image-stack">
                    <img src="/assets/img/hero_4.jpg" alt="Csapat a jégen" class="w-full h-[420px] object-cover" />
                </div>
            </div>

            <div class="grid lg:grid-cols-[2fr,1fr] gap-10">
                <div class="frosted-card p-8 space-y-6">
                    <h2 class="text-3xl font-heading">Idővonal</h2>
                    <div class="space-y-5">
                        {timeline.map(item => (
                            <div key={item.year} class="flex gap-4 items-start">
                                <span class="text-accent text-sm tracking-[0.3em] mt-1">{item.year}</span>
                                <p class="text-white/80">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div class="space-y-4">
                    {values.map(value => (
                        <article key={value.title} class="frosted-card p-6">
                            <h3 class="text-xl font-heading">{value.title}</h3>
                            <p class="text-white/75 text-sm mt-2">{value.desc}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
