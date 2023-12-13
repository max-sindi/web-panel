import React from "react"
import DefaultLayout from "src/components/Layout/DefaultLayout"
import SignInForm from "src/modules/signIn/SignInForm"

interface ISignInPageProps {}

const SignInPage: React.FC<ISignInPageProps> = () => {
  return (
    <DefaultLayout>
      <SignInForm />
    </DefaultLayout>
  )
}

export default SignInPage
