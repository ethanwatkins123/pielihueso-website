import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";

import NavigationLink from "./NavigationLink";

import { mobileNavItems, desktopNavItems } from "../../constants";
import { menuSlide, headerNavLinks } from "../../utils/animations";

import "./mainNav.scss";

const BurgerIcon = ({ isActive }) => (
  <div className={`burger ${isActive ? "burgerActive" : ""}`}>
    {["top", "middle", "bottom"].map((line, index) => (
      <svg
        key={index}
        className={`${line}-line`}
        width="25"
        height="3"
        viewBox="0 0 25 3"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.875 1.64999H24"
          stroke="#1D1D1B"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ))}
  </div>
);

const DesktopMenu = () => {
  const { t } = useTranslation("misc");

  return (
    <nav className="menu" aria-label="Main Navigation">
      <ul className="nav">
        {desktopNavItems.map((item, index) => (
          <motion.li
            key={index}
            custom={desktopNavItems.length - 1 - index}
            variants={headerNavLinks}
            animate="enter"
            initial="initial"
          >
            <NavLink
              className="link"
              to={item.to}
              style={({ isActive }) => ({
                color: isActive ? "var(--clr-orange)" : "",
              })}
            >
              {t(item.title)}
            </NavLink>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

const MainNav = ({ toggleMainVisibility }) => {
  const [isActive, setIsActive] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 700 });
  const { t } = useTranslation("misc");

  return (
    <>
      <button
        className="button"
        onClick={() => {
          setIsActive(!isActive);
          toggleMainVisibility();
        }}
        aria-expanded={isActive}
        aria-label={isActive ? "Close Navigation" : "Open Navigation"}
      >
        <BurgerIcon isActive={isActive} />
      </button>
      <AnimatePresence>
        {isActive && (
          <motion.nav
            className="menu"
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            aria-label="Main Navigation"
          >
            <ul className="nav">
              {mobileNavItems.map((item, index) => (
                <NavigationLink key={index} data={{ ...item, index }} />
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
      {isDesktop && !isActive && <DesktopMenu />}
    </>
  );
};

export default MainNav;
