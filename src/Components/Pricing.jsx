import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

function Pricing() {
  return (
    <div>
      <section id="#pricing" className="pricing-parent-container">
        <div className="pricing-top-div">
          <h4>Pricing Plan</h4>
          <h1>Not Sure Which Plan Is For You?</h1>
          <p>
            Our pricing is flexible and tailored to each project. We cater to
            both UK and international clients, offering customized web solutions
            and a range of additional services, such as branding, graphic
            design, and social media management, based on the complexity and
            requirements of your project.
          </p>
        </div>

        <div className="pricing-bottom-div">
          <div className="pricing-card">
            <div className="pricing-card-top">
              <h3>Basic</h3>
              <h2>
                <span className="pound-span-1">&pound;</span>
                Starting from <br /> 500
              </h2>
            </div>
            <div className="pricing-card-bottom">
              <p>
                <FontAwesomeIcon className="check-icon" icon={faCheck} />
                Standard Website Design
              </p>
              <p>
                <FontAwesomeIcon className="check-icon" icon={faCheck} />
                Basic Branding Consultation
              </p>
              <p>
                <FontAwesomeIcon className="check-icon" icon={faCheck} />
                Basic Customer Support
              </p>
              <p>
                <FontAwesomeIcon className="check-icon" icon={faCheck} />
                SEO Setup
              </p>
              <p>
                <FontAwesomeIcon className="check-icon" icon={faCheck} />
                Social Media Setup Assistance
              </p>
              <p>
                <FontAwesomeIcon className="check-icon" icon={faXmark} />
                Graphic Design
              </p>
              <p>
                <FontAwesomeIcon className="check-icon" icon={faXmark} />
                Video Editing
              </p>
              <Link to="/routedcontact">
                <button className="pricing-btn">Request a Quote</button>
              </Link>
            </div>
          </div>

          <div className="pricing-card">
            <div className="pricing-card-top">
              {/* <div className="badge-main-div"> */}
              <div className="price-badge">
                <span>Popular</span>
              </div>
              {/* </div> */}
              <h3 className="pricing-card-purple2">Standard</h3>
              <h2 className="pricing-card-purple2">
                <span className="pound-span-2">&pound;</span>
                Starting from <br /> 1,500
              </h2>
            </div>
            <div className="pricing-card-bottom">
              <p>
                <FontAwesomeIcon className="check-icon" icon={faCheck} />
                Custom Website Design
              </p>
              <p>
                <FontAwesomeIcon className="check-icon" icon={faCheck} />
                Comprehensive Branding Services
              </p>
              <p>
                <FontAwesomeIcon className="check-icon" icon={faCheck} />
                Priority Customer Support
              </p>
              <p>
                <FontAwesomeIcon className="check-icon" icon={faCheck} />
                SEO Optimization
              </p>
              <p>
                <FontAwesomeIcon className="check-icon" icon={faCheck} />
                Social Media Management
              </p>
              <p>
                <FontAwesomeIcon className="check-icon" icon={faCheck} />
                Basic Video Editing
              </p>
              <p>
                <FontAwesomeIcon className="check-icon" icon={faCheck} />
                Email Integration
              </p>
              <p>
                <FontAwesomeIcon className="check-icon" icon={faXmark} />
                E-commerce Support
              </p>
              <p>
                <FontAwesomeIcon className="check-icon" icon={faXmark} />
                Advanced Customizations
              </p>
              <Link to="/routedcontact">
                <button className="pricing-btn">Request a Quote</button>
              </Link>
            </div>
          </div>
          <div className="pricing-card">
            <div className="pricing-card-top">
              <h3 className="pricing-card-purple">Premium</h3>
              <h2 className="pricing-card-purple">
                <span className="pound-span-3">&pound;</span>
                Starting from <br /> 3,000
              </h2>
            </div>
            <div className="pricing-card-bottom">
              <p>
                <FontAwesomeIcon className="check-icon" icon={faCheck} />
                Fully Custom Website Design
              </p>
              <p>
                <FontAwesomeIcon className="check-icon" icon={faCheck} />
                Advanced Branding Solutions
              </p>
              <p>
                <FontAwesomeIcon className="check-icon" icon={faCheck} />
                24/7 Premium Support
              </p>
              <p>
                <FontAwesomeIcon className="check-icon" icon={faCheck} />
                Advanced SEO & Market Tools
              </p>
              <p>
                <FontAwesomeIcon className="check-icon" icon={faCheck} />
                E-commerce Integration
              </p>
              <p>
                <FontAwesomeIcon className="check-icon" icon={faCheck} />
                Social Media Campaigns
              </p>
              <p>
                <FontAwesomeIcon className="check-icon" icon={faCheck} />
                Professional Video Editing
              </p>
              <p>
                <FontAwesomeIcon className="check-icon" icon={faCheck} />
                Web & App Development
              </p>
              <p>
                <FontAwesomeIcon className="check-icon" icon={faCheck} />
                Role-based Access
              </p>
              <Link to="/routedcontact">
                <button className="pricing-btn">Request a Quote</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
