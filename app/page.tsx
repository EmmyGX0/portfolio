'use client'
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import NavbarMobile from "./components/Navbar/NavbarMobile";

export default function Home() {
  const { scrollYProgress } = useScroll()
  const [visibleSection, setVisibleSection] = useState<string>('')
  useMotionValueEvent(scrollYProgress, "change", (latest) => (
    // console.log(latest)
    ( latest < 0.11759 ? setVisibleSection('')
      : latest > 0.11759 && latest < 0.32419 
      ? setVisibleSection('#about') 
      : latest > 0.32419 && latest < 0.41261 
      ? setVisibleSection('#experience') 
      : latest > 0.47155 && latest < 0.85470 
      ? setVisibleSection('#projects') 
      : latest > 0.88211 && latest < 1 
      ? setVisibleSection('#contact') 
      : ''
    )
  ))

  return (
    <div className='bg-brand-background flex'>
      <Navbar section={visibleSection} />
      <div className="w-full flex justify-center flex-col items-center">
        <NavbarMobile />
        <div className="max-w-5xl w-full flex flex-col px-10">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
}