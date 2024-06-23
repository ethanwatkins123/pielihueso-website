import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MainNav from "../../mainNav/MainNav";
import { logoImg } from "../../../utils";
import "./header.scss";

function Header({ toggleMainVisibility }) {
  return (
    <header className="header">
      <Link to="/">
        <motion.img
          className="header__logo"
          initial="hidden"
          animate="visible"
          src={logoImg}
          alt="Pielihueso Home"
          width="222"
          height="26"
        />
      </Link>
      <MainNav toggleMainVisibility={toggleMainVisibility} />
    </header>
  );
}

export default Header;
