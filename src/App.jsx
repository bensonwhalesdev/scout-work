import { createBrowserRouter } from "react-router-dom"
import LandingPage from "./components/Pages/LandingPage"
import Home from "./components/Pages/LandingPage/Home"
import Authpage from "./components/Pages/(AuthPage)"
import AuthTabs from "./components/Pages/(AuthPage)/Auth"




const App = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
    children: [
      { index: true, Component: Home}
    ]
  },
  {
    path: "/auth",
    Component: Authpage,
    children: [
      { index: true, Component: AuthTabs}
    ]
  }
])

export default App
