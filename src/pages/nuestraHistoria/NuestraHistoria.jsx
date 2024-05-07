import { useTranslation } from "react-i18next";
import Layout from "../../layouts/layout/Layout";
import Curve from "../../layouts/curveTransition/Curve";
import InfiniteScrollAnim from "../../components/infiniteScrollAnim/InfiniteScrollAnim";
import "./nuestraHistoria.scss";

import {
  historiaPrimaryMobileImg,
  historiaPrimaryTabletImg,
  historiaPrimaryDesktopImg,
  historiaSecondaryMobileImg,
  historiaSecondaryDesktopImg,
} from "../../utils";

import { historyItems, slidesNuestraHistoria } from "../../constants";

const HistoryItem = ({ year, text }) => {
  const { t } = useTranslation("historia");

  return (
    <article className="historia__year">
      <time className="text-heading-secondary">{year}</time>
      <p className="text-body">{t(text)}</p>
    </article>
  );
};

const NuestraHistoria = () => {
  const { t } = useTranslation("historia");

  return (
    <Curve>
      <Layout>
        <section className="historia">
          <header>
            <h1 className="historia__heading text-heading-primary">
              {t("title")}
            </h1>
            <p className="historia__intro text-intro">{t("intro")}</p>
            <img
              className="historia__image-primary"
              src={historiaPrimaryMobileImg}
              alt={t("altTextMainImg")}
              srcSet={`${historiaPrimaryMobileImg} 750w, ${historiaPrimaryTabletImg} 1728w, ${historiaPrimaryDesktopImg} 2880w`}
            />
          </header>
          <section className="historia__history">
            <div className="historia__years">
              {historyItems.slice(0, 2).map((item) => (
                <HistoryItem key={item.year} {...item} />
              ))}
              <figure className="historia__figure-mobile">
                <img
                  src={historiaSecondaryMobileImg}
                  alt={t("altTextSecondaryImg")}
                />
                <figcaption className="text-figcaption">
                  {t("altTextSecondaryImg")}
                </figcaption>
              </figure>
              {historyItems.slice(2, 5).map((item) => (
                <HistoryItem key={item.year} {...item} />
              ))}
            </div>
            <figure className="historia__figure">
              <img
                src={historiaSecondaryDesktopImg}
                alt={t("altTextSecondaryImg")}
              />
              <figcaption className="text-figcaption">
                {t("altTextSecondaryImg")}
              </figcaption>
            </figure>
          </section>

          <section className="historia__carousel">
            <InfiniteScrollAnim items={slidesNuestraHistoria} speed={"slow"} />
          </section>
          <section className="historia__history-continued">
            {historyItems.slice(5).map((item) => (
              <HistoryItem key={item.year} {...item} />
            ))}
          </section>
        </section>
      </Layout>
    </Curve>
  );
};

export default NuestraHistoria;
