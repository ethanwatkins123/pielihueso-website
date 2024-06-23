import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import Layout from "../../layouts/layout/Layout";
import ContactoInfo from "./ContactoInfo";
import Curve from "../../layouts/curveTransition/Curve";
import "./contacto.scss";
import {
  contactoSmPngImg,
  contactoSmWebpImg,
  contactoMdPngImg,
  contactoMdWebpImg,
  contactoLgPngImg,
  contactoLgWebpImg,
  contactoXlPngImg,
  contactoXlWebpImg,
} from "../../utils";

import {
  containerVariants,
  itemVariants,
  itemVariantsMobile,
  imageVariants,
  imageVariantsMobile,
} from "../../utils/animations";

const Contacto = () => {
  const { t } = useTranslation("contacto");
  const isDesktop = useMediaQuery({ minWidth: 700 });

  return (
    <>
      <Curve>
        <Layout isColoredPage={true}>
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="contacto"
          >
            <motion.h1
              variants={isDesktop ? itemVariants : itemVariantsMobile}
              className="contacto__heading text-heading-primary"
            >
              {t("title")}
            </motion.h1>

            <article className="contacto__container">
              <motion.div
                variants={isDesktop ? imageVariants : imageVariantsMobile}
                className="contacto__image-wrapper"
              >
                <picture>
                  <source
                    type="image/webp"
                    srcSet={`${contactoXlWebpImg} 2400w, ${contactoLgWebpImg} 1350w, ${contactoMdWebpImg} 950w, ${contactoSmWebpImg} 700w`}
                    sizes="(max-width: 700px) 85vw, 50vw"
                  />
                  <source
                    type="image/png"
                    srcSet={`${contactoXlPngImg} 2400w, ${contactoLgPngImg} 1350w, ${contactoMdPngImg} 950w, ${contactoSmPngImg} 700w`}
                    sizes="(max-width: 700px) 85vw, 50vw"
                  />
                  <img
                    src={contactoMdPngImg}
                    width="600"
                    height="467"
                    fetchPriority="high"
                    decoding="async"
                    alt={t("alt-text")}
                    className="contacto__image"
                  />
                </picture>
              </motion.div>
              <div className="contacto__content">
                <motion.p
                  variants={isDesktop ? itemVariants : itemVariantsMobile}
                  className="contacto__intro text-intro"
                >
                  {t("intro")}
                </motion.p>
                <motion.div
                  className="contacto__info-container"
                  variants={isDesktop ? itemVariants : itemVariantsMobile}
                >
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
                </motion.div>
              </div>
            </article>
          </motion.section>
        </Layout>
      </Curve>
    </>
  );
};

export default Contacto;
