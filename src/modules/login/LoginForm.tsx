import React, { useState } from "react"
import Button from "src/UI/Button/Button"
import { useNavigate } from "react-router"
import {
  Card,
  Center,
  Container,
  Flex,
  Heading,
  Spacer,
  Stack,
} from "@chakra-ui/react"
import LoginInput from "src/modules/login/components/LoginInput"
import PasswordInput from "src/modules/login/components/PasswordInput"
import { useAppDispatch } from "src/setup/hooks"
import { loginBasicActions } from "src/modules/login/login.slice"
import { Form } from "react-router-dom"

interface ILoginFormProps {}

const LoginForm: React.FC<ILoginFormProps> = () => {
  const dispatch = useAppDispatch()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit = () => {
    dispatch(loginBasicActions.loginUser({ email, password }))
  }

  return (
    <Container>
      <Center>
        <Card p={20} height={"70vh"} mt={"15vh"}>
          <Form>
            <Stack direction={"column"} gap={4}>
              <Heading size={"3xl"}>Welcome to our app</Heading>
              <Spacer />
              <Spacer />
              <LoginInput value={email} onChange={setEmail} />
              <PasswordInput value={password} onChange={setPassword} />
              <Spacer />
              <Spacer />
              <Button onClick={onSubmit} type={"submit"}>
                Log In
              </Button>
            </Stack>
          </Form>
        </Card>
      </Center>
    </Container>
  )
}

export default LoginForm
