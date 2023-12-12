import React from "react"
import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react"

interface IButtonProps extends ButtonProps {}

const Button: React.FC<IButtonProps> = (props) => {
  return <ChakraButton colorScheme={"teal"} {...props}></ChakraButton>
}

export default Button
