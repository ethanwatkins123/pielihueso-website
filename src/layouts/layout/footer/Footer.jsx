import { useTranslation } from "react-i18next";
import BottomNav from "./bottomNav/BottomNav";
import LanguageButton from "../../../components/languageButton/LanguageButton";
import { iconInstagramImg } from "../../../utils";

import "./footer.scss";

function Footer() {
  const { t } = useTranslation("misc");

  return (
    <footer className="footer">
      <BottomNav />
      <div className="footer__wrapper">
        <p className="footer__credits">{t("footerCredits")}</p>
        <LanguageButton />
        <a href="https://www.instagram.com/pielihueso/?hl=en">
          <img
            className="footer__icon"
            src={iconInstagramImg}
            alt="Pielihueso Instagram"
            width="16"
            height="16"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
