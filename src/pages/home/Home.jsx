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
    const intervalId = setInterval(next, 1250);
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
          <picture className="home__image">
            <source
              type="image/avif"
              media="(min-width: 700px)"
              srcSet={`${homeImages[imageNumber].imgXlAvif} 2800w, ${homeImages[imageNumber].imgLgAvif} 1950w`}
              sizes="95vw"
            />
            <source
              type="image/jpeg"
              media="(min-width: 700px)"
              srcSet={`${homeImages[imageNumber].imgXlPng} 2800w, ${homeImages[imageNumber].imgLgPng} 1950w`}
              sizes="95vw"
            />
            <source
              type="image/avif"
              media="(max-width: 699px)"
              srcSet={`${homeImages[imageNumber].imgMdAvif} 1200w, ${homeImages[imageNumber].imgSmAvif} 800w`}
              sizes="95vw"
            />
            <source
              type="image/jpeg"
              media="(max-width: 699px)"
              srcSet={`${homeImages[imageNumber].imgMdJpg} 1200w, ${homeImages[imageNumber].imgSmJpg} 800w`}
              sizes="95vw"
            />
            <img
              src={homeImages[imageNumber].imgMdPng}
              className="home__image"
              fetchPriority="high"
              alt={t(homeImages[imageNumber].altText)}
            />
          </picture>
        </Layout>
      </Curve>
    </>
  );
};

export default Home;
