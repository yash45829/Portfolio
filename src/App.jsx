import { useEffect, useState } from "react";
import About from "./Section/About";
import Hero from "./Section/Hero";
import Project from "./Section/Project";
import Skills from "./Section/Skills";
function App() {
  //   "tailwindCSS.includeLanguages": {
  //     "html": "html",
  //     "javascript": "javascript",
  //     "css": "css"
  // },
  // "editor.quickSuggestions": {
  //     "strings": true
  // }

  const [blobPosition, setBlobPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setBlobPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      data-theme="night"
      className="  flex font-[poppins] text-gray-400  w-full  min-h-[100vh]  mx-0"
    >
      <div
        className="fixed h-48 w-48 -translate-x-1/2 -translate-y-1/2 bg-blue-800 filter blur-[200px]"
        style={{ left: blobPosition.x, top: blobPosition.y }}
      />
      <Hero />
      <div className="w-[50vw] min-h-[100vh]  ">
        <About />
        <Skills />
        <Project/>
      </div>
    </div>
  );
}

export default App;
