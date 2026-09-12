import { Projects } from "./Projects";
import { Footer } from "../../components/footer/Footer";
import { ScrollButton } from "../../components/ScrollButton";
import { useEffect } from "react";
import "./Portfolio.sass";
import { SocialMediaWork } from "./SocialMediaWork";

export const Portfolio = () => {
  useEffect(() => {
    document.title = "Portfolio | Udhaya Kumar R";
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="portfolio">
      <section className="portfolio-content">
        <h2 className="page-title pink-text">Portfolio</h2>
        <p className="white-text">
          I've invested substantial time in a variety of projects, thoroughly enjoying the process of building things
          from the ground up. Here are a few of my cherished endeavors that encapsulate my expertise. I've tackled
          numerous minor projects from diverse courses and challenges, all aimed at mastering the fundamentals. Feel
          free to explore these on my{" "}
          <span>
            <a
              href="https://github.com/Udhaya12405"
              className="pink-text"
              target="_blank"
              rel="noopener noreferrer">
              GitHub
            </a>
          </span>
        </p>
      </section>
      <Projects />
      <SocialMediaWork />
      <ScrollButton />
      <Footer />
    </main>
  );
};
