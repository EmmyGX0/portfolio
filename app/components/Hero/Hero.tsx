'use client'
import { IoCodeSharp } from "react-icons/io5"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div className="w-full pt-56 flex gap-10">
      <div className="flex justify-center text-brand-text items-center p-1 relative">
        <motion.span 
          className="rounded-full bg-brand/25 p-2"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <IoCodeSharp size={30} />
        </motion.span>
      </div>
      <div className="flex flex-col gap-5">
        <motion.span 
          className="text-brand-text font-bold text-8xl tracking-wide"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi there!
        </motion.span>
        <motion.span 
          className="text-brand-sub text-xl font-light tracking-wider"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          I am a Software Engineer, scroll down to get to know me!
        </motion.span>
      </div>
    </div>
  )
}

export default Hero