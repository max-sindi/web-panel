import React, { useEffect } from "react"
import DefaultLayout from "src/components/Layout/DefaultLayout"
import LoginForm from "src/modules/login/LoginForm"
import { useAppSelector } from "src/setup/hooks"
import { loginBasicSelectors } from "src/modules/login/login.selector"
import { useNavigate } from "react-router"

interface ILoginPageProps {}

const LoginPage: React.FC<ILoginPageProps> = () => {
  const isAuthorized = useAppSelector(loginBasicSelectors.isAuthorizedSelector)
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthorized) {
      // move away from login page if already authorized
      navigate("/users")
    }
  }, [isAuthorized])

  return (
    <DefaultLayout>
      <LoginForm />
    </DefaultLayout>
  )
}

export default LoginPage
