import React from 'react';

const SchedulePage: React.FC = () => {
  return (
    <div className="flex flex-col mx-auto p-4  w-full items-center">
      <h1 className="text-3xl font-bold text-center mb-8">Conference Schedule</h1>
      <div className="flex flex-col ">
        <div className="bg-white rounded-lg p-4 ">
          <h2 className="text-xl font-semibold mb-2">10:00 AM</h2>
          <p>Introduction</p>
        </div>
        <div className="bg-white rounded-lg p-4 ">
          <h2 className="text-xl font-semibold mb-2">11:00 AM</h2>
          <p>Session 1</p>
        </div>
        <div className="bg-white rounded-lg p-4 ">
          <h2 className="text-xl font-semibold mb-2">12:00 PM</h2>
          <p>Session 2</p>
        </div>
        <div className="bg-white rounded-lg p-4 ">
          <h2 className="text-xl font-semibold mb-2">1:00 PM</h2>
          <p>Lunch</p>
        </div>
        <div className="bg-white rounded-lg p-4 ">
          <h2 className="text-xl font-semibold mb-2">3:00 PM</h2>
          <p>Session 3</p>
        </div>
        <div className="bg-white rounded-lg p-4 ">
          <h2 className="text-xl font-semibold mb-2">4:00 PM</h2>
          <p>Session 4</p>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
