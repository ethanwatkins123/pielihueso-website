import Layout from "../../layouts/layout/Layout";
import Carousel from "../../components/Carousel";

import "./laFinca.scss";

import { fincaPrimaryMobileImg, fincaPrimaryDesktopImg } from "../../utils";

import { fincaItems, slidesLaFinca } from "../../constants";

const LaFinca = () => {
  const renderFincaItem = (item) => (
    <div className="finca__info-wrapper" key={item.id}>
      <h2 className="finca__subheading text-heading-secondary">
        {item.attribute}
      </h2>
      <p className="finca__detail">{item.detail}</p>
    </div>
  );

  return (
    <>
      <Layout>
        <div className="finca">
          <h1 className="finca__heading text-heading-primary">La Finca</h1>
          <main className="finca__main-container">
            <div className="finca__image-desktop-wrapper">
              <img
                className="finca__image-desktop"
                src={fincaPrimaryDesktopImg}
                alt=""
                srcSet={`${fincaPrimaryMobileImg} 750w, ${fincaPrimaryDesktopImg} 850w`}
                sizes="(min-width: 700px) 50vh, 100vw"
              />
            </div>
            <div className="finca__sub-container">
              <p className="finca__intro text-intro">
                The Salicutti winegrowing estate, owned by legendary Munich
                restaurateurs Felix and Sabine Eichbauer of Tantris fame, is a
                place of untamed beauty located in the southeastern corner of
                Montalcino.
              </p>
              <div className="finca__details-container">
                <img
                  className="finca__image-mobile"
                  src={fincaPrimaryMobileImg}
                  alt=""
                />
                <section className="finca__details">
                  <div className="finca__attribute">
                    {fincaItems.map((item) => renderFincaItem(item))}
                  </div>
                </section>
              </div>
            </div>
          </main>
          <section>
            <Carousel carouselData={slidesLaFinca} />
          </section>
        </div>
      </Layout>
    </>
  );
};

export default LaFinca;
