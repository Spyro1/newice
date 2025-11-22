import { Router } from 'preact-router'
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
        <div class="min-h-screen flex flex-col bg-background text-text">
            <Header />
            <main class="flex-1">
                <Router>
                    <Home path="/" />
                    <About path="/about-us" />
                    <Gallery path="/gallery" />
                    <Open path="/open" />
                    <Prices path="/prices" />
                    <Contact path="/contact" />
                    <Rules path="/rules" />
                    <NotFound default />
                </Router>
            </main>
            <Footer />
        </div>
    )
}
