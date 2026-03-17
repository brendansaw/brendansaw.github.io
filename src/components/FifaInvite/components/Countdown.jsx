import { useState, useEffect, useRef } from "react";

const MATCH_DATE = new Date('2026-06-26T18:00:00-07:00');

function getTimeLeft() {
    const diff = MATCH_DATE - Date.now();
    if (diff <= 0) return null;

    const totalSeconds = Math.floor(diff / 1000);
    return {
        days: Math.floor(totalSeconds / 86400),
        hours: Math.floor((totalSeconds % 86400) / 3600),
        minutes: Math.floor((totalSeconds % 3600) / 60),
        seconds: totalSeconds % 60,
    }
}

function pad(n) {
    return String(n).padStart(2, "0");
}

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft);
    const [flipping, setFlipping] = useState({});
    const prevRef = useRef(timeLeft);

    useEffect(() => {
        const id = setInterval(() => {
            const next = getTimeLeft()
            setTimeLeft(next)

            if (next && prevRef.current) {
                const changed = {};
                for (const key of ['days', 'hours', 'minutes', 'seconds']) {
                    if (next[key] !== prevRef.current[key]) changed[key] = true;
                }

                if (Object.keys(changed).length) {
                    setFlipping(changed);
                    setTimeout(() => setFlipping({}), 200);
                }
            }
            prevRef.current = next;
        }, 1000)
        return () => clearInterval(id)
    }, []);

    if (!timeLeft) {
        return (
            <div className="countdown">
                <p className="countdown__expired">🏟️ Kickoff time - enjoy the match!</p>
            </div>
        )
    }

    const units = [
        { key: 'days', label: 'Days', value: timeLeft.days },
        { key: 'hours', label: 'Hours', value: timeLeft.hours },
        { key: 'minutes', label: 'Minutes', value: timeLeft.minutes },
        { key: 'seconds', label: 'Seconds', value: timeLeft.seconds },
    ];

    return (
        <div className="countdown">
            <p className="countdown__title">Countdown to Kickoff</p>
            <div className="countdown__units">
                {units.map(({ key, label, value }) => (
                    <div className="countdown__unit" key={key}>
                        <span className={`countdown__number${flipping[key] ? ' flip': ''}`}>
                            {value}
                        </span>
                        <span className="countdown__label">{label}</span>
                    </div>
                ))}
            </div>

        </div>
    )
}