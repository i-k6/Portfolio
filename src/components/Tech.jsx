import React from 'react';
import { SectionWrapper } from '../hoc';
import './Tech.css';

const Tech = () => {
  return (
    <>
      <div className='flex flex-col items-center mb-10'>
        <h2 className='text-2xl font-bold mb-4'>Skills</h2>

        <div className='skills-container'>
          <div className='skill-card'>
            <div className='skill'>React</div>
          </div>
          <div className='skill-card'>
            <div className='skill'>JavaScript</div>
          </div>
          <div className='skill-card'>
            <div className='skill'>C</div>
          </div>
          <div className='skill-card'>
            <div className='skill'>SQL</div>
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
    </>
  );
};  

export default SectionWrapper(Tech, '');
