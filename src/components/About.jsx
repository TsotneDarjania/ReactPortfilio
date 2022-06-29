
import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Recruiter, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>
              After learning everything by myself, I realized that there is no insurmountable technical problem. 
              Knowing how to find and understand everything, working with experienced developers would be ideal for me,
              I have unlimited motivation to become one of the best Reacr Developer in the world ...
              </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;