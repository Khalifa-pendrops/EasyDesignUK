import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Services from "./Services";
import Features from "./Features";
import "./Home.css";
import heroimage from "../assets/hero-image.png";
import aboutus from "../assets/about-1.png";

function Home() {
  return (
    <div>
      <Header />
      <div className="home-hero-section">
        <div className="hero-left">
          <h1>Transform Your Online Presence</h1>
          <p>
            Easy Design UK offers innovative web development and digital
            solutions to elevate your business in the digital landscape.
          </p>
          <Link to="/start-journey">
            <button className="home-hero-btn">Start Your Journey</button>
          </Link>
        </div>
        <img className="home-hero-image" src={heroimage} alt="hero image" />
      </div>
      <section id="/about" className="home-about-div">
        <div className="about-hero-image-div">
          <img className="about-hero-image" src={aboutus} alt="about image" />
        </div>
        <div className="home-about-right">
          <h4>About Us</h4>
          <h1> Crafting Digital Experiences for Your Success</h1>
          <p>
            At Easy Design UK, we specialize in creating stunning,
            high-performance websites and digital solutions tailored to your
            business needs. With a team of skilled developers and designers, we
            are committed to delivering innovative and effective web development
            services that help you stand out in the digital world. <br></br>{" "}
            <br></br>Our approach is simple yet effective: we listen to your
            goals, understand your audience, and deliver a product that not only
            looks great but also drives results. From bespoke websites to
            complex web applications, our expertise covers all aspects of
            digital design and development.
          </p>
          <Link to="/about">
            <button className="home-about-btn">Talk To Us</button>
          </Link>
        </div>
          </section>
          <Services />
          <Features />
    </div>
  );
}

export default Home;
