import { technologies } from '@/lib/data'
import TextTransition from '../Common/TextTransition'

const About = () => {
  return (
    <div id="about" className="flex flex-col w-full pb-20 section">
      <div className="w-full overflow-hidden flex items-center gap-4">
        <div className='relative'>
          <TextTransition>
            <h1 className="text-brand-text font-bold text-4xl md:text-5xl">About<span className="text-brand">.</span></h1>
          </TextTransition>
        </div>
        <figure className="w-full h-[1px] bg-white opacity-30" />
      </div>
      <div className='grid grid-cols-1 gap-6 mt-5 text-brand-sub text-base md:text-lg font-light'>
        <div className='flex gap-2 flex-col'>
          <div className='relative overflow-hidden'>
            <TextTransition className='inline-block items-center gap-4 flex-row'>
              Hey! my name is <span className='text-brand font-semibold'>Emmanuel Luna González</span>, a Mexican mechatronics engineer that found 
              his passion in the world of <span className='text-brand font-semibold'>web development!</span> My priority is to make visually 
              apealing but also well crafted and functional websites.
            </TextTransition>
          </div>
          <div className='relative overflow-hidden'>
            <TextTransition className='inline-block items-center gap-4'>
              I specialize on the <span className='text-brand font-semibold'>frontend</span> side of web development (ReactJS, NextJS),
              using Redux and Zustand for state management,
              I also have experience working with <span className='text-brand font-semibold'>backend</span> technologies 
              (Node.js, Express.js, Python, FastAPI and GO). But love building with whatever tools 
              are necessary to get the job done.
            </TextTransition>
          </div>
          <div className='relative overflow-hidden'>
            <TextTransition className='flex items-center gap-4'>
              Apart from coding, I enjoy spending time with my family in the ranch, playing videogames
              (Fallout fan here), watch Basketball, MMA, and my favorite sport is Boxing.
            </TextTransition>
          </div>
          <div className='flex flex-col mt-5 gap-2 relative overflow-hidden'>
            <TextTransition className='flex flex-col gap-4'>
              <div className='flex gap-5 items-center'>
                <span className='bg-brand py-1 text-black font-bold flex justify-center items-center text-md w-8 rounded-lg'>{`>_`}</span>
                <label className='text-brand-text text-xl md:text-2xl font-bold'>Technologies I use</label>
              </div>
              <div className='flex flex-wrap gap-2'>
                {technologies.map(tech => (
                  <div key={tech.name} className='flex justify-center items-center bg-brand-sidebarBg rounded-xl px-2 py-1'>
                    <label className='text-brand-text md:text-sm text-xs tracking-wide'>{tech.name}</label>
                  </div>
                ))}
              </div>
            </TextTransition>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About