import { useTranslation } from "react-i18next";
import Layout from "../../layouts/layout/Layout";
import Curve from "../../layouts/curveTransition/Curve";
import "./dondeComprar.scss";
import { importerItems } from "../../constants";

import {
  comprarSmPngImg,
  comprarSmWebpImg,
  comprarMdPngImg,
  comprarMdWebpImg,
  comprarLgPngImg,
  comprarLgWebpImg,
  comprarXlPngImg,
  comprarXlWebpImg,
} from "../../utils";

const ImporterItem = ({ item }) => {
  const { t } = useTranslation("comprar");

  return (
    <article className="dondeComprar__info-wrapper">
      <h2 className="dondeComprar__subheading ">{t(item.country)}</h2>
      <div className="dondeComprar__importer-container">
        <p className="dondeComprar__company">{item.company}</p>
        <a className="dondeComprar__website" href={`http://${item.website}`}>
          {item.website}
        </a>
        <address className="dondeComprar__address">{item.address}</address>
        <a className="dondeComprar__instagram" href={item.instagram}>
          @brazoswine
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
              <picture>
                <source
                  type="image/webp"
                  srcSet={`${comprarXlWebpImg} 2400w, ${comprarLgWebpImg} 1300w, ${comprarMdWebpImg} 950w, ${comprarSmWebpImg} 600w`}
                  sizes="(max-width: 700px) 80vw, 50vw"
                />
                <source
                  type="image/png"
                  srcSet={`${comprarXlPngImg} 2400w, ${comprarLgPngImg} 1300w, ${comprarMdPngImg} 950w, ${comprarSmPngImg} 600w`}
                  sizes="(max-width: 700px) 80vw, 50vw"
                />
                <img
                  src={comprarMdPngImg}
                  width="650"
                  height="820"
                  alt="Pielihueso flag logo"
                  className="dondeComprar__image"
                />
              </picture>
            </div>
            <div className="dondeComprar__content">
              <p className="dondeComprar__intro text-intro">{t("intro")}</p>
              <p className="dondeComprar__intro--second text-intro">
                {t("intro2")}
              </p>
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
