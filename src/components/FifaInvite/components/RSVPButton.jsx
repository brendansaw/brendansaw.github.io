import './RSVPButton.css'
import { useEffect, useRef, useState } from "react";
import { MdCalendarMonth, MdDirections, MdExpandMore } from "react-icons/md";

// Google Calendar link
const GCAL_URL =
  'https://www.google.com/calendar/render?action=TEMPLATE' +
  '&text=FIFA+World+Cup+2026+%E2%80%93+New+Zealand+vs+Belgium' +
  '&dates=20260626T010000Z%2F20260626T040000Z' +
  '&details=Match+64%2C+Group+Stage.+BC+Place%2C+Vancouver+BC.' +
  '&location=BC+Place%2C+777+Pacific+Blvd%2C+Vancouver%2C+BC+V6B+4Y8' +
  '&sf=true&output=xml'

// Google Maps directions to BC Place
const MAPS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=BC+Place+Vancouver+BC&travelmode=transit'

// ICS content for Apple Calendar / Outlook
const ICS_CONTENT = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//FIFA World Cup 2026 Invite//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:fifa-wc-2026-nz-vs-belgium@invite
DTSTAMP:20260101T000000Z
DTSTART:20260626T010000Z
DTEND:20260626T040000Z
SUMMARY:FIFA World Cup 2026 – New Zealand vs Belgium
DESCRIPTION:Match 64\\, Group Stage. BC Place\\, Vancouver BC.
LOCATION:BC Place\\, 777 Pacific Blvd\\, Vancouver\\, BC V6B 4Y8
STATUS:CONFIRMED
TRANSP:OPAQUE
END:VEVENT
END:VCALENDAR`

function downloadICS() {
    const blob = new Blob([ICS_CONTENT], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'fifa-wc-2026-nz-vs-belgium.ics';
    document.body.appendChild(a);
    a.click()
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function CalendarDropdown({ onClose }) {
    return (
        <div className="cal-dropdown">
            <a
                href={GCAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cal-dropdown__item"
                onClick={ onClose }
            >
                <span className="cal-dropdown__icon">📅</span>
                Google Calendar
            </a>
            <button
                className="cal-dropdown__item"
                onClick={() => { downloadICS(); onClose() }}
            >
                <span className="cal-dropdown__icon">🍎</span>
                Apple Calendar
            </button>
        </div>
    )
}

export default function RSVPButton() {
    const [showCalMenu, setShowCalMenu] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setShowCalMenu(false);
            }
        }

        if (showCalMenu) document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [showCalMenu]);

    return (
        <div className="rsvp">
            <div className="rsvp__cal-wrapper" ref={dropdownRef}>
                <button
                    className="btn btn--primary"
                    aria-label="Add match to calendar"
                    onClick={() => setShowCalMenu(v => !v)}
                >
                    <MdCalendarMonth className="btn__icon" aria-hidden="true" />
                    Add to Calendar
                    <MdExpandMore className="btn__icon" aria-hidden="true" style={{ marginLeft: 'auto' }} />
                </button>
                {showCalMenu && <CalendarDropdown onClose={() => setShowCalMenu(false)} />}
            </div>
            <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary"
                aria-label="Get directions to BC Place"
            >
                <MdDirections className="btn__icon" aria-hidden="true" />
                Get Directions
            </a>
        </div>
    )

}