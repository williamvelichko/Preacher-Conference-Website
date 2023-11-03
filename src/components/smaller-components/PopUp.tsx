// PopUp.tsx
import React from 'react';

const PopUp: React.FC<{ closePopup: () => void }> = ({ closePopup }) => {
  return (
    <div className="md:hidden fixed bg-white border shadow-md w-full">
      <div className="flex flex-col p-4">
        <a href="/" className="py-2 hover:bg-gray-100" onClick={closePopup}>
          Home
        </a>
        <a href="/schedule" className="py-2 hover:bg-gray-100" onClick={closePopup}>
          Schedule
        </a>
        <a href="/speakers" className="py-2 hover:bg-gray-100" onClick={closePopup}>
          Speakers
        </a>
        <a
          href="/register"
          className="flex justify-center py-2 text-white bg-gray-500 px-4 py-1 rounded-md hover:bg-gray-600 transition duration-300"
          onClick={closePopup}
        >
          REGISTER KNOW
        </a>
      </div>
    </div>
  );
};

export default PopUp;
