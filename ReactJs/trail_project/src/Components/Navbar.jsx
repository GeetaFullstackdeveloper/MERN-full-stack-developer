// import React from 'react'
// import './Navbar.css'
// import logo from './../images/logohariom.png'
// import arrow from './../images/arrow-contact-us.png'
// import Button from "react-bootstrap/Button";
// const Navbar = () => {
//   return (
//     <div className='navbar'>
//         <img src={logo} alt="logo" className='logo'/>
//         <ul>
//             <li>Home</li>
//             <li>About Us</li>
//             <li>Services</li>
//             <li>Careers</li>
//             <li>Case Studies</li>
//             <li>Testimonial</li>
            
//         </ul>
        
//         <Button className="button">Contact Us</Button>
        
//         <img src={arrow} alt="arrow" className='arrow'/>
        
//     </div>
//   )
// }

// export default Navbar

import React from "react";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./../images/logohariom.png";
import arrow from "./../images/arrow-contact-us.png";
import { Link } from 'react-router-dom';

const MainNavBar = () => {
  return (
    <div>
      <Navbar expand="lg" className="">
        <Navbar.Brand href="#">
          <img src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 nav-bar"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            
            <Nav.Link 
            as={Link} to="/" className="nav-link">Home</Nav.Link>
            <Nav.Link 
             as={Link} to="/aboutus" className="nav-link">About Us</Nav.Link>
            <Nav.Link 
            as={Link} to="/Services" className="nav-link">Services</Nav.Link>
            <Nav.Link 
            as={Link} to="/carrerpage" className="nav-link">Careers</Nav.Link>
            <Nav.Link 
            as={Link} to="/casestudies" className="nav-link">Case Studies</Nav.Link>
            <Nav.Link 
            as={Link} to="/testimonial" className="nav-link">Testimonial</Nav.Link>
          </Nav>
          <div className="d-flex">
          <Link to="/contactus">
            <Button className="button">Contact Us</Button>
            </Link>
          </div>
          <img src={arrow} className="img-arrow"/>

        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default MainNavBar;  