import { useTranslation } from "react-i18next";
import Layout from "../../layouts/layout/Layout";
import AccordionPanel from "../../components/AccordionPanel";
import Curve from "../../layouts/curveTransition/Curve";
import "./faq.scss";
import { faqItems } from "../../constants/index";
import {
  faqSmPngImg,
  faqSmWebpImg,
  faqMdPngImg,
  faqMdWebpImg,
  faqLgPngImg,
  faqLgWebpImg,
  faqXlPngImg,
  faqXlWebpImg,
} from "../../utils";

const Faq = () => {
  const { t } = useTranslation("faq");

  return (
    <Curve>
      <Layout isColoredPage={true}>
        <section className="faq">
          <h1 className="faq__heading text-heading-primary">FAQ</h1>
          <section className="faq__accordion">
            {faqItems.map((item) => (
              <AccordionPanel
                key={item.id}
                question={t(item.question)}
                answer={t(item.answer)}
              />
            ))}
          </section>
          <picture>
            <source
              type="image/webp"
              srcSet={`${faqXlWebpImg} 2800w, ${faqLgWebpImg} 1800w, ${faqMdWebpImg} 1200w, ${faqSmWebpImg} 700w`}
              sizes="(max-width: 700px) 80vw, 60vw"
            />
            <source
              type="image/png"
              srcSet={`${faqXlPngImg} 2800w, ${faqLgPngImg} 1800w, ${faqMdPngImg} 1200w, ${faqSmPngImg} 700w`}
              sizes="(max-width: 700px) 80vw, 60vw"
            />
            <img
              src={faqMdPngImg}
              width="900"
              height="591"
              alt="Pielihueso broken glass logo"
              className="faq__image"
            />
          </picture>
        </section>
      </Layout>
    </Curve>
  );
};

export default Faq;
