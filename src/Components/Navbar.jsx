import React from "react";
import styles from "./Navbar.module.css";
import git from "../assets/github4.svg";
import FramerMagnetic from "../utils/FramerMagnetic.jsx";
import linkedin from "../assets/linkedin.svg";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className="flex gap-2">
        <FramerMagnetic>
          <a href="https://github.com/Naveen-Beniwal/">
            {" "}
            <img src={git} alt="GitHub logo" className={styles.githubIcon} />
          </a>
        </FramerMagnetic>
        <FramerMagnetic>
          <a href="https://www.linkedin.com/in/naveen-beniwal-40b719313/">
            {" "}
            <img
              src={linkedin}
              alt="linkedin account"
              className={styles.githubIcon}
            />
          </a>
        </FramerMagnetic>
      </div>
      <div
        className={`${styles.details} text-base md:text-lg lg:text-xl xl:text-2xl text-[#AA9E8B] text-center z-10`}
      >
        <nav>
          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
