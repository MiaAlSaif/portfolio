import React from "react";
import contact from "../images/contact-me.png";
import "./Contact.css";
import { ExternalLink } from "react-external-link";

const Contact = () => (
  <div className="contact">
    <div className="contactFlex">
      <img alt="personal" src={contact} />
      <div>
        <p className="name">Manal AlSaif</p>
        <p>Product Designer</p>
        <p>
          <span>Email</span> mia.alsaif@gmail.com
        </p>
        <p>
          <span>LinkedIn</span>{" "}
          <ExternalLink href="www.linkedin.com/in/miaalsaif" />
          {/* <a href="www.linkedin.com/in/miaalsaif" target="_blank">
            linkedin.com/in/miaalsaif
          </a> */}
        </p>
      </div>
    </div>
  </div>
);

export default Contact;
