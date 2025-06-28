import { Button } from '@/components/ui/button'
import React from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import Category from './Categories'

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Category />
    </div>
  )
}

export default Home