import { useTranslation } from "react-i18next";
import Layout from "../../layouts/layout/Layout";
import Curve from "../../layouts/curveTransition/Curve";
import InfiniteScrollAnim from "../../components/infiniteScrollAnim/InfiniteScrollAnim";
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
            <InfiniteScrollAnim items={slidesEquipo} speed={"slow"} />
          </section>
        </article>
      </Layout>
    </Curve>
  );
};

export default Equipo;
