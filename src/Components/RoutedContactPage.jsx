import React, { useState } from "react";
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [selectedService, setSelectedServices] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your API call here or any other backend logic here to send the form data to your server.
    console.log("Form Data Submitted:", formData);

    // This logic must reset form after submittion
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setSelectedServices(e.target.value);
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    //   setFormData({...formData, [e.target.name]: e.target.value });
  };

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
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="input-row">
                  <input
                    type="phone"
                    name="phoneNumber"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone"
                    required
                  />
                  <label>
                    Your Project <br></br>
                  </label>
                  <select id="services" onClick={handleChange}>
                    <option
                      className="disabled-colored-select"
                      value="disabled"
                    >
                      Choose a service
                    </option>
                    <option value="branding">Business Branding</option>
                    <option value="graphics">Graphics Design</option>
                    <option value="social-media">
                      Social Media Management
                    </option>
                    <option value="video-editing">Video Editing</option>
                    <option value="web-dev">Web and App Development</option>
                  </select>
                </div>
                <input type="text" name="text" placeholder="Subject" required />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  required
                ></textarea>
                <button
                  className="routed-contact-btn"
                  type="submit"
                  value="Submit"
                  onSubmit={handleSubmit}
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
