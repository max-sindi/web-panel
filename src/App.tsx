import "./App.css"
import { RouterProvider } from "react-router-dom"
import router from "src/router"
import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "src/setup/hooks"
import { loginBasicSelectors } from "src/modules/login/login.selector"
import { Center, CircularProgress } from "@chakra-ui/react"
import { loginBasicActions } from "src/modules/login/login.slice"

function App() {
  const dispatch = useAppDispatch()
  const verifyLoading = useAppSelector(
    loginBasicSelectors.verifyLoadingSelector,
  )

  useEffect(() => {
    dispatch(loginBasicActions.verifyUser())
  }, [])

  return verifyLoading === "pending" ? (
    <Center height={"100vh"}>
      <CircularProgress isIndeterminate color="teal" />
    </Center>
  ) : (
    <RouterProvider router={router} />
  )
}

export default App
