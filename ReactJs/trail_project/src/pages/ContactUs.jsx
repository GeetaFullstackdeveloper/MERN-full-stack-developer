import Navbar from "../Components/Navbar";
import logo from "./../images/footer-img.png";
import locationIcon from "./../images/Location-icon.png";
import emailIcon from "./../images/email-icon.png";
import callIcon from "./../images/call-icon.png";
import facebookIcon from "./../images/footer-facebook.png";
import twiterIcon from "./../images/footer-twiter.png";
import instagramIcon from "./../images/footer-instagram.png";
import bgheroimg from "./../images/hero-img-contactus.png";
import MainNavBar from "../Components/Navbar";
const ContactUs = () => {
  return (
    <div>
      <div className="container">
        <MainNavBar />
      </div>
      <div className="hero-img-div">
        {/* <img src={bgheroimg} className="hero-img" /> */}
        {/* <div className="hero-im-text-div">
          <h1 className="text-white"><b> Contact Us </b></h1>
        </div> */}
        <h1 className="hero-im-text-div">ssssss</h1>
        <h1 className="hero-im-text-div">ssssss</h1>
        <h1 className="hero-im-text-div">ssssss</h1>
        <h1 className="hero-im-text-div">ssssss</h1>
        <h1 className="hero-im-text-div">ssssss</h1>
      </div>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4686.7554608241!2d74.22187720000001!3d17.3194702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc17f03509738b1%3A0x576f02648d3bb018!2sHari%20Om%20Innovations!5e1!3m2!1sen!2sin!4v1735697210880!5m2!1sen!2sin"
        style={{
          border: 0,
          width: "100%",
          height: "500px",
        }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <footer>
        <div className="container">
          {/* 12 Col in one row */}
          <div className="row py-5">
            <div className="col-md-4">
              <img src={logo} />
              <p className="my-3">
                Innovation is the driving force behind progress, transforming
                ideas into impactful solutions that address modern challenges.
                Innovation is the driving force behind progress, transforming
                ideas into impactful solutions that address.
              </p>

              <ul>
                <li>
                  <img src={locationIcon} className="footer-icons" /> 1234 Elm
                  Street, Springfield, IL 62704, New York
                </li>
                <li>
                  <img src={emailIcon} className="footer-icons" />
                  supporthariom@gmail.com
                </li>
                <li>
                  <img src={callIcon} className="footer-icons" />
                  (212) 555-7890
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
                <li> Al Enabled Application </li>
                <li>ERP Consulting and</li>
                <li>Development</li>
                <li>Frontend Development</li>
                <li>Web Development</li>
                <li>Microsoft Technologies</li>
                <li>Mobile Development</li>
                <li>Data Visualizaton</li>
                <li>Devops Development</li>
                <li>Enterprise Portals</li>
                <li>Dedicated Development Team</li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5>Technology </h5>
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
            <span className="">Copyright: © 2024 By Hariom Innovations</span>

            <div>
              <img src={facebookIcon} className="social-icon-footer" />
              <img src={twiterIcon} className="social-icon-footer" />
              <img src={instagramIcon} className="social-icon-footer" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;