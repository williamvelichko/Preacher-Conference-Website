import React from 'react';

const TitleComponent: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="flex items-end justify-center w-full bg-gray-100 ">
      <h4 className="flex justify-start text-2xl w-10/12 p-8 ">{title}</h4>
    </div>
  );
};

export default TitleComponent;
