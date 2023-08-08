import React from 'react'
import cl from './Navbar.module.css'
import MyButton from '../MyButton/MyButton.jsx'

const Navbar = ({setVisible}) => {
  return (
    <div className={cl.navbar}>
      <a className={cl.logo}>Todos<div className={cl.logo__react}>RC</div></a>
      <MyButton onClick={() => setVisible(true)}>Add todo</MyButton>
    </div>
  )
}

export default Navbar
