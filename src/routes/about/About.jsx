import "./About.sass";
import { useEffect } from "react";
import { Footer } from "../../components/index.js";
import { Stack } from "./Stack";
import { Education } from "./Education";
import { DownloadResume } from "./DownloadResume";
import { ScrollButton } from "../../components/ScrollButton.jsx";
import { AboutMe } from "./AboutMe";

export const About = () => {
  useEffect(() => {
    document.title = "About | Udhaya Kumar R";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="about">
      <AboutMe />
      <Stack />
      <DownloadResume />
      <Education />

      <section className="about__languages">
        <h2 className="page-title pink-text">Languages</h2>
        <section>
          <h3>Tamil</h3>
          <p>Native</p>
          <h3>English</h3>
          <p>Professional Fluency</p>
        </section>
      </section>

      <ScrollButton />
      <Footer />
    </main>
  );
};
