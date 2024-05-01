import { variantsFigure, variantsText } from '@/lib/data'
import { motion } from 'framer-motion'

type TextTransitionProps = {
  children: React.ReactNode,
  className?: string
}

const TextTransition = ({children, className}: TextTransitionProps) => {
  return (
    <>
      <motion.figure 
        className="bg-brand w-full h-full absolute" 
        variants={variantsFigure}
        initial="hidden"
        animate="visible"
      />
      <motion.div
        variants={variantsText}
        initial="hidden"
        animate="visible"
        className={`${className}`}
      >
        {children}
      </motion.div>
    </>
  )
}

export default TextTransition