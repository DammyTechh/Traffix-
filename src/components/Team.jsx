import team from '../assets/team.webp';
import './Team.css';

const PLATE = [
  ['Project', 'TRAFFIX'],
  ['Programme', 'TETFAIR 2026'],
  ['Team', '3 members'],
  ['Host', 'Innov8 Hub'],
];

export default function Team() {
  return (
    <section className="section team" id="team">
      <div className="shell">
        <header className="team__head">
          <p className="label" data-reveal>Team</p>
          <h2 className="team__title" data-reveal style={{ '--d': '60ms' }}>
            The team behind TRAFFIX.
          </h2>
        </header>

        {/* set as an equipment data plate rather than a portrait block */}
        <div className="team__plate" data-reveal style={{ '--d': '110ms' }}>
          <figure className="team__figure">
            <img
              src={team}
              alt="The three members of the TRAFFIX team, in TETFAIR shirts."
              loading="lazy"
            />
          </figure>

          <div className="team__spec">
            <p className="team__note">
              Three people built the sensing rig, trained the detection model
              and wrote the signal control logic, including the rule that no
              two lanes ever show green together.
            </p>
            <dl>
              {PLATE.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
