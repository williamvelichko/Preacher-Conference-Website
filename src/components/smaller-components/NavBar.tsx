import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PopUp from './PopUp';
import ImgNextGen from '../images/ImageFormat';

const NavBar: React.FC = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const handlePopUpToggle = () => {
    setIsPopUpOpen(!isPopUpOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white text-black w-full ">
      <div className=" w-full flex flex-row justify-between items-center ">
        <div className="flex justify-center md:w-1/12 w-3/12">
          <Link to="/" className="flex items-center ">
            {/* <img src="logo.png" alt="Your Logo" className="h-16 " /> */}
            <ImgNextGen srcWebp={'/logo.png'} alt={'logo'} styling={'h-16'} />
          </Link>
        </div>
        <div className="flex space-x-4 md:hidden p-2">
          <button onClick={handlePopUpToggle}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <div className="flex flex-row items-center hidden md:flex space-x-6 mr-2">
          <Link to="/" className="text-black hover:text-gray-300 transition duration-300">
            Home
          </Link>
          <Link to="/schedule" className="text-black hover:text-gray-300 transition duration-300">
            Schedule
          </Link>
          <Link to="/speakers" className="text-black hover:text-gray-300 transition duration-300">
            Speakers
          </Link>
          <Link
            to="/register"
            className="text-white bg-gray-500 px-4 py-1 rounded-md hover:bg-gray-600 transition duration-300"
          >
            REGISTER NOW
          </Link>
        </div>
      </div>
      {isPopUpOpen && <PopUp closePopup={handlePopUpToggle} />}
    </nav>
  );
};

export default NavBar;
