import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import bgheroimg from "./../images/hero-img-contactus.png";
import MainNavBar from "../Components/Navbar";
import Mainfooter from "../Components/footer";
import product from "./../images/product-design.png";
import location from "./../images/location-carrer.png";
import jobtype from "./../images/full-ime.png";
import posted from "./../images/posted.png";
import experience from "./../images/experience.png";
import fulltime from "./../images/time.png";
import days from "./../images/weekdays.png";
import vacancy from "./../images/vacancies.png";
import line from "./../images/line-career.png"

const CareerDetails = () => {
  return (
    <div>
      {/* Main Navbar */}
      <MainNavBar />

      {/* Hero Image Section */}
      <div className="hero-img-div">
        <img src={bgheroimg} className="hero-img" alt="Hero Background" />
        <div className="hero-im-text-div">
          <h1 className="text-white"><b>Our Products</b></h1>
        </div>
      </div>

      {/* Career Details Section */}
      <div className="outer-box-deatils">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <img src={product} alt="product" className="img-fluid full-width-img" />
              <div className="row text-center">
                <div className="col-md-8 text-left">
                  <div className="job-listing">
                    <h1><strong>PRODUCT DESIGNER</strong></h1>

                    {/* Who Are We Looking For Section */}
                    <section className="who-are-we">
                      <h3>Who Are We Looking For</h3>
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
                    </section>

                    {/* What You Will Be Doing Section */}
                    <section className="what-you-will-be-doing">
                      <h3>What You Will Be Doing</h3>
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
                    </section>

                    {/* Bonus Points Section */}
                    <section className="bonus-points">
                      <h3>Bonus Points for Familiarity with</h3>
                      <ul className="ul-career">
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Nullam dictum ligula a gravida porta.</li>
                        <li>Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.</li>
                        <li>Vivamus semper magna suscipit leo malesuada, eu dictum velit varius.</li>
                        <li>Nulla non enim eu quam rutrum dictum in non urna.</li>
                      </ul>
                    </section>

                    {/* Educational Requirement Section */}
                    <section className="educational-requirement">
                      <h3>Educational Requirement</h3>
                      <p>
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage.
                      </p>
                    </section>

                    {/* Salary Section */}
                    <section className="salary">
                      <h3>Salary</h3>
                      <p>Salary: 18,000 to 35,000 BDT (Depends on Skill and Experience)</p>
                      <p>Salary Review: Yearly</p>
                    </section>

                    {/* Working Hours Section */}
                    <section className="working-hours">
                      <h3>Working Hours</h3>
                      <p>8 AM – 5 PM</p>
                    </section>

                    {/* Working Days Section */}
                    <section className="working-days">
                      <h3>Working Days</h3>
                      <p>Weekly: 5 days</p>
                      <p>Weekend: Friday, Saturday</p>
                    </section>

                    {/* Perks & Benefits Section */}
                    <section className="perks-benefits">
                      <h3>Perks & Benefits You’ll Get</h3>
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
                    </section>
                  </div>
                </div>

                {/* Right Sidebar (Apply Now, Job Info) */}
                <div className="col-md-4">
                <div className="apply-now-content bg-custom">
                  <div className="apply-now-btn">
                    <button className = "btn-apply-now">Apply Now</button>
                    <br />
                    <br />
                    <br />
                    
                    <div className="form-container">
                      <div className="item">
                        <img src={location} alt="Location" className="image" />
                        <div className="description">
                          <p className='text-color'>Location</p>
                          <h4>South Breeze Center, Banani11</h4>
                        </div>
                      </div>
                      <div className="item">
                        <img src={jobtype} alt="Job Type" className="image" />
                        <div className="description">
                          <p className='text-color'>Job Type</p>
                          <h4>Full Time</h4>
                        </div>
                      </div>
                      <div className="item">
                        <img src={experience} alt="Experience" className="image" />
                        <div className="description">
                          <p className='text-color'>Experience</p>
                          <h4>1-3 Years</h4>
                        </div>
                      </div>
                      <div className="item">
                        <img src={posted} alt="Date Posted" className="image" />
                        <div className="description">
                          <p className='text-color'>Date Posted</p>
                          <h4>Posted 1 month ago</h4>
                        </div>
                      </div>
                      <div>
                      <div className="item">
                      <img src={fulltime} alt="Working Hours" />
                      <div className="description">
                         <p className='text-color'>Working Hours</p>
                         <h4> 9AM - 6PM</h4>
                       </div>
                       </div>  
                      <div class="item">
                      <img src={days} alt="Working Days" />
                         <div className="description">
                         <p className='text-color'>Working Days</p>
                         <h4>Weekly: 5 Days</h4>
                         <h4>Weekend:Saturday, Sunday</h4>
                         </div>
                         </div>
                         <div className="item">
                         <img src={vacancy} alt="Vacancy" />
                         <div className="description">
                         <p className='text-color'>Vacancy</p>
                         <h4>No. of Vacancy: 3</h4>
                         </div>
                         </div>
  
  </div>
  </div>

  {/* <!-- View All Jobs Link --> */}
  <div class="view-all-jobs">
    <a href="#" class="view-all-jobs-link"><strong>View All Jobs</strong></a>
  </div>
                    </div>
                    </div>
                  </div>

                  
                </div>
              </div>
            </div>
            
            <img src={line} alt="line" className="full-width-img-line"/>
           {/* Additional Sections */}
          <div className="row text-center">
            <div className="col-md-8 text-left">
            <div className="job-listing-lower-box">
                    {/* Who Are We Looking For Section */}
                    <section className="who-are-we">
                      <h3>The Application Process</h3>
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
              </section>
              </div>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-md-8">
            <div className="job-listing-lower-box">
                    {/* Who Are We Looking For Section */}
                    
                      <h3>Our Statement</h3>
                      <section className="who-are-we">
                     <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage.</p>
                     </section>
                     </div>
            </div>
          
          </div>
          

        </div>

       
        
          <div className="text-center">
            <a href="#apply" className="btn-apply-now">Apply Now</a>
          </div>
        </div>
        <br />
        <br />
        <br />
      

      {/* Footer Section */}
      <Mainfooter />
    </div>
  );
};

export default CareerDetails;
