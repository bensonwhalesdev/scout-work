import { createBrowserRouter } from "react-router-dom"
import LandingPage from "./components/Pages/LandingPage"
import Home from "./components/Pages/LandingPage/Home"




const App = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
    children: [
      { index: true, Component: Home}
    ]
  }
])

export default App
