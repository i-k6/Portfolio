import React, { useEffect } from "react";
import { styles } from "../styles";
import Typed from "typed.js";

const Hero = () => {
  const typedRef = React.useRef(null);

  React.useEffect(() => {
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
            I'm a dedicated web developer
            <br className="sm:block hidden" /> with a passion for crafting
            interactive and user-friendly websites.
          </p>
        </div>
      </div>
    </section>
  );
};


export default Hero;
