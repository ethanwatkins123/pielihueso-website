import { motion } from "framer-motion";

const WineItem = ({ wine, keyCounter, isFirstArchive }) => {
  return (
    <motion.li
      key={`${wine.id}_${keyCounter}`} // Unique key based on wine id and keyCounter
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: "0%", transition: { duration: 0.75 } }}
    >
      <div className="vinos__content">
        <div className="vinos__body">
          <h2 className="vinos__type text-heading-secondary">{wine.type}</h2>
          <h3 className="vinos__sub-heading text-intro">{wine.title}</h3>
          <div className="vinos__descriptions-wrapper">
            <p className="vinos__description text-body">{wine.details1}</p>
            <p className="vinos__description text-body">{wine.details2}</p>
          </div>
        </div>
        <img
          className="vinos__image"
          src={wine.imageMobile}
          alt=""
          srcSet={`${wine.imageMobile} 700w, ${wine.imageTablet} 1509w, ${wine.imageDesktop} 2880w`}
          sizes="(max-width: 700px) 30vh, 100vw"
        />
      </div>
      {/* add section break between current and archive wines when 'all' displayed */}
      {isFirstArchive && (
        <>
          <hr className="vinos__section-break" />
          <h2 className="vinos__heading-archive text-heading-primary">
            Añadas pasadas
          </h2>
        </>
      )}
    </motion.li>
  );
};

export default WineItem;
