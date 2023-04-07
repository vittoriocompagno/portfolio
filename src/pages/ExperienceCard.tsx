import React from 'react';

interface ExperienceProps {
  title: string;
  company: string;
  date: string;
  description: string;
}

const ExperienceCard: React.FC<ExperienceProps> = ({ title, company, date, description }) => (
  <div className='mb-10 max-w-xl min-w-0'>
    <div className='text-center shadow-2xl p-10 rounded-xl bg-slate-200 text-black dark:text-white dark:bg-slate-800'>
      <h3 className='pt-2 pb-2 text-2xl font-medium text-left text-teal-700 dark:text-teal-400'>{title}</h3>
      <h2 className='text-lg text-left mb-3 dark:text-gray-200 text-gray-500'>{company} - {date}</h2>
      <p className='text-left leading-6.5 overflow-auto break-word'>{description}</p>
    </div>
  </div>
);

export default ExperienceCard;
