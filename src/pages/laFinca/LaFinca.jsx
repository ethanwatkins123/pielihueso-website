import { useTranslation } from "react-i18next";
import Layout from "../../layouts/layout/Layout";
import Curve from "../../layouts/curveTransition/Curve";
import InfiniteScrollAnim from "../../components/infiniteScrollAnim/InfiniteScrollAnim";
import "./laFinca.scss";
import { fincaPrimaryMobileImg, fincaPrimaryDesktopImg } from "../../utils";
import { fincaItems, slidesLaFinca } from "../../constants";

const FincaItem = ({ attribute, detail }) => {
  const { t } = useTranslation("finca");

  return (
    <article className="finca__info-wrapper">
      <h2 className="finca__subheading text-heading-secondary">
        {t(attribute)}
      </h2>
      <p className="finca__detail">{t(detail)}</p>
    </article>
  );
};

const LaFinca = () => {
  const { t } = useTranslation("finca");

  return (
    <Curve>
      <Layout>
        <section className="finca">
          <h1 className="finca__heading text-heading-primary">{t("title")}</h1>
          <main className="finca__main-container">
            <figure className="finca__image-desktop-wrapper">
              <img
                className="finca__image-desktop"
                src={fincaPrimaryDesktopImg}
                alt={t("altTextMainImg")}
                srcSet={`${fincaPrimaryMobileImg} 750w, ${fincaPrimaryDesktopImg} 850w`}
                sizes="(min-width: 700px) 50vh, 100vw"
              />
            </figure>
            <div className="finca__sub-container">
              <p className="finca__intro text-intro">{t("intro")}</p>
              <section className="finca__details-container">
                <img
                  className="finca__image-mobile"
                  src={fincaPrimaryMobileImg}
                  alt={t("altTextMainImg")}
                />
                <section className="finca__details">
                  <div className="finca__attribute">
                    {fincaItems.map((item) => (
                      <FincaItem
                        key={item.id}
                        attribute={item.attribute}
                        detail={item.detail}
                      />
                    ))}
                  </div>
                </section>
              </section>
            </div>
          </main>
          <section className="finca__carousel">
            <InfiniteScrollAnim items={slidesLaFinca} speed={"slow"} />
          </section>
        </section>
      </Layout>
    </Curve>
  );
};

export default LaFinca;
