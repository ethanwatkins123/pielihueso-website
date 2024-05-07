import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const WineItem = ({ wine, isFirstArchive }) => {
  const { t } = useTranslation("vinos");

  return (
    <motion.li>
      <article className="vinos__content">
        <div className="vinos__body">
          <h2 className="vinos__type text-heading-secondary">{t(wine.type)}</h2>
          <h3 className="vinos__sub-heading text-intro">{wine.title}</h3>
          <div className="vinos__descriptions-wrapper">
            <p className="vinos__description text-body">{t(wine.details)}</p>
            <p className="vinos__description text-body">
              {t(wine.detailsCont)}
            </p>
          </div>
        </div>
        <img
          className="vinos__image"
          src={wine.imageMobile}
          alt={`${wine.title} - Bottle`}
          srcSet={`${wine.imageMobile} 700w, ${wine.imageTablet} 1509w, ${wine.imageDesktop} 2880w`}
          sizes="(max-width: 700px) 30vh, 100vw"
        />
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
