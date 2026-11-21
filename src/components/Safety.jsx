import { IconWarning, IconShield, IconLink, IconBattery } from './Icons';
import './Safety.css';

const VALIDATION = [
  { Icon: IconShield, title: 'Controlled junction only', body: 'Validation runs at a controlled test junction or a simulated intersection, never on live traffic.' },
  { Icon: IconLink, title: 'Integration tested', body: 'Sensor, AI processing and signal controller are tested together, not just one at a time.' },
  { Icon: IconBattery, title: 'Power proven', body: 'Battery discharge, solar recharge and off-grid runtime measured against the targets.' },
];

export default function Safety() {
  return (
    <section className="section safety" id="safety">
      <div className="shell">
        <header className="safety__head">
          <p className="label" data-reveal>
            Safety
          </p>
          <h2 className="safety__title" data-reveal style={{ '--d': '60ms' }}>
            One rule above
            <br />
            all the others.
          </h2>
        </header>

        <div className="alarm" data-reveal style={{ '--d': '100ms' }}>
          <span className="alarm__icon"><IconWarning size={26} /></span>
          <div>
            <p className="alarm__rule">
              Never allow both lanes to show green at the same time. If it
              happens, remove power immediately.
            </p>
            <p className="alarm__body">
              Traffix controls traffic signals, so incorrect switching affects
              road-user safety directly. Validation is carried out only at a
              controlled test junction or a simulated intersection, signal
              decisions are checked against the system&rsquo;s safety
              constraints, and the fail-safe logic is monitored throughout.
              Expected performance targets are not evidence of validated field
              performance.
            </p>
          </div>
        </div>

        <ul className="validation">
          {VALIDATION.map((v, i) => (
            <li key={v.title} data-reveal style={{ '--d': `${i * 80}ms` }}>
              <span className="validation__icon"><v.Icon size={22} /></span>
              <h3>{v.title}</h3>
              <p>{v.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
