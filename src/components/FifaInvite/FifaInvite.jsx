import './FifaInvite.css'
import Hero from './components/Hero'
import './components/Countdown.css'
import Countdown from "./components/Countdown"

function App() {
    document.title = "FIFA WC 2026 - NZ vs Belgium"
    return (<>
        <section className="hero">
            <div className="hero__bg-grass" aria-hidden="true" />
            <div className="hero__ball-container" aria-hidden="true" />
            <div className="hero__content">
                <Hero />
                <Countdown />
            </div>
        </section>
    </>)
}

export default App