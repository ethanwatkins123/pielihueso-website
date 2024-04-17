import "./bottomNav.scss";

const BottomNav = () => {
  return (
    <ul className="footer__nav">
      <li className="footer__nav-item">
        {/* Change to Link element and add routing */}
        <a className="footer__link" href="">
          Contacto
        </a>
      </li>
      <li>
        {/* Change to Link element and add routing */}
        <a className="footer__link" href="">
          Donde cómprar
        </a>
      </li>
      <li>
        {/* Change to Link element and add routing */}
        <a className="footer__link" href="">
          FAQ
        </a>
      </li>
    </ul>
  );
};

export default BottomNav;
