import { Button } from '@/components/ui/button'
import React from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import Category from './Categories'
import HowItWorks from './HowItWorks'
import CallToAction from './CallToAction'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Category />
      <HowItWorks />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default Home