"use client";
import useMousePosition from "../utils/MouseMove.js";
import React, { useState, useEffect } from "react";
import heroimg from "../assets/img.png";
import styles from "./Aboutme.module.css";
import { motion } from "framer-motion";
import Navbar from "./Navbar.jsx";
import Paragraph from "./Paragraph.jsx";

const paragraph =
  "I’m a web developer who crafts captivating projects, pixel by pixel.With a blend of hard work and humor ,I turn ideas into engaging experiences.Let’s create something inspiring together and make the web vibrant place!";

const Aboutme = () => {
  return (
    <>
      <h1 className="text-4xl text-[#AA9E8B] text-center">ABOUT ME</h1>
      <Paragraph value={paragraph}></Paragraph>
      {/* <div style={{ height: "100vh" }}></div> */}
    </>
  );
};

// about me with red ball

// // const Aboutme = () => {
// //   const [isHovered, setIsHovered] = useState(false);
// //   const size = isHovered ? 650 : 40;
// //   const { x, y } = useMousePosition();
// //   const [mousePosition, setMousePosition] = useState({ x: x, y: y });

// //   return (
// //     <>
// //       <div className={styles.main}>
// //         <h3 className="text-4xl text-[#AA9E8B]">ABOUT ME</h3>
// //         <div
// //           className={` text-base md:text-lg lg:text-xl xl:text-5xl 2xl:text-[10rem] ${styles.body}`}
// //         >
// //           <p>
// //             I’m a web developer who crafts captivating projects, pixel by pixel.
// //             With a blend of hard work and humor, I turn ideas into engaging
// //             experiences. Let’s create something inspiring together and make the
// //             web a vibrant place!
// //           </p>
// //           {/* <Paragraph value={paragraph}></Paragraph> */}
// //         </div>
// //         <motion.div
// //           animate={{
// //             webkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
// //             WebkitMaskSize: `${size}px ${size}px`,
// //           }}
// //           transition={{ type: "tween", duration: 0.3 }}
// //           className={`text-base md:text-lg lg:text-xl xl:text-5xl ${styles.mask}`}
// //         >
// //           <p
// //             onMouseMove={() => {
// //               setIsHovered(true);
// //             }}
// //             onMouseLeave={() => {
// //               setIsHovered(false);
// //             }}
// //           >
// //             I’m a web developer who’s spent more time hunting down bugs than
// //             actually coding. If you need a pro at turning simple issues into
// //             epic quests, I’m your person! Let’s build something awesome—after I
// //             find that semicolon!
// //           </p>
// //         </motion.div>
// //       </div>
// //     </>
// //   );
// // };

export default Aboutme;
