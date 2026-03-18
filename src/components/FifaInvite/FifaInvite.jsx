import './FifaInvite.css'
import Hero from './components/Hero'
import Countdown from "./components/Countdown"
import Footer from './components/Footer'
import MatchDetails from './components/MatchDetails'
import RSVPButton from './components/RSVPButton'

function App() {
    document.title = "FIFA WC 2026 - NZ vs Belgium"
    return (<>
        <section className="hero">
            <div className="hero__bg-grass" aria-hidden="true" />
            <div className="hero__ball-container" aria-hidden="true" />
            <div className="hero__content">
                <Hero />
                <MatchDetails />
                <Countdown />
                <RSVPButton />
            </div>
        </section>
        <Footer />
    </>)
}

export default App