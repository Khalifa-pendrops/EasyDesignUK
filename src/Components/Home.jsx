// import React from "react";
// import { Link } from "react-router-dom";
// import Header from "./Header";
// import Services from "./Services";
// import About from "./About";
// import Features from "./Features";
// import Pricing from "./Pricing";
// import "./Home.css";
// import heroimage from "../assets/hero-image.png";

// function Home() {
//   return (
//     <div>
//       <Header />
//       <section id="home">
//         <div className="home-hero-section">
//           <div className="hero-left">
//             <h1>Transform Your Online Presence</h1>
//             <p>
//               Easy Design UK offers innovative web development and digital
//               solutions to elevate your business in the digital landscape.
//             </p>
//             <Link to="/start-journey">
//               <button className="home-hero-btn">Start Your Journey</button>
//             </Link>
//           </div>
//           <img className="home-hero-image" src={heroimage} alt="hero image" />
//         </div>
//       </section>
//       <About />
//       <Services />
//           <Features />
//           <Pricing />
//     </div>
//   );
// }

// export default Home;

import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import "./Home.css";
import heroimage from "../assets/hero-image.png";

// Lazy load the components
const Services = lazy(() => import("./Services"));
const About = lazy(() => import("./About"));
const Features = lazy(() => import("./Features"));
const Pricing = lazy(() => import("./Pricing"));

function Home() {
  return (
    <div>
      <Header />
      <section id="home">
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
      </section>

      {/* Wrap components with Suspense and provide a fallback UI */}
      <Suspense fallback={<div>Loading About...</div>}>
        <About />
      </Suspense>

      <Suspense fallback={<div>Loading Services...</div>}>
        <Services />
      </Suspense>

      <Suspense fallback={<div>Loading Features...</div>}>
        <Features />
      </Suspense>
      <Suspense fallback={<div>Loading Features...</div>}>
        <Pricing />
      </Suspense>
    </div>
  );
}

export default Home;
