import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = ({ extraClass, isOpen, title, body, closeModal }) =>
  isOpen
    ? ReactDOM.createPortal(
        <div className={`modalContainer ${extraClass}`}>
          <div className="modalHeader">
            <div className="modalClose" onClick={closeModal} />
            <div className="modalTitle">{title}</div>
          </div>
          <div className="modalBody">{body}</div>
        </div>,
        document.getElementById("modal")
      )
    : null;

export default Modal;
