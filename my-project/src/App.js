import React from "react";
import Sidebar from "./Sidebar";
import FormComponent from "./FormComponent"; // Import form
import "./App.css";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <header className="header">
          <h1>MET Bhujbal Knowledge City</h1>
        </header>

        <section className="hero">
          <img
            src="https://via.placeholder.com/1200x400"
            alt="IIT Spoken Tutorial Banner"
            className="hero-image"
          />
        </section>

        <section className="content-section">
          <h2>IIT Spoken Tutorial</h2>
          <p>
            Spoken Tutorial Project in association with IIT Bombay providing
            distance education and is about learning FOSS like Linux, Scilab,
            LaTeX, PHP & MySQL, Java, C/C++, LibreOffice, etc., via an easy
            Video tool - Spoken Tutorials.
          </p>
          <p><strong>Registration and learning is FREE OF COST</strong></p>
          <a href="https://spoken-tutorial.org/" className="cta-button">
            Learn More
          </a>
        </section>

        {/* Form Section */}
        <FormComponent />

        <footer className="footer">
          <p>© 2025 MET Bhujbal Knowledge City | All Rights Reserved</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
