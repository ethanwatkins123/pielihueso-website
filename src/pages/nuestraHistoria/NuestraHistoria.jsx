import Layout from "../../layouts/layout/Layout";
import "./nuestraHistoria.scss";

import testImageDesktop from "../../assets/images/Home/Desktop/04.2024-WebPielihueso-Img-Home-Desktop-1.jpg";
import testImageTablet from "../../assets/images/Home/Tablet/04.2024-WebPielihueso-Img-Home-Tablet-1.jpg";
import testImageMobile from "../../assets/images/Home/Mobile/04.2024-WebPielihueso-Img-Home-Mobile-1.jpg";
import ImageNuestraHistoria from "../../assets/images/imageNuestraHistoria.jpg";

import { historyItems } from "../../data/data";

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
          <h1 className="historia__heading text-heading-primary">
            Nuestra Historia
          </h1>
          <p className="historia__intro text-intro">
            The Salicutti winegrowing estate, owned by legendary Munich
            restaurateurs Felix and Sabine Eichbauer of Tantris fame, is a place
            of untamed beauty located in the southeastern corner of Montalcino.
          </p>
          <img
            className="historia__image-primary"
            src={testImageMobile}
            alt=""
            srcSet={`${testImageMobile} 750w, ${testImageTablet} 1728w, ${testImageDesktop} 2880w`}
          />
          <section className="historia__history">
            <div className="historia__years">
              {historyItems
                .slice(0, 2)
                .map((item) => renderHistoryItem(item.year, item.text))}

              <figure className="historia__figure-mobile">
                <img
                  src={ImageNuestraHistoria}
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
                src={ImageNuestraHistoria}
                alt="Primer ilustración para el primer vino x @bartnetwork"
              />
              <figcaption className="text-figcaption">
                Primer ilustración para el primer vino x @bartnetwork
              </figcaption>
            </figure>
          </section>
          {/* insert carousel section here */}
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
