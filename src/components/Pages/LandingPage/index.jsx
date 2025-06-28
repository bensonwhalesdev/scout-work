import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Home/Header'

const LandingPage = () => {
  return (
    <div>
        <Header />
        <Outlet />
    </div>
  )
}

export default LandingPage