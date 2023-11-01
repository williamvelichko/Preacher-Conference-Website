import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-transparent absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold text-white">
          Preacher Conference
        </Link>
        <div className="flex space-x-4">
          <Link to="/schedule" className="text-white hover:text-gray-300">
            Schedule
          </Link>
          <Link to="/speakers" className="text-white hover:text-gray-300">
            Speakers
          </Link>
          <Link to="/register" className="text-white hover:text-gray-300">
            Registration
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
