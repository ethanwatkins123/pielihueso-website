import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
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
import {
  containerVariants,
  itemVariants,
  itemVariantsMobile,
  imageVariants,
  imageVariantsMobile,
  scrollVariants,
  scrollVariantsMobile,
} from "../../utils/animations";

const FincaItem = ({ attribute, detail }) => {
  const { t } = useTranslation("finca");
  const isDesktop = useMediaQuery({ minWidth: 700 });

  return (
    <motion.article
      variants={isDesktop ? scrollVariants : scrollVariantsMobile}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="finca__info-wrapper"
    >
      <h2 className="finca__subheading">{t(attribute)}</h2>
      <p className="finca__detail">{t(detail)}</p>
    </motion.article>
  );
};

const LaFinca = () => {
  const { t } = useTranslation("finca");
  const isDesktop = useMediaQuery({ minWidth: 700 });

  return (
    <Curve>
      <Layout>
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="finca"
        >
          <motion.h1
            variants={isDesktop ? itemVariants : itemVariantsMobile}
            className="finca__heading text-heading-primary"
          >
            {t("title")}
          </motion.h1>
          <main className="finca__main-container">
            <div className="finca__sub-container">
              <motion.p
                variants={isDesktop ? itemVariants : itemVariantsMobile}
                className="finca__intro text-intro"
              >
                {t("intro")}
              </motion.p>
              <section className="finca__details-container">
                <motion.picture variants={imageVariantsMobile}>
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
                </motion.picture>
                <motion.section
                  variants={isDesktop ? itemVariants : itemVariantsMobile}
                  className="finca__details"
                >
                  <div className="finca__attribute">
                    {fincaItems.map((item) => (
                      <FincaItem
                        key={item.id}
                        attribute={item.attribute}
                        detail={item.detail}
                      />
                    ))}
                  </div>
                </motion.section>
              </section>
            </div>
            <motion.figure
              variants={imageVariants}
              className="finca__image-desktop-wrapper"
            >
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
                  fetchPriority="high"
                  alt={t("altTextMainImg")}
                  className="finca__image-desktop"
                />
              </picture>
            </motion.figure>
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
        </motion.section>
      </Layout>
    </Curve>
  );
};

export default LaFinca;
