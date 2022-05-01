import "antd/dist/antd.css";

import * as React from "react";
import About from "./pages/about";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Features from "./pages/features";
import Home from "./pages/Home";
import Watermark from "./pages/watermark";

// markup
const App = () => {
  return (
    <div style={{ backgroundColor: "#ecf3fc" }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watermark" element={<Watermark />} />
          <Route path="/features" element={<Features />} />
          <Route path="/features" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
