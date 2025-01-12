import logo from "./../images/footer-img.png";
import locationIcon from "./../images/Location-icon.png";
import emailIcon from "./../images/email-icon.png";
import callIcon from "./../images/call-icon.png";
import facebookIcon from "./../images/footer-facebook.png";
import twiterIcon from "./../images/footer-twiter.png";
import instagramIcon from "./../images/footer-instagram.png";
import bgheroimg from "./../images/hero-img-contactus.png";
import MainNavBar from "../Components/Navbar";
import footerimage from "./../images/footer-img.png"

const ContactUs = () => {
  return (
    <div>
      <div className="container">
        <MainNavBar />
      </div>
      <div className="hero-img-div">
        <img src={bgheroimg} className="hero-img" alt="Hero Background" />
        <div className="hero-im-text-div">
          <h1 className="text-white"><b>Contact Us</b></h1>
        </div>
      </div>

      {/* Form part */}
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <span>Get in Touch</span>
            <h3>Hello</h3>
          </div>
        </div>

        <div className="row">
          {/* Add your form or other content here */}
        </div>
      </div>
      <div style={{ margin: 0, padding: 0}}>
      <iframe
        src="https://www.google.com/maps/embed?pb=... (Your map embed code)"
        // style={{
        //   border: 0,
        //   width: "100%",
        //   height: "500px",
        //   margin: 0,
        //   padding: 0,
        //   }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      </div>
      <footer>
        <div className="container">
          {/* 12 Col in one row */}
          <div className="row py-5">
            <div className="col-md-4">
              <img src={footerimage} alt="Company Logo" />
              {/* BOOTSTRAP CLASS */}
              <p className="my-3 left-aligned-text">
                {/* justified-text */}
                Innovation is the driving force behind progress, transforming
                ideas into impactful solutions that address modern challenges.
              </p>
              <ul>
                <li>
                  <img src={locationIcon} className="footer-icons" alt="Location Icon" />
                  Karad
                </li>
                <li>
                  <img src={emailIcon} className="footer-icons" alt="Email Icon" />
                  supporthariom@gmail.com
                </li>
                <li>
                  <img src={callIcon} className="footer-icons" alt="Call Icon" />
                  (02164) 214444
                </li>
                <li>
                  Recent Posts
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Company</h5>
              <ul>
                <li>About us</li>
                <li>Careers</li>
                <li>Case Studies</li>
                <li>Testimonials</li>
              </ul>
              <h5>Industry</h5>
              <ul>
                <li>Education & Learning</li>
                <li>Food & Hospitality</li>
                <li>Health & Fitness</li>
                <li>Finance & Marketing</li>
                <li>Real Estate</li>
                <li>Retail & Ecommerce</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Services</h5>
              <ul>
                <li>AI Enabled Application</li>
                <li>ERP Consulting and Development</li>
                <li>Frontend Development</li>
                <li>Web Development</li>
                <li>Microsoft Technologies</li>
                <li>Mobile Development</li>
                <li>Data Visualization</li>
                <li>DevOps Development</li>
                <li>Enterprise Portals</li>
                <li>Dedicated Development Team</li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5>Technology</h5>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>Jquery</li>
                <li>Bootstrap</li>
                <li>ReactJS</li>
                <li>Angular</li>
                <li>Azure AI</li>
                <li>Open AI</li>
                <li>NodeJS</li>
                <li>Python</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="pb-3 copy-right-div">
            <span>Copyright: © 2024 By Hariom Innovations</span>

            <div>
              <img src={facebookIcon} className="social-icon-footer" alt="Facebook Icon" />
              <img src={twiterIcon} className="social-icon-footer" alt="Twitter Icon" />
              <img src={instagramIcon} className="social-icon-footer" alt="Instagram Icon" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
