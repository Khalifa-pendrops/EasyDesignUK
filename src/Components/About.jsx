import React, { useRef } from "react";
import useOnScreen from "./ScreenLoadSetup";
import { Link } from "react-router-dom";
import aboutus from "../assets/about-1.png";
import "./Home.css";

function About() {
  const ref = useRef();
  const isVisible = useOnScreen(ref, "0px");
  return (
    <div
      ref={ref}
      style={{
        minHeight: "100vh",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(100px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      }}
    >
      <section id="about" className="home-about-div">
        <div className="about-hero-image-div">
          <img className="about-hero-image" src={aboutus} alt="about image" />
        </div>
        <div className="home-about-right">
          <h4>About Us</h4>
          <h1> Crafting Digital Experiences for Your Success</h1>
          <div className="about-hero-image-div show-image">
            <img className="about-hero-image" src={aboutus} alt="about image" />
          </div>
          <p>
            At Easy Design UK, we specialize in creating stunning,
            high-performance websites and digital solutions tailored to your
            business needs. With a team of skilled developers and designers, we
            are committed to delivering innovative and effective web development
            services that help you stand out in the digital world. <br></br>
            <br></br>Our approach is simple yet effective: we listen to your
            goals, understand your audience, and deliver a product that not only
            looks great but also drives results. From bespoke websites to
            complex web applications, our expertise covers all aspects of
            digital design and development.
          </p>
          <Link to="/routedcontact">
            <button className="home-about-btn">Talk To Us</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;
