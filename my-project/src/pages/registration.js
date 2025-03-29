import React from 'react';
import FormComponent from '../FormComponent';

const Registration = () => {
  return (
    <div className="registration-page">
      <h1>IIT Spoken Tutorial Registration</h1>
      
      <section className="program-info">
        <h2>About the Program</h2>
        <p>
          The IIT Spoken Tutorial program is an initiative by IIT Bombay, aimed at providing 
          high-quality software training to students. This program covers various open-source 
          software applications and programming languages.
        </p>
        
        <h3>Benefits:</h3>
        <ul>
          <li>Learn from experts at IIT Bombay</li>
          <li>Gain practical skills in industry-relevant software</li>
          <li>Earn certificates from IIT Bombay</li>
          <li>Enhance your resume with valuable qualifications</li>
        </ul>
        
        <h3>Registration Details:</h3>
        <p>
          The program is open to all students of MET Bhujbal Knowledge City. 
          Fill out the form below to register for the upcoming session.
        </p>
      </section>
      
      <FormComponent />
      
      <section className="contact-info">
        <h3>For queries, please contact:</h3>
        <p>Training and Placement Cell</p>
        <p>Email: training@met.edu</p>
        <p>Phone: 0123-456789</p>
      </section>
    </div>
  );
};

export default Registration;