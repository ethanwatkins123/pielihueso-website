import { motion } from "framer-motion";
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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.7, // Delay of 3 seconds
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <Curve>
      <Layout isColoredPage={true}>
        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="faq"
        >
          <motion.h1
            variants={item}
            className="faq__heading text-heading-primary"
          >
            FAQ
          </motion.h1>
          <motion.section
            variants={container}
            initial="hidden"
            animate="show"
            className="faq__accordion"
          >
            {faqItems.map((item) => (
              <AccordionPanel
                key={item.id}
                question={t(item.question)}
                answer={t(item.answer)}
              />
            ))}
          </motion.section>
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
            <motion.img
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
              viewport={{ once: true, amount: 0.25 }}
              src={faqMdPngImg}
              width="900"
              height="591"
              loading="lazy"
              alt={t("alt-text")}
              className="faq__image"
            />
          </picture>
        </motion.section>
      </Layout>
    </Curve>
  );
};

export default Faq;
