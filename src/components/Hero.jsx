import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import Typed from "typed.js";
import Resume from "../assets/Resume_Cv/Resume.pdf.pdf"
const Hero = () => {
  const typedRef = React.useRef(null);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    const link = document.createElement('a');
    link.href = Resume;
    link.download = "Karan's_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 230); 
  };

  useEffect(() => {
    const options = {
      strings: ["Hi, I'm <span class='text-[#915eff]'>Karan</span>"],
      typeSpeed: 100,
      showCursor: false,
      contentType: 'html',
    };
    typedRef.current = new Typed("#typed-text", options);

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto flex flex-row items-center">
      <div
        className={`${styles.paddingX} max-w-7x1 mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="mt-5">
          <h1
            id="typed-text"
            className={`${styles.heroHeadText} text-white`}
          ></h1>
          <p className={`${styles.heroSubText} mt-3 text-white-100`}>
            I'm a web developer
            <br className="sm:block hidden" /> with a passion for crafting
            interactive and user-friendly websites.
          </p>
          <button
            className={`bg-[#915eff] text-white px-6 py-3 mt-4 rounded-md transition duration-300 hover:bg-opacity-80 ${clicked ? 'transform scale-95' : ''}`}
            style={{ borderRadius: "12px" }}
            onClick={handleClick}
          >
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
