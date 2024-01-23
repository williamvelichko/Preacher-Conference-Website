import React from 'react';

const BibleVerse: React.FC = () => {
  return (
    <div className="w-full flex justify-center ">
      <div className="max-w-md w-full bg-white p-6 rounded-lg ">
        <div className="flex flex-col m-14">
          <h1 className="md:text-xl text-lg font-bold text-start mb-4">1 Corinthians 4:1-2</h1>
          <p className="md:text-lg text-md text-start">
            "Let a man so account of us, as of the ministers of Christ, and stewards of the mysteries of God. Moreover
            it is required in stewards, that a man be found faithful."
          </p>
        </div>
      </div>
    </div>
  );
};

export default BibleVerse;
