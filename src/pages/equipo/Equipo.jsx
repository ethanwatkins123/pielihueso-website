import Layout from "../../layouts/layout/Layout";
import CarouselEquipo from "./CarouselEquipo";

import "./equipo.scss";

const Equipo = () => {
  return (
    <>
      <Layout>
        <div className="equipo">
          <h1 className="equipo__heading text-heading-primary">Equipo</h1>
          <p className="equipo__intro text-intro">
            The Salicutti winegrowing estate, owned by legendary Munich
            restaurateurs Felix and Sabine Eichbauer of Tantris fame.
          </p>
          <CarouselEquipo />
        </div>
      </Layout>
    </>
  );
};

export default Equipo;
