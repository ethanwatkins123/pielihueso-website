import { useState, useMemo, useCallback, useRef, useEffect } from "react";

import "./carousel.scss";

import { iconArrowRightCarouselImg, iconArrowLeftCarouselImg } from "../utils";

const slideGap = 20;

const Carousel = ({ carouselData }) => {
  console.log(carouselData.length);
  const sliderRef = useRef();

  const [sliderPosition, setSliderPosition] = useState(0);
  const [slideWidth, setSlideWidth] = useState(600);

  useEffect(() => {
    const updateSlideWidth = () => {
      if (window.innerWidth <= 1024) {
        setSlideWidth(330);
      } else {
        setSlideWidth(600);
      }
    };

    updateSlideWidth();

    window.addEventListener("resize", updateSlideWidth);

    return () => {
      window.removeEventListener("resize", updateSlideWidth);
    };
  }, []);

  const currentSlide = useMemo(() => {
    return Math.round(sliderPosition / (slideWidth + slideGap));
  }, [sliderPosition]);

  const scrolledToEndOfSlider = useMemo(() => {
    if (!sliderRef.current) return false;
    return (
      sliderRef.current.scrollWidth -
        sliderRef.current.scrollLeft -
        sliderRef.current.clientWidth ===
      0
    );
  }, [sliderPosition]);

  const scrollToSlide = (slider, slideIndex) => {
    if (!slider) return;
    slider.scrollTo({
      left: slideIndex * (slideWidth + slideGap),
      behavior: "smooth",
    });
  };

  const goToNextSlide = useCallback(() => {
    console.log(currentSlide);
    scrollToSlide(sliderRef.current, currentSlide + 1);
  }, [currentSlide]);

  const goToPreviousSlide = useCallback(() => {
    scrollToSlide(sliderRef.current, currentSlide - 1);
  }, [currentSlide]);

  return (
    <>
      <div className="carousel__navigation">
        <button
          disabled={currentSlide === 0}
          onClick={() => goToPreviousSlide()}
          className="carousel__button"
        >
          <span className="sr-only">Previous</span>
          <img src={iconArrowLeftCarouselImg} alt="Navigate left in carousel" />
        </button>
        <button
          disabled={
            scrolledToEndOfSlider || currentSlide === carouselData.length - 2
          }
          onClick={() => goToNextSlide()}
          className="carousel__button"
        >
          <span className="sr-only">Right</span>
          <img
            src={iconArrowRightCarouselImg}
            alt="Navigate left in carousel"
          />
        </button>
      </div>
      <div>
        <ul
          ref={sliderRef}
          onScroll={(e) => {
            setSliderPosition(e.currentTarget.scrollLeft);
          }}
          className="carousel"
        >
          {carouselData.map((item, index) => (
            <li className="carousel__item" key={index}>
              <div className="slide-center">
                <figure className="carousel__image">
                  <img
                    src={item.imgMobile}
                    srcSet={`${item.imgMobile} 750w, ${item.imgDesktop} 1210w`}
                    alt={item.altText}
                  />
                  <figcaption className="text-figcaption">
                    Primer ilustración para el primer vino x @bartnetwork
                  </figcaption>
                </figure>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Carousel;
