import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
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

import {
  containerVariants,
  itemVariants,
  itemVariantsMobile,
  imageVariants,
  imageVariantsMobile,
  scrollVariants,
  scrollVariantsMobile,
} from "../../utils/animations";

const ImporterItem = ({ item }) => {
  const { t } = useTranslation("comprar");
  const isDesktop = useMediaQuery({ minWidth: 700 });

  return (
    <motion.article
      className="dondeComprar__info-wrapper"
      variants={isDesktop ? scrollVariants : scrollVariantsMobile}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
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
    </motion.article>
  );
};

const DondeComprar = () => {
  const { t } = useTranslation("comprar");
  const isDesktop = useMediaQuery({ minWidth: 700 });

  return (
    <Curve>
      <Layout isColoredPage={true}>
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="dondeComprar"
        >
          <motion.h1
            variants={isDesktop ? itemVariants : itemVariantsMobile}
            className="dondeComprar__heading text-heading-primary"
          >
            {t("title")}
          </motion.h1>
          <div className="dondeComprar__container">
            <motion.div
              variants={isDesktop ? imageVariants : imageVariantsMobile}
              className="dondeComprar__image-wrapper"
            >
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
                  alt={t("alt-text")}
                  className="dondeComprar__image"
                />
              </picture>
            </motion.div>
            <div className="dondeComprar__content">
              <motion.p
                variants={isDesktop ? itemVariants : itemVariantsMobile}
                className="dondeComprar__intro text-intro"
              >
                {t("intro")}
              </motion.p>
              <motion.p
                variants={isDesktop ? itemVariants : itemVariantsMobile}
                className="dondeComprar__intro--second text-intro"
              >
                {t("intro2")}
              </motion.p>
              <motion.section
                variants={isDesktop ? itemVariants : itemVariantsMobile}
                className="dondeComprar__info-container"
              >
                {importerItems.map((item) => (
                  <ImporterItem key={item.id} item={item} />
                ))}
              </motion.section>
            </div>
          </div>
        </motion.section>
      </Layout>
      //{" "}
    </Curve>
  );
};

export default DondeComprar;
