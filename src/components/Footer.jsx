import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer-bottom text-center flex flex-col items-center">
      <div className="social-icons flex gap-5 mb-2">
        <a
          className="social-icon text-white text-2xl" // Adjust the icon size as needed
          href="https://github.com/i-k6"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
        <a
          className="social-icon text-white text-2xl" // Adjust the icon size as needed
          href="https://www.linkedin.com/in/karan-kumar-487a8a260/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          className="social-icon text-white text-2xl" // Adjust the icon size as needed
          href="https://twitter.com/iKK6600"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter />
        </a>
      </div>
      <div>
        <p className="footer-text text-white">
          &copy; {new Date().getFullYear()} Made with ❤️ By Karan
        </p>
      </div>
    </div>
  );
};

export default Footer;
