import './Stack.sass';

const stack = [
  ['Social Media Marketing', '/skills/social-media.svg'],
  ['SEO', '/skills/seo.svg'],
  ['Google Analytics', '/skills/analytics.svg'],
  ['Meta Ads', '/skills/meta.svg'],
  ['Canva', '/skills/canva.svg'],
  ['Java', '/skills/java.svg'],
  ['HTML & CSS', '/skills/css.svg'],
  ['MySQL', '/skills/mysql.svg'],
  ['JDBC', '/skills/jdbc.svg'],
];

export const Stack = () => {
  return (
    <section className="skills-section">
      <h3 className="title-font theme-heading">Key Skills</h3>

      <p className="theme-muted skills-intro">
        Digital marketing and web development skills relevant to my experience.
      </p>

      <div className="skills-grid" aria-label="Key skills">
        {stack.map(([name, icon]) => (
          <div className="skill-card" key={name} title={name}>
            <img src={icon} alt={name} />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};