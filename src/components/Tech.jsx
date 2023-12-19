import React from 'react';
import { SectionWrapper } from '../hoc';
import './Tech.css';

const Tech = () => {
  return (
    <>
      <div className="mb-10">
      <h2 class="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">SKILLS</h2>
      </div>
      <div className='flex flex-col items-center mb-10'>

        {/* Frontend Section */}
        <div className="text-center">
        <h2 className='text-2xl font-bold mb-4'>Frontend</h2>
        </div>
        <div className='section-container justify-center mb-10 '>
          <div className='skills-container flex flex-wrap justify-center sm:justify-start lg:justify-between'>
            <div className='skill-card'>
              <div className='skill'>Java</div>
            </div>
            <div className='skill-card'>
              <div className='skill'>React</div>
            </div>
            <div className='skill-card'>
              <div className='skill'>JavaScript</div>
            </div>
            <div className='skill-card'>
              <div className='skill'>HTML</div>
            </div>
            <div className='skill-card'>
              <div className='skill'>CSS</div>
            </div>
            <div className='skill-card'>
              <div className='skill'>
                Tailwind<br />CSS
              </div>
            </div>
          </div>
        </div>

        {/* Backend Section */}
        <div className="text-center">
        <h2 className='text-2xl font-bold mb-4'>Backend</h2>
        </div>
        <div className='section-container mb-10'>
          <div className='skills-container flex flex-wrap justify-center sm:justify-start lg:justify-between'>
            <div className='skill-card'>
              <div className='skill'>Node.js</div>
            </div>
            <div className='skill-card'>
              <div className='skill'>SQL</div>
            </div>
          </div>
        </div>

        {/*Tools*/}
        <div className="text-center">
        <h2 className='text-2xl font-bold mb-4'>Tools</h2>
        </div>
        <div className='section-container'>
          <div className='skills-container flex flex-wrap justify-center sm:justify-start lg:justify-between'>
            <div className='skill-card'>
              <div className='skill'>Git</div>
            </div>
            <div className='skill-card'>
              <div className='skill'>Github</div>
            </div>
            <div className='skill-card'>
              <div className='skill'>VS Code</div>
            </div>
            <div className='skill-card'>
              <div className='skill'>MySql</div>
            </div>
            <div className='skill-card'>
              <div className='skill'>Eclipse</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
