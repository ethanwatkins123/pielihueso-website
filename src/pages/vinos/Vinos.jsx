import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import FilterButton from "./FilterButton";
import WineItem from "./WineItem";
import Layout from "../../layouts/layout/Layout";
import Curve from "../../layouts/curveTransition/Curve";
import "./vinos.scss";
import { vinos } from "../../constants";
import {
  containerVariants,
  itemVariants,
  itemVariantsMobile,
} from "../../utils/animations";

const Vinos = () => {
  const [filter, setFilter] = useState("all");
  const { t } = useTranslation("vinos");
  const isDesktop = useMediaQuery({ minWidth: 700 });

  let filteredWines;
  switch (filter) {
    case "all":
      filteredWines = vinos;
      break;
    case "2024":
      filteredWines = vinos.filter((wine) => wine.filter === "2024");
      break;
    case "archive":
      filteredWines = vinos.filter((wine) => wine.filter === "Archive");
      break;
    default:
      filteredWines = vinos;
  }

  const indicatorVariant = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 0.2 } },
  };

  // for later adding a section break between 'Current - 2024' and 'Archive'
  const firstArchiveIndex = filteredWines.findIndex(
    (wine) => wine.filter !== "2024"
  );

  return (
    <Curve>
      <Layout>
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="vinos"
        >
          <motion.h1
            variants={isDesktop ? itemVariants : itemVariantsMobile}
            className="vinos__heading text-heading-primary"
          >
            {t("title")}
          </motion.h1>
          <motion.div
            variants={isDesktop ? itemVariants : itemVariantsMobile}
            className="vinos__filter-buttons"
            role="group"
            aria-label="Filter Wines by Year"
          >
            <FilterButton
              label={t("filter1")}
              isActive={filter === "all"}
              onClick={() => setFilter("all")}
              indicator={filter === "all" ? indicatorVariant : null}
            />
            <FilterButton
              label={t("filter2")}
              isActive={filter === "2024"}
              onClick={() => setFilter("2024")}
              indicator={filter === "2024" ? indicatorVariant : null}
            />
            <FilterButton
              label={t("filter3")}
              isActive={filter === "archive"}
              onClick={() => setFilter("archive")}
              indicator={filter === "archive" ? indicatorVariant : null}
            />
          </motion.div>

          <div role="status" aria-live="polite" className="sr-only">
            Selected filter: {filter}
          </div>
          <motion.ul variants={isDesktop ? itemVariants : itemVariantsMobile}>
            {filteredWines.map((wine, index) => (
              <WineItem
                key={wine.id}
                wine={wine}
                isFirstArchive={
                  filter === "all" && index === firstArchiveIndex - 1
                }
              />
            ))}
          </motion.ul>
        </motion.section>
      </Layout>
    </Curve>
  );
};

export default Vinos;
