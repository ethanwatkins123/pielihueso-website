import { useTranslation } from "react-i18next";
import Layout from "../../layouts/layout/Layout";
import AccordionPanel from "../../components/AccordionPanel";
import Curve from "../../layouts/curveTransition/Curve";
import "./faq.scss";
import { faqItems } from "../../constants/index";
import {
  faqMobilePrimaryImg,
  faqTabletPrimaryImg,
  faqDesktopPrimaryImg,
} from "../../utils";

const Faq = () => {
  const { t } = useTranslation("faq");

  return (
    <Curve>
      <Layout isColoredPage={true}>
        <section className="faq">
          <h1 className="faq__heading text-heading-primary">FAQs</h1>
          <section className="faq__accordion">
            {faqItems.map((item) => (
              <AccordionPanel
                key={item.id}
                question={t(item.question)}
                answer={t(item.answer)}
              />
            ))}
          </section>
          <img
            className="faq__image"
            src={faqMobilePrimaryImg}
            srcSet={`${faqMobilePrimaryImg} 750w, ${faqTabletPrimaryImg} 1206w, ${faqDesktopPrimaryImg} 1760w`}
            alt="Pielihueso broken glass logo"
          />
        </section>
      </Layout>
    </Curve>
  );
};

export default Faq;
