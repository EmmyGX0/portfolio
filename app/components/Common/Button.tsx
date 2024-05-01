type Props = {
  text: string
}

const Button = ({text}: Props) => {
  return (
    <div className="rounded-lg w-fit flex justify-center items-center h-10 bg-brand text-brand-text font-semibold px-3 py-1 cursor-pointer hover:bg-brand/25 duration-300 transition-all">
      {text}
    </div>
  )
}

export default Button