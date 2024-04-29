import { useState } from "react";

import FilterButton from "./FilterButton";
import WineItem from "./WineItem";
import Layout from "../../layouts/layout/Layout";

import "./vinos.scss";

import { vinos } from "../../constants";

const Vinos = () => {
  const [filter, setFilter] = useState("all");

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

  // Find index of the first 'Archive' wine (for later adding a section break between 'Current - 2024' and 'Archive' when 'All' is selected)
  const firstArchiveIndex = filteredWines.findIndex(
    (wine) => wine.filter !== "2024"
  );

  return (
    <>
      <Layout>
        <div className="vinos">
          <h1 className="vinos__heading text-heading-primary">Vinos</h1>
          <div className="vinos__filter-buttons" role="group">
            <label className="sr-only">Filter Wines by Year</label>

            <FilterButton
              label="All"
              isActive={filter === "all"}
              onClick={() => setFilter("all")}
              indicator={filter === "all" ? indicatorVariant : null}
            />
            <FilterButton
              label="Current - 2024"
              isActive={filter === "2024"}
              onClick={() => setFilter("2024")}
              indicator={filter === "2024" ? indicatorVariant : null}
            />
            <FilterButton
              label="Archive"
              isActive={filter === "archive"}
              onClick={() => setFilter("archive")}
              indicator={filter === "archive" ? indicatorVariant : null}
            />
          </div>
          {/* add ARIA Live Region for announcing selected filter? */}
          <div role="status" aria-live="polite" className="sr-only">
            Selected filter: {filter}
          </div>
          <ul>
            {filteredWines.map((wine, index) => (
              <WineItem
                key={wine.id}
                wine={wine}
                // keyCounter={keyCounter}
                isFirstArchive={
                  filter === "all" && index === firstArchiveIndex - 1
                }
              />
            ))}
          </ul>
        </div>
      </Layout>
    </>
  );
};

export default Vinos;
