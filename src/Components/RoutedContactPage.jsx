import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faTurnUp,
  faLocationDot,
  faEnvelope,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Location from "./Location";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

function RoutedContactPage() {
  return (
    <div>
      <Header />
      <div className="routed-contact-div">
        <div className="routed-contact-header">
          <h1>Contact Us</h1>
          <Link className="contact-linked" to="/">
            <p>
              Home / <span>Contact</span>
            </p>
          </Link>
        </div>

        <div className="routed-contact-card">
          <div className="routed-contact-card-head">
            <h4>Contact Us</h4>
            <h1>Get In Touch With Us</h1>
            <p>
              We'd love to hear from you! Whether you have a question about our
              services, need a project quote, or just want to say hello, our
              team is here to help. Reach out to us using the form below, and
              we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="routed-contact-form">
            <div className="form-left">
              <h1>Get In Touch</h1>
              <p>Send Us a Message</p>
              <form method="post">
                <div className="input-row">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="input-row">
                  <input
                    type="number"
                    name="phoneNumber"
                    placeholder="Your Phone"
                    required
                  />

                  <div className="div-like-input">
                    <label>
                      Your Project <br></br>
                      <span>Choose a service</span>
                                      </label>
                                      {/* <select id="services" >
                                          <option value="disabled">Choose a service</option>
                                      </select> */}
                    <FontAwesomeIcon
                      className="angle-icon positioned-icon"
                      icon={faAngleDown}
                    />
                  </div>
                </div>
                <input type="text" name="text" placeholder="Subject" required />
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                ></textarea>
                <button
                  className="routed-contact-btn"
                  type="submit"
                  value="Submit"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="form-right">
              <div className="form-right-item">
                <FontAwesomeIcon
                  className="routed-contact-icon"
                  icon={faLocationDot}
                />
                <div className="right-item">
                  <p>Address</p>
                  <span>Birmingham, United Kingdom</span>
                </div>
              </div>

              <div className="form-right-item">
                <FontAwesomeIcon
                  className="routed-contact-icon"
                  icon={faMobile}
                />
                <div className="right-item">
                  <p>Address</p>
                  <span>Birmingham, United Kingdom</span>
                </div>
              </div>

              <div className="form-right-item">
                <FontAwesomeIcon
                  className="routed-contact-icon"
                  icon={faEnvelope}
                />
                <div className="right-item">
                  <p>Address</p>
                  <span>Birmingham, United Kingdom</span>
                </div>
              </div>

              <div className="row-icons">
                <a href="">
                  <FontAwesomeIcon
                    className="routed-contact-icon"
                    icon={faTurnUp}
                  />
                </a>
                <a href="">
                  <FontAwesomeIcon
                    className="routed-social-icons"
                    icon={faFacebook}
                  />
                </a>
                <a href="">
                  <FontAwesomeIcon
                    className="routed-social-icons"
                    icon={faInstagram}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <Location />
      </div>
      <ContactUs />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default RoutedContactPage;
