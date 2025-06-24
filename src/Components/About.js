import React from "react";
import "../about.css";
import Review from "./Review"; // <-- Assuming Review is in the same folder

const About = () => {
  return (
    <div className="about-section">
      <h2>About Us</h2>
      <p>
        We are a firm of chartered accountants setup in 2022, with enthusiastic
        and responsible team whose endeavour is to partner with businesses to
        address statutory compliances, strategise on process re-engineering,
        develop work flow automations, build management decision support systems
        and deliver what matters.
      </p>
      <div className="about-section1">Reviews</div>
      <Review />
    </div>
  );
};

export default About;
