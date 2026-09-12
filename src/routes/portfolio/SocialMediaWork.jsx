const socialMediaWork = [
  {
    name: "@oraethalaivanvellore",
    platform: "Instagram",
    url: "https://www.instagram.com/oraethalaivanvellore/",
    description: "Social media page handled as part of company work, including content and page management."
  },
  {
    name: "@arasiyalalapparai",
    platform: "Instagram",
    url: "https://www.instagram.com/arasiyalalapparai/",
    description: "Social media page handled as part of company work, with a focus on campaign content and page activity."
  }
];

export const SocialMediaWork = () => {
  return (
    <section className="social-media-work">
      <div className="portfolio-content">
        <p className="section-kicker">DIGITAL MEDIA</p>
        <h2 className="title-font pink-text">Social Media Work</h2>
        <p className="white-text">
          I handled and managed Instagram pages as part of my company work, supporting content publishing,
          campaign communication and day-to-day page activity.
        </p>
      </div>

      <div className="social-media-grid">
        {socialMediaWork.map((page) => (
          <article className="social-media-card" key={page.name}>
            <div className="social-media-icon">IG</div>
            <div>
              <span className="social-media-platform">{page.platform}</span>
              <h3>{page.name}</h3>
              <p>{page.description}</p>
              <a href={page.url} target="_blank" rel="noopener noreferrer" className="social-media-link">
                View Instagram page →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
