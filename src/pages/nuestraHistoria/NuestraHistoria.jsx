import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
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

import {
  containerVariants,
  itemVariants,
  itemVariantsMobile,
  scrollVariants,
  scrollVariantsMobile,
} from "../../utils/animations";

import { historyItems, slidesNuestraHistoria } from "../../constants";

const HistoryItem = ({ year, text }) => {
  const { t } = useTranslation("historia");
  const isDesktop = useMediaQuery({ minWidth: 700 });

  return (
    <motion.article
      variants={isDesktop ? scrollVariants : scrollVariantsMobile}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="historia__year"
    >
      <time>{year}</time>
      <p>{t(text)}</p>
    </motion.article>
  );
};

const NuestraHistoria = () => {
  const { t } = useTranslation("historia");
  const isDesktop = useMediaQuery({ minWidth: 700 });

  return (
    <Curve>
      <Layout>
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="historia"
        >
          <header>
            <motion.h1
              variants={isDesktop ? itemVariants : itemVariantsMobile}
              className="historia__heading text-heading-primary"
            >
              {t("title")}
            </motion.h1>
            <motion.p
              variants={isDesktop ? itemVariants : itemVariantsMobile}
              className="historia__intro text-intro"
            >
              {t("intro")}
            </motion.p>
            <motion.picture
              variants={isDesktop ? itemVariants : itemVariantsMobile}
            >
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
                fetchPriority="high"
                decoding="async"
                alt={t("altTextMainImg")}
                className="historia__image-primary"
              />
            </motion.picture>
          </header>
          <section className="historia__history">
            <div className="historia__years">
              {historyItems.slice(0, 2).map((item) => (
                <HistoryItem key={item.year} {...item} />
              ))}
              <motion.figure
                variants={scrollVariantsMobile}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                className="historia__figure-mobile"
              >
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
              </motion.figure>
              {historyItems.slice(2, 5).map((item) => (
                <HistoryItem key={item.year} {...item} />
              ))}
            </div>
            <motion.figure
              variants={scrollVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="historia__figure"
            >
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
            </motion.figure>
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
        </motion.section>
      </Layout>
    </Curve>
  );
};

export default NuestraHistoria;
