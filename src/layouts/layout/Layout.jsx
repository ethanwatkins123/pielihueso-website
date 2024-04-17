import MainNav from "../mainNav/MainNav";
import BottomNav from "../bottomNav/BottomNav";

import "./layout.scss";

import logo from "../../assets/images/Logos and Icons/04.2024-WebPielihueso-Img-Logo.svg";
import iconInstagram from "../../assets/images/Logos and Icons/04.2024-WebPielihueso-Img-IGicon.svg";

const Layout = ({ children }) => {
  return (
    <div className="page-container">
      <header className="header">
        {/* change to Link element and add routing */}
        <a href="/">
          <img className="header__logo" src={logo} alt="Pielihueso Home" />
        </a>
        <MainNav className="header__nav" />
      </header>

      <main className="main">{children}</main>

      <footer className="footer">
        <BottomNav />
        <div className="footer__wrapper">
          <p className="footer__details">
            © Pielihueso 2024 — Design : Carmela Bartolomé — Code : Ethan
            Watkins — Illustrations: @bartnetwork
          </p>
          {/* Update or make component */}
          <button className="footer__lang-button">ES / EN</button>
          <a
            className="footer__link"
            href="https://www.instagram.com/pielihueso/?hl=en"
          >
            <img
              className="footer__icon"
              src={iconInstagram}
              alt="Pielihueso Instagram"
              width="18"
              height="18"
            />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
