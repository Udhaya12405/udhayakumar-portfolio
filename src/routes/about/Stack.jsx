import './Stack.sass';

const stack = [
  ['Social Media Marketing', 'social-media.svg'],
  ['SEO', 'seo.svg'],
  ['Google Analytics', 'analytics.svg'],
  ['Meta Ads', 'meta.svg'],
  ['Canva', 'canva.svg'],
  ['Java', 'java.svg'],
  ['HTML & CSS', 'css.svg'],
  ['MySQL', 'mysql.svg'],
  ['JDBC', 'jdbc.svg'],
];

export const Stack = () => {
  return (
    <section className="skills-section">
      <h3 className="title-font theme-heading">Key Skills</h3>
      <p className="theme-muted skills-intro">Digital marketing and web development skills relevant to my experience.</p>
      <div className="skills-grid" aria-label="Key skills">
        {stack.map(([name, icon]) => (
          <div className="skill-card" key={name} title={name}>
            <img src={`/src/assets/images/skills/${icon}`} alt={name} />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
