import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import useMobileDetection from "../../hooks/useMobileDetection";
import { iconSmileyImg, iconSmileyWinkImg } from "../../utils";
import "./curve.scss";

const anim = (variants, custom) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
    custom,
  };
};

export default function Curve({ children }) {
  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    const resize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    resize();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const iconIn = {
    exit: {
      opacity: 1,
      top: "50%",
      transition: {
        duration: 0.75,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const iconOut = {
    initial: { opacity: 1 },
    enter: {
      opacity: 0,
      top: -100,
      transition: {
        duration: 0.75,
        delay: 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <div className="page curve">
      <motion.img
        {...anim(iconIn)}
        className="transitionIconIn"
        src={iconSmileyImg}
        alt=""
      />
      <motion.img
        {...anim(iconOut)}
        className="transitionIconOut"
        src={iconSmileyWinkImg}
        alt=""
      />
      <div
        style={{ opacity: dimensions.width > 0 ? 0 : 1 }}
        className="background"
      ></div>
      {dimensions.width > 0 && <SVG {...dimensions} />}
      {children}
    </div>
  );
}

const SVG = ({ width, height }) => {
  const isMobile = useMobileDetection();
  const y = isMobile ? 120 : 300;

  // const initialPath = `
  //   M0 ${y}
  //   Q${width / 2} 0 ${width} ${y}
  //   L${width} ${height + y}
  //   Q${width / 2} ${height + 2 * y} 0 ${height + y}
  //   L0 0
  // `;

  // const targetPath = `
  //   M0 ${y}
  //   Q${width / 2} 0 ${width} ${y}
  //   L${width} ${height}
  //   Q${width / 2} ${height} 0 ${height}
  //   L0 0
  // `;

  const initialPath = useMemo(
    () => `
  M0 ${y}
  Q${width / 2} 0 ${width} ${y}
  L${width} ${height + y}
  Q${width / 2} ${height + 2 * y} 0 ${height + y}
  L0 0
`,
    [width, height, y]
  );

  const targetPath = useMemo(
    () => `
  M0 ${y}
  Q${width / 2} 0 ${width} ${y}
  L${width} ${height}
  Q${width / 2} ${height} 0 ${height}
  L0 0
`,
    [width, height, y]
  );

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: {
        duration: 0.75,
        delay: 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      d: initialPath,
      transition: {
        duration: 0.75,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const slide = {
    initial: {
      top: `-${y}px`,
    },
    enter: {
      top: "-100vh",
      transition: {
        duration: 0.75,
        delay: 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
      transitionEnd: {
        top: "100vh",
      },
    },
    exit: {
      top: `-${y}px`,
      transition: {
        duration: 0.75,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <motion.svg className="svg" {...anim(slide)}>
      <motion.path
        {...anim(curve)}
        style={{ stroke: "#FF6B00", fill: "#FF6B00" }}
      ></motion.path>
      {/* <motion.image
        className="test-img"
        href={iconSmileyImg}
        x={width / 2 + "px"}
        y={y + height / 2 + "px"}
      /> */}
    </motion.svg>
  );
};
