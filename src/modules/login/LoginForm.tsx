import React, { useState } from "react"
import Button from "src/UI/Button/Button.view"
import { useNavigate } from "react-router"
import {
  Center,
  Container,
  Flex,
  Heading,
  Spacer,
  Stack,
} from "@chakra-ui/react"
import LoginInput from "src/modules/login/components/LoginInput"
import PasswordInput from "src/modules/login/components/PasswordInput"
import { useAppDispatch } from "src/config/hooks"
import { loginBasicActions } from "src/modules/login/login.slice"
import passwordInput from "src/modules/login/components/PasswordInput"

interface ILoginFormProps {}

const LoginForm: React.FC<ILoginFormProps> = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit = () => {
    dispatch(loginBasicActions.loginUser({ email, password }))
  }

  return (
    <Container height={"70vh"}>
      <Center height={"100%"}>
        <Stack direction={"column"} gap={4}>
          <Heading size={"3xl"}>Welcome to our app</Heading>
          <Spacer />
          <Spacer />
          <LoginInput value={email} onChange={setEmail} />
          <PasswordInput value={password} onChange={setPassword} />
          <Spacer />
          <Spacer />
          <Button onClick={onSubmit}>to users page</Button>
        </Stack>
      </Center>
    </Container>
  )
}

export default LoginForm
