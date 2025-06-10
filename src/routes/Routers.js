import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "../Page/Shop/Shop";
import Home from "../Page/Home/Home.jsx";
import AboutUs from "../Page/AboutUs/AboutUs.jsx";
import Advantages from "../Page/Advantages/Advantages.jsx";

const App = () => {
  return (
    <React.Fragment>
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/advantages" element={<Advantages />} />
          <Route path="/" element={<Home />} />
          {/* Другие маршруты */}
        </Routes>
    </React.Fragment>
  );
};

export default App;