import { ComponentProps } from "react"

const Button = ({children}: ComponentProps<'button'>) => {
  return (
    <button>{children}</button>
  )
}

export default Button