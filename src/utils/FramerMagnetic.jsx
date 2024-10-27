import styles from "./FramerMagnetic.module.css";
("use client");
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const FramerMagnetic = ({ children }) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 200 : 40; // Change size based on hover state
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const mouseMove = (e) => {
    setIsHovered(true);
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      className={styles.svgItem}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      animate={{ x: position.x, y: position.y }} // Use `position` for movement
      transition={{ type: "spring", stiffness: 120, damping: 10 }}
      ref={ref}
      style={{
        display: "inline-block",
      }} // Ensure it's inline to move smoothly
    >
      {children}
    </motion.div>
  );
};

export default FramerMagnetic;

// "use client";
// import React, { useRef, useState } from "react";
// import { motion } from "framer-motion";

// const FramerMagnetic = ({ children }) => {
//   const ref = useRef(null);
//   const [scale, setScale] = useState(1);
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   const mouseMove = (e) => {
//     const { clientX, clientY } = e;
//     const { width, height, left, top } = ref.current.getBoundingClientRect();
//     const x = clientX - (left + width / 2);
//     const y = clientY - (top + height / 2);
//     setPosition({ x, y });
//   };

//   const mouseEnter = () => {
//     setScale(1.5); // Scale up on hover
//   };

//   const mouseLeave = () => {
//     setScale(1); // Reset scale on mouse leave
//     setPosition({ x: 0, y: 0 }); // Reset position
//   };

//   return (
//     <motion.div
//       ref={ref}
//       onMouseMove={mouseMove}
//       onMouseEnter={mouseEnter}
//       onMouseLeave={mouseLeave}
//       animate={{
//         x: position.x,
//         y: position.y,
//         scale: scale,
//       }}
//       transition={{ type: "spring", stiffness: 420, damping: 20 }}
//       style={{ display: "inline-block", mixBlendMode: "difference" }} // Change blend mode as needed
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default FramerMagnetic;
