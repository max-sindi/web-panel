import React, { useEffect } from "react"
import { useNavigate } from "react-router"
import { useAppSelector } from "src/config/hooks"
import { isAuthorizedSelector } from "src/modules/login/login.selector"

interface IPrivateRouteProps {
  children: React.JSX
}

const GuestRoute: React.FC<IPrivateRouteProps> = ({ children }) => {
  const navigate = useNavigate()
  const isAuthorized = useAppSelector(isAuthorizedSelector)

  useEffect(() => {
    if (isAuthorized) {
      navigate("/users")
    }
  }, [isAuthorized])

  return isAuthorized ? null : children
}

export default GuestRoute
