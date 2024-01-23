import React from 'react';
import { Link } from 'react-router-dom';
import ImgNextGen from '../images/ImageFormat';

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col ">
      <footer className="bg-gray-800 text-white text-center mt-auto md:h-auto ">
        <div className="flex md:flex-row flex-col justify-evenly ">
          <div className="flex flex-col justify-center h-64">
            <div className="flex flex-col justify-evenly items-center text-gray-300">
              <ImgNextGen srcWebp={'/logo.png'} alt={'logo'} styling={'w-16 h-16 mb-4 filter brightness-0 invert'} />
              <p className="md:text-lg text-md font-bold mb-2">Faithfull Steward Conference</p>
              <p className="text-sm">7635 Auburn Blvd,</p>
              <p className="text-sm">Citrus Heights, CA 95610</p>
              <p className="text-sm">(916) 825-3828</p>
            </div>
          </div>
          <div className="flex flex-col justify-center md:h-auto h-64 ">
            <div className="flex flex-col justify-evenly h-2/4">
              <Link to="/" className="text-sm hover:text-gray-300">
                Home
              </Link>
              <Link to="/schedule" className="text-sm hover:text-gray-300">
                Schedule
              </Link>
              <Link to="/speakers" className="text-sm hover:text-gray-300">
                Speakers
              </Link>
            </div>
          </div>
        </div>
        <div className="text-xs text-gray-300 border-t border-white w-full py-4">
          &copy; 2024 Faithfull Steward Conference
        </div>
      </footer>
    </div>
  );
};

export default Footer;
