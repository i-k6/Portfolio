import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer-bottom">
      <div className="social-icons gap-[5px]">
        <a
          className="social-icon text-white"
          href="https://github.com/i-k6"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
        <a
          className="social-icon text-white"
          href="https://www.linkedin.com/in/karan-kumar-487a8a260/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          className="social-icon text-white"
          href="https://twitter.com/karn_kumr_"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter />
        </a>
      </div>
      <div>
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Made with ❤️ By Karan
        </p>
      </div>
    </div>
  );
};

export default Footer;
