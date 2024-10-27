// "use client";
// import React, { useRef } from "react";
// import styles from "./Paragraph.module.css";
// import { useScroll, motion, useTransform } from "framer-motion";

// const Paragraph = ({ value }) => {
//   const element = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: element,
//     offset: ["start 0.8", "start start"],
//   });
//   const words = value.split("");

//   return (
//     <div className={styles.paragraph} ref={element}>
//       {words.map((word, i) => {
//         const start = i / words.length;
//         const end = start + 1 / words.length;
//         return (
//           <Word key={i} range={[start, end]} progress={scrollYProgress}>
//             {word}
//           </Word>
//         );
//       })}
//     </div>
//   );
// };

// const Word = ({ range, progress, children }) => {
//   const characters = children.split("");
//   const amount = range[1] - range[0];
//   const step = amount / characters.length;

//   return (
//     <span className={styles.word}>
//       {characters.map((character, i) => {
//         const start = range[0] + step * i;
//         const end = range[0] + step * (i + 1);
//         return (
//           <Character key={i} range={[start, end]} progress={progress}>
//             {character}
//           </Character>
//         );
//       })}
//     </span>
//   );
// };

// const Character = ({ children, range, progress }) => {
//   const opacity = useTransform(progress, range, [0, 1]);
//   const color = useTransform(progress, range, ["#FF0000", "#EB5939"]);
//   return (
//     <span className={styles.characterContainer}>
//       <span
//         className={`${styles.shadow} text-base md:text-lg lg:text-xl xl:text-7xl 2xl:text-[10rem] px-3`}
//       >
//         {children}
//       </span>
//       <motion.span
//         style={{ opacity, color }}
//         className="text-base md:text-lg px-0 -mx-3 lg:text-xl px-0 xl:text-7xl 2xl:text-[10rem] px-3"
//       >
//         {children}
//       </motion.span>
//     </span>
//   );
// };

// export default Paragraph;
"use client";
import React, { useRef } from "react";
import styles from "./Paragraph.module.css";
import { useScroll, motion, useTransform } from "framer-motion";

const Paragraph = ({ value }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.8", "start start"],
  });
  const words = value.split("");

  return (
    <div className={`relative ${styles.paragraph}`} ref={element}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </div>
  );
};

const Word = ({ range, progress, children }) => {
  const characters = children.split("");
  const amount = range[1] - range[0];
  const step = amount / characters.length;

  return (
    <span className={styles.word}>
      {characters.map((character, i) => {
        const start = range[0] + step * i;
        const end = range[0] + step * (i + 1);
        return (
          <Character key={i} range={[start, end]} progress={progress}>
            {character}
          </Character>
        );
      })}
    </span>
  );
};

const Character = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const color = useTransform(progress, range, ["#FF0000", "#EB5939"]);

  return (
    <span className={styles.characterContainer}>
      <span
        className={`text-base md:text-lg lg:text-xl xl:text-5xl 2xl:text-[5rem] ${styles.shadow} px-1 md:px-2 lg:px-3`}
      >
        {children}
      </span>
      <motion.span
        style={{ opacity, color }}
        className={`text-base md:text-lg lg:text-xl xl:text-5xl 2xl:text-[5rem] px-1 md:px-2 lg:px-3`}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default Paragraph;
