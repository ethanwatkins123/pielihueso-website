import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { slide } from "../../utils/animations";

const NavigationLink = ({ data }) => {
  const location = useLocation();
  const isActive = location.pathname === data.to;
  const { t } = useTranslation("misc");

  const getLinkStyle = () => {
    const specialRoutes = ["/donde-comprar", "/contacto", "/faq"];
    if (isActive) {
      if (specialRoutes.includes(location.pathname)) {
        return { color: "var(--clr-offwhite)" };
      }
      return { color: "var(--clr-orange)" };
    }
    return {};
  };

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
        className={`link ${isActive ? "active-link" : ""}`}
        style={getLinkStyle()}
        to={data.to}
      >
        {t(data.title)}
      </NavLink>
    </motion.li>
  );
};

export default NavigationLink;
