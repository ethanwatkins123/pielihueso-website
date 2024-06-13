import { useTranslation } from "react-i18next";
import Layout from "../../layouts/layout/Layout";
import Curve from "../../layouts/curveTransition/Curve";
import SplideCarousel from "../../components/splideCarousel/SplideCarousel";
import "./equipo.scss";
import { slidesEquipo } from "../../constants";

const Equipo = () => {
  const { t } = useTranslation("equipo");

  return (
    <Curve>
      <Layout>
        <article className="equipo">
          <h1 className="equipo__heading text-heading-primary">{t("title")}</h1>
          <p className="equipo__intro text-intro">{t("intro")}</p>
          <section className="equipo__carousel">
            <SplideCarousel
              items={slidesEquipo}
              speed={2}
              pauseOnHover={false}
              widthSmall={"311px"}
              widthMedium={"327px"}
              widthLarge={"421px"}
              widthXlarge={"600px"}
              gapMedium={"16px"}
              gapLarge={"24px"}
            />
          </section>
        </article>
      </Layout>
    </Curve>
  );
};

export default Equipo;
