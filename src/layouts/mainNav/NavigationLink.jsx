import { motion } from "framer-motion";
import { slide } from "./menuSlide";
import { NavLink } from "react-router-dom";

const NavigationLink = ({ data }) => {
  const { pathname } = location;
  return (
    <motion.li
      className="list-item"
      custom={data.index}
      variants={slide}
      animate="enter"
      initial="initial"
      exit="exit"
    >
      <NavLink
        className={`link ${window.innerWidth <= 700 ? "button-border" : ""}`}
        style={({ isActive }) => ({
          color:
            isActive &&
            (pathname === "/donde-comprar" ||
              pathname === "/contacto" ||
              pathname === "/faq")
              ? "var(--clr-offwhite"
              : isActive
              ? "var(--clr-orange"
              : "",
        })}
        to={data.to}
      >
        {data.title}
      </NavLink>
    </motion.li>
  );
};

export default NavigationLink;
