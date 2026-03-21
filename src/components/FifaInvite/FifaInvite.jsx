import './FifaInvite.css'
import Hero from './components/Hero'
import Countdown from "./components/Countdown"
import Footer from './components/Footer'
import MatchDetails from './components/MatchDetails'
import RSVPButton from './components/RSVPButton'
import TeamBadges from './components/TeamBadges'

function App() {
    document.title = "FIFA WC 2026 - NZ vs Belgium"
    return (<>
        <section className="hero">
            <div className="hero__bg-grass" aria-hidden="true" />
            <div className="hero__ball-container" aria-hidden="true">
                {Array.from({length: 8}).map((_, i) => (
                    <span key={i} className="ball">⚽️</span>
                ))}
            </div>
            <div className="hero__content">
                <Hero />
                <TeamBadges />
                <MatchDetails />
                <Countdown />
                <RSVPButton />
            </div>
        </section>
        <Footer />
    </>)
}

export default App