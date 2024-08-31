// src/pages/index.js
import Hero from "../components/Hero.js";
import Projects from "../components/Projects.js";
import About from "../components/About.js";
import Skills from "../components/Skills.js";
import Certifications from "../components/Certifications.js";
import Contact from "../components/Contact.js";
import Resume from "../components/Resume.js";

export default function Homes() {
  return (
   
      <div >
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Resume />
        <Contact />
      </div>

  );
}
