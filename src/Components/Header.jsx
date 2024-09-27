import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Home.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    //this is the setup for the event listener on mount component
    window.addEventListener("scroll", handleScroll);
    return () => {
      //this will remove event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header className={`head-main-div ${scrolled ? "scrolled" : " "}`}>
        <a href="#home">
          <img src={logo} alt="logo" width="60px" />
        </a>
        <nav className="head-nav">
          <ul>
            {" "}
            <li className="home-nav-list">
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <Link top="/routedcontact" className="links">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
