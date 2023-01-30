import React from 'react'
import RestaurantFood from '../assets/restaurantfood.jpg'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section id='hero'>
      <div className="container">
        <div className="content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>Welcome to Little Lemon, a vibrant and cozy restaurant where we serve up delicious, homemade meals made with only the freshest ingredients. Our menu features a wide variety of dishes to suit any taste, from classic comfort food to international flavors.</p>
          <button aria-label="OnClick"><Link to="booking">Reserve a table</Link></button>
        </div>
        <img src={RestaurantFood}  alt="Little Lemon Restaurant Food" />
      </div>
    </section>
  )
}

export default Hero