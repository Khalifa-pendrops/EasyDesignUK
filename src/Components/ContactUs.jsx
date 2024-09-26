import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

function ContactUs() {
  return (
    <div>
      <section id="/contact-us" className="contact-us-div">
        <div className="navigate-div">
          <h4>Navigation</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#contact-us">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="newsletter-div">
          <h4>Newsletter</h4>
          <form>
            <label>Subscribe to our newsletter</label>
            <input className="contact-input-field" type="email" placeholder="Enter your email" />
            <button className="contact-btn" type="submit">Subscribe</button>
          </form>
        </div>
        <div className="contact-info-div">
          <h4>Contact Info</h4>
          <div className="contact-media">
            <p>
              <FontAwesomeIcon className="contact-icons" icon={faEnvelope} />
              info@easydesignuk.co.uk
            </p>
            <p>
              <FontAwesomeIcon className="contact-icons" icon={faPhone} />
              +44 7404 415940
            </p>
            <p>
              <FontAwesomeIcon className="contact-icons" icon={faLocationDot} />
              Birmingham, United Kingdom
            </p>
          </div>
          <div className="social-media">
            <a href="">
              <FontAwesomeIcon className="social-icons" icon={faFacebook} />
            </a>
            <a href="">
              <FontAwesomeIcon className="social-icons" icon={faInstagram} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
