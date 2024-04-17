import "./bottomNav.scss";
import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <ul className="footer__nav">
      <li className="footer__nav-item">
        <Link to="/contacto" className="footer__link">
          Contacto
        </Link>
      </li>
      <li>
        <Link to="/donde-comprar" className="footer__link">
          Donde cómprar
        </Link>
      </li>
      <li>
        <Link to="/faq" className="footer__link">
          FAQ
        </Link>
      </li>
    </ul>
  );
};

export default BottomNav;
