import React, { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./App.css";

// Lazy load components for code splitting
const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Registration = lazy(() => import("./pages/registration"));
const ChairmanPage = lazy(() => import("./pages/ChairmanPage"));
const FaithVisionMission = lazy(() => import("./pages/FaithVisionMission"));

function App() {
  const location = useLocation();
  
  // This will run whenever the route changes
  React.useEffect(() => {
    // Find and remove any overlay classes
    document.body.classList.remove('sidebar-open');
    
    // Reset content appearance
    const contentElement = document.querySelector('.content');
    if (contentElement) {
      contentElement.style.backgroundColor = '';
      contentElement.style.opacity = '1';
      contentElement.style.pointerEvents = 'auto';
    }
    
    // Force sidebar to maintain red background with !important
    const sidebarElement = document.querySelector('.sidebar');
    if (sidebarElement) {
      sidebarElement.style.setProperty('background-color', 'red', 'important');
    }
  }, [location]);

  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <header className="header">
          <h1>MET Bhujbal Knowledge City</h1>
        </header>

        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/chairman" element={<ChairmanPage />} />
            <Route path="/faith-vision-mission" element={<FaithVisionMission />} />
          </Routes>
        </Suspense>

        <footer className="footer">
          <p>© 2023 MET Bhujbal Knowledge City | All Rights Reserved</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
