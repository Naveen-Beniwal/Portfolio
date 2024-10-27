import React, { useRef } from "react";
import { useEffect, useState } from "react";
import netflix from "../assets/netflix.mp4";
import sidcup from "../assets/sidcup.mp4";
import { motion } from "framer-motion";
import styles from "./Projects.module.css";
import Aboutme from "./Aboutme";
const projectData = [
  {
    title: "NETFLIX CLONE",
    description:
      "An immersive Netflix clone built with the MERN stack that allows users to securely browse, watch trailers, and explore a vast database of movies and series. This project features user authentication, dynamic API integration, and a sleek, responsive UI.",
    skills: [
      "MERN Stack (MongoDB, Express, React, Node.js)",
      "User Authentication & Authorization",
      "API Integration",
      "Code Structuring for Scalability",
      "Responsive Design",
    ],
    video: netflix,
  },
  {
    title: "GSAP ANIMATION PROJECT",
    description:
      "A dynamic and visually engaging project showcasing animations powered by GSAP (GreenSock Animation Platform). This project utilizes HTML, CSS, and JavaScript to create smooth and interactive animations that enhance the user experience.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "GSAP Animation",
      "Responsive Design",
    ],
    video: sidcup, // Replace with your actual video link if available
  },
];

const Projects = () => {
  const container = useRef(null);

  return (
    <>
      <div className="text-8xl text-[#AA9E8B] text-center mt-20">
        MAJOR WORK
      </div>
      <div ref={container} className="h-auto relative space-y-20">
        {projectData.map((project, index) => (
          <React.Fragment key={index}>
            <Section1 project={project} />
            <Section2 project={project} />
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

// working
const Section1 = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.7 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false }}
      className="sticky top-0 min-h-screen flex flex-col items-center justify-center text-white bg-[#141414] py-10 px-8 space-y-8 shadow-lg rounded-xl max-w-5xl mx-auto "
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center">
        {project.title}
      </h2>
      <div className="flex justify-center gap-4 w-full">
        <div className="relative border-4 border-gray-500 rounded-xl bg-black shadow-lg hover:shadow-2xl transition-all duration-500 w-full max-w-[1000px] md:max-w-[1100px] lg:max-w-[1200px] aspect-video overflow-hidden hover:scale-105 hover:rotate-1 hover:shadow-[0_0_30px_#EB5939]">
          <motion.video
            src={project.video}
            autoPlay
            loop
            muted
            className="w-full h-full rounded-md object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </motion.div>
  );
};

// const Section1 = ({ project }) => {
//   return (
//     <motion.div className="sticky top-0 min-h-screen flex flex-col items-center justify-center text-white bg-[#141414] py-10 px-8 space-y-8 shadow-lg rounded-xl max-w-5xl mx-auto">
//       <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center">
//         {project.title}
//       </h2>
//       <div className="flex justify-center gap-4 w-full">
//         <div className="relative border-4 border-gray-500 rounded-xl bg-black shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full max-w-[1000px] md:max-w-[1100px] lg:max-w-[1200px] aspect-video">
//           <video
//             src={project.video}
//             autoPlay
//             loop
//             muted
//             className="w-full h-full rounded-md object-cover"
//           />
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const Section1 = ({ project }) => {
//   return (
//     <motion.div className="sticky top-0 min-h-screen flex flex-col items-center justify-center text-white bg-[#222222] py-10 px-6 space-y-8 shadow-lg rounded-lg">
//       <h2 className="text-5xl font-bold mb-4">{project.title}</h2>
//       <div className="flex gap-4">
//         <div
//           className={`relative border-4 border-gray-400 rounded-lg p-2 bg-black ${styles.videoContainer}`}
//         >
//           <video
//             src={project.video}
//             autoPlay
//             loop
//             muted
//             className="w-[80%]  rounded-md"
//           />
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const Section2 = ({ project }) => {
//   return (
//     <motion.div className="relative min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#141414] py-10 px-4 md:px-6 shadow-2xl rounded-3xl max-w-[95%] mx-auto transition-transform transform hover:scale-105 duration-300">
//       <div className="bg-[#1E1E1E] p-6 md:p-8 lg:p-12 rounded-xl shadow-lg w-full max-w-[95%] md:max-w-[90%] border-t-4 border-b-4 border-[#AA9E8B] relative overflow-hidden flex flex-col md:flex-row">
//         {/* Background pattern */}
//         <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-vector/flat-design-black-white-halftone-background_23-2150525303.jpg?semt=ais_hybrid')] opacity-10 pointer-events-none"></div>

//         {/* Left Side: Title and Description */}
//         <div className="flex-1 md:pr-6 mb-6 md:mb-0 flex flex-col items-center md:items-start">
//           <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#AA9E8B]  border-b-4 border-gray-300 pb-2 transition-all duration-300 hover:text-[#EB5939] font-teko text-center md:text-left">
//             {project.title}
//           </h2>
//           <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-snug mb-4 font-light font-teko text-center md:text-left">
//             {project.description}
//           </div>
//         </div>

//         {/* Right Side: Skills Section */}
//         <div className="flex-1 md:pl-6 flex flex-col items-center md:items-start">
//           <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#AA9E8B] mb-4 font-teko text-center md:text-left">
//             Skills I Have Learned
//           </h3>
//           <ul className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 space-y-2 font-medium text-center md:text-left">
//             {project.skills.map((skill, index) => (
//               <li
//                 key={index}
//                 className="flex items-center transform transition-transform duration-200 hover:scale-105"
//               >
//                 <span className="mr-2 bg-gradient-to-br from-[#AA9E8B] to-[#EB5939] text-white font-bold rounded-full w-6 h-6 flex items-center justify-center text-base">
//                   •
//                 </span>
//                 {skill}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </motion.div>
//   );
// };
// import { motion } from "framer-motion";

const Section2 = ({ project }) => {
  return (
    <motion.div className="relative min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#141414] py-10 px-4 md:px-6 shadow-2xl rounded-3xl max-w-[95%] mx-auto transition-transform transform hover:scale-105 duration-300">
      <div className="bg-[#1E1E1E] p-6 md:p-8 lg:p-12 rounded-xl shadow-lg w-full max-w-[95%] md:max-w-[90%] border-t-4 border-b-4 border-[#AA9E8B] relative overflow-hidden flex flex-col md:flex-row">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-vector/flat-design-black-white-halftone-background_23-2150525303.jpg?semt=ais_hybrid')] opacity-10 pointer-events-none"></div>

        {/* Left Side: Title and Description */}
        <div className="flex-1 md:pr-6 mb-6 md:mb-0 flex flex-col items-center md:items-start">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#AA9E8B] border-b-4 border-gray-300 pb-2 transition-all duration-300 hover:text-[#EB5939] font-teko text-center md:text-left">
            {project.title}
          </h2>
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-snug mb-4 font-light font-teko text-center md:text-left">
            {project.description}
          </div>
        </div>

        {/* Right Side: Skills Section */}
        <div className="flex-1 md:pl-6 flex flex-col items-center md:items-start">
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#AA9E8B] mb-4 font-teko text-center md:text-left">
            Skills I Have Learned
          </h3>
          <ul className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 space-y-2 font-medium text-center md:text-left">
            {project.skills.map((skill, index) => (
              <li
                key={index}
                className="flex items-center transform transition-transform duration-200 hover:scale-105"
              >
                <span className="mr-2 bg-gradient-to-br from-[#AA9E8B] to-[#EB5939] text-white font-bold rounded-full w-6 h-6 flex items-center justify-center text-base">
                  •
                </span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
