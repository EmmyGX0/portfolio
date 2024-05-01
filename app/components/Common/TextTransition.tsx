import { variantsFigure, variantsText } from '@/lib/data'
import { motion } from 'framer-motion'

type TextTransitionProps = {
  children: React.ReactNode,
  className?: string
}

const TextTransition = ({children, className}: TextTransitionProps) => {
  return (
    <div className='relative w-fit overflow-hidden'>
      <motion.div 
        initial="hidden"
        // animate="visible"
        whileInView="visible"
        className="bg-brand w-full h-full absolute z-20" 
        variants={variantsFigure}
        viewport={{ once: true, margin: '-100px' }}
      ></motion.div>
      <motion.div
        initial="hidden"
        // animate="visible"
        whileInView="visible"
        className={`${className}`}
        variants={variantsText}
        viewport={{ once: true, margin: '-100px' }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default TextTransition