import { useState } from "react";
import Navbar from "./Components/Navbar";
import HeroPage from "./Components/HeroPage";
import Aboutme from "./Components/Aboutme";
import "../App.css";
import Projects from "./Components/Projects";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="father">
        <HeroPage></HeroPage>
        {<Aboutme></Aboutme>}
        <Projects></Projects>
      </div>
    </>
  );
}

export default App;
