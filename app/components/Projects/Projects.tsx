import { projects } from "@/lib/data"
import TextTransition from "../Common/TextTransition"
import ProjectCard from "./ProjectCard"

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col w-full pb-20 section">
      <div className="w-full overflow-hidden flex items-center gap-4">
        <div className=''>
          <TextTransition>
            <h1 className="text-brand-text font-bold text-4xl md:text-5xl">Projects<span className="text-brand">.</span></h1>
          </TextTransition>
        </div>
        <figure className="w-full h-[1px] bg-white opacity-30" />
      </div>
      <div className="grid grid-cols-1 md2:grid-cols-2 gap-14 w-full mt-10 px-5">
        {projects.map((project) => (
          <div key={project.title}>
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              tech={project.tech}
              url={project.url}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects