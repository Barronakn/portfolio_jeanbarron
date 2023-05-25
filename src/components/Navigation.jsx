import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import home from "../assets/home.svg";
import about from "../assets/about.svg";
// import experience from "../assets/experience.svg";
import projet from "../assets/projet.svg";
// import contact from "../assets/contact-form.svg";
import cv from "../assets/Jean-Barron E. ALOKPON CV 2023.pdf";

import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

const Navigation = () => {
  useEffect(() => {
    const tooltips = document.querySelectorAll(".tooltip");

    tooltips.forEach((tool) => {
      tippy(tool, {
        content: tool.getAttribute("data-tippy-content"),
      });
    });
  }, []);

  return (
    <div>
      <div className="nav_container">
        <div className="logo">
          <NavLink to="/">
            <img src="./logo.png" alt="" />
          </NavLink>
        </div>
        <div>
          <NavLink className="cv" to={cv} target="_blank">
            CV
          </NavLink>
        </div>
      </div>
      <nav className="py-5 z-50">
        <ul>
          <li>
            <NavLink to="/" className="tooltip" data-tippy-content="Home">
              <img className="w-7 h-7" src={home} alt="home-icon" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="tooltip" data-tippy-content="About">
              <img className="w-7 h-7" src={about} alt="about-icon" />
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/experience"  className="tooltip" data-tippy-content="Experience">
              <img className="w-7 h-7" src={experience} alt="experience-icon" />
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="/projet"
              className="tooltip"
              data-tippy-content="Projet"
            >
              <img className="w-7 h-7" src={projet} alt="projet-icon" />
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/contact"  className="tooltip" data-tippy-content="Contact">
              <img className="w-7 h-7" src={contact} alt="contact-icon" />
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
