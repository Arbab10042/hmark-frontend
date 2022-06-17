import * as React from "react";
import About from "./pages/about";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Features from "./pages/features";
import Home from "./pages/Home";
import WatermarkImage from "./pages/watermark_image";
import WatermarkVideo from "./pages/watermark_video";

// markup
const App = () => {
  return (
    <div style={{ backgroundColor: "#ecf3fc" }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watermark-image" element={<WatermarkImage />} />
          <Route path="/watermark-video" element={<WatermarkVideo />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
