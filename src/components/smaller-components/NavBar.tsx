// NavBar.tsx
import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-transparent absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="#" className="text-2xl font-bold text-white">
          Preacher Conference
        </a>
        <div className="flex space-x-4">
          <a href="#schedule" className="text-white hover:text-gray-300">
            Schedule
          </a>
          <a href="#speakers" className="text-white hover:text-gray-300">
            Speakers
          </a>
          <a href="/register" className="text-white hover:text-gray-300">
            Registration
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
