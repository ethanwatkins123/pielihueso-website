import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import "@splidejs/react-splide/css";

const SplideCarousel = ({
  items,
  speed,
  pauseOnHover,
  widthSm,
  widthMd,
  widthLg,
  widthXl,
  gapSm,
  gapMd,
  gapLg,
}) => {
  const { t } = useTranslation();
  const location = useLocation();

  const getNamespace = () => {
    if (location.pathname.includes("/la-finca")) {
      return "finca";
    } else if (location.pathname.includes("/nuestra-historia")) {
      return "historia";
    }
    return "equipo";
  };

  const namespace = getNamespace();

  return (
    <Splide
      options={{
        type: "loop",
        drag: "free",
        arrows: false,
        pagination: false,
        lazyLoad: "sequential",
        autoScroll: {
          pauseOnHover: pauseOnHover,
          // pauseOnFocus: true,
          rewind: false,
          speed: speed,
        },
        breakpoints: {
          5000: {
            fixedWidth: widthXl,
            gap: gapLg,
          },
          1900: {
            fixedWidth: widthXl,
            gap: gapMd,
          },
          1200: {
            fixedWidth: widthLg,
            gap: gapSm,
          },
          900: {
            fixedWidth: widthMd,
            gap: gapSm,
            // autoScroll: {},
          },
          600: {
            fixedWidth: widthSm,
            gap: gapSm,
            // autoScroll: {
            //   // pauseOnHover: true,
            //   speed: 1,
            // },
          },
        },
      }}
      extensions={{ AutoScroll }}
    >
      {items.map((item) => (
        <SplideSlide key={item.id}>
          <figure>
            {item.useSrcSet ? (
              // new start
              <picture>
                <source
                  type="image/webp"
                  srcSet={`${item.imgLgWebp} 1800w, ${item.imgMdWebp} 1250w, ${item.imgSmWebp} 900w`}
                  sizes="(max-width: 600px) 85vw, (max-width: 1200px) 35vw, 40vw"
                />
                <source
                  type="image/jpeg"
                  srcSet={`${item.imgLgJpg} 1800w, ${item.imgMdJpg} 1250w, ${item.imgSmJpg} 900w`}
                  sizes="(max-width: 600px) 85vw, (max-width: 1200px) 35vw, 40vw"
                />

                <img
                  src={item.imgMdJpg}
                  width="900"
                  height="900"
                  alt={t(`${namespace}:${item.altText}`)}
                  decoding="async"
                  // loading="lazy"
                  style={{
                    cursor: "grab",
                    border: "1px solid var(--clr-black)",
                    borderRadius: "24px",
                  }}
                />
              </picture>
            ) : (
              // new end
              // <img
              //   src={item.imgMobile}
              //   alt={t(`${namespace}:${item.altText}`)}
              //   srcSet={`${item.imgMobile} ${item.imgMobileSize}, ${item.imgDesktop} ${item.imgDesktopSize}`}
              //   sizes={`(max-width: 700px) ${widthSm}, (max-width: 900px) ${widthMd}, (max-width: 1800px) ${widthLg}, ${widthXl}`}
              //   decoding="async"
              //   style={{
              //     cursor: "grab",
              //     border: "1px solid var(--clr-black)",
              //     borderRadius: "24px",
              //   }}
              // />
              <div>
                <img
                  data-splide-lazy={item.img}
                  src={item.placeholder}
                  alt={t(`${namespace}:${item.altText}`)}
                  style={{
                    cursor: "grab",
                    border: "1px solid var(--clr-black)",
                    borderRadius: "24px",
                  }}
                />
                <div
                  style={{
                    content: "",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.15)",
                    pointerEvents: "none",
                    borderRadius: "24px",
                  }}
                ></div>
              </div>
            )}
          </figure>
          <figcaption className="scroller__slide-captions">
            {item.doubleCaption ? (
              <>
                <h2>{item.caption}</h2>
                <p> {t(`${namespace}:${item.caption2}`)}</p>
              </>
            ) : (
              <p className="text-figcaption">
                {t(`${namespace}:${item.caption}`)}
              </p>
            )}
          </figcaption>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default SplideCarousel;
