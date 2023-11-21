import React from 'react';
import TitleComponent from '../smaller-components/TitleComponent';
import scheduleData from '../../data/Schedule.json';

const SchedulePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center h-full bg-white">
      <TitleComponent title={'Schedule'} />
      <div className="w-full h-full flex items-center justify-center py-8">
        <div className="flex flex-col justify-evenly sm:w-10/12 w-11/12 h-full p-8  bg-white shadow-lg rounded-lg">
          {scheduleData.map((item, index) => (
            <div
              key={index}
              className={`flex sm:flex-row flex-col items-center justify-between p-6 ${
                index !== scheduleData.length - 1 ? 'border-b border-gray-200' : ''
              }`}
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl">{item.time}</h2>
              <p className="text-sm md:text-lg sm:m-0 mt-2">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
