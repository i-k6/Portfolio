import React, { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import "./Works.css";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  const [githubLinkText, setGithubLinkText] = useState("");
  const [liveLinkText, setLiveLinkText] = useState("");

  useEffect(() => {
    const githubTextToDisplay = " GitHub";
    const liveTextToDisplay = " Live";

    let githubIndex = 0;
    let liveIndex = 0;

    const githubIntervalId = setInterval(() => {
      setGithubLinkText((prev) =>
        githubTextToDisplay.substring(0, githubIndex++)
      );
    }, 50);

    const liveIntervalId = setInterval(() => {
      setLiveLinkText((prev) => liveTextToDisplay.substring(0, liveIndex++));
    }, 60);

    return () => {
      clearInterval(githubIntervalId);
      clearInterval(liveIntervalId);
    };
  }, []);

  return (
    <div className="mb-5">
      <Tilt
        options={{
          max: 15,
          scale: 1,
          speed: 450,
        }}
        className="bg-gradient-to-b from-black to-gray-900 p-5 rounded-2xl sm:w-[360px] w-full border border-white" // Added border property
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-3xl sm:text-4xl">{name}</h3>
          <p className="mt-2 text-secondary text-[16px]">{description}</p>
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
            className="bg-black text-white button px-4 py-2 rounded-md border border-white transition duration-300 hover:bg-white hover:text-black"
          >
            {githubLinkText}
          </a>
          <a
            href={live_link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white button px-4 py-2 rounded-md border border-white transition duration-300 hover:bg-white hover:text-black"
          >
            {liveLinkText}
          </a>
        </div>
      </Tilt>
    </div>
  );
};

const Works = () => {
  const [typewriterVisible, setTypewriterVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTypewriterVisible(true);
    }, 100);
    return () => clearTimeout(timeoutId);
  }, []);

  const typewriterText = "Projects";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayText((prev) => typewriterText.substring(0, index++));
      if (index > typewriterText.length) {
        clearInterval(intervalId);
      }
    }, 120);
    return () => clearInterval(intervalId);
  }, [typewriterText]);

  return (
    <>
      <div className="text-center font-bold text-white md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mb-10">
        {typewriterVisible && (
          <span className="text-3xl sm:text-4xl">{displayText}</span>
        )}
      </div>

      <div className="mt-10 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");
