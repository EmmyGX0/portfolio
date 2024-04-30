import { links } from "@/lib/data"

const Navbar = () => {
  return (
    <nav className="w-full flex justify-evenly py-8 text-base">
      {links.map(link => (
        <a key={link.name} href={link.hash} className="text-white tracking-widest font-thin hover:font-normal transition-all duration-200">
          {link.name}
        </a>
      ))}
    </nav>
  )
}

export default Navbar