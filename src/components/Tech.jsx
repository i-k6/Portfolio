import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { SectionWrapper } from '../hoc';
import './Tech.css';

const SkillCard = ({ skill }) => (
  <div className='skill-card'>
    {skill ? <div className='skill'>{skill}</div> : <Skeleton width={50} />}
  </div>
);

const Tech = ({ isLoading }) => (
  <>
    <div className="mb-10 text-center">
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
        Skills
      </h2>
    </div>

    <div className='flex flex-col items-center mb-10'>
      {/* Frontend Section */}
      <div className="text-center">
        <h2 className='text-2xl font-bold mb-4'>Frontend</h2>
      </div>
      <div className='section-container justify-center mb-10 '>
        <div className='skills-container flex flex-wrap justify-center sm:justify-start lg:justify-between'>
          {['Java', 'React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'].map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>

      {/* Backend Section */}
      <div className="text-center">
        <h2 className='text-2xl font-bold mb-4'>Backend / Database</h2>
      </div>
      <div className='skills-container flex flex-wrap justify-center sm:justify-start lg:justify-between'>
        {isLoading ? (
          Array.from({ length: 2 }).map((_, index) => (
            <SkillCard key={index} skill={null} />
          ))
        ) : (
          ['Node.js', 'SQL'].map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))
        )}
      </div>

      {/* Backend Section */}
      <div className="text-center">
        <h2 className='text-2xl font-bold mt-4'>Stack</h2>
      </div>
      <div className='skills-container flex flex-wrap justify-center sm:justify-start lg:justify-between'>
        {isLoading ? (
          Array.from({ length: 1 }).map((_, index) => (
            <SkillCard key={index} skill={null} />
          ))
        ) : (
          ['MERN'].map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))
        )}
      </div>

      {/* Tools */}
      <div className="text-center">
        <h2 className='text-2xl font-bold mb-4 mt-4'>Tools</h2>
      </div>
      <div className='skills-container flex flex-wrap justify-center sm:justify-start lg:justify-between'>
        {isLoading ? (
          Array.from({ length: 5 }).map((_, index) => (
            <SkillCard key={index} skill={null} />
          ))
        ) : (
          ['Git', 'Github', 'VS Code', 'MySql', 'Eclipse'].map((tool, index) => (
            <SkillCard key={index} skill={tool} />
          ))
        )}
      </div>
    </div>
  </>
);

export default SectionWrapper(Tech, '');
