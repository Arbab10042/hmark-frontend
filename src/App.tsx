import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WatermarkImage from "./pages/watermark_image";
import WatermarkVideo from "./pages/watermark_video";
import Authenticate_Image from "pages/authenticate_image";
import Recover_Image from "pages/recover_image";

// markup
const App = () => {
  return (
    <div style={{ backgroundColor: "#ecf3fc" }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watermark-image" element={<WatermarkImage />} />
          <Route path="/watermark-video" element={<WatermarkVideo />} />
          <Route path="/authenticate-image" element={<Authenticate_Image />} />
          <Route path="/recover-image" element={<Recover_Image />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
