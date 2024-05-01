'use client'
import Button from "../Common/Button"
import TextTransition from "../Common/TextTransition"

const Hero = () => {

  return (
    <div className="w-full flex gap-10 h-screen pb-20">
      <div className="flex flex-col justify-center gap-5">
        <div className="flex flex-col gap-2">
          <span className="text-brand-text font-bold text-8xl tracking-wide relative overflow-hidden">
            <TextTransition>
              Hi there<span className="text-brand">!</span>
            </TextTransition>
          </span>
          <span className="text-brand-text w-fit text-2xl font-light tracking-wider relative overflow-hidden">
            <TextTransition>
              I am a <label className="text-brand">Software Engineer</label>
            </TextTransition>
          </span>
        </div>
        <span className="text-brand-sub text-xl font-light w-[448px] tracking-wider relative overflow-hidden">
          <TextTransition>
            I&apos;ve been developing web applications for over 2 years, scroll down to get to know me!
          </TextTransition>
        </span>
        <div className="relative w-fit overflow-hidden">
          <TextTransition>
            <Button text='Contact me' />
          </TextTransition>
        </div>
      </div>
    </div>
  )
}

export default Hero