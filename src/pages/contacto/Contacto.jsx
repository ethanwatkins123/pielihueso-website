import Layout from "../../layouts/layout/Layout";
import ContactoInfo from "./ContactoInfo";
// replace
import imageContacto from "../../assets/images/03 2.png";

import "./contacto.scss";

const Contacto = () => {
  return (
    <>
      <Layout>
        <div className="contacto">
          <h1 className="contacto__heading text-heading-primary">Contacto</h1>

          <div className="contacto__container">
            {/* add srcset */}
            <div className="contacto__image-wrapper">
              <img className="contacto__image" src={imageContacto} alt="" />
            </div>

            <div className="contacto__content">
              <p className="contacto__intro text-intro">
                On the website you can find the necessary information if you
                want to invest, if you want a professional contact or if you
                just want to find where to buy our wines. For any other request
                you can contact us by email.
              </p>
              <div className="contacto__info-container">
                <ContactoInfo
                  heading="General Enquiries"
                  email="ceciliadickinson@grupobart.com"
                />
                <ContactoInfo
                  heading="Import Enquiries"
                  email="celinabartolome@grupobart.com"
                />
                <ContactoInfo
                  heading="Instagram"
                  url="https://www.instagram.com/pielihueso/?hl=en"
                  text="@pielihueso"
                />
                <ContactoInfo
                  heading="Address"
                  text="Finca Los Parrales. Los Sauces, Mendoza, Argentina"
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contacto;
