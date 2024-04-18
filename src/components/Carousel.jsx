import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import "./carousel.scss";

import alejandro from "../assets/alejandro.jpg";
import celina from "../assets/celina.jpg";
import sebas from "../assets/sebas.jpg";
import jony from "../assets/jony.jpg";
import diego from "../assets/diego.jpg";
import emi from "../assets/emi.jpg";
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";

const slides = [
  { title: "Alejandro", job: "owner", img: alejandro },
  { title: "Celina", job: "owner", img: celina },
  { title: "Jony", job: "vineyards supervisor", img: jony },
  { title: "Sebas", job: "wine consultant", img: sebas },
  { title: "Diego", job: "winery assistant", img: diego },
  { title: "Emi", job: "winemaker", img: emi },
];

const slideGap = 24;

const Carousel = () => {
  const sliderRef = useRef();

  const [sliderPosition, setSliderPosition] = useState(0);
  const [slideWidth, setSlideWidth] = useState(421);

  // responsive functionality (includes slideWidth state above)
  useEffect(() => {
    const updateSlideWidth = () => {
      if (window.innerWidth <= 768) {
        setSlideWidth(375);
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
      {/* <div className="carousel__navigation">
        <button
          disabled={currentSlide === 0}
          onClick={() => goToPreviousSlide()}
          className="carousel__button"
        >
          <span className="sr-only">Previous</span>{" "}
          <img src={arrowLeft} alt="Navigate left in carousel" />
        </button>
        <button
          disabled={scrolledToEndOfSlider || currentSlide === slides.length}
          onClick={() => goToNextSlide()}
          className="carousel__button"
        >
          <span className="sr-only">Right</span>{" "}
          <img src={arrowRight} alt="Navigate right in carousel" />
        </button>
      </div> */}
      <ul
        ref={sliderRef}
        onScroll={(e) => {
          setSliderPosition(e.currentTarget.scrollLeft);
        }}
        className="carousel"
      >
        {slides.map((slide) => (
          <li className="carousel__item" key={slide.title}>
            <div className="slide-center">
              <div className="carousel__image-wrapper">
                <img
                  className="carousel__image"
                  src={slide.img}
                  alt={`${slide.title}, ${slide.job}`}
                />
                <div className="slide__captions">
                  <h2>{slide.title}</h2>
                  <h3>{slide.job}</h3>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Carousel;
