// import React from 'react';
// import Navbar from './Components/Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';/*Needs to be their*/

// const App = () => {
//   return (
//     <div className='container'>
//       <Navbar />

//       {/* Embed Google Map */}
//       <iframe
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.9187237173637!2d74.22187720000001!3d17.3194702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc17f03509738b1%3A0x576f02648d3bb018!2sHari%20Om%20Innovations!5e0!3m2!1smr!2sin!4v1735739907135!5m2!1smr!2sin"
//         width="600"
//         height="450"
//         style={{
//           border: '0',
//           width: "100%",
//           height: "400px"
//         }}
//         allowFullScreen=""
//         loading="lazy"
//         referrerPolicy="no-referrer-when-downgrade"
//       >
//       </iframe>



//       <div className='row'>
//         <div className='col-md-3'>
//           <h1>X</h1>
//         </div>
//         <div className='col-md-3'>
//           <h1>Company</h1>
//         </div>
//         <div className='col-md-3'>
//           <h1>Services</h1>
//         </div>
//         <div className='col-md-3'>
//           <h1>Technology</h1>
//         </div>
//       </div>
//     </div>


//   );
// }

// export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
// import ContactUs from "./pages/ContactUs";
import CarrerPage from "./pages/CarrerPage"
import './CSS/style.css'

function App() {
  return (
    <div >
      {/* <ContactUs /> */}
      <CarrerPage />
    </div>
  );
}

export default App;
