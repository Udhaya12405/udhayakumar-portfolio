import { educationData } from "../../data/experience";

export const Education = () => {
  return (
    <section className="about__education">
      <h2 className="page-title pink-text">Education</h2>
      {educationData.map((info, index) => (
        <div key={index}>
          <h3>{info.name}</h3>
          <p>{info.status}</p>
          <p>{info.year}</p>
        </div>
      ))}
    </section>
  );
};
