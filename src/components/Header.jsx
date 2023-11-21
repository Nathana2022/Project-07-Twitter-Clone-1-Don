import React from 'react'
import icon from '../images/Group.svg'

function Header() {
  return (
    <div className='header'>
        <h1 className='page-title'>Home</h1>
        <button>
        <img className='top-tweets' src={icon} alt="" />
        </button>
    </div>
  )
}

export default Header