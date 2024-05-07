import { useTranslation } from "react-i18next";
import { useState } from "react";
import FilterButton from "./FilterButton";
import WineItem from "./WineItem";
import Layout from "../../layouts/layout/Layout";
import Curve from "../../layouts/curveTransition/Curve";
import "./vinos.scss";
import { vinos } from "../../constants";

const Vinos = () => {
  const [filter, setFilter] = useState("all");
  const { t } = useTranslation("vinos");

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
        <section className="vinos">
          <h1 className="vinos__heading text-heading-primary">{t("title")}</h1>
          <div
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
          </div>
          <div role="status" aria-live="polite" className="sr-only">
            Selected filter: {filter}
          </div>
          <ul>
            {filteredWines.map((wine, index) => (
              <WineItem
                key={wine.id}
                wine={wine}
                isFirstArchive={
                  filter === "all" && index === firstArchiveIndex - 1
                }
              />
            ))}
          </ul>
        </section>
      </Layout>
    </Curve>
  );
};

export default Vinos;
