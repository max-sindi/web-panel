import React from "react"
import { Box, Container, Stack } from "@chakra-ui/react"
import Header from "src/UI/Header/Header"
import { useAppDispatch } from "src/setup/hooks"
import { signInBasicActions } from "src/modules/signIn/signIn.slice"

interface IDefaultLayoutProps {
  children: React.JSX
  header?: boolean
}

const DefaultLayout: React.FC<IDefaultLayoutProps> = ({ children, header }) => {
  const dispatch = useAppDispatch()

  const onLogout = () => {
    dispatch(signInBasicActions.logoutUser())
  }

  return (
    <Container maxW={1200}>
      <Stack>
        {header && <Header logout={onLogout} />}
        <Box>{children}</Box>
      </Stack>
    </Container>
  )
}

export default DefaultLayout
