import React from "react";
import "./FaithVisionMission.css";

const FaithVisionMission = () => {
  return (
    <div className="faith-vision-container">
      <div className="content-wrapper">
        {/* If you need a sidebar specific to this page, use faith-sidebar instead */}
        {/* <div className="faith-sidebar">
          // Sidebar content specific to Faith Vision Mission
        </div> */}
        <div className="main-content">
          <h1 className="page-title">OUR FAITH, VISION & MISSION</h1>

          <section className="section">
            <h2 className="section-title">Our Faith</h2>
            <p className="sanskrit-text">
              न चोर हार्यं न च राज हार्यं।<br />
              न भ्रातृभाज्यं न च भारकारि।।<br />
              व्यये कृते वर्धत एव नित्यं।<br />
              विद्याधनं सर्वधन प्रधानम्।।
            </p>
            <p className="section-description">
              Knowledge can neither be stolen by a thief, nor snatched by a king.
              It is indivisible unlike ancestral property, it never burdens the bearer,
              it multiplies manifold when offered to others. Knowledge is the supreme form of wealth.
            </p>
          </section>

          <section className="section">
            <h2 className="section-title">Our Vision</h2>
            <p className="section-description">
              To shape professionals, to conquer the present and future challenges to the socio-economic
              fabric of our society, by institutionalizing search, development, research, and dissemination
              of relevant knowledge through structured learning systems.
            </p>
          </section>

          <section className="section">
            <h2 className="section-title">Our Mission</h2>
            <p className="section-description">
              To evolve, develop and deliver dynamic learning systems to equip professionals
              with conscience and commitment to excellence and courage to face business challenges.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FaithVisionMission;
