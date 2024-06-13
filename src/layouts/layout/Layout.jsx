import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import useMobileDetection from "../../hooks/useMobileDetection";
import Header from "./header/Header";
import Footer from "./footer/Footer";

import "./layout.scss";

const Layout = ({
  children,
  isColoredPage,
  cursorStyle,
  handleClick,
  onMouseMove,
  onMouseLeave,
}) => {
  const [toggleMain, setToggleMain] = useState(true);
  const isMobile = useMobileDetection();

  const toggleMainVisibility = () => {
    setToggleMain(!toggleMain);
  };

  const mainVariants = {
    hidden: {
      opacity: 0,
      // x: isMobile ? "-110%" : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: isMobile ? 0.8 : 1.5, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <div className={`page-container ${isColoredPage ? "colored-page" : ""}`}>
      <Header toggleMainVisibility={toggleMainVisibility} />
      <div className="dummy-main">
        <AnimatePresence>
          <motion.div
            key={toggleMain ? "visible" : "hidden"}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mainVariants}
            className={`main ${toggleMain ? "" : "hidden"} ${
              cursorStyle === "custom-cursor"
                ? "custom-cursor"
                : cursorStyle === "custom-cursor-left"
                ? "custom-cursor-left"
                : ""
            }`}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            onClick={handleClick}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
