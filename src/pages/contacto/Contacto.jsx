import { useTranslation } from "react-i18next";
import Layout from "../../layouts/layout/Layout";
import ContactoInfo from "./ContactoInfo";
import Curve from "../../layouts/curveTransition/Curve";
import "./contacto.scss";
import {
  contactoMobilePrimaryImg,
  contactoDesktopPrimaryImg,
} from "../../utils";

const Contacto = () => {
  const { t } = useTranslation("contacto");

  return (
    <>
      <Curve>
        <Layout isColoredPage={true}>
          <section className="contacto">
            <h1 className="contacto__heading text-heading-primary">
              {t("title")}
            </h1>

            <article className="contacto__container">
              <div className="contacto__image-wrapper">
                <img
                  className="contacto__image"
                  src={contactoMobilePrimaryImg}
                  alt=""
                  srcSet={`${contactoMobilePrimaryImg} 750w, ${contactoDesktopPrimaryImg} 1420w`}
                />
              </div>

              <div className="contacto__content">
                <p className="contacto__intro text-intro">{t("intro")}</p>
                <div className="contacto__info-container">
                  <ContactoInfo
                    heading={t("contact1")}
                    email="ceciliadickinson@grupobart.com"
                  />
                  <ContactoInfo
                    heading={t("contact2")}
                    email="celinabartolome@grupobart.com"
                  />
                  <ContactoInfo
                    heading="Instagram"
                    url="https://www.instagram.com/pielihueso/?hl=en"
                    text="@pielihueso"
                  />
                  <ContactoInfo
                    heading={t("contact3")}
                    text="Finca Los Parrales. Los Sauces, Mendoza, Argentina"
                  />
                </div>
              </div>
            </article>
          </section>
        </Layout>
      </Curve>
    </>
  );
};

export default Contacto;
