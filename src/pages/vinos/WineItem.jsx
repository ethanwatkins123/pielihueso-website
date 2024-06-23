import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { scrollVariants, scrollVariantsMobile } from "../../utils/animations";

const WineItem = ({ wine, isFirstArchive }) => {
  const { t } = useTranslation("vinos");
  const [isFlipped, setIsFlipped] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 700 });

  const handleClick = () => {
    setIsFlipped(!isFlipped);

    setTimeout(() => {
      setIsFlipped(false);
    }, 3000);
  };

  return (
    <motion.li
      variants={isDesktop ? scrollVariants : scrollVariantsMobile}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <article className="vinos__content">
        <motion.div className="vinos__body">
          <h2 className="vinos__type">{t(wine.type)}</h2>
          <h3 className="vinos__sub-heading">{wine.title}</h3>
          <div className="vinos__descriptions-wrapper">
            <p className="vinos__description">{t(wine.details)}</p>
            <p className="vinos__description">{t(wine.detailsCont)}</p>
          </div>
        </motion.div>
        <div className="container">
          <button className="flip-button" onClick={handleClick}>
            <span>{t("button")}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="11"
              viewBox="0 0 19 11"
              fill="none"
              focusable="false"
            >
              <path
                d="M17.93 1.54553C16.6902 0.550575 14.3774 0.0307112 11.0567 0.0012154C8.64701 -0.0193263 6.60924 0.227175 6.52372 0.237709C6.21202 0.276159 5.99332 0.538988 6.03523 0.824992C6.07713 1.111 6.36356 1.31167 6.67526 1.27322C6.69535 1.27059 8.72967 1.02514 11.0596 1.04568C14.0508 1.0736 16.1672 1.51814 17.1804 2.33191C17.6373 2.69903 17.8594 3.13725 17.8594 3.67134C17.8594 4.08112 17.6643 4.44034 17.263 4.76901C16.3945 5.48059 14.1696 6.36968 8.50293 6.56509C5.65637 6.66306 2.98719 6.5456 1.57281 6.45343L3.98426 3.10987C4.15761 2.86916 4.08586 2.5447 3.82353 2.38564C3.56121 2.22657 3.20761 2.29241 3.03426 2.53312L0.094139 6.61092C0.0901208 6.61671 0.0861027 6.6225 0.0826586 6.62882C0.0786405 6.63462 0.0746224 6.64041 0.0711783 6.6462C0.063142 6.65885 0.0562538 6.67201 0.0499396 6.68571C0.0476435 6.69098 0.0453474 6.69624 0.0430514 6.70151C0.0390332 6.71099 0.0344411 6.72047 0.030997 6.73048C0.0287009 6.73627 0.0269789 6.74154 0.0252568 6.74733C0.0218127 6.75787 0.0189426 6.76788 0.0160725 6.77841C0.0149245 6.78315 0.0132024 6.78842 0.0120544 6.79316C0.00516616 6.82476 0.00114804 6.85636 0 6.88849C0 6.89376 0 6.89955 0 6.90482C0 6.91483 0 6.92536 0.00114804 6.93537C0.00114804 6.94169 0.00229607 6.94801 0.00287009 6.95433C0.00401813 6.96434 0.00574018 6.97435 0.00746224 6.98383C0.00861027 6.98962 0.00918429 6.99489 0.0103323 7.00068C0.0132024 7.0149 0.0172205 7.02912 0.0212387 7.04282C0.0229607 7.04861 0.0252568 7.05441 0.0275529 7.0602C0.030997 7.06915 0.0338671 7.07864 0.0378852 7.08759C0.0401813 7.09338 0.0430514 7.09918 0.0453474 7.10497C0.0493656 7.11392 0.0539577 7.12288 0.0585498 7.13131C0.0614199 7.13657 0.06429 7.14131 0.0671601 7.14658C0.0729003 7.15659 0.0792145 7.16607 0.0861027 7.17608C0.0883988 7.17976 0.0906949 7.18292 0.0929909 7.18661C0.102175 7.19925 0.11136 7.21137 0.121692 7.22348L3.19498 10.8009C3.30749 10.9315 3.47396 11 3.64272 11C3.76613 11 3.89069 10.9631 3.99517 10.8878C4.24199 10.7093 4.28447 10.3806 4.08988 10.1541L1.82653 7.51949C2.95332 7.58638 4.55483 7.64801 6.2964 7.64801C7.03 7.64801 7.78885 7.63695 8.54713 7.61061C13.3689 7.44417 16.557 6.75102 18.023 5.55012C18.6711 5.01919 19 4.38767 19 3.67292C19 2.83124 18.6407 2.11543 17.9312 1.54659L17.93 1.54553Z"
                fill="black"
              />
            </svg>
          </button>
          <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                {" "}
                <picture>
                  <source
                    type="image/avif"
                    srcSet={`${wine.imgXlAvif} 3200w, ${wine.imgLgAvif} 1950w, ${wine.imgMdAvif} 1350w`}
                    media="(min-width: 450px)"
                    sizes="(min-width: 900px) 70vw, 90vw"
                  />
                  <source
                    type="image/png"
                    srcSet={`${wine.imgXlPng} 3200w, ${wine.imgLgPng} 1950w, ${wine.imgMdPng} 1350w`}
                    media="(min-width: 450px)"
                    sizes="(min-width: 900px) 70vw, 90vw"
                  />
                  <source
                    type="image/avif"
                    srcSet={`${wine.imgSmAvif} 350w`}
                    media="(max-width: 449px)"
                    sizes="50vw"
                  />
                  <source
                    type="image/png"
                    srcSet={`${wine.imgSmPng} 350w`}
                    media="(max-width: 449px)"
                    sizes="50vw"
                  />
                  <img
                    src={wine.imgLgPng}
                    alt={`${t("alt-text1")} ${wine.title}`}
                  />
                </picture>
              </div>
              <div className="flip-card-back">
                <picture>
                  <source
                    type="image/avif"
                    srcSet={`${wine.imgReverseXlAvif} 3200w, ${wine.imgReverseLgAvif} 1950w, ${wine.imgReverseMdAvif} 1350w`}
                    media="(min-width: 450px)"
                    sizes="(min-width: 900px) 70vw, 90vw"
                  />
                  <source
                    type="image/png"
                    srcSet={`${wine.imgReverseXlPng} 3200w, ${wine.imgReverseLgPng} 1950w, ${wine.imgReverseMdPng} 1350w`}
                    media="(min-width: 450px)"
                    sizes="(min-width: 900px) 70vw, 90vw"
                  />
                  <source
                    type="image/avif"
                    srcSet={`${wine.imgReverseSmAvif} 350w`}
                    media="(max-width: 449px)"
                    sizes="50vw"
                  />
                  <source
                    type="image/png"
                    srcSet={`${wine.imgReverseSmPng} 350w`}
                    media="(max-width: 449px)"
                    sizes="50vw"
                  />
                  <img
                    src={wine.imgReverseLgPng}
                    alt={`${t("alt-text2")} ${wine.title}`}
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </article>
      {/* add section break between current and archive wines when 'all' displayed */}
      {isFirstArchive && (
        <>
          <motion.hr
            variants={isDesktop ? scrollVariants : scrollVariantsMobile}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="vinos__section-break"
            aria-hidden="true"
          />
          <motion.h2
            variants={isDesktop ? scrollVariants : scrollVariantsMobile}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="vinos__heading-archive text-heading-primary"
          >
            {t("subtitle")}
          </motion.h2>
        </>
      )}
    </motion.li>
  );
};

export default WineItem;
