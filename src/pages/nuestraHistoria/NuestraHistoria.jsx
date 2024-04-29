import Layout from "../../layouts/layout/Layout";
import Carousel from "../../components/Carousel";

import "./nuestraHistoria.scss";

import {
  historiaPrimaryMobileImg,
  historiaPrimaryTabletImg,
  historiaPrimaryDesktopImg,
  historiaSecondaryMobileImg,
  historiaSecondaryDesktopImg,
} from "../../utils";

import { historyItems, slidesNuestraHistoria } from "../../constants";

const NuestraHistoria = () => {
  const renderHistoryItem = (year, text) => (
    <div className="historia__year" key={year}>
      <time className="text-heading-secondary" dateTime={year}>
        {year}
      </time>
      <p className="text-body">{text}</p>
    </div>
  );

  return (
    <>
      <Layout>
        <div className="historia">
          <main>
            <h1 className="historia__heading text-heading-primary">
              Nuestra Historia
            </h1>
            <p className="historia__intro text-intro">
              The Salicutti winegrowing estate, owned by legendary Munich
              restaurateurs Felix and Sabine Eichbauer of Tantris fame, is a
              place of untamed beauty located in the southeastern corner of
              Montalcino.
            </p>
            <img
              className="historia__image-primary"
              src={historiaPrimaryMobileImg}
              alt=""
              srcSet={`${historiaPrimaryMobileImg} 750w, ${historiaPrimaryTabletImg} 1728w, ${historiaPrimaryDesktopImg} 2880w`}
            />
          </main>
          <section className="historia__history">
            <div className="historia__years">
              {historyItems
                .slice(0, 2)
                .map((item) => renderHistoryItem(item.year, item.text))}

              <figure className="historia__figure-mobile">
                <img
                  src={historiaSecondaryMobileImg}
                  alt="Primer ilustración para el primer vino x @bartnetwork"
                />

                <figcaption className="text-figcaption">
                  Primer ilustración para el primer vino x @bartnetwork
                </figcaption>
              </figure>
              {historyItems
                .slice(2, 5)
                .map((item) => renderHistoryItem(item.year, item.text))}
            </div>
            <figure className="historia__figure">
              <img
                src={historiaSecondaryDesktopImg}
                alt="Primer ilustración para el primer vino x @bartnetwork"
              />
              <figcaption className="text-figcaption">
                Primer ilustración para el primer vino x @bartnetwork
              </figcaption>
            </figure>
          </section>
          <section className="historia__carousel">
            <Carousel carouselData={slidesNuestraHistoria} />
          </section>
          <section className="historia__history-continued">
            {historyItems
              .slice(5)
              .map((item) => renderHistoryItem(item.year, item.text))}
          </section>
        </div>
      </Layout>
    </>
  );
};

export default NuestraHistoria;
