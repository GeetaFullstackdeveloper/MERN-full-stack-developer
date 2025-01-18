import 'bootstrap/dist/css/bootstrap.min.css';

import bgheroimg from "./../images/hero-img-contactus.png";
import MainNavBar from "../Components/Navbar";
import Mainfooter from "./../Components/footer";
import calliconform from "./../images/call-icon-form.png";
import emailiconform from "./../images/email-icon-form.png";
import locationiconform from "./../images/location-icon-form.png";
import line from "./../images/line.png"; // Corrected path for line image

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
      <div className="container py-5">
        <div className="row text-center py-5">
          <div className="col-md-12">
            <img src={line} alt="Line" />
            <span className="sub-title-section">Get In Touch </span>
            <h3 className="title-section">Hey! Let’s Talk</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <input type="text" placeholder="Name" className="contact-form-input" />
            <br />
            <input type="email" placeholder="Email" className="contact-form-input" />
            <br />
            <input type="mobile" placeholder="Mobile" className="contact-form-input" />
            <br />
            <textarea placeholder="Your Message" className="contact-form-input"></textarea>
          </div>
          <div className="col-md-4">
            <div className="row box-row-icon-text my-3">
              <div className="col-md-4 text-center m-auto">
                <div className="icon-form-box p-5">
                  <img src={calliconform} alt="Call Icon" />
                </div>
              </div>
              <div className="col-md-8">
                <p>Call Anytime</p>
                <span>+ 91 23678 27867 + 91 67678 92878</span>
              </div>
            </div>
            <div className="row box-row-icon-text my-3">
              <div className="col-md-4 text-center m-auto">
                <div className="icon-form-box p-5">
                  <img src={emailiconform} alt="Email Icon" />
                </div>
              </div>
              <div className="col-md-8">
                <p>Send Email</p>
                <span>connect@itfirms.com hello@itfirms.com</span>
              </div>
            </div>
            <div className="row box-row-icon-text my-3">
              <div className="col-md-4 text-center m-auto">
                <div className="icon-form-box p-5">
                  <img src={locationiconform} alt="Location Icon" />
                </div>
              </div>
              <div className="col-md-8">
                <p>Visit Us</p>
                <span>20 Island Park Road, New Jersey, New York, USA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map Embed */}
      <div style={{ margin: 0, padding: 0 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=your_actual_embed_code_here"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ width: '100%', height: '500px' }}
        ></iframe>
      </div>

      {/* Footer */}
      <div className='footer-container'>
        <Mainfooter />
      </div>
    </div>
  );
};

export default ContactUs;
