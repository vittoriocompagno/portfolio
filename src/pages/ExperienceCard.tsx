import React from 'react';

interface ExperienceProps {
  category: string;
  titles: string[];
  companies: string[];
  dates: string[];
  descriptions: string[];
}

const ExperienceCard: React.FC<ExperienceProps> = ({ category, titles, companies, dates, descriptions }) => (
  <div className='mb-10 max-w-xl min-w-0 font-montserrat'>
    <div className=' hover:bg-slate-300 dark:hover:bg-slate-700 transition duration-200 text-center shadow-2xl p-10 rounded-xl bg-slate-200 text-black dark:text-white dark:bg-slate-800'>
      <h1 className='text-3xl font-bold text-left text-teal-700 dark:text-teal-200'>{category}</h1>
      {titles?.map((title, index) => (
        <div key={index}>
          <h2 className='font-bold pt-2 pb-2 mt-3 text-xl text-left text-teal-700 dark:text-teal-400'>{title}</h2>
          <h3 className='text-lg text-left mb-5 dark:text-gray-200 text-gray-500'>{companies?.[index]} - {dates?.[index]}</h3>
          <p className='text-left leading-6.5 mb-3 overflow-auto break-word text-lg'>{descriptions?.[index]}</p>
        </div>
      )) ?? <p>No data available</p>}
    </div>
  </div>
);

export default ExperienceCard;
