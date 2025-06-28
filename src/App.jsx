import { createBrowserRouter } from "react-router-dom"
import LandingPage from "./components/Pages/LandingPage"
import Home from "./components/Pages/LandingPage/Home"
import Authpage from "./components/Pages/(AuthPage)"
import AuthTabs from "./components/Pages/(AuthPage)/Auth"
import Dashboard from "./components/Pages/Dashboard"




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
  },
  {
    path: "/dashboard",
    children:[
      { index: true, Component: Dashboard}
    ]
  }
])

export default App
