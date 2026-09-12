import { AboutPreview } from "./AboutPreview";
import { HeroPreview } from "./HeroPreview";
import { PortfolioPreview } from "./PortfolioPreview";
import { ExperiencePreview } from "./ExperiencePreview";
import { ContactPreview } from "./ContactPreview";
import { SocialMediaPreview } from "./SocialMediaPreview";
import { Footer } from "../../components";
import { ScrollButton } from "../../components/ScrollButton";
import { useEffect } from "react";
import "./Landing.sass";

export const Landing = () => {
  useEffect(() => {
    document.title = "Udhaya Kumar R | Portfolio";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="landing">
      <HeroPreview />
      <AboutPreview />
      <ExperiencePreview />
      <SocialMediaPreview />
      <PortfolioPreview />
      <ContactPreview />
      <ScrollButton />
      <Footer />
    </main>
  );
};
