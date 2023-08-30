import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';


const Navbar = () => {
  const [active, setActive] = useState("");

  return (
    <nav className={`${styles.paddingX} w-full flex items-center z-20 fixed top-0 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto"> 
        <Link to="/" className='flex items-center gap-2'
        onClick={() => {
          setActive("");
          window.scrollTo(0,0);
        }}>
          <img src={logo} alt="logo" className='w-9 h-9 object-contain' />Karan
          <p className="text-white text-[15px] font-bold cursor-pointer">
            <span className="sm:block hidden">
               | Portfolio
            </span>
          </p>
        </Link>
         <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${
                active === Link.title
                ? "text-white"
                : "text-secondary"
              }`}
            >
              <a href={`{#$Link.id}`}>{Link.title}</a>
            </li>
          ))}
         </ul>
      </div>
    </nav>
  )
}

export default Navbar;
