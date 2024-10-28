// import { useState } from "react";
// import Navbar from "./Components/Navbar";
// import HeroPage from "./Components/HeroPage";
// import Aboutme from "./Components/Aboutme";
// import "../App.css";
// import Projects from "./Components/Projects";
// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div className="father">
//         <HeroPage></HeroPage>
//         <Aboutme></Aboutme>
//         <Projects></Projects>
//       </div>
//     </>
//   );
// }

// export default App;
import React from "react";
import HeroPage from "./Components/HeroPage";
import Navbar from "./Components/Navbar";
import AboutMe from "./Components/Aboutme";
import Projects from "./Components/Projects";
import Thanks from "./Components/Thanks";
import Skills from "./Components/Skills";
const App = () => {
  return (
    <div>
      <Navbar />
      <div id="hero">
        <HeroPage />
      </div>
      <div id="about">
        <AboutMe />
      </div>
      <Skills></Skills>
      <div id="projects">
        <Projects />
      </div>
      <Thanks></Thanks>
    </div>
  );
};

export default App;
