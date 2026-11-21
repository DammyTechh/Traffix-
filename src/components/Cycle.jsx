import SignalCycle from './SignalCycle';
import './Cycle.css';

const RULES = [
  ['Both lanes green', 'Never. If it happens, power comes off immediately.'],
  ['All red', 'A fixed gap between every phase change.'],
  ['Green time', 'Recomputed from the lane counts each cycle.'],
  ['Power-up', 'Both lanes red until the first valid count arrives.'],
];

export default function Cycle() {
  return (
    <section className="section cycle" id="cycle" data-theme="dark">
      <div className="shell cycle__shell">
        <div className="cycle__copy">
          <p className="label cycle__label" data-reveal>
            The cycle
          </p>
          <h2 className="cycle__title" data-reveal style={{ '--d': '60ms' }}>
            The state machine,
            <br />
            running.
          </h2>
          <p className="lead cycle__lead" data-reveal style={{ '--d': '130ms' }}>
            This is the real sequence the controller walks, with green times
            derived from the counts the way the device derives them. Watch the
            green interval change as the numbers do.
          </p>

          <dl className="rules" data-reveal style={{ '--d': '200ms' }}>
            {RULES.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="cycle__stage" data-reveal style={{ '--d': '100ms' }}>
          <SignalCycle />
        </div>
      </div>
    </section>
  );
}
