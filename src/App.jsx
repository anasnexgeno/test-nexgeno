import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/About'
import BestSelling from './components/BestSelling'
import Featured from './components/Featured'
import NewProduct from './components/NewProduct'
import Banner from './components/Banner'
import ProductSection from './components/ProductSection'

function App() {

  return (
    <div className='dm:overflow-hidden overflow:hidden'>
      <Navbar />
      <Hero />
      <AboutSection />
      <BestSelling />
      <Featured />
      <NewProduct />
      <Banner />
      <ProductSection />
    </div>
  )
}

export default App
