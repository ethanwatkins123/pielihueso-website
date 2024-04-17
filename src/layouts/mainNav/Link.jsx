import { motion } from "framer-motion";
import { slide } from "./menuSlide";

const Link = ({ data }) => {
  return (
    <motion.li
      className="list-item"
      custom={data.index}
      variants={slide}
      animate="enter"
      initial="initial"
      exit="exit"
    >
      <a
        className={`link ${window.innerWidth <= 700 ? "button-border" : ""}`}
        href={data.href}
      >
        {data.title}
      </a>
    </motion.li>
  );
};

export default Link;
