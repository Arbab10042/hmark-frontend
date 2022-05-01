import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "./nav_style.css";

function Navbar({ navBtnText }: { navBtnText?: string }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-style">
      <div className="container-fluid">
        <a className="navbar-brand sm-mx-auto" href="/">
          <div className="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse fw-bold"
          id="navbarSupportedContent"
          style={{
            backgroundColor: "#06628a",
            width: "100%",
            padding: "10px",
            height: "80px",
          }}
        >
          <ul className="ms-auto navbar-nav">
            <li className="nav-item">
              <Button
                type="link"
                className="menu-item"
                size="large"
                href="/features"
              >
                Features
              </Button>
            </li>
            <li className="nav-item">
              <Button
                type="link"
                className="menu-item"
                size="large"
                href="/about"
              >
                About Us
              </Button>
            </li>
          </ul>
          {navBtnText && (
            <Button
              type="primary"
              className="nav-btn"
              size="large"
              href="/watermark"
            >
              {navBtnText}
              <ArrowRightOutlined />
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
