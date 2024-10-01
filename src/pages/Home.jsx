import React from 'react'
import Currencies from '../components/Currencies'
import Trending from '../components/Trending'
import '../pages/Home.css'
function Home() {
  return (
    <div>
    <section className="hero">
    <div className="container">
      <h2 className="hero-title">Your Gateway to Cryptocurrency Trading</h2>
      <p className="hero-subtitle">Discover the latest prices and trends of popular cryptocurrencies.</p>
      <a href="#" className="cta-button">Get Started</a>
    </div>
  </section>

  
  <Trending/>
  <Currencies/>
  </div>
  )
}

export default Home