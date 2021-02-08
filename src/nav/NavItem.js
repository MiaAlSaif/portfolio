import React, { Fragment, useState } from 'react'
import './NavItem.css'
import { Modal } from '../modal'

const NavItem = ({ details: { modalBody, source, title } }) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <div className='navLink' onClick={handleOpen}>
        <div>
          <img alt='folder' src={source} />
        </div>
        <div className='navTitle'>
          {title}
        </div>
      </div>
      <Modal isOpen={open} closeModal={handleClose} title={title} body={modalBody} />
    </>
  )
}

export default NavItem