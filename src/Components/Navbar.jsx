// import React from "react";
// import styles from "./Navbar.module.css";
// import git from "../assets/github4.svg";
// import FramerMagnetic from "../utils/FramerMagnetic.jsx";

// const Navbar = () => {
//   return (
//     <div className={styles.container}>
//       <FramerMagnetic>
//         <img src={git} alt="GitHub logo" className={styles.githubIcon} />
//       </FramerMagnetic>
//       <div
//         className={`${styles.details} text-base md:text-lg lg:text-xl xl:text-2xl text-[#AA9E8B] text-center`}
//       >
//         <div className={styles.navItem}>Home</div>
//         <div className={styles.navItem}>About</div>
//         <div className={styles.navItem}>Projects</div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React from "react";
import styles from "./Navbar.module.css";
import git from "../assets/github4.svg";
import FramerMagnetic from "../utils/FramerMagnetic.jsx";

const Navbar = () => {
  return (
    <div className={styles.container}>
      {/* <FramerMagnetic> */}
      <img src={git} alt="GitHub logo" className={styles.githubIcon} />
      {/* </FramerMagnetic> */}
      <div
        className={`${styles.details} text-base md:text-lg lg:text-xl xl:text-2xl text-[#AA9E8B] text-center`}
      >
        <div className={styles.navItem}>Home</div>
        <div className={styles.navItem}>About</div>
        <div className={styles.navItem}>Projects</div>
      </div>
    </div>
  );
};

export default Navbar;
