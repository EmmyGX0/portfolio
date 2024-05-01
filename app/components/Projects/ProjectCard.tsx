import Image from "next/image"
import Button from "../Common/Button"
import TextTransition from "../Common/TextTransition"
import { motion } from  'framer-motion'

type ProjectCardProps = {
  title: string
  description: string
  image: string
  tech: string
  url: string
}

const ProjectCard = ({title, description, image, tech, url}: ProjectCardProps) => {
  return (
    <motion.div 
      className="flex flex-col"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="rounded-lg w-full h-auto overflow-hidden relative flex justify-center aspect-video cursor-pointer group bg-brand-bgLight" >
        <div className="rounded-md aspect-video w-4/5 overflow-hidden group-hover:rotate-3 translate-y-14 group-hover:scale-110 transition-all duration-500">
          <div className="relative w-full h-full">
            <Image 
              src={image}
              alt={title}
              fill
              objectFit="cover"
            />
          </div>
        </div>
      </motion.div>
      <div className="mt-4 flex flex-col gap-2">
        <TextTransition>
          <h2 className="font-bold text-brand-text text-xl md:text-2xl">
            {title}
          </h2>
        </TextTransition>
        <TextTransition>
          <label className="text-brand text-lg md:text-xl">
            {tech}
          </label>
        </TextTransition>
        <TextTransition>
          <div className="text-lg md:text-xl text-brand-sub font-light">
            {description}
          </div>
        </TextTransition>
        <TextTransition>
          <Button text="Check it out!" url={url} />
        </TextTransition>
      </div>
    </motion.div>
  )
}

export default ProjectCard