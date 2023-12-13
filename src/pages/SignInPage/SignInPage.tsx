import React, { useEffect } from "react"
import DefaultLayout from "src/components/Layout/DefaultLayout"
import SignInForm from "src/modules/signIn/SignInForm"
import { useAppSelector } from "src/setup/hooks"
import { signInBasicSelectors } from "src/modules/signIn/signIn.selector"
import { useNavigate } from "react-router"

interface ISignInPageProps {}

const SignInPage: React.FC<ISignInPageProps> = () => {
  const isAuthorized = useAppSelector(signInBasicSelectors.isAuthorizedSelector)
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthorized) {
      // move away from signIn page if already authorized
      navigate("/users")
    }
  }, [isAuthorized])

  return (
    <DefaultLayout>
      <SignInForm />
    </DefaultLayout>
  )
}

export default SignInPage
