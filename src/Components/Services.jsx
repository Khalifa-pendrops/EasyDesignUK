import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faPaintbrush,
  faMobile,
    faMagnifyingGlass,
    faChartLine,
    faServer,
  faRocket
} from "@fortawesome/free-solid-svg-icons";

function Services() {
  return (
    <div>
      <section id="/section" className="services-section">
        <div className="home-service-head">
          <h4>Our Services</h4>
          <h1>What We Can Do For You</h1>
          <p>
            At Easy Design UK, we provide a range of digital solutions tailored
            to elevate your business. Our expertise spans from web development
            to digital marketing, ensuring your brand reaches its full potential
            online.
          </p>
        </div>
        <div className="services-container">
          <div className="web-dev-div">
            <div className="icon-div">
              <FontAwesomeIcon className="icon" icon={faCode} />
            </div>
            <h3>Web Development</h3>
            <p>
              We build responsive and dynamic websites that deliver a seamless
              user experience across all devices.
            </p>
            <button className="services-btn">Contact Us</button>
          </div>

          <div className="ui-ux-div">
            <div className="icon-div">
              <FontAwesomeIcon className="icon" icon={faPaintbrush} />
            </div>
            <h3>UI/UX Design</h3>
            <p>
              Creating visually appealing and intuitive designs to enhance user
              interaction and engagement on your website.
            </p>
            <button className="services-btn">Contact Us</button>
          </div>

          <div className="mobile-dev-div">
            <div className="icon-div">
              <FontAwesomeIcon className="icon" icon={faMobile} />
            </div>
            <h3>Mobile App Development</h3>
            <p>
              Developing mobile applications that offer a robust and engaging
              user experience on both iOS and Android platforms.
            </p>
            <button className="services-btn">Contact Us</button>
          </div>

          <div className="design-div">
            <div className="icon-div">
              <FontAwesomeIcon className="icon" icon={faMobile} />
            </div>
            <h3>Responsive Design</h3>
            <p>
              Mobile-first designs that look great on any device, ensuring a
              seamless experience across platforms.
            </p>
            <button className="services-btn">Contact Us</button>
          </div>
        </div>

        <div className="services-container">
          <div className="web-dev-div">
            <div className="icon-div">
              <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
            </div>
            <h3>Seo Optimization</h3>
            <p>
              Optimizing your website to improve search engine rankings and
              increase organic traffic to your site.
            </p>
            <button className="services-btn">Contact Us</button>
          </div>

          <div className="ui-ux-div">
            <div className="icon-div">
              <FontAwesomeIcon className="icon" icon={faChartLine} />
            </div>
            <h3>Digital Marketing</h3>
            <p>
              Implementing effective digital marketing strategies to increase
              your online visibility and drive conversions.
            </p>
            <button className="services-btn">Contact Us</button>
          </div>

          <div className="mobile-dev-div">
            <div className="icon-div">
              <FontAwesomeIcon className="icon" icon={faServer} />
            </div>
            <h3>Web Hosting & Maintenance</h3>
            <p>
              Providing reliable hosting services and ongoing maintenance to
              ensure your website runs smoothly.
            </p>
            <button className="services-btn">Contact Us</button>
          </div>

          <div className="design-div">
            <div className="icon-div">
              <FontAwesomeIcon className="icon" icon={faRocket} />
            </div>
            <h3>Optimized Performance</h3>
            <p>
              Websites optimized for speed and SEO, ensuring fast load times and
              top search engine rankings.
            </p>
            <button className="services-btn">Contact Us</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
