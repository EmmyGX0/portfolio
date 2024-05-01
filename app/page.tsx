'use client'
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";

export default function Home() {

  return (
    <div className='bg-brand-background flex'>
      <Navbar />
      <div className="w-full flex justify-center flex-col items-center">
        <div className="max-w-5xl w-full flex flex-col px-10">
          <Hero />
          <About />
          <Experience />
          <Projects />
        </div>
      </div>
    </div>
  );
}