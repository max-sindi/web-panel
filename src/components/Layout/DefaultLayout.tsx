import React from "react"
import { Container as ChakraContainer } from "@chakra-ui/react"
import Header from "src/UI/Header"
import {useAppDispatch} from "src/setup/hooks"
import {loginBasicActions} from "src/modules/login/login.slice"

interface IDefaultLayoutProps {
  children: React.JSX
  header?: boolean
}

const DefaultLayout: React.FC<IDefaultLayoutProps> = ({ children, header }) => {
  const dispatch = useAppDispatch()

  const onLogout = () => {
    dispatch(loginBasicActions.logoutUser())
  }

  return (
    <ChakraContainer maxW={1200}>
      {header && <Header logout={onLogout} />}
      {children}
    </ChakraContainer>
  )
}

export default DefaultLayout
