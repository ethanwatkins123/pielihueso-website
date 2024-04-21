import Layout from "../../layouts/layout/Layout";
import imageDondeComprar from "../../assets/images/Ilustración_Pintó-Verdot3 1.png";
import { importerItems } from "../../data/data";

import "./dondeComprar.scss";

const DondeComprar = () => {
  const renderImporterItem = (item) => (
    <div className="dondeComprar__info-wrapper" key={item.id}>
      <h2 className="dondeComprar__subheading text-heading-secondary">
        {item.country}
      </h2>
      <div>
        <p className="dondeComprar__company">{item.company}</p>
        <a className="dondeComprar__website text-body" href={item.website}>
          {item.website}
        </a>
        <address className="dondeComprar__address text-body">
          {item.address}
        </address>
        <a className="dondeComprar__instagram text-body" href={item.instagram}>
          {`@${
            item.instagram
              .replace(/https?:\/\//, "")
              .replace(/\/$/, "")
              .split(".com")[0]
          }`}
        </a>
      </div>
    </div>
  );

  return (
    <>
      <Layout>
        <div className="dondeComprar">
          <h1 className="dondeComprar__heading text-heading-primary">
            Dónde comprar
          </h1>

          <div className="dondeComprar__container">
            {/* add srcset */}
            <div className="dondeComprar__image-wrapper">
              <img
                className="dondeComprar__image"
                src={imageDondeComprar}
                alt=""
              />
            </div>

            <div className="dondeComprar__content">
              <p className="dondeComprar__intro text-intro">
                Our wines are available in Argentina and are distributed
                exclusively by xxxxxx. Due to our wine only being made in small
                volumes we cannot guarantee all wines will always be available.
              </p>
              <div className="dondeComprar__info-container">
                {importerItems.map((item) => renderImporterItem(item))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default DondeComprar;
