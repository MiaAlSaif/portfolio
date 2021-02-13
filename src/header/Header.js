import React, { Fragment, useState } from "react";
import { FormattedTime } from "./";
import { Contact } from "../personal";
import figure from "../images/figure.png";
import email from "../images/email.png";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Fragment>
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
                alt="email"
                src={email}
                onClick={handleOpen}
              />
            </div>
            <FormattedTime />
          </div>
        </header>
      </div>
      {open && 
        <Contact />
      }
    </Fragment>
  );
};

export default Header;
