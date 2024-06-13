import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import "./languageButton.scss";

const LanguageButton = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language; // Define currentLanguage before use
  const location = useLocation();

  const buttonStyle = (lang) => {
    const specialRoutes = ["/donde-comprar", "/contacto", "/faq"];

    if (specialRoutes.includes(location.pathname)) {
      return {
        color:
          lang === currentLanguage ? "var(--clr-offwhite)" : "var(--clr-black)",
      };
    } else {
      return {
        color:
          lang === currentLanguage ? "var(--clr-orange)" : "var(--clr-black)",
      };
    }
  };

  return (
    <div className="lang-btn-container">
      <button
        className="lang-btn es"
        aria-label="Cambiar idioma a Español"
        style={buttonStyle("es")}
        onClick={() => i18n.changeLanguage("es")}
      >
        ES
      </button>
      <p className="lang-btn">/</p>
      <button
        className="lang-btn en"
        aria-label="Switch language to English"
        style={buttonStyle("en")}
        onClick={() => i18n.changeLanguage("en")}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageButton;
