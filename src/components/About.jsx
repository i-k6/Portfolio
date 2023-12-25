import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const TypewriterText = ({ text }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      setDisplayText(text.substring(0, index));
      index++;

      if (index > text.length) {
        clearInterval(intervalId);
      }
    }, 70);

    return () => {
      clearInterval(intervalId);
    };
  }, [text]);

  return <span>{displayText}</span>;
};

const About = ({ isLoading }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <motion.div className="text-center">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>
          <TypewriterText text="Overview" />
        </h2>
      </motion.div>

      {isLoading ? (
        <div className="mt-4 text-secondary text-[15px] max-w-3xl leading-[30px]">
        </div>
      ) : (
        <motion.p
          className="mt-4 text-secondary text-[15px] max-w-3xl leading-[30px] text-center"
        >
          Hello, I'm <span className={styles.heroSubText}>Karan</span>, a web
          developer proficient in HTML, CSS, JavaScript, and React.js. My passion
          lies in crafting user-friendly web experiences that seamlessly blend
          form and function. With a keen eye for design and a commitment to
          staying up-to-date with industry trends, I thrive on turning creative ideas
          into digital realities.
        </motion.p>
      )}
    </div>
  );
};

export default SectionWrapper(About, "about");
