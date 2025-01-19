import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import bgheroimg from "./../images/hero-img-contactus.png";
import MainNavBar from "../Components/Navbar";
import Mainfooter from "../Components/footer";
import product from "./../images/product-design.png"
import location from "./../images/location-carrer.png"
import jobtype from "./../images/full-ime.png"
import posted from "./../images/posted.png"
import experience from "./../images/experience.png"
import fulltime from "./../images/time.png"
import days from "./../images/weekdays.png"
import vacancy from "./../images/vacancies.png"

const CareerDetails = () => {
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

      {/* Benefits Section */}
       
        
{/* Example Section (Optional) */}
      <div className="outer-box-deatils">
      <div className="row text-center">
            <div className='col-md-1'></div>
            <div className='col-md-10'>
            <img src={product} alt="product" className="img-fluid full-width-img" />
            <div className="row text-center">
        <div className='col-md-8 text-left'>
        <div class="job-listing">
  <h1><strong>PRODUCT DESIGNER</strong></h1>

  <section class="who-are-we">
    <h3>Who Are We Looking For</h3>
    <ul className='ul-career'>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Nullam dictum ligula a gravida porta.</li>
      <li>Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.</li>
      <li>Vivamus semper magna suscipit leo malesuada, eu dictum velit varius.</li>
      <li>Nulla non enim eu quam rutrum dictum in non urna.</li>
      <li>Integer et felis a purus convallis condimentum nec vel eros.</li>
      <li>Vestibulum porta libero nec aliquet blandit.</li>
      <li>Duis pretium sapien vitae felis tincidunt lobortis vel et urna.</li>
      <li>Cras ut erat eu ante suscipit rutrum.</li>
    </ul>
  </section>

  <section class="what-you-will-be-doing">
    <h3>What You Will Be Doing</h3>
    <ul className='ul-career'>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Nullam dictum ligula a gravida porta.</li>
      <li>Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.</li>
      <li>Vivamus semper magna suscipit leo malesuada, eu dictum velit varius.</li>
      <li>Nulla non enim eu quam rutrum dictum in non urna.</li>
      <li>Integer et felis a purus convallis condimentum nec vel eros.</li>
      <li>Vestibulum porta libero nec aliquet blandit.</li>
      <li>Duis pretium sapien vitae felis tincidunt lobortis vel et urna.</li>
      <li>Cras ut erat eu ante suscipit rutrum.</li>
    </ul>
  </section>

  <section class="bonus-points">
    <h3>Bonus Points for Familiarity with</h3>
    <ul className='ul-career'>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Nullam dictum ligula a gravida porta.</li>
      <li>Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.</li>
      <li>Vivamus semper magna suscipit leo malesuada, eu dictum velit varius.</li>
      <li>Nulla non enim eu quam rutrum dictum in non urna.</li>
    </ul>
  </section>

  <section class="educational-requirement">
    <h3>Educational Requirement</h3>
    <p>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going...
    </p>
  </section>

  <section class="salary">
    <h3>Salary</h3>
    <p>Salary: 18,000 to 35,000 BDT (Depends on Skill and Experience)</p>
    <p>Salary Review: Yearly</p>
  </section>

  <section class="working-hours">
    <h3>Working Hours</h3>
    <p>8 AM – 5 PM</p>
  </section>

  <section class="working-days">
    <h3>Working Days</h3>
    <p>Weekly: 5 days</p>
    <p>Weekend: Friday, Saturday</p>
  </section>

  <section class="perks-benefits">
    <h3>Perks & Benefits You’ll Get</h3>
    <ul className='ul-career'>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Nullam dictum ligula a gravida porta.</li>
      <li>Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.</li>
      <li>Vivamus semper magna suscipit leo malesuada, eu dictum velit varius.</li>
      <li>Nulla non enim eu quam rutrum dictum in non urna.</li>
      <li>Integer et felis a purus convallis condimentum nec vel eros.</li>
      <li>Vestibulum porta libero nec aliquet blandit.</li>
      <li>Duis pretium sapien vitae felis tincidunt lobortis vel et urna.</li>
      <li>Cras ut erat eu ante suscipit rutrum.</li>
    </ul>
  </section>
</div>

        </div>
        <div className='col-md-4 bg-custom'>
        <div class="apply-now-btn">
    <button>Apply Now</button>
    <div class="job-details">
    <div class="job-detail">
      <img src={location} alt="Location" />
      <div class="detail-text">
        <p>Location</p>
        <h4>South Breeze Center, Banani11</h4>
      </div>
    </div>
    <div class="job-detail">
      <img src={jobtype} alt="Job Type" />
      <div class="detail-text">
        <p>Job Type</p>
        <h4>Full Time</h4>
      </div>
    </div>
    <div>
      <img src={posted} alt="Date posted" />
      <div>
        <p>Date Posted</p>
        <h4>Posted 1 month ago</h4>
      </div>
    </div>
    <div>
      <img src={experience} alt="Experience" />
      <div>
        <p>Experience</p>
        <h4>1-3 Years</h4>
      </div>
    </div>
    <div className="job-detail">
      <img src={fulltime} alt="Working Hours" />
      <div>
        <p>Working Hours</p>
        <h4>9 AM - 6 PM</h4>
      </div>
    </div>
    <div className="job-detail">
      <img src={days} alt="Working Days" />
      <div>
        <p>Working Days</p>
        <h4>Weekly: 5 Days</h4>
        <h4>Weekend:Saturday, Sunday</h4>
      </div>
    </div>
    
    <div className="job-detail">
      <img src={vacancy} alt="Vacancy" />
      <div>
        <p>Vacancy</p>
        <h4>No. of Vacancy: 3</h4>
      </div>
    </div>
  </div>

  {/* <!-- View All Jobs Link --> */}
  <div class="view-all-jobs">
    <a href="#">View All Jobs</a>
  </div>

    </div>
            </div>
    <div className="row text-left">
    
    {/* Educational Requirement Section */}
    {/* <div className="col-md-8 text-left"> */}
    <section>
      <h4><strong>Educational Requirement</strong></h4>
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text.
        It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
        Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage.
      </p>
    {/* </div> */}
    </section>
    <section>
    {/* <div className="col-md-8 text-left"> */}
      <h4><strong>Salary</strong></h4>
      <ul className="ul-career">
        <li>Salary: 18,000 to 35,000 BDT (Depends on Skill and Experience)</li>
        <li>Salary Review: Yearly</li>
      </ul>
    {/* </div> */}
    </section>
    {/* Working Hours Section */}
    <div className="col-md-8 text-left">
      <h4><strong>Working Hours</strong></h4>
      <ul className="ul-career">
        <li>8 AM – 5 PM</li>
      </ul>
    </div>

    {/* Working Days Section */}
    <div className="col-md-8 text-left">
      <h4><strong>Working Days</strong></h4>
      <ul className="ul-career">
        <li>Weekly: 5 days</li>
        <li>Weekend: Friday, Saturday</li>
      </ul>
    </div>

    {/* Perks & Benefits Section */}
    <div className="col-md-8 text-left">
      <h4><strong>Perks & Benefits You’ll Get</strong></h4>
      <ul className="ul-career">
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Nullam dictum ligula a gravida porta.</li>
        <li>Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.</li>
        <li>Vivamus semper magna suscipit leo malesuada, eu dictum velit varius.</li>
        <li>Nulla non enim eu quam rutrum dictum in non urna.</li>
        <li>Integer et felis a purus convallis condimentum nec vel eros.</li>
        <li>Vestibulum porta libero nec aliquet blandit.</li>
        <li>Duis pretium sapien vitae felis tincidunt lobortis vel et urna.</li>
        <li>Cras ut erat eu ante suscipit rutrum.</li>
      </ul>
    </div>
    <div >
  
  <div className="line"></div>

 
  <div className="row">
    <div className="col-md-8">
      <h4><strong>The Application Process</strong></h4>
      <ul className="ul-career">
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Nullam dictum ligula a gravida porta.</li>
        <li>Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.</li>
        <li>Vivamus semper magna suscipit leo malesuada, eu dictum velit varius.</li>
        <li>Nulla non enim eu quam rutrum dictum in non urna.</li>
        <li>Integer et felis a purus convallis condimentum nec vel eros.</li>
        <li>Vestibulum porta libero nec aliquet blandit.</li>
        <li>Duis pretium sapien vitae felis tincidunt lobortis vel et urna.</li>
        <li>Cras ut erat eu ante suscipit rutrum.</li>
      </ul>
    </div>
  </div>

  
  <div className="row">
    <div className="col-md-8">
      <h4><strong>Our Statement</strong></h4>
      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
        Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage.
      </p>
    </div>
  </div>

  
  <div className="text-center">
    <a href="#apply" className="btn-apply-now">Apply Now</a>
  </div>
</div>
</div>

    
  </div>


            <div className='col-md-1'></div>
      </div>
   

  {/* <!-- Job Details Section --> */}
          </div>
      </div>

        
      
      

      {/* Footer Section */}
      <Mainfooter />
    </div>
  );
};

export default CareerDetails;
