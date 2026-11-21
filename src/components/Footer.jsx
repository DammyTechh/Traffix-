import logo from '../assets/logo.webp';
import './Footer.css';

const COLS = [
  { title: 'The system', links: [['Sensing', '#sensing'], ['Cycle', '#cycle'], ['Stack', '#stack']] },
  { title: 'In practice', links: [['Operations', '#operations'], ['Safety', '#safety'], ['Where it stands', '#closing']] },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__top">
          <div className="footer__brand">
            <img src={logo} alt="" />
            <div>
              <p className="footer__name">Traffix</p>
              <p>
                A camera-powered, AI-driven adaptive traffic control system for
                urban intersections, built on sensor fusion and an edge node at
                the pole.
              </p>
            </div>
          </div>

          <nav className="footer__nav" aria-label="Footer">
            {COLS.map((c) => (
              <div key={c.title}>
                <p className="label label--mute">{c.title}</p>
                <ul>
                  {c.links.map(([label, href]) => (
                    <li key={label}><a href={href}>{label}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Traffix. All rights reserved.</p>
          <p className="footer__credit">Developed under TETFAIR 2026</p>
        </div>
      </div>
    </footer>
  );
}
