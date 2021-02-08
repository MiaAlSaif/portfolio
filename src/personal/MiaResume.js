import React from "react";
import entVideo from "../images/ENT-vid.mp4";
import entVideoMobile from "../images/ent-mobile.mov";
import segmentation from "../images/segmentation.jpg";
import whiteboard from "../images/ent-wb.jpg";
import personas from "../images/ent-persona.jpg";
import sketches from "../images/ent-wf-sketch.jpg";
import iteration from "../images/ent-wf2.jpg";
import iterationTwo from "../images/ent-wf1.jpg";
import navSketch from "../images/ent-nav.jpg";
import topNav from "../images/ent-top-nav.png";
import multiScreens from "../images/ent-screens.jpg";
import topNavGif from "../images/ent-top-nav.gif";
import finalPersona from "../images/ent-persona-final.png";
import miaResumepdf from "../images/MiaAlSaifResume.pdf";
import "./SbHomepage.css";

const MiaResume = () => (
  <div className="sbHomepage">
    <div className="sbHeading">
      <div className="headingBackground" />
    </div>
    <div className="sbBody">
      <div className="sbContent">
        <section>
          <h3>Mia AlSaif</h3>
          <h3>Product Designer</h3>
          <a href="../images/MiaAlSaifResume.pdf" target="_blank">
            Download Resume
          </a>
        </section>
      </div>
    </div>
  </div>
);

export default MiaResume;
