import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { menuSlide } from "./menuSlide";
import Link from "./Link";

import "./mainNav.scss";

const mobileNavItems = [
  {
    title: "Vinos",
    href: "/",
  },
  {
    title: "Nuestra historia",
    // check this
    href: "/Nuestra historia",
  },
  {
    title: "La finca",
    // check this
    href: "/La finca",
  },
  {
    title: "Equipo",
    href: "/Equipo",
  },
  {
    title: "Donde cómprar",
    // check this
    href: "/Donde cómprar",
  },
  {
    title: "FAQ",
    href: "/FAQ",
  },
  {
    title: "Contacto",
    href: "/Contacto",
  },
];

const desktopNavItems = [
  {
    title: "Vinos",
    href: "/",
  },
  {
    title: "Nuestra historia",
    // check this
    href: "/Nuestra historia",
  },
  {
    title: "La finca",
    // check this
    href: "/La finca",
  },
  {
    title: "Equipo",
    href: "/Equipo",
  },
];

import "./mainNav.scss";

const MainNav = () => {
  const [isActive, setIsActive] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 700 });

  return (
    <>
      <button
        className="button"
        onClick={() => setIsActive(!isActive)}
        aria-expanded={isActive}
        aria-label={isActive ? "Close Navigation" : "Open Navigation"}
      >
        <div className={`burger ${isActive ? "burgerActive" : ""}`}>
          <svg
            className="top-line"
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
          <svg
            className="middle-line"
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
          <svg
            className="bottom-line"
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
        </div>
      </button>
      {/* !!!! */}
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
            {/* <div className="body"> */}
            <ul className="nav">
              {mobileNavItems.map((item, index) => (
                <Link
                  className="link"
                  key={index}
                  data={{ ...item, index }}
                ></Link>
              ))}
            </ul>
            {/* </div> */}
          </motion.nav>
        )}
      </AnimatePresence>
      {isDesktop && !isActive && (
        <nav className="menu" aria-label="Main Navigation">
          <div className="body">
            <ul className="nav">
              {desktopNavItems.map((item, index) => (
                <li key={index}>
                  <a className="link" href={item.href}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}{" "}
    </>
  );
};

export default MainNav;
