'use client'
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { delay, motion } from 'framer-motion';

export default function Home() {
  const variants = {
    hidden: {
      height: 0
    },
    visible: {
      height: 270,
      transition: {
        duration: 0.8,
      }
    }
  }
  
  return (
    <div className='bg-brand-background flex flex-col items-center w-full pb-20 h-full min-h-screen'>
      <div className="max-w-5xl w-full px-5 relative">
        <Navbar />
        <Hero />
        <motion.figure
          className="w-[4px] bg-gradient-to-b from-brand/25 to-blue-600/25 absolute left-[45px] top-[410px]"
          variants={variants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
        />
        <div className="max-w-4xl">
          <Experience />
        </div>
      </div>
    </div>
  );
}