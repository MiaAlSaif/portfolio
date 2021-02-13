import React from "react";
// import contact from "../images/contact-me.png";
import emailme from "../images/emailme.png";
import linkedin from "../images/in.png";

import "./Contact.css";

const Contact = () => (
  <div className="contactContainer">
    <div className="c-bg" />
    <div className="contactContent">
      {/* <img alt="personal" src={contact} /> */}
      <div className="contactInfo">
        <p className="name">Mia AlSaif</p>
        <p>Product Designer</p>
        <hr />

        <div className="contact-icons">
          <img alt="email me" src={emailme} /> mia.alsaif[@]gmail.com
        </div>
        <div className="contact-icons">
          <img alt="linkedin link" src={linkedin} />
          <a
            href="https://www.linkedin.com/in/miaalsaif"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/miaalsaif
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
