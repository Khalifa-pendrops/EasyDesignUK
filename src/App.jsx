// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import RoutedContactPage from "./Components/RoutedContactPage";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/routedcontact" element={<RoutedContactPage />} />
      </Routes>
      <ScrollToTop />
    </>
  );
}

export default App;
