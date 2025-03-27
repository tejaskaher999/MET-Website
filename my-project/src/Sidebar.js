import React, { useState } from "react";
import {
  FaHome, FaInfoCircle, FaUniversity, FaBuilding, FaTools, FaChalkboardTeacher,
  FaBookOpen, FaNewspaper, FaUserGraduate, FaUser, FaSearch, FaChevronDown
} from "react-icons/fa";

import "./Sidebar.css";
import logo from "./assets/logo.png"; // Ensure the logo is inside src/assets/

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    about: false,
    campus: false,
    institute: false,
    student: false,
  });

  const toggleDropdown = (key) => {
    setDropdowns({ ...dropdowns, [key]: !dropdowns[key] });
  };

  return (
    <>
      {/* Sidebar Container */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        {/* Logo Section */}
        <div className="logo-container" onClick={() => setIsOpen(!isOpen)}>
          <img src={logo} alt="MET Logo" className="logo-img" />
        </div>

        {/* Navigation */}
        <ul className="menu">
          <li><FaHome /> Home</li>

          <li className="dropdown" onClick={() => toggleDropdown("about")}>
            <FaInfoCircle /> About Us <FaChevronDown className={dropdowns.about ? "rotate" : ""} />
          </li>
          {dropdowns.about && (
            <ul className="dropdown-menu">
              <li>From Chairman Desk</li>
              <li>Message from Trustee</li>
              <li>Our Faith, Mission & Vision</li>
              <li>Advantage MET</li>
              <li>Affiliation & Accreditation</li>
            </ul>
          )}

          <li className="dropdown" onClick={() => toggleDropdown("campus")}>
            <FaUniversity /> Campuses <FaChevronDown className={dropdowns.campus ? "rotate" : ""} />
          </li>
          {dropdowns.campus && (
            <ul className="dropdown-menu">
              <li>MET BKC Mumbai</li>
              <li>MET BKC Adgoan</li>
              <li>MET BKC Govardhan</li>
            </ul>
          )}

          <li className="dropdown" onClick={() => toggleDropdown("institute")}>
            <FaBuilding /> Institutes <FaChevronDown className={dropdowns.institute ? "rotate" : ""} />
          </li>
          {dropdowns.institute && (
            <ul className="dropdown-menu">
              <li>MSBE (Meena Bhujbal School of Excellence)</li>
              <li>Institute of Engineering</li>
              <li>Institute of Technology Polytechnic</li>
              <li>Institute of Management</li>
            </ul>
          )}

          <li><FaTools /> Infrastructure</li>
          <li><FaChalkboardTeacher /> Training & Placement</li>
          <li><FaBookOpen /> Research</li>
          <li><FaNewspaper /> News & Events</li>

          <li className="dropdown" onClick={() => toggleDropdown("student")}>
            <FaUserGraduate /> Student Section <FaChevronDown className={dropdowns.student ? "rotate" : ""} />
          </li>
          {dropdowns.student && (
            <ul className="dropdown-menu">
              <li>Online Fees Payment</li>
              <li>Counseling Cell</li>
              <li>CSR</li>
              <li>Extended Facilities</li>
            </ul>
          )}

          <li><FaUser /> Login</li>
          <li className="search-icon">
            <FaSearch /> Search
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
