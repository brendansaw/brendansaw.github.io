import { useState, useEffect, useRef } from "react";
import { teams } from "../data/teams";
import './SplashScreen.scss'
import IntroMp3 from "../../../images/fifa/audio.mp3";

function TeamScene({ team, side }) {
    return (
        <div className={`splash__team-scene splash__team-scene--${side}`}>
            <div className={`splash__team-bg splash__team-bg--${side}`}>
                {side === 'belgium' ? (
                    <>
                        <div className="splash__stripe splash__stripe--1" />
                        <div className="splash__stripe splash__stripe--2" />
                        <div className="splash__stripe splash__stripe--3" />
                    </>
                ) : (
                    <div className="splash__nz-stars">
                        <span>✦</span><span>✦</span><span>✦</span><span>✦</span>
                    </div>
                )}
            </div>
            <div className="splash__team-content">
                <div className="splash__team-flag">{team.flag}</div>
                <div className="splash__team-name">{team.name.toUpperCase()}</div>
                <div className="splash__team-nickname">{team.nickname}</div>
                <div className="splash__team-stats">
                    {team.stats.map((stat, i) => (
                        <div key={i} className="splash__stat">
                            <span className="splash__stat-value">{stat.value}</span>
                            <span className="splash__stat-label">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

function SplashScreen({ onComplete }) {
    const [phase, setPhase] = useState(0);
    const [ballOffset, setBallOffset] = useState(-60);
    const [ballRotation, setBallRotation] = useState(0);
    const [ballSettled, setBallSettled] = useState(false);
    const animationRef = useRef(null);
    const audioRef = useRef(null);

    useEffect(() => {
        const t = setTimeout(() => setPhase(1), 300);
        return () => clearTimeout(t);
    }, []);

    useEffect(() => {
        const audio = new Audio(IntroMp3);
        audio.loop = false;
        audio.volume = 0.2;
        audioRef.current = audio;
        return () => {
            audio.pause();
            audio.src = '';
        }
    }, []);

    const handleTap = () => {
        if (phase === 1 && ballSettled) {
            setPhase(2);

            const audio = audioRef.current;
            setTimeout(() => {
                audio.pause();
                audio.src = '';
            }, 27500)

            setTimeout(() => setPhase(3), 8000);
            setTimeout(() => setPhase(4), 15000);
            setTimeout(() => setPhase(5), 20000);
            setTimeout(() => setPhase(6), 25500);
            setTimeout(() => onComplete(), 30300);
        }
    }

    useEffect(() => {
        if (phase !== 1) return;
        const t = setTimeout(() => setBallSettled(true), 2500);
        return () => clearTimeout(t);
    }, [phase]);

    useEffect(() => {
        if (phase === 2 && audioRef.current) {
            console.log("hello")
            const audio = audioRef.current;
            audio.play().catch(() => {})
        };

        // if (phase === 6 && audioRef.current) {
        //     const audio = audioRef.current;
        //     const fade = setInterval(() => {
        //         if (audio.volume > 0.05) {
        //             audio.volume = Math.max(0, audio.volume - 0.05)
        //         } else {
        //             audio.pause();
        //             clearInterval(fade);
        //         }
        //     }, 500);
        // }
        
        if (phase !== 1) return;
        const startTime = performance.now();
        const duration = 2200;

        const bounceKeyFrames = [
            { t: 0, y: -60 },
            { t: 0.18, y: -0 },
            { t: 0.26, y: -20 },
            { t: 0.38, y: 0 },
            { t: 0.46, y: -10 },
            { t: 0.56, y: -0 },
            { t: 0.64, y: -5 },
            { t: 0.74, y: 0 },
            { t: 0.82, y: -2 },
            { t: 0.90, y: -0 },
            { t: 1, y: -0 },
        ];

        const interpolate = (progress) => {
            const i = bounceKeyFrames.findIndex((kf, idx) => 
                idx < bounceKeyFrames.length - 1 && progress >= kf.t && progress <= bounceKeyFrames[idx + 1].t
            );
            if (i === -1) return 0;
            const { t: t0, y: y0 } = bounceKeyFrames[i];
            const { t: t1, y: y1 } = bounceKeyFrames[i + 1];
            const local = (progress - t0) / (t1 - t0);
            const eased = y1 > y0 ? local ** 2 : 1 - (1 - local) ** 2;
            return y0 + (y1 - y0) * eased;
        };

        const animate = (currentTime) => {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            setBallOffset(interpolate(progress));
            setBallRotation(progress * 720);
            if (progress < 1) animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationRef.current);
    }, [phase]);

    const {belgium, nz} = teams;

    return (
        <div className={`splash phase-${phase}`} onClick={handleTap}>
            <div className="splash__darkness" />

            <div className="splash__spotlights">
                <div className="splash__spot splash__spot--1" />
                <div className="splash__spot splash__spot--2" />
                <div className="splash__spot splash__spot--3" />
                <div className="splash__spot splash__spot--4" />
            </div>
        

            {phase === 1 && (
                <div className="splash__ball-scene">
                    <div
                        className="splash__ball"
                        style={{
                            top: `calc(50% + ${ballOffset}%)`,
                            transform: `translate(-50%, -50%) rotate(${ballRotation}deg)`
                        }}>
                        ⚽️
                    </div>
                    <div className="splash__ball-shadow" />
                    <div className="splash__impact-ring" />
                    <div className="splash__impact-ring splash__impact-ring--2" />
                    <div className="splash__welcome">Happy<br/>anniversary<br/>Christina!</div>
                    <div className={`splash__tap-hint${ballSettled ? ' splash__tap-hint--visible' : ''}`}>
                        TAP TO CONTINUE
                    </div>
                </div>
            )}

            <div className="splash__title-scene">
                <div className="splash__title-pre">WELCOME TO THE</div>
                <div className="splash__title-main">
                    <span className="splash__fifa">FIFA</span>
                    <span className="splash__wc">WORLD CUP</span>
                </div>
                <div className="splash__title-year">2026</div>
                <div className="splash__title-gs">GROUP STAGE</div>
            </div>

            <TeamScene team={belgium} side="belgium" />
            <TeamScene team={nz} side="nz" />

            <div className="splash__matchup-scene">
                <div className="splash__matchup-team splash__matchup-team--left">
                    <span className="splash__matchup-flag">{belgium.flag}</span>
                    <span className="splash__matchup-name">{belgium.name.toUpperCase()}</span>
                </div>
                <div className="splash__matchup-vs">VS</div>
                <div className="splash__matchup-team splash__matchup-team--right">
                    <span className="splash__matchup-flag">{nz.flag}</span>
                    <span className="splash__matchup-name">{nz.name.toUpperCase()}</span>
                </div>
                <div className="splash__matchup-label">GROUP STAGE MATCH</div>
            </div>
            
            <div className="splash__particles">
                {Array.from( {length: 50}, (_, i) => (
                    <span key={i} className="splash__particle" style={{ '--i': i }} />
                ))}
            </div>

            <div className="splash__flash" />
        </div>
    )
}

export default SplashScreen