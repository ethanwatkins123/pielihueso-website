import { easeOut } from "framer-motion";

export const defaultAnimations = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};

export const headerNavLinks = {
  initial: { opacity: 0, y: -100 },
  enter: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.05 * i,
    },
  }),
};

export const footerNavLinks = {
  initial: { opacity: 0, y: 100 },
  enter: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.1 * i },
  }),
};

export const menuSlide = {
  initial: { x: "110%" },
  enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: {
    x: "110%",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export const slide = {
  initial: { x: 80 },
  enter: (i) => ({
    x: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.075 * i },
  }),
  exit: (i) => ({
    x: 80,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.075 * i },
  }),
};

export const scale = {
  open: { scale: 1, transition: { duration: 0.3 } },
  closed: { scale: 0, transition: { duration: 0.4 } },
};

// export const mainVariants = {
//   hidden: {
//     // opacity: 0,
//     x: isMobile ? "-110%" : 0,
//   },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: isMobile
//       ? { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
//       : { duration: 1.5, ease: [0.76, 0, 0.24, 1] },
//   },
//   exit: {
//     opacity: 0,
//   },
// };
