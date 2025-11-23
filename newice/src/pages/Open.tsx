import { Link, useSearchParams } from 'react-router-dom'
import WeekCalendar from '../components/WeekCalendar'

// Rövidített minta – a valós, napi bontású pályabeosztás dinamikus és az hivatalos oldalon frissül.
const sampleBlocks = [
    { status: 'Közönségjég', type: 'open', times: ['Délelőtti és délutáni blokkok', 'Változó kapacitás – ellenőrizd indulás előtt'] },
    { status: 'Tanfolyam / Oktatás', type: 'team', times: ['Hétfő / Szerda kora este', 'Szombat reggeli turnusok'] },
    { status: 'Hoki utánpótlás', type: 'team', times: ['Délutáni edzésidők', 'Korosztályonként eltérő kezdés'] },
    { status: 'Jégdiszkó', type: 'disco', times: ['Kiemelt szombat esték', 'DJ + fénytechnika'] },
    { status: 'Pályabérlés', type: 'team', times: ['Rugalmas egyeztetés alapján', 'Hétvégi korlátozott sávok'] }
]

const quickInfo = [
    { label: 'Friss pályabeosztás', value: 'Mindig nézd meg indulás előtt' },
    { label: 'Jegyváltás', value: 'Helyszínen érkezési sorrendben' },
    { label: 'Felszerelés', value: 'Korcsolya bérlés a pénztárnál' },
    { label: 'Kapacitás', value: 'Limitált – telítettségnél várakozás' }
]

export default function Open() {
    const [params] = useSearchParams()
    const admin = params.get('admin') === '1'
    return (
        <section className="max-w-6xl mx-auto px-4 py-20 space-y-16 text-white">
            <div className="text-center space-y-3">
                <span className="badge-ice">Nyitvatartás</span>
                <h2 className="text-4xl font-heading">Aktuális pályabeosztás</h2>
                <p className="text-white/70 max-w-2xl mx-auto">
                    A közönségjég és edzésidők dinamikusan változnak. Mindig ellenőrizd a napi bontású táblázatot indulás előtt.
                </p>
            </div>

            <WeekCalendar admin={admin} />

            <div className="frosted-card p-6 space-y-4">
                <h3 className="text-xl font-heading">Gyors infók</h3>
                <ul className="grid md:grid-cols-2 gap-3 text-white/70 text-sm">
                    {quickInfo.map(q => (
                        <li key={q.label} className="flex items-start gap-2"><span className="text-accent">•</span><span><strong className="text-white/80">{q.label}:</strong> {q.value}</span></li>
                    ))}
                </ul>
                <p className="text-white/50 text-xs">Admin mód: add `?admin=1` az URL-hez az idősávok szerkesztéséhez (lokális mentés). Átfedés nem engedélyezett.</p>
            </div>

            <div className="frosted-card p-6 space-y-3">
                <h3 className="text-2xl font-heading">Jéglabirintus</h3>
                <p className="text-white/75 text-sm">Szezonban (november–február) kiemelt hétvégi attrakció. Létszámkorlát, blokkos belépés. Mindig ellenőrizd az aktuális nyitvatartást.</p>
                <Link to="/contact" className="btn-ice w-max">Információ / foglalás</Link>
            </div>
        </section>
    )
}
