import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer-bottom text-center flex flex-col items-center">
      <div className="social-icons flex gap-5 mb-2">
        <a
          className="social-icon text-white text-2xl p-2 transition duration-300 hover:bg-black hover:text-gray-300" 
          href="https://github.com/i-k6"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
        <a
          className="social-icon text-white text-2xl p-2 transition duration-300 hover:bg-black hover:text-gray-300"
          href="https://www.linkedin.com/in/karan-kumar-487a8a260/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          className="social-icon text-white text-2xl p-2 transition duration-300 hover:bg-black hover:text-gray-300"
          href="https://twitter.com/iKK6600"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter />
        </a>
      </div>
      <div className="footer-text text-white bg-black p-2 w-full">
        <p className="footer-text text-white">
          &copy; {new Date().getFullYear()} Made with ❤️ By Karan
        </p>
      </div>
    </div>
  );
};

export default Footer;
