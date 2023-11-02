import React from 'react';
import TitleComponent from '../smaller-components/TitleComponent';

const SchedulePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center h-screen bg-white ">
      <TitleComponent title={'Schedule'} />
      <div className="flex flex-col w-10/12 p-8 bg-white shadow-lg rounded-lg">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl md:text-2xl lg:text-3xl">10:00 AM</h2>
          <p className="text-sm md:text-lg">Introduction</p>
        </div>
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl md:text-2xl lg:text-3xl">11:00 AM</h2>
          <p className="text-sm md:text-lg">Session 1</p>
        </div>
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl md:text-2xl lg:text-3xl">12:00 PM</h2>
          <p className="text-sm md:text-lg">Session 2</p>
        </div>
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl md:text-2xl lg:text-3xl">1:00 PM</h2>
          <p className="text-sm md:text-lg">Lunch</p>
        </div>
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl md:text-2xl lg:text-3xl">3:00 PM</h2>
          <p className="text-sm md:text-lg">Session 3</p>
        </div>
        <div className="flex items-center justify-between p-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl">4:00 PM</h2>
          <p className="text-sm md:text-lg">Session 4</p>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
