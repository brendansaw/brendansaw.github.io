import { useState, useCallback } from 'react'
import './FifaInvite.css'
import Hero from './components/Hero'
import Countdown from "./components/Countdown"
import Footer from './components/Footer'
import MatchDetails from './components/MatchDetails'
import RSVPButton from './components/RSVPButton'
import TeamBadges from './components/TeamBadges'
import SplashScreen from './components/SplashScreen'

function App() {
    const [showSplash, setShowSplash] = useState(true);

    const handleSplashComplete = useCallback(() => {
        setShowSplash(false)
    }, []);

    document.title = "FIFA WC 2026 - NZ vs Belgium";
    const favicon = document.querySelector("link[rel='icon']");
    favicon.href = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>⚽️</text></svg>";
    return (<>
        {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
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