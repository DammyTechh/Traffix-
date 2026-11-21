import { useEffect, useRef, useState } from 'react';
import './SignalCycle.css';

/**
 * The documented state machine, running.
 *
 * POWER-UP holds both lanes red. From there the controller walks
 * lane 1 green, lane 1 yellow, all red, lane 2 green, lane 2 yellow, all red,
 * and repeats. Green time is recalculated from the lane counts at the top of
 * every cycle, which is the whole point of the thing.
 *
 * Shown at 3x so a full cycle is watchable; the second values on screen are
 * the real computed ones.
 */

const SPEED = 3;
const YELLOW = 3;
const ALL_RED = 2;

const greenFor = (count) => Math.min(30, Math.max(10, Math.round(9 + count * 1.1)));
const roll = () => 4 + Math.floor(Math.random() * 18);

function buildCycle(c1, c2) {
  return [
    { id: 'l1g', l1: 'green', l2: 'red', name: 'Lane 1 green', dur: greenFor(c1) },
    { id: 'l1y', l1: 'amber', l2: 'red', name: 'Lane 1 yellow', dur: YELLOW },
    { id: 'ar1', l1: 'red', l2: 'red', name: 'All red', dur: ALL_RED },
    { id: 'l2g', l1: 'red', l2: 'green', name: 'Lane 2 green', dur: greenFor(c2) },
    { id: 'l2y', l1: 'red', l2: 'amber', name: 'Lane 2 yellow', dur: YELLOW },
    { id: 'ar2', l1: 'red', l2: 'red', name: 'All red', dur: ALL_RED },
  ];
}

export default function SignalCycle() {
  const [counts, setCounts] = useState({ c1: 11, c2: 6 });
  const [step, setStep] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(true);

  const cycle = useRef(buildCycle(counts.c1, counts.c2));
  const raf = useRef(0);
  const mark = useRef(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setRunning(false);
      return undefined;
    }

    mark.current = performance.now();

    const tick = (now) => {
      const phase = cycle.current[step];
      const dt = ((now - mark.current) / 1000) * SPEED;

      if (dt >= phase.dur) {
        mark.current = now;
        const next = (step + 1) % cycle.current.length;
        if (next === 0) {
          // top of a new cycle: fresh counts, fresh green times
          const c1 = roll();
          const c2 = roll();
          cycle.current = buildCycle(c1, c2);
          setCounts({ c1, c2 });
        }
        setStep(next);
        setElapsed(0);
      } else {
        setElapsed(dt);
      }
      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [step]);

  const phase = cycle.current[step];
  const left = Math.max(0, Math.ceil(phase.dur - elapsed));
  const pct = Math.min(100, (elapsed / phase.dur) * 100);

  return (
    <div className="sc">
      <div className="sc__head">
        <span className="sc__state">
          <span className={`sc__pip sc__pip--${running ? 'live' : 'held'}`} aria-hidden="true" />
          {running ? 'Running' : 'Held'}
        </span>
        <span className="sc__speed mono">{running ? `${SPEED}x speed` : 'motion reduced'}</span>
      </div>

      <div className="sc__lanes">
        {[
          { n: 1, state: phase.l1, count: counts.c1 },
          { n: 2, state: phase.l2, count: counts.c2 },
        ].map((lane) => (
          <div className={`sc__lane is-${lane.state}`} key={lane.n}>
            <div className="sc__head-unit" aria-hidden="true">
              {['red', 'amber', 'green'].map((lamp) => (
                <span key={lamp} className={`sc__lamp sc__lamp--${lamp} ${lane.state === lamp ? 'is-on' : ''}`} />
              ))}
            </div>
            <p className="sc__lane-name mono">Lane {lane.n}</p>
            <p className="sc__lane-state">{lane.state}</p>
            <p className="sc__lane-count">
              <span>{lane.count}</span> vehicles counted
            </p>
          </div>
        ))}
      </div>

      <div className="sc__bar" role="presentation">
        <span className={`sc__fill is-${phase.l1 === 'red' && phase.l2 === 'red' ? 'allred' : 'active'}`} style={{ width: `${pct}%` }} />
      </div>

      <div className="sc__foot">
        <p className="sc__phase">{phase.name}</p>
        <p className="sc__left mono">{left}s remaining</p>
      </div>

      <p className="sc__note">
        Green time is recalculated from the lane counts at the top of every
        cycle. The all-red gap between phases is fixed, and the two lanes can
        never show green together.
      </p>
    </div>
  );
}
