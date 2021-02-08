import React from "react";
import contact from "../images/contact-me.png";
import "./Contact.css";

const Contact = () => (
  <div className="contact">
    <div className="contactFlex">
      <img alt="personal" src={contact} />
      <div>
        <p className="name">Manal AlSaif</p>
        <p>Product Designer</p>
        <p>
          <span>Email</span> mia.alsaif[@]gmail.com
        </p>
        <p>
          <span>LinkedIn</span>{" "}
          <a href="www.linkedin.com/in/miaalsaif">linkedin.com/in/miaalsaif</a>
          {/* <a href="www.linkedin.com/in/miaalsaif" target="_blank">
            linkedin.com/in/miaalsaif
          </a> */}
        </p>
      </div>
    </div>
  </div>
);

export default Contact;
