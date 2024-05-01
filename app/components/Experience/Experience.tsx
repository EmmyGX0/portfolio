'use client'
import TextTransition from '../Common/TextTransition'
import { motion } from 'framer-motion'

const Experience = () => {
  return (
    <motion.div id="experience" className="flex flex-col w-full pb-20">
      <div className="w-full overflow-hidden flex items-center gap-4">
        <figure className="w-full h-[1px] bg-white opacity-30" />
        <div className='relative'>
          <TextTransition>
            <h1 className="text-brand-text font-bold text-5xl">Experience<span className="text-brand">.</span></h1>
          </TextTransition>
        </div>
      </div>
      <div className='flex flex-col mt-5'>
        <div className='flex justify-between flex-wrap'>
          <h2 className='text-brand-text relative font-bold text-xl'>
            <TextTransition>
              We Book You
            </TextTransition>
          </h2>
          <label className='text-brand-sub relative text-lg'>
            <TextTransition>
              May 2022 - Present
            </TextTransition>
          </label>
        </div>
        <div className='flex justify-between mt-2 flex-wrap'>
          <label className='text-brand relative font-bold text-lg'>
            <TextTransition>
              Frontend Developer
            </TextTransition>
          </label>
          <label className='text-brand-sub relative text-lg'>
            <TextTransition>
              Remote
            </TextTransition>
          </label>
        </div>
      </div>

      <div className='text-brand-sub text-xl mt-2'>
        <div className='relative'>
          <TextTransition>
            As a front-end developer, my role is to enhance the user experience through the implementation of new features and the improvement of components.
          </TextTransition>
        </div>
      <ul className="mt-2 flex flex-col gap-1">
        <li className='relative'>
          <TextTransition>
            <span className="text-2xl">•</span> I collaborate closely with a multidisciplinary team, including designers (layout) and backend developers (API consumption) for efficient integration using React and NextJS in the development of modern web applications.
          </TextTransition>
        </li>
        <li className='relative'>
          <TextTransition>
            <span className="text-2xl">•</span> I contribute to maintaining a responsive design by utilizing TailwindCSS to ensure a consistent experience across all devices.
          </TextTransition>
        </li>
        <li className='relative'>
          <TextTransition>
          <span className="text-2xl">•</span> Redux and Zustand are employed for state management.
          </TextTransition>
        </li>
      </ul>
      </div>
    </motion.div>
  )
}

export default Experience