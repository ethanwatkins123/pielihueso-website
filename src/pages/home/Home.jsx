import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Layout from "../../layouts/layout/Layout";
import Curve from "../../layouts/curveTransition/Curve";

import "./home.scss";

import { homeImages } from "../../constants";

const Home = () => {
  const [imageNumber, setImageNumber] = useState(0);
  const [cursorStyle, setCursorStyle] = useState("default");
  const { t } = useTranslation("home");

  const next = () => {
    setImageNumber((imageNumber + 1) % homeImages.length);
  };

  const previous = () => {
    setImageNumber((imageNumber - 1 + homeImages.length) % homeImages.length);
  };

  const handleClick = (e) => {
    const containerWidth = document.querySelector(".main").clientWidth;

    const midpoint = containerWidth / 2;

    if (e.clientX < midpoint) {
      previous();
    } else {
      next();
    }
  };

  const handleMouseMove = (e) => {
    const containerWidth = document.querySelector(".main").clientWidth;
    const midpoint = containerWidth / 2;

    if (e.clientX < midpoint) {
      setCursorStyle("custom-cursor-left");
    } else {
      setCursorStyle("custom-cursor");
    }
  };

  const handleMouseLeave = () => {
    setCursorStyle("default");
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      previous();
    } else if (e.key === "ArrowRight") {
      next();
    }
  };

  useEffect(() => {
    const intervalId = setInterval(next, 2000);
    return () => clearInterval(intervalId);
  }, [imageNumber]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [imageNumber]);

  return (
    <>
      <Curve>
        <Layout
          handleClick={handleClick}
          cursorStyle={cursorStyle}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img
            className="home__image"
            src={homeImages[imageNumber].imgMobile}
            alt={t(homeImages[imageNumber].altText)}
            srcSet={`${homeImages[imageNumber].imgMobile} 750w, ${homeImages[imageNumber].imgTablet} 1728w, ${homeImages[imageNumber].imgDesktop} 2880w`}
          />
        </Layout>
      </Curve>
    </>
  );
};

export default Home;
