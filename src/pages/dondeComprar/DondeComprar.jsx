import Layout from "../../layouts/layout/Layout";
import DondeComprarInfo from "./DondeComprarInfo";
import imageDondeComprar from "../../assets/images/Ilustración_Pintó-Verdot3 1.png";

import "./dondeComprar.scss";

const DondeComprar = () => {
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
                <DondeComprarInfo
                  country="Argentina"
                  company="Brazos Wine Imports"
                  website="http://www.brazoswine.com"
                  address="2 Prince St Suite 4309, Brooklyn, NY 11201, United States"
                  instagram="https://www.instagram.com/brazoswine"
                />
                <DondeComprarInfo
                  country="USA"
                  company="Brazos Wine Imports"
                  website="http://www.brazoswine.com"
                  address="2 Prince St Suite 4309, Brooklyn, NY 11201, United States"
                  instagram="https://www.instagram.com/brazoswine"
                />
                <DondeComprarInfo
                  country="Spain"
                  company="Brazos Wine Imports"
                  website="http://www.brazoswine.com"
                  address="2 Prince St Suite 4309, Brooklyn, NY 11201, United States"
                  instagram="https://www.instagram.com/brazoswine"
                />
                <DondeComprarInfo
                  country="Canada"
                  company="Brazos Wine Imports"
                  website="http://www.brazoswine.com"
                  address="2 Prince St Suite 4309, Brooklyn, NY 11201, United States"
                  instagram="https://www.instagram.com/brazoswine"
                />
                <DondeComprarInfo
                  country="Peru"
                  company="Brazos Wine Imports"
                  website="http://www.brazoswine.com"
                  address="2 Prince St Suite 4309, Brooklyn, NY 11201, United States"
                  instagram="https://www.instagram.com/brazoswine"
                />
                <DondeComprarInfo
                  country="Japan"
                  company="Brazos Wine Imports"
                  website="http://www.brazoswine.com"
                  address="2 Prince St Suite 4309, Brooklyn, NY 11201, United States"
                  instagram="https://www.instagram.com/brazoswine"
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default DondeComprar;
