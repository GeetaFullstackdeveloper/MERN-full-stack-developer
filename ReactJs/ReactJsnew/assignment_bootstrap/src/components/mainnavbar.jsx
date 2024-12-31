// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import logo from "./../images/logohariom.png";

// const MainNavbar = () => {
//   return (
//     <div style={styles.container}> 
//       {/* Navbar */}
//       <Navbar expand="lg" className="bg-body-tertiary">
//         <Container fluid>
//           {/* Brand Logo */}
//           <Navbar.Brand href="#">
//             <img src={logo} alt="Logo" style={{ height: '40px' }} />
//           </Navbar.Brand>

//           {/* Navbar Toggler for mobile view */}
//           <Navbar.Toggle aria-controls="navbarScroll" />

//           {/* Navbar Collapse */}
//           <Navbar.Collapse id="navbarScroll">
//             {/* Navbar Links */}
//             <Nav
//               className="me-auto my-2 my-lg-0 d-flex"  // Add d-flex for horizontal layout
//               navbarScroll
//             >
//               <Nav.Link href="#home">Home</Nav.Link>
//               <Nav.Link href="#link1">Link 1</Nav.Link>
//               <Nav.Link href="#disabled" disabled>
//                 Disabled
//               </Nav.Link>
//               <Nav.Link>
//                 <Button className='button'>Contact Us</Button>
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// };

// // Styling for the horizontal box
// const styles = {
//   container: {
//     display: 'flex',               // Flexbox to display items horizontally
//     justifyContent: 'space-between', // Align items with space in between
//     backgroundColor: '#d2b48c',    // Light brown background color
//     padding: '10px',               // Padding inside the container
//     borderRadius: '8px',           // Optional: rounded corners for aesthetics
//     width: '80%',                  // Optional: adjust the width
//     margin: 'auto',                // Center horizontally
//     marginTop: '20px',             // Add some space between navbar and the box
//   },
//   boxItem: {
//     padding: '10px 20px',          // Padding inside each box item
//     backgroundColor: 'white',      // White background for each item
//     borderRadius: '4px',           // Rounded corners for items
//     boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Optional: small shadow for items
//   }
// };

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "./../images/logohariom.png";
import Button from 'react-bootstrap/Button';

function MainNavbar() {
  return  (
    <div style={styles.container}>   
     <Navbar bg="dark" data-bs-theme="dark" >
      <Container>
        <Nav><img src={logo} alt="Logo" style={{ height: '20px' }} className="d-inline-block align-text-center"  />{' '}
        <span style={{ marginLeft: '20px' }}>Home</span> {/* Custom margin */}
        <span style={{ marginLeft: '20px' }}>About us</span> {/* Custom margin */} 
        <span style={{ marginLeft: '20px' }}>Services</span> {/* Custom margin */} 
        <span style={{ marginLeft: '20px' }}>Carrers</span> {/* Custom margin */} 
        <span style={{ marginLeft: '20px' }}>Case Studies</span> {/* Custom margin */} 
        <span style={{ marginLeft: '20px' }}>Testimonial</span> {/* Custom margin */} 
        <span style={{ marginLeft: '20px' }}>
        <Button className="roundedButton">Contact Us</Button>
       </span>
        </Nav> 
        
                  
      </Container>
    </Navbar>
    </div>
  );
}

export default MainNavbar;

const styles = {
      container: {
        display: 'flex',               // Flexbox to display items horizontally
        justifyContent: 'space-between', // Align items with space in between
        backgroundColor: '#d2b48c',    // Light brown background color
        padding: '10px',               // Padding inside the container
        width: '80%',                  // Optional: adjust the width
        margin: 'auto',                // Center horizontally
         },
         roundedButton:{
            borderRadius: '30px',/* Custom rounded corners */
            padding: '10px',  /* Padding for better button size */
          }
    };