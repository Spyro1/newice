import { BrowserRouter, Routes, Route } from 'react-router-dom'
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

export default function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen flex flex-col text-white">
                <Header />
                <main className="flex-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about-us" element={<About />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/open" element={<Open />} />
                        <Route path="/prices" element={<Prices />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/rules" element={<Rules />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    )
}
