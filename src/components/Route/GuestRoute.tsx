import React, { useEffect } from "react"
import { useNavigate } from "react-router"
import { useAppSelector } from "src/setup/hooks"
import { signInBasicSelectors } from "src/modules/signIn/signIn.selector"

interface IPrivateRouteProps {
  children: React.JSX
}

const GuestRoute: React.FC<IPrivateRouteProps> = ({ children }) => {
  const navigate = useNavigate()
  const isAuthorized = useAppSelector(signInBasicSelectors.isAuthorizedSelector)

  useEffect(() => {
    if (isAuthorized) {
      navigate("/users")
    }
  }, [isAuthorized])

  return isAuthorized ? null : children
}

export default GuestRoute
