type Props = {
  text: string
  type?: string
  url?: string
}

const Button = ({text, type, url}: Props) => {
  const handleClick = () => {
    const contactSection = document.getElementById('contact')
    if (type === 'contact') {
      contactSection?.scrollIntoView({behavior: 'smooth'})
      return
    }
    window.open(url, '_blank')
  }
  return (
    <div 
      className="rounded-lg w-fit text-sm sm:text-base flex justify-center items-center h-10 bg-brand text-brand-text font-semibold px-3 py-1 cursor-pointer hover:bg-brand/25 duration-300 transition-all"
      onClick={() => handleClick()}  
    >
      {text}
    </div>
  )
}

export default Button