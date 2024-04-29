import { NavLink } from "react-router-dom";

import "./bottomNav.scss";

import { bottomNavItems } from "../../constants";

const BottomNav = () => {
  return (
    <>
      <ul className="footer__nav" aria-label="Footer Navigation">
        {bottomNavItems.map((item, index) => (
          <li key={index} className="footer__nav-item">
            <NavLink
              to={item.to}
              className="footer__link"
              style={({ isActive }) => ({
                color: isActive ? "var(--clr-offwhite)" : "",
              })}
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BottomNav;
