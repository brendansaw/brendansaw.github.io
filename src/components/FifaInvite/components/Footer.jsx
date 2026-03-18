import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__logo" aria-hidden="true">⚽️</div>
            <p className="footer__text">
                FIFA World Cup 2026 - BC Place - Vancouver, Canada<br />
                <a
                    href="https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    fifa.com
                </a>
                {' - '}
                <a
                    href="https://www.bcplace.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    bcplace.com
                </a>
            </p>
        </footer>
    )
}