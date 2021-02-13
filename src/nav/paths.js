import React from "react";
import storyblocks from "../images/storyblocks.png";
import folder from "../images/folder.png";
import acquia from "../images/acquia.png";
import resume from "../images/resume.png";
import female from "../images/female.png";
import {
  SbHomepage,
  SbEnterprise,
  AcquiaSwarm,
  MiaResume,
  About,
} from "../personal";

export const paths = [
  {
    id: 0,
    title: "Storyblocks Homepage",
    source: storyblocks,
    modalBody: <SbHomepage />,
  },
  {
    id: 1,
    title: "Storyblocks Enterprise",
    source: folder,
    modalBody: <SbEnterprise />,
  },
  { id: 2, title: "Acquia Swarm", source: acquia, modalBody: <AcquiaSwarm /> },
  { id: 3, title: "Mia's Resume", source: resume, modalBody: <MiaResume /> },
  { id: 4, title: "About Me", source: female, modalBody: <About /> },
];
