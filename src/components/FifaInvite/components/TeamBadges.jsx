import './TeamBadges.css'
import { useState } from "react";
import { createPortal } from "react-dom";
import { teams } from "../data/teams";
import BelgiumFlag from "../../../images/fifa/belgium.svg";
import NZFlag from "../../../images/fifa/nz.svg";

function TeamStatsModal({team, onClose}) {
    if (!team) return null;
    const data = teams[team];

    return createPortal(
        <div className="team-modal-overlay" onClick={onClose}>
            <div className="team-modal" onClick={(e) => e.stopPropagation()}>
                <button className="team-modal__close" onClick={onClose}>x</button>
                <div className="team-modal__flag">{data.flag}</div>
                <h2 className="team-modal__name">{data.name}</h2>
                <p className="team-modal__nickname">{data.nickname}</p>

                <div className="team-modal__stats">
                    {data.stats.map((stat, i) => (
                        <div key={i} className="team-modal__stat">
                            <span className="team-modal__stat-value">{stat.value}</span>
                            <span className="team-modal__stat-label">{stat.label}</span>
                        </div>
                    ))}
                </div>

                <div className="team-modal__stars">
                    <span>⭐️</span>
                    {data.stars.map((star, i) => (
                        <span key={i}>
                            {star}{i < data.stars.length - 1 ? ' - ': ''}
                        </span>
                    ))}
                    <span>⭐️</span>
                </div>
            </div>
        </div>,
        document.body
    )
}

export default function TeamBadges() {
    const [selectedTeam, setSelectedTeam] = useState(null);

    return (
        <div className="teams">
            <div className="teams__wrapper">
                {/* Belgium */}
                <div className="team team--clickable" onClick={() => setSelectedTeam('belgium')}>
                    <img src={BelgiumFlag} className="team__flag-img" />
                    <span className="team__name">{teams.belgium.name}</span>
                    <span className="team__label">{teams.belgium.nickname}</span>
                </div>

                {/* VS */}
                <div className="vs">
                    <span className="vs__text">VS</span>
                    <span className="vs__match">Match 64</span>
                </div>

                {/* New Zealand */}
                <div className="team team--clickable" onClick={() => setSelectedTeam('nz')}>
                    <img src={NZFlag} className="team__flag-img" />
                    <span className="team__name">{teams.nz.name}</span>
                    <span className="team__label">{teams.nz.nickname}</span>
                </div>
            </div>

            <TeamStatsModal team={selectedTeam} onClose={() => setSelectedTeam(null)} />
        </div>
    )
}