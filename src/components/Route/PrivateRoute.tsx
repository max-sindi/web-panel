import React, { useEffect } from "react"
import { useNavigate } from "react-router"
import { useAppSelector } from "src/setup/hooks"
import { signInBasicSelectors } from "src/modules/signIn/signIn.selector"

interface IPrivateRouteProps {
  children: React.JSX
}

const PrivateRoute: React.FC<IPrivateRouteProps> = ({ children }) => {
  const navigate = useNavigate()
  const isAuthorized = useAppSelector(signInBasicSelectors.isAuthorizedSelector)

  useEffect(() => {
    if (!isAuthorized) {
      // move to sign-in page if not authorized
      navigate("/sign-in")
    }
  }, [isAuthorized, navigate])

  return !isAuthorized ? null : children
}

export default PrivateRoute
