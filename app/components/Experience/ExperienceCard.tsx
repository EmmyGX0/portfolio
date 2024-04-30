'use client'
import Image from "next/image"
import { motion } from "framer-motion"

const ExperienceCard = () => {
  return (
    <>
      <motion.div
        className="rounded-lg bg-[#161b22] z-20 shadow-sm shadow-[#161b22] p-4 font-montserrat"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 tracking-wide">
          <div className="relative rounded-full p-2">
            <Image 
              src="/logos/logo_wby.png" 
              alt="WeBookYou Logo" 
              width={50}
              height={50}
              className="object-cover" 
            />
          </div>
          <div className="flex flex-col">
            <span className="text-brand-text font-semibold text-lg">We Book You</span>
            <span className="text-brand-sub text-sm">Frontend Developer</span>
          </div>
        </div>
        <div className="flex flex-col mt-4 tracking-wider font-semibold">
          <span className="text-brand-text text-sm">May 2022 - Current</span>
          <span className="text-brand-text text-sm">Remote</span>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <span className="text-brand-sub text-sm tracking-wide">
            As a front-end developer, my role is to enhance the user experience through the implementation of new features and the improvement of components.
            <ul className="mt-2 flex flex-col gap-1">
              <li><span className="text-2xl">•</span> I collaborate closely with a multidisciplinary team, including designers (layout) and backend developers (API consumption) for efficient integration using React and NextJS in the development of modern web applications.</li>
              <li><span className="text-2xl">•</span> I contribute to maintaining responsive design by utilizing TailwindCSS to ensure a consistent experience across all devices.</li>
              <li><span className="text-2xl">•</span> Redux and Zustand are employed for state management.</li>
            </ul>
          </span>
        </div>
      </motion.div>
    </>
  )
}

export default ExperienceCard