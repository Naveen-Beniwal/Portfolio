import styles from "./FramerMagnetic.module.css";
("use client");
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const FramerMagnetic = ({ children }) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 100 : 40; // Change size based on hover state
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const mouseMove = (e) => {
    setIsHovered(true);
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2) * 0.94;
    const y = clientY - (top + height / 2) * 1.04;
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
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
        // duration: 0.1,
      }}
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
