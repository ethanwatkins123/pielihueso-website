import { useTranslation } from "react-i18next";
import Layout from "../../layouts/layout/Layout";
import Curve from "../../layouts/curveTransition/Curve";
import "./dondeComprar.scss";
import { importerItems } from "../../constants";
import { comprarMobilePrimaryImg, comprarDesktopPrimaryImg } from "../../utils";

const ImporterItem = ({ item }) => {
  const { t } = useTranslation("comprar");

  return (
    <article className="dondeComprar__info-wrapper">
      <h2 className="dondeComprar__subheading text-heading-secondary">
        {t(item.country)}
      </h2>
      <div>
        <p className="dondeComprar__company">{item.company}</p>
        <a className="dondeComprar__website text-body" href={item.website}>
          {item.website}
        </a>
        <address className="dondeComprar__address text-body">
          {item.address}
        </address>
        <a className="dondeComprar__instagram text-body" href={item.instagram}>
          @{new URL(item.instagram).hostname.replace("www.", "")}
        </a>
      </div>
    </article>
  );
};

const DondeComprar = () => {
  const { t } = useTranslation("comprar");
  return (
    <Curve>
      <Layout isColoredPage={true}>
        <section className="dondeComprar">
          <h1 className="dondeComprar__heading text-heading-primary">
            {t("title")}
          </h1>
          <div className="dondeComprar__container">
            <div className="dondeComprar__image-wrapper">
              <img
                className="dondeComprar__image"
                src={comprarMobilePrimaryImg}
                alt="Pielihueso flag logo"
                srcSet={`${comprarMobilePrimaryImg} 750w, ${comprarDesktopPrimaryImg} 1420w`}
              />
            </div>
            <div className="dondeComprar__content">
              <p className="dondeComprar__intro text-intro">{t("intro")}</p>
              <section className="dondeComprar__info-container">
                {importerItems.map((item) => (
                  <ImporterItem key={item.id} item={item} />
                ))}
              </section>
            </div>
          </div>
        </section>
      </Layout>
    </Curve>
  );
};

export default DondeComprar;
