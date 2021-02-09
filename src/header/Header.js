import React, { useState } from "react";
import { FormattedTime } from "./";
import { Modal } from "../modal";
import { About, Contact } from "../personal";
import figure from "../images/figure.png";
import female from "../images/female.png";
import email from "../images/email.png";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const handleOpen = (title, body) => {
    setOpen(true);
    setTitle(title);
    setBody(body);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="h-container">
      <div className="h-bg" />
      <header className="header">
        <div className="left">
          <div>
            <img alt="figure" src={figure} />
          </div>
          <div>
            <b>Mia AlSaif</b>
          </div>
          <div>Product Designer</div>
        </div>
        <div className="right">
          <div>
            <img
              className="h-clickable"
              alt="female"
              src={female}
              onClick={() => handleOpen("About Me", <About />)}
            />
          </div>
          <div>
            <img
              className="h-clickable"
              alt="email"
              src={email}
              onClick={() => handleOpen("Contact Me", <Contact />)}
            />
          </div>
          <FormattedTime />
        </div>
        <Modal
          isOpen={open}
          closeModal={handleClose}
          title={title}
          body={body}
        />
      </header>
    </div>
  );
};

export default Header;
