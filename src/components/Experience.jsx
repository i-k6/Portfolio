import React, { useEffect, useState } from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { VerticalTimelineElement } from "react-vertical-timeline-component";


import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
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

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#000", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">
        <TypewriterText text={experience.title} />
      </h3>
      <p
        className="text-secondary text-[15px] font-semibold"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experiencce-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-center">
        <p className={styles.sectionSubText}>Journey So far</p>
        <h2 className={styles.sectionHeadText}>
          <TypewriterText text="Work Experience" />
        </h2>
      </div>

      <div className="mt-20 flex flex-col items-center">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
