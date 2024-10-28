import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faNodeJs,
  faBootstrap,
  faSquareGithub,
  faGitAlt,
  faNpm,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const skillsData = [
  {
    category: "Front-End",
    description: "Building responsive and visually appealing user interfaces.",
    skills: [
      { name: "HTML", icon: faHtml5 },
      { name: "CSS", icon: faCss3Alt },
      { name: "JavaScript", icon: faJsSquare },
      { name: "React", icon: faReact },
      { name: "Tailwind CSS", icon: faCode },
      { name: "Framer", icon: faCode },
      { name: "GSAP", icon: faCode },
    ],
  },
  {
    category: "Back-End",
    description: "Creating server-side applications and APIs.",
    skills: [
      { name: "Node.js", icon: faNodeJs },
      { name: "Express", icon: faCode },
    ],
  },
  {
    category: "Databases",
    description: "Working with data storage solutions and managing data.",
    skills: [{ name: "MongoDB", icon: faCode }],
  },
  {
    category: "Tools & Libraries",
    description:
      "Utilizing various tools and libraries for efficient development.",
    skills: [
      { name: "Git", icon: faGitAlt },
      { name: "GitHub", icon: faSquareGithub },
      { name: "npm", icon: faNpm },
      { name: "Bootstrap", icon: faBootstrap },
    ],
  },
  {
    category: "Design",
    description:
      "Creating aesthetic and functional designs for web applications.",
    skills: [
      { name: "Animation", icon: faCode },
      { name: "Responsive Design", icon: faCode },
    ],
  },
];

const Skills = () => {
  const cardVariants = {
    hidden: { opacity: 0, rotate: -5 },
    visible: { opacity: 1, rotate: 0 },
  };

  return (
    <section className="bg-[#141414] text-black py-8 px-4 sm:px-6 lg:px-16 h-auto lg:min-h-screen">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#EB5939] mb-8">
        My Skills
      </h2>
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skillsData.map((category, index) => (
          <motion.div
            key={index}
            className="skill-card group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <div className="skill-card-inner">
              {/* Card Front */}
              <div className="skill-card-front p-4 sm:p-6 rounded-lg shadow-md flex flex-col justify-start">
                <h3 className="text-lg sm:text-xl font-semibold text-[#141414] mb-4">
                  {category.category}
                </h3>
                <ul className="grid grid-cols-2 gap-2">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center mb-1">
                      {skill.icon && (
                        <FontAwesomeIcon
                          icon={skill.icon}
                          className="w-6 h-6 mr-2"
                        />
                      )}
                      <span className="font-medium  ">{skill.name}</span>{" "}
                      {/* Increased font size */}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Back */}
              <div className="skill-card-back p-4 sm:p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2 text-2xl">
                  {category.category}
                </h3>{" "}
                {/* Increased font size */}
                <p className="text-center text-3xl text-[#141414] ">
                  {" "}
                  {/* Increased font size */}
                  {category.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
