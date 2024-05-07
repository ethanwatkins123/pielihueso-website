import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import { bottomNavItems } from "../../constants";
import { footerNavLinks } from "../../utils/animations";
import "./bottomNav.scss";

const BottomNav = () => {
  const { t } = useTranslation("misc");

  return (
    <>
      <ul className="footer__nav" aria-label="Footer Navigation">
        {bottomNavItems.map((item, index) => (
          <motion.li
            key={item.to}
            className="footer__nav-item"
            custom={index}
            variants={footerNavLinks}
            animate="enter"
            initial="initial"
          >
            <NavLink
              to={item.to}
              className="footer__link"
              activeClassName="active"
            >
              {t(item.title)}
            </NavLink>
          </motion.li>
        ))}
      </ul>
    </>
  );
};

export default BottomNav;
