'use client'
import { links } from "@/lib/data"
import { useMotionValueEvent, useScroll } from "framer-motion"

type NavbarProps = {
  section: string
}

const Navbar = ({section}: NavbarProps) => {

  return (
    <nav className="bg-brand-sidebarBg sidebar w-16 font-montserrat hidden md:block">
      {links.map(link => (
        <a
          key={link.name}
          href={link.hash}
          // className={`text-white sidebar_link tracking-widest font-thin hover:bg-slate-400/25 transition-all duration-200`}
          className={`${section === link.hash ? 'bg-slate-400/25 border-r-brand border-r' : 'border-r-brand-sidebarBg border-r'} text-white sidebar_link tracking-widest font-thin hover:bg-slate-400/25 hover:border-r-slate-400/25 transition-all duration-200`}
        >
          {link.name}
        </a>
      ))}
    </nav>
  )
}

export default Navbar