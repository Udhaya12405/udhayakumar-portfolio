import './Stack.sass';

import SocialMediaIcon from "../../assets/images/skills/social-media.svg";
import SeoIcon from "../../assets/images/skills/seo.svg";
import AnalyticsIcon from "../../assets/images/skills/analytics.svg";
import MetaIcon from "../../assets/images/skills/meta.svg";
import CanvaIcon from "../../assets/images/skills/canva.svg";
import JavaIcon from "../../assets/images/skills/java.svg";
import HtmlCssIcon from "../../assets/images/skills/css.svg";
import MysqlIcon from "../../assets/images/skills/mysql.svg";
import JdbcIcon from "../../assets/images/skills/jdbc.svg";

const skills = [
  {
    name: "Social Media Marketing",
    icon: SocialMediaIcon,
  },
  {
    name: "SEO",
    icon: SeoIcon,
  },
  {
    name: "Google Analytics",
    icon: AnalyticsIcon,
  },
  {
    name: "Meta Ads",
    icon: MetaIcon,
  },
  {
    name: "Canva",
    icon: CanvaIcon,
  },
  {
    name: "Java",
    icon: JavaIcon,
  },
  {
    name: "HTML & CSS",
    icon: HtmlCssIcon,
  },
  {
    name: "MySQL",
    icon: MysqlIcon,
  },
  {
    name: "JDBC",
    icon: JdbcIcon,
  },
];

export const Stack = () => {
  return (
    <section className="skills-section">
      <h3 className="title-font theme-heading">Key Skills</h3>
      <p className="theme-muted skills-intro">Digital marketing and web development skills relevant to my experience.</p>
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
