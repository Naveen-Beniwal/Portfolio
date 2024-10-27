// import React, { useRef } from "react";
// import vid from "../assets/testvid.mp4";
// import netflix from "../assets/netflix.mp4";
// import sidcup from "../assets/sidcup.mp4";
// import { motion } from "framer-motion";
// import styles from "./Projects.module.css";

// const projectData = [
//   {
//     title: "NETFLIX CLONE",
//     description:
//       "A clone of Netflix that allows users to browse and watch trailers for movies and series, featuring a sleek UI and advanced API integration.",
//     skills: ["React", "API Integration", "CSS Animations", "Responsive Design"],
//     video: netflix,
//   },
//   {
//     title: "Project 2",
//     description:
//       "An interactive project focused on showcasing a location-based service with advanced features for user engagement.",
//     skills: [
//       "JavaScript",
//       "UI/UX Design",
//       "Responsive Layouts",
//       "API Handling",
//     ],
//     video: sidcup,
//   },
// ];

// const Projects = () => {
//   const container = useRef(null);

//   return (
//     <>
//       <div className="text-8xl text-[#AA9E8B] text-center mt-24">
//         MAJOR WORK
//       </div>
//       <div ref={container} className="h-auto relative">
//         {projectData.map((project, index) => (
//           <React.Fragment key={index}>
//             <Section1 project={project} />
//             <Section2 project={project} />
//           </React.Fragment>
//         ))}
//       </div>
//     </>
//   );
// };

// const Section1 = ({ project }) => {
//   return (
//     <motion.div className="sticky top-0 h-screen text-[4vw] flex flex-col items-center justify-center text-white mt-10 mb-16 pb-[10vh]">
//       <p>{project.title}</p>
//       <div className="flex gap-4">
//         <div
//           className={`relative border-4 border-gray-400 rounded-lg p-2 ${styles.videoContainer}`}
//         >
//           <video
//             src={project.video}
//             autoPlay
//             loop
//             muted
//             className="w-full rounded-md"
//           />
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const Section2 = ({ project }) => {
//   return (
//     <motion.div className="relative h-screen flex flex-col items-center justify-center bg-[#F5F5F5] text-center py-16 px-8 shadow-lg rounded-lg max-w-[80%] mx-auto">
//       <h2 className="text-6xl font-semibold text-[#AA9E8B] mb-8">
//         {project.title}
//       </h2>
//       <p className="text-2xl text-gray-700 mb-10 max-w-[75%] leading-relaxed">
//         {project.description}
//       </p>
//       <h3 className="text-3xl font-medium text-gray-800 mb-6">
//         Skills I Have Learned
//       </h3>
//       <ul className="list-disc list-inside text-2xl text-gray-600 max-w-[70%] space-y-4">
//         {project.skills.map((skill, index) => (
//           <li key={index} className="ml-6">
//             {skill}
//           </li>
//         ))}
//       </ul>
//     </motion.div>
//   );
// };

// export default Projects;
import React, { useRef } from "react";
import netflix from "../assets/netflix.mp4";
import sidcup from "../assets/sidcup.mp4";
import { motion } from "framer-motion";
import styles from "./Projects.module.css";

const projectData = [
  {
    title: "NETFLIX CLONE",
    description:
      "A clone of Netflix that allows users to browse and watch trailers for movies and series, featuring a sleek UI and advanced API integration.",
    skills: ["React", "API Integration", "CSS Animations", "Responsive Design"],
    video: netflix,
  },
  {
    title: "Project 2",
    description:
      "An interactive project focused on showcasing a location-based service with advanced features for user engagement.",
    skills: [
      "JavaScript",
      "UI/UX Design",
      "Responsive Layouts",
      "API Handling",
    ],
    video: sidcup,
  },
];

const Projects = () => {
  const container = useRef(null);

  return (
    <>
      <div className="text-8xl text-[#AA9E8B] text-center mt-24">
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

const Section1 = ({ project }) => {
  return (
    <motion.div className="sticky top-0 min-h-screen flex flex-col items-center justify-center text-white bg-[#222222] py-10 px-6 space-y-8 shadow-lg rounded-lg">
      <h2 className="text-5xl font-bold mb-4">{project.title}</h2>
      <div className="flex gap-4">
        <div
          className={`relative border-4 border-gray-400 rounded-lg p-2 bg-black ${styles.videoContainer}`}
        >
          <video
            src={project.video}
            autoPlay
            loop
            muted
            className="w-full rounded-md"
          />
        </div>
      </div>
    </motion.div>
  );
};

const Section2 = ({ project }) => {
  return (
    <motion.div className="relative min-h-screen flex items-center justify-center bg-[#141414] py-10 px-4 md:px-8 shadow-2xl rounded-3xl max-w-[95%] mx-auto transition-transform transform hover:scale-105 duration-300">
      <div className="bg-[#1E1E1E] p-8 md:p-12 lg:p-16 rounded-xl shadow-lg w-full max-w-[90%] border-t-4 border-b-4 border-[#AA9E8B] relative overflow-hidden flex flex-col md:flex-row">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('/path/to/subtle-pattern.png')] opacity-10 pointer-events-none"></div>

        {/* Left Side: Title and Description */}
        <div className="flex-1 md:pr-10 mb-8 md:mb-0 flex flex-col">
          <h2 className="text-7xl md:text-8xl font-extrabold text-[#AA9E8B] mb-4 border-b-4 border-gray-300 pb-2 transition-all duration-300 hover:text-[#EB5939] font-teko">
            {project.title}
          </h2>
          <div
            className={`text-lg md:text-2xl lg:text-4xl text-gray-300 leading-snug mb-6 font-light font-teko ${styles.description}`}
          >
            {project.description}
          </div>
        </div>

        {/* Right Side: Skills Section */}
        <div className="flex-1 md:pl-10">
          <h3 className="text-6xl md:text-7xl font-semibold text-[#AA9E8B] mb-4 font-teko">
            Skills I Have Learned
          </h3>
          <ul className="text-lg md:text-2xl text-gray-300 space-y-4 font-medium">
            {project.skills.map((skill, index) => (
              <li
                key={index}
                className="flex items-center transform transition-transform duration-200 hover:scale-105"
              >
                <span className="mr-3 bg-gradient-to-br from-[#AA9E8B] to-[#EB5939] text-white font-bold rounded-full w-8 h-8 flex items-center justify-center text-lg">
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
