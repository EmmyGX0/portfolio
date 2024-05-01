'use client'
import { links } from "@/lib/data"
import { useMotionValueEvent, useScroll } from "framer-motion"

const Navbar = () => {

  const { scrollYProgress } = useScroll()

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest > 0.3125 ? 'true' : 'false')
  })

  return (
    <nav className="bg-black sidebar w-16">
      {links.map(link => (
        <a
          key={link.name}
          href={link.hash}
          className={`text-white sidebar_link tracking-widest font-thin hover:bg-slate-400/25 transition-all duration-200`}
          // className={`${router.pathname === link.hash ? 'bg-slate-400/25 border-t-brand' : ''} text-white sidebar_link tracking-widest font-thin hover:bg-slate-400/25 transition-all duration-200`}
        >
          {link.name}
        </a>
      ))}
    </nav>
  )
}

export default Navbar