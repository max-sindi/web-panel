import React, { useEffect } from "react"
import { Container as ChakraContainer } from "@chakra-ui/react"
import { useLocation } from "react-router"
import Header from "src/UI/Header"

interface IDefaultLayoutProps {
  children: React.JSX
  header?: boolean
}

const DefaultLayout: React.FC<IDefaultLayoutProps> = ({ children, header }) => {
  const location = useLocation()

  useEffect(() => {
    console.log(location)
  }, [])

  return (
    <ChakraContainer maxW={1200}>
      {header && <Header />}
      {children}
    </ChakraContainer>
  )
}

export default DefaultLayout
