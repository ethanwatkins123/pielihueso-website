import { useTranslation } from "react-i18next";
import Layout from "../../layouts/layout/Layout";
import Curve from "../../layouts/curveTransition/Curve";
import SplideCarousel from "../../components/splideCarousel/SplideCarousel";
import "./laFinca.scss";
import {
  fincaMainSmJpgImg,
  fincaMainSmWebpImg,
  fincaMainMdJpgImg,
  fincaMainMdWebpImg,
  fincaMainLgJpgImg,
  fincaMainLgWebpImg,
} from "../../utils";
import { fincaItems, slidesLaFinca } from "../../constants";

const FincaItem = ({ attribute, detail }) => {
  const { t } = useTranslation("finca");

  return (
    <article className="finca__info-wrapper">
      <h2 className="finca__subheading">{t(attribute)}</h2>
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
            <div className="finca__sub-container">
              <p className="finca__intro text-intro">{t("intro")}</p>
              <section className="finca__details-container">
                <picture>
                  <source
                    type="image/webp"
                    srcSet={`${fincaMainMdWebpImg} 1050w, ${fincaMainSmWebpImg} 700w`}
                    sizes="(max-width: 700px) 80vw, 30vw"
                  />
                  <source
                    type="image/jpeg"
                    srcSet={`${fincaMainMdJpgImg} 1050w, ${fincaMainSmJpgImg} 700w`}
                    sizes="(max-width: 700px) 80vw, 30vw"
                  />
                  <img
                    src={fincaMainSmJpgImg}
                    width="525"
                    height="748"
                    fetchPriority="high"
                    alt={t("altTextMainImg")}
                    className="finca__image-mobile"
                  />
                </picture>
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
            <figure className="finca__image-desktop-wrapper">
              <picture>
                <source
                  type="image/webp"
                  srcSet={`${fincaMainLgWebpImg} 2142w, ${fincaMainMdWebpImg} 1050w`}
                  sizes="(max-width: 700px) 80vw, 30vw"
                />
                <source
                  type="image/jpeg"
                  srcSet={`${fincaMainLgJpgImg} 2142w, ${fincaMainMdJpgImg} 1050w`}
                  sizes="(max-width: 700px) 80vw, 30vw"
                />
                {/* <source type="image/webp" srcSet={fincaMainMdWebpImg} />
                <source type="image/jpeg" srcSet={fincaMainMdJpgImg} /> */}
                <img
                  src={fincaMainMdJpgImg}
                  width="525"
                  height="748"
                  alt={t("altTextMainImg")}
                  className="finca__image-desktop"
                />
              </picture>
            </figure>
          </main>
          <section className="finca__carousel">
            <SplideCarousel
              items={slidesLaFinca}
              speed={1}
              pauseOnHover={false}
              widthSm={"90%"}
              widthMd={"45%"}
              widthLg={"40%"}
              widthXl={"35%"}
              gapSm={"12px"}
              gapMd={"16px"}
              gapLg={"24px"}
            />
          </section>
        </section>
      </Layout>
    </Curve>
  );
};

export default LaFinca;
