import { IconPower, IconCheck, IconCalendar } from './Icons';
import './Operations.css';

const STARTUP = [
  'Power the Raspberry Pi 5 first and wait for it to boot.',
  'Confirm the camera feed is received and the detection program is producing lane counts.',
  'Power the ESP32. The controller enters power-up and sets both lanes red.',
  'The ESP32 sends its first request over serial; the Pi replies with the lane counts.',
  'The ESP32 validates the reply, stores the counts and calculates the green, yellow and all-red times.',
  'The state machine moves to lane 1 green with lane 2 red, starting the first cycle.',
  'Observe the first full cycle and confirm the sequence and timings.',
  'Confirm the web application shows the system as active.',
];

const SHUTDOWN = [
  'Notify the supervisor and arrange manual control if the junction is live.',
  'Allow the current cycle to reach a both-red phase where possible.',
  'Power down the ESP32.',
  'Shut the Raspberry Pi 5 down through its operating system before removing power.',
  'Switch off the supply and secure the enclosure.',
];

const WATCH = [
  'Vehicle detection through the thermal camera and radar',
  'Signal state on the dashboard',
  'Battery level',
  'System status, normal or fault',
  'Dashboard telemetry still arriving',
  'Traffic logs, phase history and alerts',
];

const SCHEDULE = [
  ['Thermal camera', 'Verify sensor detection accuracy', 'Weekly'],
  ['Radar sensor', 'Verify vehicle detection and data collection', 'Weekly'],
  ['Signal controller', 'Validate signal switching logic', 'Weekly'],
  ['Solar charging', 'Validate the recharge cycle', 'Weekly'],
  ['Battery system', 'Discharge testing under full load', 'Monthly'],
  ['System performance', 'Uptime and dashboard data consistency', 'Monthly'],
];

export default function Operations() {
  return (
    <section className="section ops" id="operations">
      <div className="shell">
        <header className="ops__head">
          <div>
            <p className="label" data-reveal>
              Operations
            </p>
            <h2 className="ops__title" data-reveal style={{ '--d': '60ms' }}>
              Pi first.
              <br />
              Controller second.
            </h2>
          </div>
          <p className="lead ops__lead" data-reveal style={{ '--d': '130ms' }}>
            The order matters. The controller asks for counts the moment it
            wakes, so the detection side has to be up and answering before it
            is given power.
          </p>
        </header>

        <div className="ops__body">
          <article className="proc" data-reveal>
            <span className="proc__icon proc__icon--up"><IconPower size={22} /></span>
            <h3>Bring-up</h3>
            <ol>
              {STARTUP.map((s, i) => (
                <li key={i}><span className="proc__n">{i + 1}</span>{s}</li>
              ))}
            </ol>
          </article>

          <div className="ops__col">
            <article className="proc" data-reveal style={{ '--d': '90ms' }}>
              <span className="proc__icon proc__icon--down"><IconPower size={22} /></span>
              <h3>Shutdown</h3>
              <ol>
                {SHUTDOWN.map((s, i) => (
                  <li key={i}><span className="proc__n">{i + 1}</span>{s}</li>
                ))}
              </ol>
            </article>

            <article className="watch" data-reveal style={{ '--d': '150ms' }}>
              <span className="proc__icon proc__icon--watch"><IconCheck size={22} /></span>
              <h3>Watched daily</h3>
              <ul>
                {WATCH.map((w) => <li key={w}>{w}</li>)}
              </ul>
            </article>
          </div>
        </div>

        <div className="schedule" data-reveal>
          <p className="label label--mute schedule__kicker">
            <IconCalendar size={16} />
            Maintenance schedule
          </p>
          <table>
            <thead>
              <tr><th>Item</th><th>Check</th><th>Every</th></tr>
            </thead>
            <tbody>
              {SCHEDULE.map(([item, check, freq]) => (
                <tr key={item}>
                  <td data-head="Item">{item}</td>
                  <td data-head="Check">{check}</td>
                  <td data-head="Every"><span className={`freq freq--${freq.toLowerCase()}`}>{freq}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
