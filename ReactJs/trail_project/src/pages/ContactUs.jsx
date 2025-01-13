import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./../images/footer-img.png";
import locationIcon from "./../images/Location-icon.png";
import emailIcon from "./../images/email-icon.png";
import callIcon from "./../images/call-icon.png";
import facebookIcon from "./../images/footer-facebook.png";
import twitterIcon from "./../images/footer-twiter.png";
import instagramIcon from "./../images/footer-instagram.png";
import bgheroimg from "./../images/hero-img-contactus.png";
import MainNavBar from "../Components/Navbar";
import footerimage from "./../images/footer-img.png";
import Button from "react-bootstrap/Button";
import call from "./../images/call.png"
// import emailIcon from "./../images/e"

const ContactUs = () => {
  return (
    <div>
      <div className="container">
        <MainNavBar />
      </div>
      
      {/* Hero Image Section */}
      <div className="hero-img-div">
        <img src={bgheroimg} className="hero-img" alt="Hero Background" />
        <div className="hero-im-text-div">
          <h1 className="text-white"><b>Contact Us</b></h1>
        </div>
      </div>

      {/* Form Part */}
      <div className="container my-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <span className='sub-title'> ---- Get in Touch</span>
            <h3 className='tilte-section'>Hey!Let's Talk</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            {/* Add your form or other content here */}
            <form>
              <div>
                 <input type="text" id="name" placeholder="Name" className='contantus-input-form' />
              </div>
              
              <div>
                <input type="email" id="email" placeholder="Email" className='contantus-input-form'/>
              </div>
              <div>
                <input type="phone" id="phone" placeholder="Phone" className='contantus-input-form'/>
              </div>
              
              
                <textarea id="message" placeholder="Your message" className='contantus-input-form'></textarea>
              
              
               <Button className="form-button">Submit</Button>
              
              
            </form>
          </div>

          {/* Contact Details (Icons and Text) */}
          <div className="col-md-4">
            <div className="row mb-3">
              <div className="col-md-4">
                <img src={call} className="footer-icons" alt="Location Icon" />
              </div>
              <div className="col-md-8">
                <p>Call Anytime
                + 91 23678 27867
                  + 91 67678 92878</p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-4">
                <img src={emailIcon} className="footer-icons" alt="Email Icon" />
              </div>
              <div className="col-md-8">
              Send Email

             <p>connect@itfirms.com
                hello@itfirms.com</p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-4">
                <img src={callIcon} className="footer-icons" alt="Call Icon" />
              </div>
              <div className="col-md-8">
                <p>Visit Us

                      20 Island Park Road, 
                      New Jearsy, New York, USA</p>
              </div>
              Follow us
            </div>
          </div>
        </div>
      </div>

      {/* Google Map Embed */}
      <div style={{ margin: 0, padding: 0 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=..."  // Use your map embed code here
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ width: '100%', height: '500px' }}
        ></iframe>
      </div>

      {/* Footer */}
      <footer>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-4">
              <img src={footerimage} alt="Company Logo" className="mb-3" />
              <p>
                Innovation is the driving force behind progress, transforming ideas into impactful solutions that address modern challenges.
              </p>
              <ul>
                <li><img src={locationIcon} className="footer-icons" alt="Location Icon" /> Karad</li>
                <li><img src={emailIcon} className="footer-icons" alt="Email Icon" /> supporthariom@gmail.com</li>
                <li><img src={callIcon} className="footer-icons" alt="Call Icon" /> (02164) 214444</li>
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
              <img src={twitterIcon} className="social-icon-footer" alt="Twitter Icon" />
              <img src={instagramIcon} className="social-icon-footer" alt="Instagram Icon" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
