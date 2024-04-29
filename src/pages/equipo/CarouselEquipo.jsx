import { useState, useMemo, useCallback, useRef, useEffect } from "react";

import "./carouselEquipo.scss";

import { slidesEquipo } from "../../constants";

import {
  iconArrowRightCarouselImg,
  iconArrowLeftCarouselImg,
} from "../../utils";

const slideGap = 20;

const CarouselEquipo = () => {
  console.log(slidesEquipo.length);
  const sliderRef = useRef();

  const [sliderPosition, setSliderPosition] = useState(0);
  const [slideWidth, setSlideWidth] = useState(421);

  // responsive functionality (includes slideWidth state above)
  useEffect(() => {
    const updateSlideWidth = () => {
      if (window.innerWidth <= 700) {
        setSlideWidth(300);
      } else if (window.innerWidth >= 700 && window.innerWidth <= 900) {
        setSlideWidth(327);
      } else {
        setSlideWidth(421);
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
            scrolledToEndOfSlider || currentSlide === slidesEquipo.length - 2
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
      <ul
        ref={sliderRef}
        onScroll={(e) => {
          setSliderPosition(e.currentTarget.scrollLeft);
        }}
        className="equipo-carousel"
      >
        {slidesEquipo.map((slide) => (
          <li className="equipo-carousel__item" key={slide.title}>
            <div className="slide-center">
              <div className="equipo-carousel__image-wrapper">
                <img
                  className="equipo-carousel__image"
                  src={slide.img}
                  alt={`${slide.title}, ${slide.job}`}
                />
                <div className="equipo-carousel__slide-captions">
                  <h2 className="text-heading-primary">{slide.title}</h2>
                  <h3 className="text-heading-secondary">{slide.job}</h3>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CarouselEquipo;
