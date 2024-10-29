import React from "react";
import styles from "./Navbar.module.css";
import git from "../assets/github4.svg";
import FramerMagnetic from "../utils/FramerMagnetic.jsx";
import linkedin from "../assets/linkedin.svg";
import logo from "../assets/mammal.png";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className="flex gap-2">
        <FramerMagnetic>
          <a href="#hero">
            {" "}
            <img src={logo} alt="GitHub logo" className={styles.logo} />
          </a>
        </FramerMagnetic>
      </div>
      <div className={`${styles.details}  text-[#AA9E8B] text-center z-10   `}>
        <nav>
          <ul className="flex flex-col gap-1 font-[teko] text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl">
            <li>
              <a
                href="#hero"
                className="hover:text-red-500 transition-colors text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-2xl"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-red-500 transition-colors text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-2xl"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-red-500 transition-colors text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-2xl"
              >
                Projects
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
