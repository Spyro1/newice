import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Open from './pages/Open'
import Prices from './pages/Prices'
import Rules from './pages/Rules'
import NotFound from './pages/NotFound'

const basePath = (() => {
    const publicUrl = process.env.PUBLIC_URL
    if (!publicUrl) {
        return '/'
    }

    try {
        const { pathname } = new URL(publicUrl)
        return pathname.replace(/\/$/, '') || '/'
    } catch {
        return publicUrl.startsWith('/') ? publicUrl : `/${publicUrl}`
    }
})()

function TransitionRoutes() {
    const location = useLocation()
    const [exitingLocation, setExitingLocation] = useState<typeof location | null>(null)
    const prevPathRef = useRef(location.pathname)

    useEffect(() => {
        if (location.pathname !== prevPathRef.current) {
            setExitingLocation({ ...location, pathname: prevPathRef.current })
            const timeout = setTimeout(() => setExitingLocation(null), 350)
            prevPathRef.current = location.pathname
            // Scroll to top smoothly on route change
            window.scrollTo({ top: 0, behavior: 'smooth' })
            return () => clearTimeout(timeout)
        }
    }, [location])

    return (
        <div className="route-stage relative">
            {exitingLocation && (
                <div className="route-fade-exit absolute inset-0">
                    <Routes location={exitingLocation}>
                        <Route path="/" element={<Home />} />
                        <Route path="/about-us" element={<About />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/open" element={<Open />} />
                        <Route path="/prices" element={<Prices />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/rules" element={<Rules />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            )}
            <div key={location.pathname} className="route-fade-enter">
                <Routes location={location}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<About />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/open" element={<Open />} />
                    <Route path="/prices" element={<Prices />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/rules" element={<Rules />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </div>
    )
}

export default function App() {
    return (
        <BrowserRouter basename={basePath}>
            <div className="min-h-screen flex flex-col text-white">
                <Header />
                <main className="flex-1">
                    <TransitionRoutes />
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    )
}
