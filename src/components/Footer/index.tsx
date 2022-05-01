import React from "react";
import { Button } from "antd";
import "./footer_style.css";

const NavigationData = ["Features", "About Us", "Get Started"];
const FeatureData = [
  "Watermarking",
  "Tampering Detection",
  "Multimedia Recovery",
];

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <div className="footer-title">Navigation</div>
          {NavigationData.map((item) => {
            return (
              <Button className="footer-item" type="link" key={item}>
                {item}
              </Button>
            );
          })}
        </div>
        <div className="footer-col">
          <div className="footer-title">Features</div>
          {FeatureData.map((item) => {
            return (
              <Button className="footer-item" type="link" key={item}>
                {item}
              </Button>
            );
          })}
        </div>
      </div>
      <span className="footer-span">
        <Button
          type="link"
          style={{
            fontSize: "18px",
            marginTop: "-5px",
          }}
        >
          hMark
        </Button>{" "}
        Developed by Team Alpha
      </span>
    </div>
  );
}

export default Footer;
