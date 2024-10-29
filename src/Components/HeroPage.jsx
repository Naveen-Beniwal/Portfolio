import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import useMousePosition from "../utils/MouseMove.js";
import React, { useState } from "react";
import styles from "./HeroPage.module.css";
import { motion } from "framer-motion";
import FramerMagnetic from "../utils/FramerMagnetic.jsx";

const HeroPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null); // Track which icon is hovered
  const { x, y } = useMousePosition();

  let size = isHovered ? 550 : 55; // Size changes on paragraph hover

  const handleMouseEnter = (icon) => {
    setHoveredIcon(icon);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <>
      <div
        className={`${styles.main} flex flex-col items-center justify-center h-screen  relative font-[teko]`}
      >
        {/* Icons Container */}
        <div
          className={`absolute left-[5vw] top-[70vh] transform -translate-y-1/2 flex flex-col space-y-[7vh] ${styles.socialContainer}`}
        >
          <FramerMagnetic>
            <motion.div
              whileHover={{ scale: 1.2 }} // Scale on hover
              transition={{ type: "spring", stiffness: 300 }}
              onMouseEnter={() => handleMouseEnter("github")}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="https://github.com/Naveen-Beniwal/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#AA9E8B]"
              >
                <FaGithub
                  className={`text-3xl ${
                    hoveredIcon === "github" ? "text-black" : "#AA9E8B"
                  } hover:text-red-500 transition`}
                />
              </a>
            </motion.div>
          </FramerMagnetic>
          <FramerMagnetic>
            <motion.div
              whileHover={{ scale: 1.2 }} // Scale on hover
              transition={{ type: "spring", stiffness: 300 }}
              onMouseEnter={() => handleMouseEnter("linkedin")}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="https://linkedin.com/in/Naveen-Beniwal-40b719313"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#AA9E8B]"
              >
                <FaLinkedin
                  className={`text-3xl ${
                    hoveredIcon === "linkedin" ? "text-black" : "#AA9E8B"
                  } hover:text-red-500 transition`}
                />
              </a>
            </motion.div>
          </FramerMagnetic>
          <FramerMagnetic>
            <motion.div
              whileHover={{ scale: 1.2 }} // Scale on hover
              transition={{ type: "spring", stiffness: 300 }}
              // exit={{ scale: 2, transition: { duration: 1.5 } }}
              onMouseEnter={() => handleMouseEnter("instagram")}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="https://www.instagram.com/naveen_beniwal_265/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#AA9E8B]"
              >
                <FaInstagram
                  className={`text-3xl ${
                    hoveredIcon === "instagram" ? "text-black" : "#AA9E8B"
                  } hover:text-red-500 transition`}
                />
              </a>
            </motion.div>
          </FramerMagnetic>
        </div>

        <h1
          className={`text-xl md:text-2xl lg:text-[3rem] xl:text-[3rem] text-[#AA9E8B] text-center mb-4`}
          style={{
            fontFamily: "'teko', system-ui",
            fontWeight: 400,
          }}
        >
          NAVEEN BENIWAL
        </h1>
        <motion.div
          className={`${styles.mask} mb-4`}
          animate={{
            webkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px ${size}px`,
          }}
          exit={{ size: 55, transition: { duration: 0.7 } }}
          transition={{ type: "tween", duration: 0.18 }}
        >
          <p
            className={`text-6xl md:text-8xl lg:text-[7rem] xl:text-[7rem] 2xl:text-[7rem]  text-black ${styles.para}`}
            style={{
              fontFamily: "'teko', system-ui",
              fontWeight: 400,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Don’t Worry,
            <span className="block"> My Code Works</span>
            <span className="block"> 50%</span>
            of the Time!
          </p>
        </motion.div>
        <div className={`${styles.body} text-center`}>
          <p
            className={`text-6xl md:text-8xl lg:text-[7rem] xl:text-[7rem] 2xl:text-[7rem]  text-center  ${styles.para}`}
            style={{
              fontFamily: "'teko', system-ui",
              fontWeight: 400,
            }}
          >
            Creating
            <span className="text-red-500 block"> Digital Wonders</span>
            <span className="text-red-500 block"> ...</span>or Just Weird Stuff!
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroPage;
