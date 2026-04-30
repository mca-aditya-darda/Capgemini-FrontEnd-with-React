import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ApiCalling from "../pages/ApiCalling";

const Routing = () => {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/api">API</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/api" element={<ApiCalling />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
