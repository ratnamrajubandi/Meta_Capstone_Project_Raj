import React from 'react'
import Logo from '../assets/Logo.svg'
import Facebook from '../assets/facebook.png'
import Instagram from '../assets/instagram.png'
import Twitter from '../assets/twitter.png'

const Footer = () => {
  return (
    <section id="footer">
      <div className="container">
        <img src={Logo} alt="Little Lemon Restaurant Logo" />
        <ul>
          <li>Navigation</li>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
        <ul>
          <li>Contact</li>
          <li>Address: 123 Main St, Anytown, USA 12345</li>
          <li>Phone Number: (555) 555-5555</li>
          <li>Email: littlelemon@example.com</li>
        </ul>
        <ul>
          <li> <a href="https://www.facebook.com/"><img src={Facebook} alt="Little Lemon Restaurant Logo" /></a></li>
          <li> <a href="https://www.instagram.com/"><img src={Instagram} alt="Little Lemon Restaurant Logo" /></a></li>
          <li> <a href="https://twitter.com/login?lang=en"><img src={Twitter} alt="Little Lemon Restaurant Logo" /></a></li>
        </ul>
      </div>
    </section>
  )
}

export default Footer