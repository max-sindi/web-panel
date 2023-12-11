import { createBrowserRouter } from "react-router-dom"
import UsersPage from "src/pages/UsersPage"
import LoginPage from "src/pages/LoginPage"
import PrivateRoute from "src/tools/PrivateRoute"
import GuestRoute from "src/tools/GuestRoute"

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
