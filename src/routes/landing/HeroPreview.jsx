import { Link } from "react-router-dom";
import ProfilePhoto from "../../assets/images/udhaya-profile.png";
import { DownloadResume } from "../about/DownloadResume";

export const HeroPreview = () => {
  return (
    <section className="landing__hero">
      <div className="hero-profile">
        <img src={ProfilePhoto} alt="Udhaya Kumar R" />
      </div>
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm</p>
        <h1 className="hero-font">
          <em className="pink-text">Udhaya Kumar R</em>
        </h1>
        <h2 className="hero-role">Digital Media &amp; Marketing <span>|</span> Java Full Stack Developer</h2>
        <p className="gray-text hero-summary">
          Information Technology graduate with hands-on experience in digital media, social media management, Java full-stack development and data-driven projects.
        </p>
        <div className="hero-actions">
          <Link className="pink-text hero-cta" to="/portfolio">
            Check my work
          </Link>
          <DownloadResume />
        </div>
      </div>
    </section>
  );
};
