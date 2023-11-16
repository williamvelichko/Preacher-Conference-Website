import React from 'react';
import { Link } from 'react-router-dom';

const PopUp: React.FC<{ closePopup: () => void }> = ({ closePopup }) => {
  return (
    <div className="md:hidden fixed bg-white border shadow-md w-full">
      <div className="flex flex-col p-4">
        <Link to="/" className="py-2 hover:bg-gray-100" onClick={closePopup}>
          Home
        </Link>
        <Link to="/schedule" className="py-2 hover:bg-gray-100" onClick={closePopup}>
          Schedule
        </Link>
        <Link to="/speakers" className="py-2 hover:bg-gray-100" onClick={closePopup}>
          Speakers
        </Link>
        <Link
          to="/register"
          className="flex justify-center py-2 text-white bg-gray-500 px-4 py-1 rounded-md hover:bg-gray-600 transition duration-300"
          onClick={closePopup}
        >
          REGISTER NOW
        </Link>
      </div>
    </div>
  );
};

export default PopUp;
