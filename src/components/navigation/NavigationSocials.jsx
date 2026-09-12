import Github from "../../assets/images/socials/github-pink.svg";

export const NavigationSocials = () => {
  return (
    <ul className="navigation__socials">
      <li>
        <a
          aria-label="Visit GitHub"
          href="https://github.com/Udhaya12405"
          target="_blank"
          rel="noopener noreferrer">
          <img src={Github} alt="GitHub" />
        </a>
      </li>
    </ul>
  );
};
