import logo from '../assets/logo.webp';
import innov8 from '../assets/innov8.webp';
import tetfund from '../assets/tetfund.webp';
import './Closing.css';

const FIGURES = [
  { n: '2', label: 'Approach lanes', sub: 'detection validated across both' },
  { n: '2', label: 'Sensors fused', sub: 'thermal camera and radar' },
  { n: '1', label: 'Cycle', sub: 'timing adjusts inside it, not after' },
];

export default function Closing() {
  return (
    <section className="section closing" id="closing" data-theme="dark">
      <div className="shell closing__shell">
        <div className="closing__copy">
          <p className="label closing__label" data-reveal>
            Where it stands
          </p>
          <h2 className="closing__title" data-reveal style={{ '--d': '60ms' }}>
            Built to be
            <br />
            measured.
          </h2>

          <ul className="figures">
            {FIGURES.map((f, i) => (
              <li key={f.label} data-reveal style={{ '--d': `${120 + i * 80}ms` }}>
                <span className="figures__n">{f.n}</span>
                <span className="figures__label">{f.label}</span>
                <span className="figures__sub">{f.sub}</span>
              </li>
            ))}
          </ul>

          <div className="supporters" data-reveal style={{ '--d': '260ms' }}>
            <p className="label closing__label">Supported by</p>
            <div className="supporters__row">
              <span className="plate"><img className="supporters__innov8" src={innov8} alt="Innov8 Hub" /></span>
              <span className="plate"><img className="supporters__tet" src={tetfund} alt="TETFund, Tertiary Education Trust Fund" /></span>
            </div>
          </div>
        </div>

        <div className="closing__badge" data-reveal style={{ '--d': '100ms' }}>
          <img src={logo} alt="Traffix traffic module badge" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
