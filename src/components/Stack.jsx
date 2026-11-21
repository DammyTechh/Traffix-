import FloatingRig from './FloatingRig';
import { IconBoard, IconSignal, IconCamera, IconRadar, IconSolar, IconDashboard } from './Icons';
import rig from '../assets/rig-side.webp';
import './Stack.css';

const PARTS = [
  { Icon: IconBoard, name: 'Raspberry Pi 5', role: 'Edge node. Runs detection and answers the controller over serial.' },
  { Icon: IconSignal, name: 'ESP32 controller', role: 'Holds the state machine, the timings and the fail-safe logic.' },
  { Icon: IconCamera, name: 'Thermal camera', role: 'Vehicle detection that does not depend on ambient light.' },
  { Icon: IconRadar, name: 'Radar sensor', role: 'A second, independent read on presence and movement.' },
  { Icon: IconSolar, name: 'Solar and battery', role: 'Off-grid operation, with the battery carrying the dark hours.' },
  { Icon: IconDashboard, name: 'Web dashboard', role: 'Junction status, battery level, signal state and system status.' },
];

export default function Stack() {
  return (
    <section className="section stack" id="stack">
      <div className="shell">
        <header className="stack__head">
          <div>
            <p className="label" data-reveal>
              The stack
            </p>
            <h2 className="stack__title" data-reveal style={{ '--d': '60ms' }}>
              Everything lives
              <br />
              at the pole.
            </h2>
          </div>
          <p className="lead stack__lead" data-reveal style={{ '--d': '130ms' }}>
            No cloud round trip in the control loop. Detection, fusion and the
            signal decision all happen on the edge node, and the dashboard is
            there to watch it rather than to run it.
          </p>
        </header>

        <div className="stack__body">
          <ul className="parts">
            {PARTS.map((p, i) => (
              <li key={p.name} data-reveal style={{ '--d': `${i * 60}ms` }}>
                <span className="parts__icon"><p.Icon size={22} /></span>
                <div>
                  <h3>{p.name}</h3>
                  <p>{p.role}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="stack__stage" data-reveal style={{ '--d': '120ms' }}>
            <FloatingRig
              src={rig}
              alt="The Traffix rig from the side, showing the sensor arms, signal heads and the enclosure at the base."
              depth={0.7}
              tiltMax={9}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
