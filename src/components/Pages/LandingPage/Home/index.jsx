import { Button } from '@/components/ui/button'
import React from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import Category from './Categories'
import HowItWorks from './HowItWorks'

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Category />
      <HowItWorks />
    </div>
  )
}

export default Home