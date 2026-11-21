import FloatingRig from './FloatingRig';
import { IconArrowDown } from './Icons';
import rig from '../assets/rig-front.webp';
import innov8 from '../assets/innov8.webp';
import tetfund from '../assets/tetfund.webp';
import './Hero.css';

const READOUT = [
  ['Inputs', 'Thermal camera + radar'],
  ['Edge node', 'Raspberry Pi 5'],
  ['Power', 'Solar with battery backup'],
];

export default function Hero() {
  return (
    <section className="hero" id="top" data-theme="dark">
      <div className="hero__grid" aria-hidden="true" />

      <div className="shell hero__shell">
        <div className="hero__copy">
          <h1 className="hero__title" data-reveal>
            <span className="line">The junction</span>
            <span className="line">counts the cars</span>
            <span className="line hero__title-accent">before it decides.</span>
          </h1>

          <p className="lead hero__lead" data-reveal style={{ '--d': '80ms' }}>
            Traffix reads an intersection with a thermal camera and a radar,
            fuses the two into one picture of presence, count and queue length,
            and hands that to an AI decision engine that sets the next signal
            phase. All of it on an edge node at the pole, running off solar.
          </p>

          <dl className="readout" data-reveal style={{ '--d': '160ms' }}>
            {READOUT.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero__stage" data-reveal style={{ '--d': '80ms' }}>
          <FloatingRig
            src={rig}
            alt="The Traffix rig: a four-arm mast carrying cameras, radar units and signal heads, with a solar panel above and a powered enclosure on the base."
            className="fr--navy"
            depth={1}
            tiltMax={10}
            priority
          />
        </div>
      </div>

      <div className="shell hero__foot">
        <div className="hero__support" data-reveal>
          <p className="label label--mute">Supported by</p>
          <div className="hero__logos">
            <span className="plate"><img className="hero__logo hero__logo--innov8" src={innov8} alt="Innov8 Hub" /></span>
            <span className="plate"><img className="hero__logo hero__logo--tet" src={tetfund} alt="TETFund, Tertiary Education Trust Fund" /></span>
          </div>
        </div>
        <a className="hero__scroll" href="#sensing" aria-label="Scroll to the next section">
          <IconArrowDown size={16} />
        </a>
      </div>
    </section>
  );
}
