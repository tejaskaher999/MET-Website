import React from 'react';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <img
          src="https://via.placeholder.com/1200x600?text=MET+Campus"
          alt="MET Bhujbal Knowledge City Campus"
          className="hero-image"
          loading="lazy"
          width="1200" 
          height="600"
        />
        <div className="hero-overlay">
          <h2>Welcome to MET Bhujbal Knowledge City</h2>
          <p>Empowering students with knowledge and skills for tomorrow</p>
        </div>
      </section>
      
      <section className="highlights">
        <h2>Campus Highlights</h2>
        <div className="highlights-grid">
          <div className="highlight-card">
            <h3>State-of-the-art Infrastructure</h3>
            <p>Modern classrooms, labs, and recreational facilities</p>
          </div>
          <div className="highlight-card">
            <h3>Industry Connections</h3>
            <p>Regular industry visits and expert guest lectures</p>
          </div>
          <div className="highlight-card">
            <h3>Placement Opportunities</h3>
            <p>Dedicated placement cell with excellent track record</p>
          </div>
        </div>
      </section>
      
      <section className="announcements">
        <h2>Latest Announcements</h2>
        <ul>
          <li>Registration open for IIT Spoken Tutorial program</li>
          <li>Annual cultural fest 'Utsav' starting next month</li>
          <li>New industry collaboration with TechGiant Inc.</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;