import { createBrowserRouter } from "react-router-dom"
import UsersPage from "src/pages/UsersPage/UsersPage"
import LoginPage from "src/pages/LoginPage/LoginPage"
import PrivateRoute from "src/components/Route/PrivateRoute"
import GuestRoute from "src/components/Route/GuestRoute"

const router = createBrowserRouter([
  {
    path: "/users",
    Component: () => {
      return (
        <PrivateRoute>
          <UsersPage />
        </PrivateRoute>
      )
    },
  },
  {
    path: "/login",
    Component: () => {
      return (
        <GuestRoute>
          <LoginPage />
        </GuestRoute>
      )
    },
  },
])

export default router
