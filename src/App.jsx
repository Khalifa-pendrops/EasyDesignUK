import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import RoutedContactPage from "./Components/RoutedContactPage";
import ScrollToTop from "./Components/ScrollToTop";
// import Test from "./Components/Test";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/routedcontact" element={<RoutedContactPage />} />
        {/* <Route path="/" element={<ScrollToTop />} /> */}
      </Routes>
      <ScrollToTop />
    </>
  );
}

export default App;
