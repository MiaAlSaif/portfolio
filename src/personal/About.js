import React from "react";
import contact from "../images/contact-me.png";
import "./About.css";

const About = () => (
  <div className="about">
    <div className="aboutHeading">
      <div className="aboutHeadingBackground" />
    </div>
    <div className="aboutBody">
      <img alt="personal" src={contact} />
      <div className="block">
        <p>
          I am a Product Designer skilled at identifying and fulfilling business
          needs through the delivery of intuitive user-centered experiences. I
          serve the design process in its various stages by establishing an
          informed foundation built through research, ideation, and iteration.
        </p>
        <p>
          My education and professional experiences guide and enrich the work I
          do. Operating previously as a Web Developer, allows me to design with
          considerations to technical constraints. Similarly, my work as a Sr.
          Support Engineer refined my approach to problem-solving and advocating
          for both the business and customers.
        </p>
      </div>
    </div>
  </div>
);

export default About;
