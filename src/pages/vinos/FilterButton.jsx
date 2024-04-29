import { useState } from "react";
import { motion } from "framer-motion";

const FilterButton = ({ onClick, label, isActive, indicator }) => {
  return (
    <button
      className={`vinos__filter-button text-heading-secondary ${
        isActive ? "selected" : ""
      }`}
      onClick={onClick}
      aria-label={label}
    >
      {label}
      {isActive && indicator && (
        <motion.div
          variants={indicator}
          initial="hidden"
          animate="visible"
          className="indicator"
        />
      )}

      {/* {isActive && <span className="sr-only">Selected: {label}</span>} */}
    </button>
  );
};

export default FilterButton;
