import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ScrollToTop from "./Components/ScrollToTop";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path='/services' element={<Services />} /> */}
      </Routes>
      <ScrollToTop />
    </>
  );
}

export default App;
