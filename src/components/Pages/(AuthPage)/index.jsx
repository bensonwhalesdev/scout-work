import { Outlet } from 'react-router-dom'
import Footer from '../LandingPage/Home/Footer'
import AuthHeader from './AuthHeader'

const Authpage = () => {
  return (
    <div>
        <AuthHeader />
    <Outlet />
    <Footer />
    </div>
  )
}

export default Authpage