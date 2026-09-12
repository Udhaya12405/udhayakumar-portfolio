import { useEffect } from "react";
import { Experience } from "../about/Experience";
import { Footer } from "../../components";
import { ScrollButton } from "../../components/ScrollButton";
import "../about/About.sass";

export const ExperiencePage = () => {
  useEffect(() => {
    document.title = "Experience | Udhaya Kumar R";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="about experience-page">
      <Experience />
      <ScrollButton />
      <Footer />
    </main>
  );
};
