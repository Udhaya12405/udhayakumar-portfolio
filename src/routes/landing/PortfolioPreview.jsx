import { ProjectsPreview } from "./ProjectsPreview";

export const PortfolioPreview = () => {
  return (
    <div className="landing__portfolio">
      <section className="portfolio-content">
        <h2 className="title-font pink-text">Portfolio</h2>
        <p className="white-text">
          Here are some of my academic and development projects covering AI, machine learning, speech processing and
          socioeconomic data analysis. Explore the source code and project details on my{" "}
          <span>
            <a
              href="https://github.com/Udhaya12405"
              className="pink-text"
              target="_blank"
              rel="noopener noreferrer">
              GitHub
            </a>
          </span>
          .
        </p>
      </section>
      <ProjectsPreview />
    </div>
  );
};
