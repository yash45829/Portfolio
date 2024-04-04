import React, { useState, useEffect, useRef } from "react";
import Menu from "../Components/Menu";

function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
  };

  const handleScroll = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust as needed
    };

    const observer = new IntersectionObserver(handleScroll, observerOptions);

    // Observe each section
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      // Cleanup when the component unmounts
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [sectionRefs]);

  return (
    <nav className="my-10">
      <ul>
        <li className={activeSection === "about" ? "text-2xl" : ""}>
          <a href="#about">
            <Menu name={"About"} />
          </a>
        </li>
        <li className={activeSection === "education" ? "active" : ""}>
          <a href="#education">
            <Menu name={"Education"} />
          </a>
        </li>
        <li className={activeSection === "skills" ? "active" : ""}>
          <a href="#skills">
            <Menu name={"Skills"} />
          </a>
        </li>
        <li className={activeSection === "projects" ? "active" : ""}>
          <a href="#projects">
            <Menu name={"Projects"} />
          </a>
        </li>
        {/* Add more navigation items as needed */}
      </ul>
      {/* <ul className='my-12'>
         <a href='#about'><Menu name={"About"} /></a>
         <a href='#education'><Menu name={"Education"} /></a> 
         <a href='#skills'><Menu name={"Skills"} /> </a>
         <a href='#projects'><Menu name={"Projects"} /></a>
        </ul> */}
    </nav>
  );
}

export default Navigation;
