import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
// import RoutedContactPage from "./Components/RoutedContactPage";
// import Location from "./Components/Location";
// import Features from "./Components/Features";
import ScrollToTop from "./Components/ScrollToTop";


function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/location" element={<Location />} />  */}
          {/* <Route path="/routedcontact" element={<RoutedContactPage />} /> */}
          {/* <Route path="/features" element={<Features />} /> */}
        </Routes>
      <ScrollToTop />
    </>
  );
}

export default App;
