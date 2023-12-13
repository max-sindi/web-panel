import "./App.css"
import { RouterProvider } from "react-router-dom"
import router from "src/router"
import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "src/setup/hooks"
import { signInBasicSelectors } from "src/modules/signIn/signIn.selector"
import { Center, CircularProgress } from "@chakra-ui/react"
import { signInBasicActions } from "src/modules/signIn/signIn.slice"

function App() {
  const dispatch = useAppDispatch()
  const verifyLoading = useAppSelector(
    signInBasicSelectors.verifyLoadingSelector,
  )

  useEffect(() => {
    dispatch(signInBasicActions.verifyUser())
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
