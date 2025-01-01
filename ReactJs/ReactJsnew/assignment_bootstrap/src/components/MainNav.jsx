import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from "./../images/logohariom.png";  // Correct path to the logo
import arrow from "./../images/arrow-contact-us.png"; // Correct path to the arrow
const MainNavbar = () => {
  return (
    <div className="header-box">
      <Navbar bg="dark" data-bs-theme="dark" expand="lg">
        <Container fluid className="d-flex align-items-center justify-content-between">
          
          
          
          {/* Left Image (Logo) */}
          <Navbar.Brand href="#">
            <img src={logo} alt="Logo" className="d-inline-block align-text-center" style={{ height: '40px' }} />
          </Navbar.Brand>

          {/* Center Links */}
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto">
              <Nav.Link href="#" className="nav-link">Home</Nav.Link>
              <Nav.Link href="#" className="nav-link">About Us</Nav.Link>
              <Nav.Link href="#" className="nav-link">Services</Nav.Link>
              <Nav.Link href="#" className="nav-link">Careers</Nav.Link>
              <Nav.Link href="#" className="nav-link">Case Studies</Nav.Link>
            </Nav>
          </Navbar.Collapse>
         {/* Button before Left Image */}
         <Button className="rbutton d-none d-lg-block">Contact Us</Button> {/* Hide button on small screens */}
          {/* Right Image (Arrow) */}
          <img src={arrow} alt="Arrow" className="img-arrow" style={{ height: '30px' }} />
          
        </Container>
      </Navbar>
    </div>
  );
};

export default MainNavbar;
