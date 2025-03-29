import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside style={{
      width: "250px",
      background: "#2c3e50",
      padding: "20px",
      height: "100vh",
      color: "#ffffff",
      boxShadow: "2px 0 5px rgba(0, 0, 0, 0.2)",
    }}>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li style={{ marginBottom: "15px" }}>
          <Link to="/chairman" style={linkStyle}>From Chairman’s Desk</Link>
        </li>
        <li style={{ marginBottom: "15px" }}>
          <Link to="/faith-vision-mission" style={linkStyle}>Faith Vision Mission</Link>
        </li>
        <li>
          <Link to="/affiliations" style={linkStyle}>Affiliations & Accreditations</Link>
        </li>
      </ul>
    </aside>
  );
}

// Link Styling
const linkStyle = {
  textDecoration: "none",
  color: "#ffffff",
  fontSize: "16px",
  display: "block",
  padding: "10px",
  borderRadius: "5px",
  transition: "background 0.3s ease",
};

export default Sidebar;
