import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import './Works.css'

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full mb-5"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        <div className=" mt-4 flex gap-4">
          <a
            href={source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-white  button px-4 py-2 rounded-md transition duration-300 hover:bg-secondary-dark"
          >
            GitHub
          </a>
          <a
            href={live_link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white  button px-4 py-2 rounded-md transition duration-300 hover:bg-primary-dark"
          >
            Live
          </a>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          My portfolio includes a diverse range of projects that showcase my
          skills in front-end and back-end development. Each project is
          described briefly with links to its Github Repo and Live Demo. These
          projects not only highlight my proficiency in HTML, CSS, JavaScript,
          React, and various web development frameworks but also demonstrate my
          ability to deliver tailored solutions that meet clients' specific
          needs.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");
