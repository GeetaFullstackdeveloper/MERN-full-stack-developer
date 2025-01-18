import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import bgheroimg from "./../images/hero-img-contactus.png";
import MainNavBar from "../Components/Navbar";
import Mainfooter from "../Components/footer";
import team from "./../images/team-work.png"
import  secured_future from "./../images/secured-future.png"
import learning_opportunity from "./../images/learning-opportunity.png"
import upgrade_skills from "./../images/upgarde-skills.png"


const CarrerPage = () => {
  return (
    <div>
      {/* Main Navbar */}
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

      
        <div className="row">
          {/* Left Column: Benefits Details */}
          <div className="col-md-6">
            <h6>BENEFITS</h6>
            
            <h2>We offer a great set of benefits to our employees. Here are some reasons why you should consider joining our team:</h2>
            <p>
            we want to feel like home when you are working at JMC(Japan Marketing & Consultancy Limited) &
             for that we have curated a great set of benefits for you.It all starts with the free lunch!
            </p>
            
          </div>

          {/* Right Column: Contact Information */}
          <div className="col-md-6">
          
  {/* First Row */}
  <div className="row">
    {/* First Image and Text */}
    <div className="col-md-6 text-left">
      <img src={team} alt="team-work" />
      <h5>Team work</h5>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
    </div>

    {/* Second Image and Text */}
    <div className="col-md-6 text-left">
      <img src={secured_future} alt="secured_future" />
      <h5>Secured Future</h5>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
    </div>
  </div>

  {/* Second Row */}
  <div className="row mt-4">
    {/* Third Image and Text */}
    <div className="col-md-6 text-left">
      <img src={learning_opportunity} alt="learning_opportunity" />
      <h5>Learning opportunities</h5>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
    </div>

    {/* Fourth Image and Text */}
    <div className="col-md-6 text-left">
      <img src={upgrade_skills} alt="upgrade_skills" />
      <h5>Upgrade Skills</h5>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
    </div>
  </div>


        </div>
        </div>
      

      {/* Footer Section */}
      <div className="footer-container">
        <Mainfooter />
      </div>
    </div>
  );
};

export default CarrerPage;
