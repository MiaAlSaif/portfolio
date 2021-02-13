import React, { Fragment, useState } from 'react'
import { paths } from './paths'
import { Modal } from '../modal'
import './NavItems.css'

const NavItems = () => {
  const [extraClass, setExtraClass] = useState()
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState()
  const [modalBody, setBody] = useState()

  const handleOpen = e => {
    const { id } = e.target

    id === '4' ? setExtraClass('aboutApplication') : setExtraClass('caseStudyApplication') 
    setOpen(true)
    setTitle(paths[id].title)
    setBody(paths[id].modalBody)
  }

  const handleClose = () => {
    setOpen(false)
  }

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
      <Modal extraClass={extraClass} isOpen={open} closeModal={handleClose} title={title} body={modalBody} />
    </>
  )
}

export default NavItems