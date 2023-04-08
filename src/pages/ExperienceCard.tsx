import React from 'react';

interface ExperienceProps {
  category:string;
  title: string;
  company: string;
  date: string;
  description: string;
}

const ExperienceCard: React.FC<ExperienceProps> = ({ category, title, company, date, description }) => (
    <div className='mb-10 max-w-xl min-w-0 '>
      <div className=' hover:bg-slate-300 dark:hover:bg-slate-700 transition duration-200 text-center shadow-2xl p-10 rounded-xl bg-slate-200 text-black dark:text-white dark:bg-slate-800'>
        <h1 className='text-3xl text-left text-teal-700 dark:text-teal-200' >{category}</h1>
        <h2 className='pt-2 pb-2 text-xl font-medium text-left text-teal-700 dark:text-teal-400'>{title}</h2>
        <h3 className='text-lg text-left mb-3 dark:text-gray-200 text-gray-500'>{company} - {date}</h3>
        <p className='text-left leading-6.5 overflow-auto break-word md:text-lg text-sm'>{description}</p>
      </div>
    </div>
);

export default ExperienceCard;
