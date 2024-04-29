import Layout from "../../layouts/layout/Layout";

import "./dondeComprar.scss";

import { importerItems } from "../../constants";

import { comprarMobilePrimaryImg, comprarDesktopPrimaryImg } from "../../utils";

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
      <Layout isColoredPage={true}>
        <div className="dondeComprar">
          <h1 className="dondeComprar__heading text-heading-primary">
            Dónde comprar
          </h1>

          <div className="dondeComprar__container">
            <div className="dondeComprar__image-wrapper">
              <img
                className="dondeComprar__image"
                src={comprarMobilePrimaryImg}
                alt=""
                srcSet={`${comprarMobilePrimaryImg} 750w, ${comprarDesktopPrimaryImg} 1420w`}
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
