import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import "./carouselEquipo.scss";

import alejandro from "../../assets/alejandro.jpg";
import celina from "../../assets/celina.jpg";
import sebas from "../../assets/sebas.jpg";
import jony from "../../assets/jony.jpg";
import diego from "../../assets/diego.jpg";
import emi from "../../assets/emi.jpg";
import arrowLeft from "../../assets/arrow-left.svg";
import arrowRight from "../../assets/arrow-right.svg";

const slides = [
  { title: "Alejandro", job: "owner", img: alejandro },
  { title: "Celina", job: "owner", img: celina },
  { title: "Jony", job: "vineyards supervisor", img: jony },
  { title: "Sebas", job: "wine consultant", img: sebas },
  { title: "Diego", job: "winery assistant", img: diego },
  { title: "Emi", job: "winemaker", img: emi },
];

const slideGap = 24;

const CarouselEquipo = () => {
  const sliderRef = useRef();

  const [sliderPosition, setSliderPosition] = useState(0);
  const [slideWidth, setSlideWidth] = useState(421);

  // responsive functionality (includes slideWidth state above)
  useEffect(() => {
    const updateSlideWidth = () => {
      if (window.innerWidth <= 700) {
        setSlideWidth(311);
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

  console.log(slideWidth);

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
      <div className="equipo-carousel__navigation">
        <button
          disabled={currentSlide === 0}
          onClick={() => goToPreviousSlide()}
          className="equipo-carousel__button"
        >
          <span className="sr-only">Previous</span>{" "}
          <img src={arrowLeft} alt="Navigate left in carousel" />
        </button>
        <button
          disabled={scrolledToEndOfSlider || currentSlide === slides.length}
          onClick={() => goToNextSlide()}
          className="equipo-carousel__button"
        >
          <span className="sr-only">Right</span>{" "}
          <svg
            width="7"
            height="10"
            viewBox="0 0 7 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.000541301 1.16667L3.83381 5L0.000541636 8.83333L1.16719 10L6.1671 5L1.16719 1.87423e-07L0.000541301 1.16667Z"
              fill="#1D1D1B"
            />
          </svg>
          {/* <img src={arrowRight} alt="Navigate right in carousel" /> */}
        </button>
      </div>
      <ul
        ref={sliderRef}
        onScroll={(e) => {
          setSliderPosition(e.currentTarget.scrollLeft);
        }}
        className="equipo-carousel"
      >
        {slides.map((slide) => (
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
