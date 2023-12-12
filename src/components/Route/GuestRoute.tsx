import React, { useEffect } from "react"
import { useNavigate } from "react-router"
import { useAppSelector } from "src/setup/hooks"
import { loginBasicSelectors } from "src/modules/login/login.selector"

interface IPrivateRouteProps {
  children: React.JSX
}

const GuestRoute: React.FC<IPrivateRouteProps> = ({ children }) => {
  const navigate = useNavigate()
  const isAuthorized = useAppSelector(loginBasicSelectors.isAuthorizedSelector)

  useEffect(() => {
    if (isAuthorized) {
      navigate("/users")
    }
  }, [isAuthorized])

  return isAuthorized ? null : children
}

export default GuestRoute
