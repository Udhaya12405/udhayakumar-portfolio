import { experienceData } from "../../data/experience";
import { Link } from "react-router-dom";

export const ExperiencePreview = () => {
  return (
    <section className="landing__experience">
      <div className="landing-section-heading">
        <div>
          <p className="section-kicker">CAREER</p>
          <h2 className="title-font pink-text">Experience</h2>
        </div>
        <Link className="section-link" to="/experience">View full experience →</Link>
      </div>

      <div className="experience-preview-grid">
        {experienceData.map((info) => (
          <article className="experience-preview-card" key={info.id}>
            <div className="experience-preview-top">
              <span className="experience-preview-date">{info.duration}</span>
              <span className="experience-preview-type">{info.worktype}</span>
            </div>
            <h3>{info.jobtitle}</h3>
            <p className="experience-preview-company">{info.companyname}</p>
            <p className="experience-preview-location">{info.location}</p>
            <ul>
              {info.responsibility.slice(0, 3).map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};
