import React, { Fragment, useState } from 'react'
import './NavItems.css'
import storyblocks from "../images/storyblocks.png";
import folder from "../images/folder.png";
import acquia from "../images/acquia.png";
import resume from "../images/resume.png";
import { SbHomepage, SbEnterprise, AcquiaSwarm, MiaResume } from "../personal";
import { Modal } from '../modal'

const NavItems = () => {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState()
  const [modalBody, setBody] = useState()

  const handleOpen = e => {
    const { id } = e.target

    setOpen(true)
    setTitle(paths[id].title)
    setBody(paths[id].modalBody)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const paths = [
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
  ];

  return (
    <>
      {paths.map(path => (
        <div key={`${path.id}_nav`} id={path.id} className='navLink' onClick={handleOpen}>
          <div>
            <img id={path.id} alt='folder' src={path.source} />
          </div>
          <div id={path.id} className='navTitle'>
            {path.title}
          </div>
        </div>
      ))}
      <Modal isOpen={open} closeModal={handleClose} title={title} body={modalBody} />
    </>
  )
}

export default NavItems