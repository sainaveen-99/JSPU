import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Services from "./Components/Services";
import Home from "./Components/Home";
import Reviews from "./Components/Review";

import "./app.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/review" element={<Reviews />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
