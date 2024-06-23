import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import Layout from "../../layouts/layout/Layout";
import Curve from "../../layouts/curveTransition/Curve";
import SplideCarousel from "../../components/splideCarousel/SplideCarousel";
import "./equipo.scss";
import { slidesEquipo } from "../../constants";
import {
  containerVariants,
  itemVariants,
  itemVariantsMobile,
} from "../../utils/animations";

const Equipo = () => {
  const { t } = useTranslation("equipo");
  const isDesktop = useMediaQuery({ minWidth: 700 });

  return (
    <Curve>
      <Layout>
        <motion.article
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="equipo"
        >
          <motion.h1
            variants={isDesktop ? itemVariants : itemVariantsMobile}
            className="equipo__heading text-heading-primary"
          >
            {t("title")}
          </motion.h1>
          <motion.p
            variants={isDesktop ? itemVariants : itemVariantsMobile}
            className="equipo__intro text-intro"
          >
            {t("intro")}
          </motion.p>
          <motion.section
            variants={isDesktop ? itemVariants : itemVariantsMobile}
            className="equipo__carousel"
          >
            <SplideCarousel
              items={slidesEquipo}
              speed={1}
              pauseOnHover={true}
              widthSm={"90%"}
              widthMd={"45%"}
              widthLg={"40%"}
              widthXl={"30%"}
              widthXxl={"22.5%"}
              gapSm={"12px"}
              gapMd={"16px"}
              gapLg={"24px"}
            />
          </motion.section>
        </motion.article>
      </Layout>
    </Curve>
  );
};

export default Equipo;
