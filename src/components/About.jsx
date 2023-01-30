import React from 'react'
import RestaurantImage from '../assets/restaurant.jpg'
import ChefsImage from '../assets/chefs.jpg'

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="content">
          <h2>About</h2>
          <p>Welcome to Little Lemon, a vibrant and cozy restaurant where we serve up delicious, homemade meals made with only the freshest ingredients. Our menu features a wide variety of dishes to suit any taste, from classic comfort food to international flavors.

Whether you're in the mood for a hearty breakfast, a light lunch, or a satisfying dinner, we have something for everyone.

</p>
<p> Our menu includes everything from omelets and pancakes to sandwiches and salads, as well as a selection of entrees that are sure to please.

Our team is dedicated to providing excellent service and a welcoming atmosphere. We strive to make every visit to Little Lemon a memorable one and we look forward to serving you soon.</p>
<p>Thank you for choosing Little Lemon, we hope to see you soon!</p>
        </div>
        <div className="image-container">
          <img src={ChefsImage} alt="Little Lemon Restaurant" />
          <img src={RestaurantImage} alt="Little Lemon Restaurant Chefs" />
        </div>
      </div>
    </section>
  )
}

export default About