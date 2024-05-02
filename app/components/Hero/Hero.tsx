'use client'
import Button from "../Common/Button"
import TextTransition from "../Common/TextTransition"

const Hero = () => {

  return (
    <div className="w-full flex gap-10 h-screen pb-20">
      <div className="flex flex-col justify-center gap-5">
        <div className="flex flex-col gap-2">
          <span className="text-brand-text font-bold text-4xl xs:text-5xl sm:text-6xl md:text-8xl tracking-wide relative overflow-hidden">
            <TextTransition>
              Hi there<span className="text-brand">!</span>
            </TextTransition>
          </span>
          <div className="text-brand-text text-lg sm:text-xl md:text-2xl font-light tracking-wider">
            <TextTransition className="flex">
              <h2>
                I am a <span className="text-brand font-bold">Software Engineer</span>
              </h2>
            </TextTransition>
          </div>
        </div>
        <span className="text-brand-sub text-sm sm:text-md md:text-xl font-light max-w-[448px] tracking-wider relative overflow-hidden">
          <TextTransition>
            I&apos;ve been developing web applications for over 2 years, scroll down to get to know me!
          </TextTransition>
        </span>
        <div className="relative w-fit overflow-hidden">
          <TextTransition>
            <Button text='Contact me' type="contact" />
          </TextTransition>
        </div>
      </div>
    </div>
  )
}

export default Hero