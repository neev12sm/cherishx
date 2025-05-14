import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CategoryCards from './components/CategoryCards'
import ReviewCards from './components/ReviewCards'
import AboutSection from './components/AboutSection'
import CityDecorations from './components/CityDecorations'
import Footer from './components/Footer'
export default function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <CategoryCards></CategoryCards>
      <ReviewCards></ReviewCards>
      <AboutSection></AboutSection>
      <CityDecorations></CityDecorations>
      <Footer></Footer>
    </div>
  )
}
