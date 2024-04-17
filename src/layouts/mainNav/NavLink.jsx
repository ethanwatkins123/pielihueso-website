import { motion } from "framer-motion";
import { slide } from "./menuSlide";
import { Link } from "react-router-dom";

const NavLink = ({ data }) => {
  return (
    <motion.li
      className="list-item"
      custom={data.index}
      variants={slide}
      animate="enter"
      initial="initial"
      exit="exit"
    >
      <Link
        className={`link ${window.innerWidth <= 700 ? "button-border" : ""}`}
        to={data.to}
      >
        {data.title}
      </Link>
    </motion.li>
  );
};

export default NavLink;
