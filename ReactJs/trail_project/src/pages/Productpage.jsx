import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";

import bgheroimg from "./../images/hero-img-contactus.png";
import MainNavBar from "../Components/Navbar";
import Mainfooter from "./../Components/footer";
import group from "./../images/Group.png";
import page from "./../images/product-page.png";
import arrow from "./../images/arrow-contact-us.png";
import rocket from "./../images/rocket.png";
import lastimage from "./../images/product-page-footer.png";
import readMore from "./../images/arrow-product-page.png";
import frame from "./../images/Frame.png"
import framelast from "./../images/Frame 39.png"


const Productpage = () => {
  return (
    <div>
      <div className="container">
        <MainNavBar />
      </div>
      {/* Hero Image Section */}
      <div className="hero-img-div">
        <img src={bgheroimg} className="hero-img" alt="Hero Background" />
        <div className="hero-im-text-div">
          <h1 className="text-white"><b>Our Products</b></h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className='col-md-6 align-items-center justify-content-center'>
            <h4>Billing Software in India for Small Businesses</h4>
            <br />
            <p>No one loves, seeks, or desires pain simply for the sake of pain. However, 
              there are times when effort and pain can lead to significant pleasure.</p>
            <div className="item">
              <img src={group} alt="bullet" className="image" />
              <div className="description">
                <p>Assess your position relative to your competitors.</p>
              </div>
            </div>
            <div className="item">
              <img src={group} alt="bullet" className="image" />
              <div className="description">
                <p>Gather insights to determine what works.</p>
              </div>
            </div>
            <div className="item">
              <img src={group} alt="bullet" className="image" />
              <div className="description">
                <p>Make changes based on data-driven insights.</p>
              </div>
            </div>
            
            <Button className="button">VIEW ALL CASES</Button>
            <img src={arrow} className="img-arrow"/>
          </div>
          <div className='col-md-6 d-flex align-items-center justify-content-center'>
            <img src={page} alt="product-page-image" className="img-fluid" style={{ width: 'auto', height: '400px' }}/>
          </div>
        </div>
        
      </div>
      <br />
{/* -----------second div--------------------- */}
<div className="container-next">
  <div className="row d-flex justify-content-center">
    {/* First Column */}
    <div className="col-md-4 d-flex align-items-center justify-content-center">
      <div className="item-product d-flex">
        <img src={rocket} alt="bullet" className="image-product img-fluid" />
        <div className="description-product">
          <h3>Manage cashflow seamlessly</h3>
          <p>At Hariom, we will act as the client's trusted advisor specializing in areas of digital services to help achieve their business success.</p>
        </div>
      </div>
    </div>

    {/* Second Column */}
    <div className="col-md-4 d-flex align-items-center justify-content-center">
      <div className="item-product d-flex">
        <img src={rocket} alt="bullet" className="image-product img-fluid" />
        <div className="description-product">
          <h3>Online/Offline billing</h3>
          <p>At Hariom, we will act as the client's trusted advisor specializing in areas of digital services to help achieve their business success.</p>
        </div>
      </div>
    </div>

    {/* Third Column */}
    <div className="col-md-4 d-flex align-items-center justify-content-center">
      <div className="item-product d-flex">
        <img src={rocket} alt="bullet" className="image-product img-fluid" />
        <div className="description-product">
          <h3>Keep data safe with backups</h3>
          <p>At Hariom, we will act as the client's trusted advisor specializing in areas of digital services to help achieve their business success.</p>
        </div>
      </div>
    </div>
  </div>
</div>
{/* -----------Third div--------------------- */}
<div className="container">
  <div className="row d-flex justify-content-center">
    {/* First Column */}
    <div className="col-md-6 d-flex align-items-center justify-content-center">
      <div className="item-product d-flex">
        <img src={rocket} alt="bullet" className="image-product img-fluid" />
        <div className="description-product">
        <h3>Keep data safe with backups</h3>
        <p>At Hariom, we will act as the client's trusted advisor specializing in areas of digital services to help achieve their business success.</p>
        </div>
      </div>
    </div>

    {/* Second Column */}
    <div className="col-md-6 d-flex align-items-center justify-content-center">
      <div className="item-product d-flex">
        <img src={rocket} alt="bullet" className="image-product img-fluid" />
        <div className="description-product">
        <h3>Keep data safe with backups</h3>
        <p>At Hariom, we will act as the client's trusted advisor specializing in areas of digital services to help achieve their business success.</p>
        </div>
      </div>
    </div>

</div>
</div>
{/* -------------------------------------third div--------------------------- */}
<div className="container">
  <div className="row">
    <div className='col-md-6 d-flex align-items-center justify-content-center'>
      <img src={lastimage} alt="product-page-image" className="img-fluid" style={{ width: 'auto', height: '400px' }} />
    </div>
    
    <div className='col-md-6 align-items-center justify-content-center'>
      <div className="item-product-last">
      
        <img src={frame} alt="bullet" className="image" />
        <div className="description-product-last">
          <h3>Application Development</h3>
          <p>A wise person always adheres to these principles in such matters: those who are similarly at fault are those who fail.</p>
          <p>Read More <span><img src={readMore} className="img-arrow" alt="arrow" /></span></p>
        </div>
      </div>
      <div className="item-product-last">
        <img src={frame} alt="bullet" className="image" />
        <div className="description-product-last">
          <h3>Technical Development</h3>
          <p>A wise person always adheres to these principles in such matters: those who are similarly at fault are those who fail.</p>
          <p>Read More <span><img src={readMore} className="img-arrow" alt="arrow" /></span></p>
        </div>
      </div>
    </div>
  </div>
</div>
<br />
<br />
{/* --------------------------last div-------------------------------- */}
<div className="container">
  <div className="row">
    <div className='col-md-1 d-flex align-items-center justify-content-center'>
      
    </div>
    
    <div className='col-md-10 d-flex flex-column align-items-center justify-content-between'>
      <div className="item-product-last-1 ">
      
        <img src={framelast} alt="bullet" className="image" />
        <div className="description-product-last-1">
          
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          
        </div>
      </div>
      <div className="item-product-last-1">
        <img src={framelast} alt="bullet" className="image" />
        <div className="description-product-last-1">
          
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          
        </div>
        <div className="item-product-last-1">
        <img src={framelast} alt="bullet" className="image" />
        <div className="description-product-last-1">
          
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          
        </div>
      </div>
      </div>
    </div>
    <div className='col-md-1 d-flex align-items-center justify-content-center'>
      
    </div>
  </div>
</div>







      <Mainfooter />
    </div>
  )
}

export default Productpage;
