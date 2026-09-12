const socialMediaPages = [
  {
    name: "@oraethalaivanvellore",
    url: "https://www.instagram.com/oraethalaivanvellore/",
    description: "Instagram page handled as part of company social media work."
  },
  {
    name: "@arasiyalalapparai",
    url: "https://www.instagram.com/arasiyalalapparai/",
    description: "Instagram page handled as part of company campaign and content work."
  }
];

export const SocialMediaPreview = () => {
  return (
    <section className="landing__social-media">
      <div className="landing-section-heading">
        <div>
          <p className="section-kicker">SOCIAL MEDIA WORK</p>
          <h2 className="title-font">Instagram Pages</h2>
        </div>
        <a href="/portfolio" className="section-link">View portfolio →</a>
      </div>

      <div className="social-preview-grid">
        {socialMediaPages.map((page) => (
          <article className="social-preview-card" key={page.name}>
            <div className="social-preview-icon">IG</div>
            <div className="social-preview-content">
              <span>Instagram</span>
              <h3>{page.name}</h3>
              <p>{page.description}</p>
              <a href={page.url} target="_blank" rel="noopener noreferrer">
                Open Instagram page →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
