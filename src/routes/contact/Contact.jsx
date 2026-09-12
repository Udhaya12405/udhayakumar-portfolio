import { useEffect } from "react";
import { Footer } from "../../components";
import { ContactForm } from "./ContactForm";
import "./Contact.sass";

export const contactItems = [
  {
    label: "Phone",
    value: "7810043127",
    href: "tel:+917810043127",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 3.5 9.4 3c.7-.2 1.4.2 1.7.9l1 2.4c.2.5.1 1.1-.3 1.5L10.4 9c1 2 2.6 3.6 4.6 4.6l1.2-1.4c.4-.4 1-.5 1.5-.3l2.4 1c.7.3 1.1 1 .9 1.7l-.5 2.2c-.2.8-1 1.4-1.8 1.3C11.2 17.2 6.8 12.8 5.9 5.3c-.1-.8.5-1.6 1.3-1.8Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
    ),
  },
  {
    label: "Email",
    value: "udhay12405@gmail.com",
    href: "mailto:udhay12405@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" /><path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
    ),
  },
  {
    label: "Instagram",
    value: "its_udhaya_.official",
    href: "https://www.instagram.com/its_udhaya_.official/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="1.7" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.7" /><circle cx="17.4" cy="6.7" r="1" fill="currentColor" /></svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/Udhaya12405",
    href: "https://github.com/Udhaya12405",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8a9.2 9.2 0 0 0-2.9 17.9c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.7.3-1.1.5-1.3-2.2-.3-4.5-1.1-4.5-4.8 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.7 9.7 0 0 1 5.1 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.7-2.3 4.5-4.5 4.8.3.3.5.8.5 1.6v2.4c0 .3.2.6.7.5A9.2 9.2 0 0 0 12 2.8Z" fill="currentColor" /></svg>
    ),
  },
];

export const Contact = () => {
  useEffect(() => {
    document.title = "Contact | Udhaya Kumar R";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="contact">
      <h2 className="page-title pink-text">Contact Me</h2>
      <p className="white-text">
        If you are interested in hiring me or working together, feel free to reach out. I am open to opportunities in
        digital media, social media marketing, web development and software development.
      </p>

      <section className="contact-details" aria-label="Contact details">
        {contactItems.map((item) => (
          <a key={item.label} className="contact-detail-card" href={item.href} target={item.label === "Phone" || item.label === "Email" ? undefined : "_blank"} rel="noopener noreferrer">
            <span className="contact-detail-icon">{item.icon}</span>
            <span className="contact-detail-copy">
              <span className="contact-detail-label">{item.label}</span>
              <span className="contact-detail-value">{item.value}</span>
            </span>
          </a>
        ))}
      </section>

      <ContactForm />
      <Footer />
    </main>
  );
};
