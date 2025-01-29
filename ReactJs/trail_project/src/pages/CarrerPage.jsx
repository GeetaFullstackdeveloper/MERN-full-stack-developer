import 'bootstrap/dist/css/bootstrap.min.css';
import bgheroimg from "./../images/hero-img-contactus.png";
import MainNavBar from "../Components/Navbar";
import Mainfooter from "../Components/footer";
import team from "./../images/team-work.png";
import secured_future from "./../images/secured-future.png";
import learning_opportunity from "./../images/learning-opportunity.png";
import upgrade_skills from "./../images/upgarde-skills.png";
import { Link } from 'react-router-dom';

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

      {/* Benefits Section */}
      <div className="container-career-page-first-section">
        <div className="row">
          {/* Left Column: Benefits Details */}
          <div className="col-md-6">
            <h6>BENEFITS</h6>
            <h2>We offer a great set of benefits to our employees. Here are some reasons why you should consider joining our team:</h2>
            <p>
              We want you to feel at home when working at JMC (Japan Marketing & Consultancy Limited), and for that, we have curated a great set of benefits for you. It all starts with the free lunch!
            </p>
          </div>

          {/* Right Column: Benefits and Images */}
          <div className="col-md-6">
            {/* First Row */}
            <div className="row">
              <div className="col-md-6 text-left">
                <img src={team} alt="team-work" className="img-fluid" />
                <h5>Team work</h5>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>

              <div className="col-md-6 text-left">
                <img src={secured_future} alt="secured_future" className="img-fluid" />
                <h5>Secured Future</h5>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>

            {/* Second Row */}
            <div className="row">
              <div className="col-md-6 text-left">
                <img src={learning_opportunity} alt="learning_opportunity" className="img-fluid" />
                <h5>Learning opportunities</h5>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>

              <div className="col-md-6 text-left">
                <img src={upgrade_skills} alt="upgrade_skills" className="img-fluid" />
                <h5>Upgrade Skills</h5>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Example Section (Optional) */}
      <div className="outer-box">
        <div className="inner-box">
          {/* Inner box content */}
          <div className="row text-center">
            <div className="col-md-12">
              <Link to="/careerdetails">
                <h6 className="text-uppercase">Come join us</h6>
              </Link>
              <h3>Career Openings</h3>
              <p>We’re always looking for creative, talented self-starters to join the JMC family. Check out our open roles below and fill out an application.</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 text-left">
              <ul>
                <li>HT &amp; Admin</li>
                <li>Engineering</li>
                <li>Support</li>
                <li>Design</li>
                <li>Digital Marketing</li>
              </ul>
            </div>

            <div className="col-md-8">
              {/* Job Box Rows */}
              <div className="row job-box">
                <div className="col-md-4">
                  <h3>WordPress Developer</h3>
                </div>
                <div className="col-md-4">
                  <p className="p-career">Experience</p>
                  <h3>2 Years</h3>
                </div>
                <div className="col-md-4">
                  <p className="p-career">Deadline</p>
                  <h3>2021-05-08</h3>
                </div>
              </div>

              {/* Job Box Row - Javascript Developer */}
              <div className="row job-box">
                <div className="col-md-4">
                  <h3>Javascript Developer</h3>
                </div>
                <div className="col-md-4">
                  <p className="p-career">Experience</p>
                  <h3>1 Year</h3>
                </div>
                <div className="col-md-4">
                  <p className="p-career">Deadline</p>
                  <h3>2021-05-08</h3>
                </div>
              </div>

              {/* Job Box Row - Apps Developer */}
              <div className="row job-box">
                <div className="col-md-4">
                  <h3>Apps Developer</h3>
                </div>
                <div className="col-md-4">
                  <p className="p-career">Experience</p>
                  <h3>2 Years</h3>
                </div>
                <div className="col-md-4">
                  <p className="p-career">Deadline</p>
                  <h3>2021-05-08</h3>
                </div>
              </div>

              {/* Job Box Row - IOS Developer */}
              <div className="row job-box">
                <div className="col-md-4">
                  <h3>IOS Developer</h3>
                </div>
                <div className="col-md-4">
                  <p className="p-career">Experience</p>
                  <h3>2 Years</h3>
                </div>
                <div className="col-md-4">
                  <p className="p-career">Deadline</p>
                  <h3>2021-05-08</h3>
                </div>
              </div>

              {/* Job Box Row - Node Js Developer */}
              <div className="row job-box">
                <div className="col-md-4">
                  <h3>Node Js Developer</h3>
                </div>
                <div className="col-md-4">
                  <p className="p-career">Experience</p>
                  <h3>3 Years</h3>
                </div>
                <div className="col-md-4">
                  <p className="p-career">Deadline</p>
                  <h3>2021-05-08</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Mainfooter />
    </div>
  );
};

export default CarrerPage;
