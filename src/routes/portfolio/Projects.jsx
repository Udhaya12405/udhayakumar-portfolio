import { useRef } from "react";
import { projectsData } from "../../data/projects";

export const Projects = () => {
  const sliderRef = useRef(null);

  const slide = (direction) => {
    if (!sliderRef.current) return;
    const amount = sliderRef.current.clientWidth;
    sliderRef.current.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <div className="projects-carousel">
      <button type="button" className="projects-carousel__button projects-carousel__button--prev" onClick={() => slide(-1)} aria-label="Previous projects">
        &#8592;
      </button>
      <ul className="projects-grid" ref={sliderRef}>
        {projectsData.map((project) => (
          <li key={project.id} className="projects-grid__project">
            <a href={project.source} target="_blank" rel="noopener noreferrer" className="projects-grid__link">
              <img src={project.img} alt={project.name} className="projects-grid__cover" />
              <div className="projects-grid__content">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
      <button type="button" className="projects-carousel__button projects-carousel__button--next" onClick={() => slide(1)} aria-label="Next projects">
        &#8594;
      </button>
    </div>
  );
};
