import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import "./infiniteScrollAnim.scss";

const InfiniteScrollAnim = ({ items, speed }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const scrollerRef = useRef(null);
  const [dragStart, setDragStart] = useState(0);
  const [dragging, setDragging] = useState(false);

  // Determine the namespace based on the current route
  const getNamespace = () => {
    if (location.pathname.includes("/la-finca")) {
      return "finca";
    } else if (location.pathname.includes("/nuestra-historia")) {
      return "historia";
    }
    return "equipo"; // default namespace if neither
  };

  // Use the dynamic namespace for translation
  const namespace = getNamespace();

  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  const handleDragStart = (e) => {
    setDragStart(e.clientX || e.touches[0].clientX);
    setDragging(true);
  };

  const handleDragMove = (e) => {
    if (dragging) {
      const currentX = e.clientX || e.touches[0].clientX;
      const dragDistance = currentX - dragStart;
      const currentTransform = scrollerRef.current.style.transform;
      const regex = /translateX\((-?\d+\.?\d*)px\)/;
      const match = regex.exec(currentTransform);
      const currentTranslate = match ? parseFloat(match[1]) : 0;

      // Calculate new position
      let newTranslate = currentTranslate + dragDistance;

      // Bounds checking (example values, adjust according to your content's width)
      const maxTranslate = 0; // assuming 0 is the starting position
      const minTranslate = -5000; // assuming -5000px is the end of your content

      // Apply bounds
      if (newTranslate > maxTranslate) newTranslate = maxTranslate;
      if (newTranslate < minTranslate) newTranslate = minTranslate;

      // Update the transform property
      scrollerRef.current.style.transform = `translateX(${newTranslate}px)`;

      setDragStart(currentX);
    }
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  return (
    <div
      className="scroller"
      data-speed={speed}
      onMouseDown={handleDragStart}
      onTouchStart={handleDragStart}
      onMouseMove={handleDragMove}
      onTouchMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onTouchEnd={handleDragEnd}
      onMouseLeave={handleDragEnd}
    >
      <ul className="scroller__inner" ref={scrollerRef}>
        {items.map((item) => (
          <li key={item.id}>
            <div className="scroller__image-wrapper">
              <figure className="scroller__image">
                {item.useSrcSet ? (
                  <img
                    src={item.imgMobile}
                    alt={t(`${namespace}:${item.altText}`)}
                    srcSet={`${item.imgMobile} ${item.imgMobileSize}, ${item.imgDesktop} ${item.imgDesktopSize}`}
                    sizes={item.sizes}
                  />
                ) : (
                  <img src={item.img} alt={t(`${namespace}:${item.altText}`)} />
                )}
              </figure>
              <figcaption className="scroller__slide-captions">
                {item.doubleCaption ? (
                  <>
                    <h2 className="text-heading-primary">{item.caption}</h2>
                    <p className="text-heading-secondary">
                      {" "}
                      {t(`${namespace}:${item.caption2}`)}
                    </p>
                  </>
                ) : (
                  <p className="text-figcaption">
                    {t(`${namespace}:${item.caption}`)}
                  </p>
                )}
              </figcaption>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteScrollAnim;
