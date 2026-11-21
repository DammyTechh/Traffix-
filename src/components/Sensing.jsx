import { IconCamera, IconRadar, IconFusion, IconChip, IconQueue } from './Icons';
import './Sensing.css';

const CHAIN = [
  {
    n: '1',
    Icon: IconCamera,
    title: 'Thermal camera',
    body: 'Sees vehicles by heat rather than light, so the count does not fall apart at night or in glare.',
  },
  {
    n: '2',
    Icon: IconRadar,
    title: 'Radar',
    body: 'Reads presence and movement independently of the camera. Two sensors that fail in different ways.',
  },
  {
    n: '3',
    Icon: IconFusion,
    title: 'Sensor fusion',
    body: 'One algorithm reconciles both feeds into a single reading of presence, vehicle count and queue length.',
  },
  {
    n: '4',
    Icon: IconChip,
    title: 'AI decision engine',
    body: 'Takes that reading and chooses the next signal phase, inside the current cycle rather than the next one.',
  },
];

const OUTPUTS = [
  'Vehicle presence',
  'Vehicle counts',
  'Queue lengths',
];

export default function Sensing() {
  return (
    <section className="section sensing" id="sensing">
      <div className="shell">
        <header className="sensing__head">
          <div>
            <p className="label" data-reveal>
              How it sees
            </p>
            <h2 className="sensing__title" data-reveal style={{ '--d': '60ms' }}>
              Two sensors,
              <br />
              one reading.
            </h2>
          </div>
          <p className="lead sensing__lead" data-reveal style={{ '--d': '130ms' }}>
            A camera alone struggles in the dark. A radar alone cannot tell you
            much about a queue. Fusing them is less about adding accuracy than
            about removing the single point of failure.
          </p>
        </header>

        <ol className="chain">
          {CHAIN.map((c, i) => (
            <li key={c.title} data-reveal style={{ '--d': `${i * 80}ms` }}>
              <span className="chain__rail" aria-hidden="true" />
              <span className="chain__icon"><c.Icon size={24} /></span>
              <h3><span className="chain__n">{c.n}</span>{c.title}</h3>
              <p>{c.body}</p>
            </li>
          ))}
        </ol>

        <div className="outputs" data-reveal>
          <span className="outputs__icon"><IconQueue size={22} /></span>
          <p className="label label--mute outputs__kicker">What comes out</p>
          <ul>
            {OUTPUTS.map((o) => <li key={o}>{o}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
