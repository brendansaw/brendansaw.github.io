import './MatchDetails.css'
import { MdDateRange, MdAccessTime, MdLocationOn, MdSportsSoccer } from 'react-icons/md';

const details = [
    { icon: <MdDateRange />, label: 'Date', value: 'Friday, June 26, 2026' },
    { icon: <MdAccessTime />, label: 'Kickoff', value: '6:00 PM PT' },
    { icon: <MdLocationOn />, label: 'Venue', value: 'BC Place - Vancouver, BC' },
    { icon: <MdSportsSoccer />, label: 'Match', value: 'Group Stage - Match 64'},
];

export default function MatchDetails() {
    return (
        <div className='match-details'>
            <div className='match-details__grid'>
                {details.map(({icon, label, value}) => (
                    <div className='detail-card' key={label}>
                        <span className='detail-card__icon' aria-hidden='true'>{icon}</span>
                        <div className='detail-card__body'>
                            <div className='detail-card__label'>{label}</div>
                            <div className='detail-card__value'>{value}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}