import { Link, useSearchParams } from 'react-router-dom'
import WeekCalendar from '../components/WeekCalendar'

const quickInfo = [
    { label: 'Friss pályabeosztás', value: 'Mindig nézd meg indulás előtt' },
    { label: 'Jegyváltás', value: 'Helyszínen érkezési sorrendben' },
    { label: 'Felszerelés', value: 'Korcsolya bérlés a pénztárnál' },
    { label: 'Kapacitás', value: 'Limitált – telítettségnél várakozás' }
]

const defaultWeekSchedule: {
    id: string
    day: 'hetfo' | 'kedd' | 'szerda' | 'csutortok' | 'pentek' | 'szombat' | 'vasarnap'
    start: number
    end: number
    label: string
    color: string
}[] = [
    { id: 'hetfo-reggel', day: 'hetfo', start: 7, end: 9, label: 'Pályakarbantartás', color: '#5a6b73' },
    { id: 'hetfo-delutan', day: 'hetfo', start: 14, end: 19, label: 'Közönségjég', color: '#0d84a3' },
    { id: 'kedd-oktatas', day: 'kedd', start: 9, end: 12, label: 'Kori suli', color: '#0d6f57' },
    { id: 'kedd-est', day: 'kedd', start: 18, end: 21, label: 'Utánpótlás edzés', color: '#8d0f45' },
    { id: 'szerda-kozep', day: 'szerda', start: 10, end: 18, label: 'Közönségjég', color: '#0d84a3' },
    { id: 'csutortok-foglalt', day: 'csutortok', start: 7, end: 13, label: 'Iskolai csoportok', color: '#b4761e' },
    { id: 'csutortok-este', day: 'csutortok', start: 18, end: 22, label: 'Csapat edzés', color: '#4a1d7d' },
    { id: 'pentek-reggel', day: 'pentek', start: 8, end: 12, label: 'Közönségjég', color: '#0d84a3' },
    { id: 'pentek-este', day: 'pentek', start: 19, end: 23, label: 'Jégdiszkó', color: '#a83b7c' },
    { id: 'szombat-napkozben', day: 'szombat', start: 10, end: 18, label: 'Családi közönségjég', color: '#0d84a3' },
    { id: 'vasarnap-reggel', day: 'vasarnap', start: 9, end: 12, label: 'Tanfolyam', color: '#0d6f57' },
    { id: 'vasarnap-este', day: 'vasarnap', start: 17, end: 21, label: 'Pályabérlés', color: '#b4761e' }
]

export default function Open() {
    const [params] = useSearchParams()
    const admin = params.get('admin') === '1'
    return (
        <section className="max-w-6xl mx-auto px-4 py-16 space-y-12 text-white md:space-y-16 md:py-20">
            <div className="text-center space-y-3">
                <span className="badge-ice">Nyitvatartás</span>
                <h2 className="text-3xl font-heading sm:text-4xl">Aktuális pályabeosztás</h2>
                <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
                    A közönségjég és edzésidők dinamikusan változnak. Mindig ellenőrizd a napi bontású táblázatot indulás előtt.
                </p>
            </div>

            <WeekCalendar admin={admin} initial={defaultWeekSchedule} />

            <div className="frosted-card p-5 space-y-4 sm:p-6">
                <h3 className="text-lg font-heading sm:text-xl">Gyors infók</h3>
                <ul className="grid md:grid-cols-2 gap-3 text-white/70 text-sm">
                    {quickInfo.map(q => (
                        <li key={q.label} className="flex items-start gap-2"><span className="text-accent">•</span><span><strong className="text-white/80">{q.label}:</strong> {q.value}</span></li>
                    ))}
                </ul>
                <p className="text-white/50 text-xs">Admin mód: add `?admin=1` az URL-hez az idősávok szerkesztéséhez (lokális mentés). Átfedés nem engedélyezett.</p>
            </div>

            <div className="frosted-card p-5 space-y-3 sm:p-6">
                <h3 className="text-xl font-heading sm:text-2xl">Jéglabirintus</h3>
                <p className="text-white/75 text-sm">Szezonban (november–február) kiemelt hétvégi attrakció. Létszámkorlát, blokkos belépés. Mindig ellenőrizd az aktuális nyitvatartást.</p>
                <Link to="/contact" className="btn-ice w-max">Információ / foglalás</Link>
            </div>
        </section>
    )
}
