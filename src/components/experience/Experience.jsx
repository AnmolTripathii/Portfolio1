
import React from 'react';
import EHead from './E_Head';
import { PiSealCheckFill } from 'react-icons/pi';

function Experience() {
  return (
    <section id="experience" className="flex flex-col items-center justify-center">
      <EHead />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl px-4">
        {/* Web Development */}
        <div className="bg-[#2c2c6c] border-2 border-solid border-[#2c2c6c] hover:border-[#4db5ff] min-h-[400px] flex flex-col items-center justify-center rounded-lg p-6 transition-all duration-300 hover:bg-[#1f1f38]">
          <h3 className="text-xl font-semibold text-center mb-6">Web Development</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              'HTML',
              'CSS',
              'Javascript',
              'Bootstrap',
              'Tailwind',
              'React',
              'NodeJS',
              'ExpressJS',
              'MongoDB',
              'NextJS',
              'Typescript'
            ].map((skill) => (
              <article key={skill} className="flex items-center space-x-4">
                <PiSealCheckFill className="text-primary text-xl" />
                <div>
                  <h5 className="font-semibold">{skill}</h5>
                  <small className="text-slate-400">Experienced</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Programming Language */}
        <div className="bg-[#2c2c6c] border-2 border-solid border-[#2c2c6c] hover:border-[#4db5ff] min-h-[400px] flex flex-col items-center justify-center rounded-lg p-6 transition-all duration-300 hover:bg-[#1f1f38]">
          <h3 className="text-xl font-semibold text-center mb-6">Programming Language</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: 'C', level: 'Intermediate' },
              { name: 'C++', level: 'Intermediate' },
              { name: 'DSA', level: 'Intermediate' },
            ].map((skill) => (
              <article key={skill.name} className="flex items-center space-x-4">
                <PiSealCheckFill className="text-primary text-xl" />
                <div>
                  <h5 className="font-semibold">{skill.name}</h5>
                  <small className="text-slate-400">{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
