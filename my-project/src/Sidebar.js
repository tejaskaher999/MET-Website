import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import trusteeImage from "./assets/trustee.jpeg";
import {
  FaHome, FaInfoCircle, FaUniversity, FaBuilding, FaTools, FaChalkboardTeacher,
  FaBookOpen, FaNewspaper, FaUserGraduate, FaUser, FaSearch, FaChevronDown,
  FaFileAlt, FaClipboardCheck
} from "react-icons/fa";

import "./Sidebar.css";

// We'll use try-catch for the import
let logo;
try {
  logo = require("./assets/logo.png");
} catch (error) {
  console.warn("Logo image not found");
  // Logo will be undefined
}

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    about: false,
    campus: false,
    institute: false,
    student: false,
  });
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();
  const sidebarRef = useRef(null);

  // Close sidebar when route changes on mobile
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
    
    // Reset content appearance
    const contentElement = document.querySelector('.content');
    if (contentElement) {
      contentElement.style.opacity = '1';
      contentElement.style.pointerEvents = 'auto';
    }
  }, [location]);

  const toggleDropdown = (key, event) => {
    // Prevent event from bubbling up
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    // Create a copy of current state
    const newDropdowns = {
      about: false,
      campus: false,
      institute: false,
      student: false,
    };
    
    // Toggle the clicked dropdown
    newDropdowns[key] = !dropdowns[key];
    
    // Update state
    setDropdowns(newDropdowns);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);

    // When closing sidebar, ensure content returns to normal
    if (isOpen) {
      const contentElement = document.querySelector('.content');
      if (contentElement) {
        contentElement.style.opacity = '1';
        contentElement.style.pointerEvents = 'auto';
      }
    }
  };

  const handleImageError = () => {
    setLogoError(true);
  };

  // Determine if a link is active
  const isActive = (path) => {
    return location.pathname === path ? "active-link" : "";
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        // Only close dropdowns if target is not the toggle button
        if (!event.target.classList.contains('sidebar-toggle')) {
          setDropdowns({
            about: false,
            campus: false,
            institute: false,
            student: false,
          });
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <button
        className="sidebar-toggle"
        onClick={toggleSidebar}
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isOpen ? "×" : "☰"}
      </button>

      <div ref={sidebarRef} className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="logo-container">
          <Link to="/">
            {!logoError && logo ? (
              <img
                src={logo}
                alt="MET Logo"
                className="logo-img"
                onError={handleImageError}
              />
            ) : (
              <div className="logo-placeholder">
                <span>MET</span>
              </div>
            )}
          </Link>
        </div>

        <ul className="menu" role="navigation" aria-label="Main Navigation">
          <li role="menuitem" className={isActive("/")}>
            <Link to="/">
              <FaHome aria-hidden="true" /> <span>Home</span>
            </Link>
          </li>

          <li
            className={`dropdown ${dropdowns.about ? "active" : ""} ${isActive("/about") || isActive("/chairman") || isActive("/faith-vision-mission") ? "active-parent" : ""}`}
            onClick={(e) => toggleDropdown("about", e)}
            role="menuitem"
            aria-expanded={dropdowns.about}
            aria-haspopup="true"
          >
            <FaInfoCircle aria-hidden="true" /> <span>About Us</span>
            <FaChevronDown className={dropdowns.about ? "rotate" : ""} aria-hidden="true" />
          </li>
          
          <ul className={`dropdown-menu ${dropdowns.about ? "open" : ""}`}>
            <li className={isActive("/chairman")}>
              <Link to="/chairman">From Chairman Desk</Link>
            </li>
            <li>
              <a href={trusteeImage}>
                <span className="icon"></span> Message from Trustee
              </a>
            </li>
            <li className={isActive("/about")}>
              <Link to="/about">About MET</Link>
            </li>
            <li className={isActive("/faith-vision-mission")}>
              <Link to="/faith-vision-mission">
                Our Faith, Mission & Vision
              </Link>
            </li>
            <li>Advantage MET</li>
            <li>Affiliation & Accreditation</li>
            <li>
              <a
                href="assets/document/HR_Handbook.pdf"
                className="pdf-link"
                download="HR_Handbook.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFileAlt aria-hidden="true" /> <span>HR Handbook</span>
              </a>
            </li>
            <li>
              <a
                href="assets/document/Appraisal_Policy.pdf"
                className="pdf-link"
                download="Appraisal_Policy.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaClipboardCheck aria-hidden="true" /> <span>Appraisal Policy</span>
              </a>
            </li>
          </ul>

          <li
            className={`dropdown ${dropdowns.campus ? "active" : ""}`}
            onClick={(e) => toggleDropdown("campus", e)}
            role="menuitem"
            aria-expanded={dropdowns.campus}
            aria-haspopup="true"
          >
            <FaUniversity aria-hidden="true" /> <span>Campuses</span>
            <FaChevronDown className={dropdowns.campus ? "rotate" : ""} aria-hidden="true" />
          </li>
          
          <ul className={`dropdown-menu ${dropdowns.campus ? "open" : ""}`}>
            <li>
              <a
                href="https://www.met.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                MET BKC Mumbai
              </a>
            </li>
            <li>
              <a
                href="https://metbhujbalknowledgecity.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                MET BKC Adgoan
              </a>
            </li>
            <li>
              <a
                href="https://metbhujbalknowledgecity.ac.in/metgovardhan"
                target="_blank"
                rel="noopener noreferrer"
              >
                MET BKC Govardhan
              </a>
            </li>
          </ul>

          <li
            className={`dropdown ${dropdowns.institute ? "active" : ""}`}
            onClick={(e) => toggleDropdown("institute", e)}
            role="menuitem"
            aria-expanded={dropdowns.institute}
            aria-haspopup="true"
          >
            <FaBuilding aria-hidden="true" /> <span>Institutes</span>
            <FaChevronDown className={dropdowns.institute ? "rotate" : ""} aria-hidden="true" />
          </li>
          
          <ul className={`dropdown-menu ${dropdowns.institute ? "open" : ""}`}>
            <li>
              <a
                href="https://www.metmbse.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                MSBE (Meena Bhujbal School of Excellence)
              </a>
            </li>
            <li>
              <a
                href="https://metbkcengg.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Institute of Engineering
              </a>
            </li>
            <li>
              <a
                href="https://metbhujbalknowledgecity.ac.in/metpoly/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Institute of Technology Polytechnic
              </a>
            </li>
            <li>
              <a
                href="https://metbhujbalknowledgecity.ac.in/metmba/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Institute of Management
              </a>
            </li>
          </ul>

          <li><FaTools /> Infrastructure</li>
          <li><FaChalkboardTeacher /> Training & Placement</li>
          <li><FaBookOpen /> Research</li>
          <li><FaNewspaper /> News & Events</li>

          <li
            className={`dropdown ${dropdowns.student ? "active" : ""}`}
            onClick={(e) => toggleDropdown("student", e)}
            role="menuitem"
            aria-expanded={dropdowns.student}
            aria-haspopup="true"
          >
            <FaUserGraduate aria-hidden="true" /> <span>Student Section</span>
            <FaChevronDown className={dropdowns.student ? "rotate" : ""} aria-hidden="true" />
          </li>
          
          <ul className={`dropdown-menu ${dropdowns.student ? "open" : ""}`}>
            <li>Online Fees Payment</li>
            <li>Counseling Cell</li>
            <li>CSR</li>
            <li>Extended Facilities</li>
          </ul>

          <li><FaUser /> Login</li>
          <li className="search-icon">
            <FaSearch /> Search
          </li>
          
          {/* Registration button removed as requested */}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
