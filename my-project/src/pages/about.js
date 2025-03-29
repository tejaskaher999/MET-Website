import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      <h1>About MET Bhujbal Knowledge City</h1>
      
      <section className="about-section">
        <h2>Our Vision</h2>
        <p>
          MET Bhujbal Knowledge City aims to be a global center of excellence in education, 
          fostering innovation, research, and entrepreneurship among students. We strive to 
          create an environment where students can develop holistically and become leaders 
          of tomorrow.
        </p>
      </section>
      
      <section className="about-section">
        <h2>Our History</h2>
        <p>
          Established in 2001, MET Bhujbal Knowledge City has grown from a small institution 
          to a sprawling campus with multiple disciplines and courses. Over the years, we have 
          educated thousands of students who are now successful professionals across the globe.
        </p>
      </section>
      
      <section className="about-section">
        <h2>Campus Facilities</h2>
        <ul>
          <li>Modern classrooms with audio-visual facilities</li>
          <li>Well-equipped laboratories for practical training</li>
          <li>Extensive library with digital resources</li>
          <li>Sports complex with indoor and outdoor facilities</li>
          <li>Hostels with comfortable accommodation</li>
          <li>Cafeteria offering nutritious meals</li>
        </ul>
      </section>
      
      <section className="about-section">
        <h2>Our Achievements</h2>
        <p>
          MET Bhujbal Knowledge City has been recognized for excellence in education through 
          numerous awards and accolades. Our students consistently perform well in placements, 
          research competitions, and entrepreneurial ventures.
        </p>
      </section>
    </div>
  );
};

export default About;