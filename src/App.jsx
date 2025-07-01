import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./components/Pages/LandingPage";
import Home from "./components/Pages/LandingPage/Home";
import Authpage from "./components/Pages/(AuthPage)";
import AuthTabs from "./components/Pages/(AuthPage)/Auth";
import Dashboard from "./components/Pages/Dashboard";
import NotFound from "./components/Pages/(404Page)";
import FreelancerDashboard from "./components/Pages/FreelanceDashboard";
import PostaJob from "./components/Pages/Dashboard/SideBar/PostAJob";
import ManageJobs from "./components/Pages/Dashboard/SideBar/ManageJobs";
import JobDetails from "./components/Pages/Dashboard/SideBar/ManageJobs/JobDetails.jsx";
import DashboardLayout from "./components/Pages/Dashboard/DashboardLayout";
import ProfileTabs from "./components/Pages/Dashboard/SideBar/UserProfile/ProfileTabs";

const App = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
    children: [{ index: true, Component: Home }],
  },
  {
    path: "/auth",
    Component: Authpage,
    children: [{ index: true, Component: AuthTabs }],
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "postajob", Component:  PostaJob },
      { path: "managejobs", Component: ManageJobs},
      { path: "managejobs/:id", Component: JobDetails },
      { path: "userprofile", Component: ProfileTabs},
    ],
  },
  {
    path: "/freelancerdashboard",
    children: [{ index: true, Component: FreelancerDashboard }]
  },
  {
    path: "*",
    Component: NotFound
  },
]);

export default App;
