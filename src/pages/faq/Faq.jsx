import Layout from "../../layouts/layout/Layout";
import AccordionPanel from "../../components/AccordionPanel";

import "./faq.scss";

import { faqItems } from "../../constants/index";

import {
  faqMobilePrimaryImg,
  faqTabletPrimaryImg,
  faqDesktopPrimaryImg,
} from "../../utils";

const Faq = () => {
  return (
    <>
      <Layout isColoredPage={true}>
        <div className="faq">
          <h1 className="faq__heading text-heading-primary">FAQs</h1>
          <div className="faq__accordion">
            {faqItems.map((item) => (
              <AccordionPanel
                key={item.id}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
          <img
            className="faq__image"
            src={faqMobilePrimaryImg}
            srcSet={`${faqMobilePrimaryImg} 750w, ${faqTabletPrimaryImg} 1206w, ${faqDesktopPrimaryImg} 1760w`}
            alt=""
          />
        </div>
      </Layout>
    </>
  );
};

export default Faq;
