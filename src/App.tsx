import "./App.css"
import { RouterProvider } from "react-router-dom"
import router from "src/router"
import React from "react"

function App() {
  return <RouterProvider router={router} />
}

export default App
