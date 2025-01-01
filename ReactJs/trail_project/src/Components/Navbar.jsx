import React from 'react'
import './Navbar.css'
import logo from './../images/logohariom.png'
import arrow from './../images/arrow-contact-us.png'
import Button from "react-bootstrap/Button";
const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="logo" className='logo'/>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Careers</li>
            <li>Case Studies</li>
            <li>Testimonial</li>
            
        </ul>
        
        <Button className="button">Contact Us</Button>
        
        <img src={arrow} alt="arrow" className='arrow'/>
        
    </div>
  )
}

export default Navbar