import { MdOutlineEmail } from "react-icons/md"
import TextTransition from "../Common/TextTransition"

const Contact = () => {
  return (
    <div id="contact" className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col gap-5 max-w-lg">
        <TextTransition>
          <h1 className="text-brand-text font-bold text-6xl md:text-8xl">Contact<span className="text-brand">.</span></h1>
        </TextTransition>
        <TextTransition>
          <label className="text-brand-sub font-light text-lg md:text-2xl">
            Send me an email if you want to connect! You can also find me on 
            <span 
              onClick={() => window.open("https://www.linkedin.com/in/emmanuel-luna-gonz%C3%A1lez-9b380017a/", '_blank')} 
              className="text-brand hover:underline mx-1 cursor-pointer"
            >
              LinkedIn
            </span> 
            if {`that's`} more your speed.
          </label>
        </TextTransition>
        <div className="w-full flex justify-center">
          <TextTransition>
              <a 
                href="mailto:emmanuel.lifeg@outlook.com" 
                className="font-normal w-full justify-center cursor-pointer font-montserrat text-brand-text text-lg md:text-xl hover:text-brand duration-300 transition-all flex gap-2 items-center"
              >
                <MdOutlineEmail size={20} />
                <label className="cursor-pointer">emmanuel.lifeg@outlook.com</label>
              </a>
          </TextTransition>
        </div>
      </div>
    </div>
  )
}

export default Contact