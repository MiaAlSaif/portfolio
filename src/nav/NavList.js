import React from "react";
import { NavItem } from "./";
import storyblocks from "../images/storyblocks.png";
import folder from "../images/folder.png";
import acquia from "../images/acquia.png";
import resume from "../images/resume.png";
import { SbHomepage, SbEnterprise, AcquiaSwarm, MiaResume } from "../personal";

const pathsAndTitles = [
  {
    id: 1,
    title: "Storyblocks Homepage",
    source: storyblocks,
    modalBody: <SbHomepage />,
  },
  {
    id: 2,
    title: "Storyblocks Enterprise",
    source: folder,
    modalBody: <SbEnterprise />,
  },
  { id: 3, title: "Acquia Swarm", source: acquia, modalBody: <AcquiaSwarm /> },
  { id: 4, title: "Mia's Resume", source: resume, modalBody: <MiaResume /> },
];

const NavList = () =>
  pathsAndTitles.map((item) => (
    <NavItem key={`${item.id}_nav`} details={item} />
  ));

export default NavList;
