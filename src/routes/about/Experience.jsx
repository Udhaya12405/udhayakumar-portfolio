import { experienceData } from "../../data/experience";

export const Experience = () => {
  return (
    <section className="about__experience">
      <h2 className="page-title pink-text">Work Experience</h2>
      {experienceData.map((info) => (
        <article className="experience__item" key={info.id}>
          <h3>{info.jobtitle}</h3>
          <div className="experience__company">
            <p>{info.companyname}</p>
            <p>• {info.worktype}</p>
          </div>
          <p>{info.duration}</p>
          <p>{info.location}</p>
          <ol className="experience__responsibilities">
            {info.responsibility.map((data) => (
              <li key={data}>{data}</li>
            ))}
          </ol>
        </article>
      ))}
    </section>
  );
};
