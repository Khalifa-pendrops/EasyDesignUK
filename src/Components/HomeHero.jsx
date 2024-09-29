import React from 'react';
import { Link } from "react-router-dom";
import heroimage from "../assets/hero-image.png";

function HomeHero() {
  return (
    <div>
      <section id="/home">
        <div className="home-hero-section">
          <div className="hero-left">
            <h1>Transform Your Online Presence</h1>
            <p>
              Easy Design UK offers innovative web development and digital
              solutions to elevate your business in the digital landscape.
            </p>
            <Link to="/routedcontact">
              <button className="home-hero-btn">Start Your Journey</button>
            </Link>
          </div>
          <img className="home-hero-image" src={heroimage} alt="hero image" />
          <div className="row">
            <div className="circle large-circle"></div>
            <div className="circle medium-circle"></div>
            <div className="circle small-circle"></div>
            <div className="triangle first-triangle"></div>
            <div className="triangle additional-triangle"></div>
            <div className="heart"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeHero

