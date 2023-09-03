import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[15px]
        max-w-3xl leading-[30px]"
      >
        Hello, I'm <span className={styles.heroSubText}>Karan</span>, a web
        developer proficient in HTML, CSS, JavaScript, and React.js. My passion
        lies in crafting user-friendly web experiences that seamlessly blend
        form and function. With a keen eye for design and a commitment to
        staying upto-date with industry trends, I thrive on turning creative ideas
        into digital realities.
      </motion.p>
    </>
  );
};

export default About;
