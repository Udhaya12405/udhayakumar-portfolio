import { NavLink } from "react-router-dom";

export const NavigationLogo = ({ closeMenu }) => {
  return (
    <NavLink to="/" aria-label="Go to homepage" className="navigation__brand" onClick={closeMenu}>
      <span className="navigation__brand-mark">UKR</span>
      <span className="navigation__brand-name">Udhaya Kumar R</span>
      <span className="navigation__brand-role">Digital Media • Web Development</span>
    </NavLink>
  );
};
