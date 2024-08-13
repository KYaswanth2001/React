import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

function Menu() {
  return (
    <>
    <div className='menu-container'>
    <div className='left1'><Link to="/Home"><b>bharathnews24X7</b></Link></div>
    <div className='right1'>
    <div><Link to="/Home">Home</Link></div>
    <div><Link to="/Jobs">Jobs</Link></div>
    <div><Link to="/Contact">Contacts</Link></div>
    </div>
    </div>
    </>
    
  )
}

export default Menu