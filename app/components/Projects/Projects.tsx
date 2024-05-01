import TextTransition from "../Common/TextTransition"

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col w-full pb-20">
      <div className="w-full overflow-hidden flex items-center gap-4">
        <div className='relative'>
          <TextTransition>
            <h1 className="text-brand-text font-bold text-5xl">Projects<span className="text-brand">.</span></h1>
          </TextTransition>
        </div>
        <figure className="w-full h-[1px] bg-white opacity-30" />
      </div>
    </div>
  )
}

export default Projects