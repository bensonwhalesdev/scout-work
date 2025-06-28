import React from 'react'
import { Outlet } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default LandingPage