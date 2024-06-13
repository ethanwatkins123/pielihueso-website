// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import miscEN from "../translations/en/misc.json";
import miscES from "../translations/es/misc.json";
import homeEN from "../translations/en/home.json";
import homeES from "../translations/es/home.json";
import vinosEN from "../translations/en/vinos.json";
import vinosES from "../translations/es/vinos.json";
import historiaEN from "../translations/en/historia.json";
import historiaES from "../translations/es/historia.json";
import fincaEN from "../translations/en/finca.json";
import fincaES from "../translations/es/finca.json";
import equipoEN from "../translations/en/equipo.json";
import equipoES from "../translations/es/equipo.json";
import contactoEN from "../translations/en/contacto.json";
import contactoES from "../translations/es/contacto.json";
import comprarEN from "../translations/en/comprar.json";
import comprarES from "../translations/es/comprar.json";
import faqEN from "../translations/en/faq.json";
import faqES from "../translations/es/faq.json";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        misc: miscEN,
        home: homeEN,
        vinos: vinosEN,
        historia: historiaEN,
        finca: fincaEN,
        equipo: equipoEN,
        contacto: contactoEN,
        comprar: comprarEN,
        faq: faqEN,
      },
      es: {
        misc: miscES,
        home: homeES,
        vinos: vinosES,
        historia: historiaES,
        finca: fincaES,
        equipo: equipoES,
        contacto: contactoES,
        comprar: comprarES,
        faq: faqES,
      },
    },
    lng: "es",
    fallbackLng: "en",
    ns: [
      "misc",
      "home",
      "vinos",
      "historia",
      "finca",
      "equipo",
      "contacto",
      "comprar",
      "faq",
    ],
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
