import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./components/Pages/LandingPage";
import Home from "./components/Pages/LandingPage/Home";
import Authpage from "./components/Pages/(AuthPage)";
import AuthTabs from "./components/Pages/(AuthPage)/Auth";
import Dashboard from "./components/Pages/Dashboard";
import NotFound from "./components/Pages/(404Page)";
import PostaJob from "./components/Pages/Dashboard/SideBar/PostAJob";
import ManageJobs from "./components/Pages/Dashboard/SideBar/ManageJobs";
import JobDetails from "./components/Pages/Dashboard/SideBar/ManageJobs/JobDetails.jsx";
import DashboardLayout from "./components/Pages/Dashboard/DashboardLayout";
import ProfileTabs from "./components/Pages/Dashboard/SideBar/UserProfile/ProfileTabs";
import FreelancerDashboardLayout from "./components/Pages/FreelanceDashboard/LayOut";
import FreelancerDashboard from "./components/Pages/FreelanceDashboard";
import BrowseJobs from "./components/Pages/FreelanceDashboard/Sidebar/BrowseJobs";
import ApplyJobForm from "./components/Pages/FreelanceDashboard/Sidebar/JobApply";
import Bids from "./components/Pages/FreelanceDashboard/Sidebar/Bids";
import AllUsersGrid from "./components/Pages/FreelanceDashboard/Sidebar/Employers";
import UserProfileDetails from "./components/Pages/FreelanceDashboard/Sidebar/Employers/ViewProfile";
import FreelancerProfile from "./components/Pages/FreelanceDashboard/Sidebar/FreelancerProfile";
import ViewFreelancer from "./components/Pages/Dashboard/SideBar/UserProfile/ViewFreelancer";
import EmployerApplications from "./components/Pages/Dashboard/SideBar/EmployerApplications";
import AboutPage from "./components/Pages/LandingPage/About";

const App = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: AboutPage },
    ],
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
      { path: "applications", Component: EmployerApplications },
      { path: "userprofile", Component: ProfileTabs},
      { path: "freelancers", Component: AllUsersGrid},
      { path: "freelancers/:id", Component: ViewFreelancer}
    ],
  },
  {
    path: "/freelancerdashboard",
    Component: FreelancerDashboardLayout,
    children: [
      { index: true, Component: FreelancerDashboard },
      { path: "browsejobs", Component: BrowseJobs },
      { path: "jobdetails/:id", Component: JobDetails },
      { path: "applyjob/:id", Component: ApplyJobForm},
      { path: "bids", Component: Bids},
      { path: "employers", Component: AllUsersGrid},
      { path: "employers/:id", Component: UserProfileDetails},
      { path: "userprofile", Component: FreelancerProfile},    
    ]
  },
  {
    path: "*",
    Component: NotFound
  },
]);

export default App;
