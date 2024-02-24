import React from 'react'
import style from './navbar.module.css'

function Navbar({age}) {
    

  return (
    <>
        <nav className={style.bg}>
        <a href="#">home</a>
        <a href="#">home</a>
        <a href="#">home</a>
    </nav>
    
    {age}
   
    </>

  )
}

export default Navbar;