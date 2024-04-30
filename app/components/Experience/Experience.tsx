'use client'
import { PiBriefcaseLight } from 'react-icons/pi'
import ExperienceCard from './ExperienceCard'
import { motion } from 'framer-motion'

const Experience = () => {
  return (
    <div>
      <div className="w-full pt-56 items-center flex gap-10 pb-20">
        <div className="flex justify-center text-brand-text items-center p-1 relative">
          <motion.span 
            className="rounded-full bg-blue-600/25 p-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.7 }}
          >
            <PiBriefcaseLight size={30} />
          </motion.span>
        </div>
        <motion.div 
          className="flex flex-col gap-5"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.7 }}
        >
          <span className="text-brand-text text-2xl font-light tracking-wider">Work experience</span>
        </motion.div>
      </div>
        <ExperienceCard />
    </div>
  )
}

export default Experience