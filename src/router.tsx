import { createBrowserRouter } from "react-router-dom"
import UsersPage from "src/pages/UsersPage/UsersPage"
import SignInPage from "src/pages/SignInPage/SignInPage"
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
    path: "/sign-in",
    Component: () => {
      return (
        <GuestRoute>
          <SignInPage />
        </GuestRoute>
      )
    },
  },
])

export default router
