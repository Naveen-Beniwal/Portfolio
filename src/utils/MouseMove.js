import { useState, useEffect } from "react";
export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    // setMousePosition({ x: e.clientX, y: e.clientY });

    setMousePosition({ x: e.pageX, y: e.pageY });
    // console.log(e.pageX, e.pageY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return mousePosition;
}
