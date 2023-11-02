import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col">
      <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
        <div className="flex flex-row justify-evenly">
          <div className="flex flex-col items-center mb-8">
            <p className="text-lg font-bold">Preacher Conference Ministry</p>
            <p>7635 Auburn Blvd,</p>
            <p>Citrus Heights, CA 95610</p>
            <p>(916) 825-3828</p>
          </div>
          <div className="flex flex-col justify-evenly space-x-4 mb-4">
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link to="/schedule" className="hover:text-gray-300">
              Schedule
            </Link>
            <Link to="/speakers" className="hover:text-gray-300">
              Speakers
            </Link>
          </div>
        </div>
        <div className="text-sm border-t border-white w-full p-8">&copy; 2023 Preacher Conference</div>
      </footer>
    </div>
  );
};

export default Footer;
