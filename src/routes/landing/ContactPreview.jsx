import { ContactForm } from "../contact/ContactForm";
import { contactItems } from "../contact/Contact";

export const ContactPreview = () => {
  return (
    <section className="landing__contact contact" aria-label="Contact Me">
      <h2 className="title-font pink-text">Contact Me</h2>
      <p className="white-text">
        If you are interested in hiring me or working together, feel free to reach out. I am open to opportunities in
        digital media, social media marketing, web development and software development.
      </p>

      <section className="contact-details" aria-label="Contact details">
        {contactItems.map((item) => (
          <a
            key={item.label}
            className="contact-detail-card"
            href={item.href}
            target={item.label === "Phone" || item.label === "Email" ? undefined : "_blank"}
            rel="noopener noreferrer"
          >
            <span className="contact-detail-icon">{item.icon}</span>
            <span className="contact-detail-copy">
              <span className="contact-detail-label">{item.label}</span>
              <span className="contact-detail-value">{item.value}</span>
            </span>
          </a>
        ))}
      </section>

      <ContactForm />
    </section>
  );
};
