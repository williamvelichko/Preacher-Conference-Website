import React from 'react';

const BibleVerse: React.FC = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-md w-full bg-white p-6 rounded-lg ">
        <div className="flex flex-col m-14">
          <h1 className="text-8xl font-bold text-start mb-4">1 Timothy 4:16</h1>
          <p className="text-lg text-start">
            "Pay close attention to yourself and to the teaching; persevere in these things, for as you do this you will
            save both yourself and those who hear you."
          </p>
        </div>
        <img className="mt-5" src="/preaching-methods.jpg" alt="placeholder" />
      </div>
    </div>
  );
};

export default BibleVerse;
