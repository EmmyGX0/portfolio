import { useState } from "react"
import { IoMenu } from "react-icons/io5"
import { AnimatePresence, motion } from "framer-motion"
import { links } from "@/lib/data"

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div className="sticky w-full h-16 items-center top-0 z-50">
      <div className="w-full h-full flex flex-col bg-brand-sidebarBg relative">
        <div className="flex w-full h-full justify-end items-center">
          <IoMenu 
            size={35} 
            className="text-brand-text mr-5 hover:text-brand duration-300 transition-all cursor-pointer" 
            onClick={() => setIsOpen(!isOpen)}      
          />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="w-full flex px-5 flex-col justify-start items-end bg-brand-sidebarBg overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: 150 }}
            exit={{ height: 0 }}
            transition={{ duration: 0.5 }}
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.hash}
                className="text-white text-2xl font-thin tracking-widest hover:text-brand duration-300 transition-all"
                onClick={() => setIsOpen(false)} 
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default NavbarMobile