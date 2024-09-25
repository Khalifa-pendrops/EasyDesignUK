import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Features from "./Components/Features";
import ScrollToTop from "./Components/ScrollToTop";


function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/features" element={<Features />} /> */}
        </Routes>
      <ScrollToTop />
    </>
  );
}

export default App;
