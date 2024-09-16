// src/pages/index.js
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Skills from "../components/Skills";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Resume from "../components/Resume";
import ScrollToTop from "../components/ScrollToTop";
import FixSocialIcon from "../components/SocialIcon";
import { SpeedInsights } from "@vercel/speed-insights/next"

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
        <FixSocialIcon/>
        <ScrollToTop/>
      </div>

  );
}
