import { useTranslation } from "react-i18next";
import Layout from "../../layouts/layout/Layout";
import Curve from "../../layouts/curveTransition/Curve";
import SplideCarousel from "../../components/splideCarousel/SplideCarousel";
import "./nuestraHistoria.scss";

import {
  historiaMainSmJpgImg,
  historiaMainSmWebpImg,
  historiaMainMdJpgImg,
  historiaMainMdWebpImg,
  historiaMainLgJpgImg,
  historiaMainLgWebpImg,
  historiaMainXlJpgImg,
  historiaMainXlWebpImg,
  historiaMainXxlJpgImg,
  historiaMainXxlWebpImg,
  historiaMainXxxlJpgImg,
  historiaMainXxxlWebpImg,
  historiaSecondaryMdPngImg,
  historiaSecondaryMdWebpImg,
  historiaSecondaryLgPngImg,
  historiaSecondaryLgWebpImg,
} from "../../utils";

import { historyItems, slidesNuestraHistoria } from "../../constants";

const HistoryItem = ({ year, text }) => {
  const { t } = useTranslation("historia");

  return (
    <article className="historia__year">
      <time>{year}</time>
      <p>{t(text)}</p>
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
            <picture>
              <source
                type="image/webp"
                media="(max-width: 699px)"
                srcSet={`${historiaMainMdWebpImg} 1050w, ${historiaMainSmWebpImg} 670w`}
                sizes="80vw"
              />
              <source
                type="image/jpeg"
                media="(max-width: 699px)"
                srcSet={`${historiaMainMdJpgImg} 1050w, ${historiaMainSmJpgImg} 670w`}
                sizes="80vw"
              />
              <source
                type="image/webp"
                media="(min-width: 700px) and (max-width: 899px)"
                srcSet={historiaMainLgWebpImg}
              />
              <source
                type="image/jpeg"
                media="(min-width: 700px) and (max-width: 899px)"
                srcSet={historiaMainLgJpgImg}
              />
              <source
                type="image/webp"
                media="(min-width: 900px)"
                srcSet={`${historiaMainXxxlWebpImg} 5472w, ${historiaMainXxlWebpImg} 2650w, ${historiaMainXlWebpImg} 1850w`}
                sizes="90vw"
              />
              <source
                type="image/jpeg"
                media="(min-width: 900px)"
                srcSet={`${historiaMainXxxlJpgImg} 5472w, ${historiaMainXxlJpgImg} 2650w, ${historiaMainXlJpgImg} 1850w`}
                sizes="90vw"
              />
              <img
                src={historiaMainLgWebpImg}
                alt={t("altTextMainImg")}
                className="historia__image-primary"
              />
            </picture>
          </header>
          <section className="historia__history">
            <div className="historia__years">
              {historyItems.slice(0, 2).map((item) => (
                <HistoryItem key={item.year} {...item} />
              ))}
              <figure className="historia__figure-mobile">
                <picture>
                  <source
                    type="image/webp"
                    srcSet={`${historiaSecondaryLgWebpImg} 950w, ${historiaSecondaryMdWebpImg} 600w`}
                    sizes="80vw"
                  />
                  <source
                    type="image/jpeg"
                    srcSet={`${historiaSecondaryLgPngImg} 950w, ${historiaSecondaryMdPngImg} 600w`}
                    sizes="80vw"
                  />
                  <img
                    src={historiaSecondaryMdPngImg}
                    width="475"
                    height="479"
                    alt={t("altTextSecondaryImg")}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
                <figcaption className="text-figcaption">
                  {t("altTextSecondaryImg")}
                </figcaption>
              </figure>
              {historyItems.slice(2, 5).map((item) => (
                <HistoryItem key={item.year} {...item} />
              ))}
            </div>
            <figure className="historia__figure">
              <picture>
                <source
                  type="image/webp"
                  srcSet={`${historiaSecondaryLgWebpImg} 950w, ${historiaSecondaryMdWebpImg} 600w`}
                  sizes="35vw"
                />
                <source
                  type="image/jpeg"
                  srcSet={`${historiaSecondaryLgPngImg} 950w, ${historiaSecondaryMdPngImg} 600w`}
                  sizes="35vw"
                />
                <img
                  src={historiaSecondaryMdPngImg}
                  width="475"
                  height="479"
                  alt={t("altTextSecondaryImg")}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <figcaption className="text-figcaption">
                {t("altTextSecondaryImg")}
              </figcaption>
            </figure>
          </section>

          <section className="historia__carousel">
            <SplideCarousel
              items={slidesNuestraHistoria}
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
