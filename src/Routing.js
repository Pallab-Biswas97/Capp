import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import InnerPage from "./Components/InnerPage";
import Navbar from "./Components/Navbar";

const Routing = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} /> 
         <Route path="/InnerPage" element={<InnerPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
