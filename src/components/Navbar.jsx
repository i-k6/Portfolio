import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [Toggle, setToggle] = useState(true);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center z-20 fixed top-0 bg-gradient-to-r from-black to-black`} // Use Tailwind CSS class for dark black gradient background color
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <p className="text-white text-[15px] font-bold cursor-pointer">
            <span className="sm:block hidden">My | Portfolio</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } ${
                ["About", "Work", "Contact"].includes(link.title)
                  ? "hover:border-white transition-border"
                  : ""
              } hover:text-white text-[18px]
                font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={Toggle ? menu : close}
            alt="menu"
            className={`w-[25px] h-[20px] object-contain cursor-pointer
              hover:opacity-70 active:opacity-80 transition-opacity
              filter brightness-75`}
            onClick={() => setToggle(!Toggle)}
          />

          <div
            className={`${
              Toggle ? "hidden" : "flex"
            } p-5 bg-gradient-to-r from-black to-black absolute
            top-10 eight-0 mx-5 my-3 min-w-[140px]
            z-10 rounded-xl`}
          >
            <ul
              className="list-none flex  flex-col 
                justify-end items-start gap-3"
            >
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } ${
                    ["About", "Work", "Contact"].includes(link.title)
                      ? "hover:border-white transition-border"
                      : ""
                  } font-poppins font-medium cursor-pointer
                      text-[15px]`}
                  onClick={() => {
                    setToggle(!Toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
