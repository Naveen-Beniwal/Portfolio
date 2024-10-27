// "use client";
// import useMousePosition from "../utils/MouseMove.js";
// import React, { useState, useEffect } from "react";
// import heroimg from "../assets/img.png";
// import styles from "./HeroPage.module.css";
// import { motion } from "framer-motion";
// import Navbar from "./Navbar.jsx";
// import Aboutme from "./Aboutme.jsx";
// const HeroPage = () => {
//   const [isHovered, setIsHovered] = useState(false);
//   const size = isHovered ? 650 : 40;
//   const { x, y } = useMousePosition();

//   return (
//     <>
//       <Navbar />
//       <div className={styles.main}>
//         <h1
//           className={`${styles.name} text-base md:text-lg lg:text-xl xl:text-4xl text-[#AA9E8B] text-center `}
//         >
//           NAVEEN BENIWAL
//         </h1>
//         <motion.div
//           className={`${styles.mask} `}
//           animate={{
//             webkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
//             WebkitMaskSize: `${size}px ${size}px`,
//           }}
//           transition={{
//             type: "tween",
//             duration: 0.3,
//             // ease: [0.65, 0, 0.35, 1],
//           }}
//         >
//           <p
//             className={`text-base md:text-lg lg:text-xl xl:text-7xl 2xl:text-[10rem] text-black ${styles.para}`}
//             onMouseEnter={() => {
//               setIsHovered(true);
//             }}
//             onMouseLeave={() => {
//               setIsHovered(false);
//             }}
//           >
//             Hiding the <span className="block"> Mess Behind the</span> Scenes
//           </p>
//         </motion.div>
//         <div className={`${styles.body} `}>
//           <p
//             className={`text-base md:text-lg lg:text-2xl xl:text-7xl 2xl:text-[10rem] ${styles.para} `}
//           >
//             Building
//             <span className="text-red-500 block">Impressive Things </span>on the
//             Web
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HeroPage;

"use client";
import useMousePosition from "../utils/MouseMove.js";
import React, { useState } from "react";
import heroimg from "../assets/img.png"; // You may or may not need this import
import styles from "./HeroPage.module.css";
import { motion } from "framer-motion";
import Projects from "./Projects.jsx";
import Navbar from "./Navbar.jsx";

const HeroPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 450 : 40;
  const { x, y } = useMousePosition();

  return (
    <>
      {/* <Navbar /> */}
      <div
        className={`${styles.main} flex flex-col items-center justify-center h-screen`}
      >
        <h1
          className={`text-base md:text-lg lg:text-xl xl:text-4xl text-[#AA9E8B] text-center mb-4 `}
          style={{
            fontFamily: "'Rubik Wet Paint', system-ui",
            fontWeight: 400,
          }}
        >
          NAVEEN BENIWAL
        </h1>
        <motion.div
          className={`${styles.mask} mb-4`} // Adjust margins for spacing
          animate={{
            webkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px ${size}px`,
          }}
          transition={{
            type: "tween",
            duration: 0.3,
          }}
        >
          <p
            className={`text-4xl md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-[7rem] text-black ${styles.para}`}
            style={{
              fontFamily: "'Rubik Wet Paint', system-ui",
              fontWeight: 400,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Hiding the<span className="block"> Mess Behind the</span> Scenes
          </p>
        </motion.div>
        <div className={`${styles.body} text-center`}>
          <p
            className={`text-4xl md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-[7rem] text-center ${styles.para}`}
            style={{
              fontFamily: "'Rubik Wet Paint', system-ui",
              fontWeight: 400,
            }}
          >
            Building
            <span className="text-red-500 block">Impressive Things </span>on the
            Web
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroPage;
