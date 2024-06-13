import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useState } from "react";

const WineItem = ({ wine, isFirstArchive }) => {
  const { t } = useTranslation("vinos");
  const [flip, setFlip] = useState(false);

  return (
    <motion.li>
      <article className="vinos__content">
        <div className="vinos__body">
          <h2 className="vinos__type">{t(wine.type)}</h2>
          <h3 className="vinos__sub-heading">{wine.title}</h3>
          <div className="vinos__descriptions-wrapper">
            <p className="vinos__description">{t(wine.details)}</p>
            <p className="vinos__description">{t(wine.detailsCont)}</p>
          </div>
        </div>
        <div className="container">
          <button>Flip Me</button>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                {" "}
                <picture>
                  <source
                    srcSet={`${wine.imageFrontXl} 3850w, ${wine.imageFrontLg} 1950w, ${wine.imageFrontMd} 1350w`}
                    media="(min-width: 500px)"
                    type="image/webp"
                    // fix
                    sizes="100vw"
                  />
                  <source
                    srcSet={`${wine.imageFrontSm} 360w`}
                    media="(max-width: 499px)"
                    type="image/webp"
                    // fix
                    sizes="100vw"
                  />
                  <img src={wine.imageFrontXl} alt="" />
                </picture>
              </div>
              <div className="flip-card-back">
                <picture>
                  <source
                    srcSet={`${wine.imageBackXl} 3850w, ${wine.imageBackLg} 1950w, ${wine.imageBackMd} 1350w`}
                    media="(min-width: 500px)"
                    type="image/webp"
                    // fix
                    sizes="100vw"
                  />
                  <source
                    srcSet={`${wine.imageBackSm} 360w`}
                    media="(max-width: 499px)"
                    type="image/webp"
                    // fix
                    sizes="100vw"
                  />
                  <img src={wine.imageBackXl} alt="" />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </article>
      {/* add section break between current and archive wines when 'all' displayed */}
      {isFirstArchive && (
        <>
          <hr className="vinos__section-break" aria-hidden="true" />
          <h2 className="vinos__heading-archive text-heading-primary">
            {t("subtitle")}
          </h2>
        </>
      )}
    </motion.li>
  );
};

export default WineItem;
