import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import Resume from "./ResumeLatest/Vikas-Suresh-Resume.pdf";

const Navbar = () => {
  const downloadResume = () => {
    // Create a temporary anchor element
    const link = document.createElement("a");
    // Set its href attribute to the path of the resume file
    link.href = Resume;
    // Set the download attribute to specify the file name
    link.download = "Vikas-Suresh-Resume.pdf";
    // Simulate a click event on the anchor element to trigger the download
    link.click();
  };

  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <img
          style={{ height: "40px", width: "35px", position: "relative" }}
          loading="lazy"
          alt=""
          src="/logo.svg"
        />
        <div className="n-name">Anish Kumar Sinha</div>
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                About
              </Link>
            </li>
            <li>
              <Link
                to="services"
                spy={true}
                smooth={true}
                onClick={downloadResume}
                style={{ cursor: "pointer" }}
              >
                Resume
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Project
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <Link to="services" spy={true} smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
        <button style={{ border: "1px solid white", backgroundColor: "transparent" }}>
          <Toggle />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
