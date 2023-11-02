import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [isOverlap, setIsOverlap] = useState(false);

  const handleScroll = () => {
    const bgImage = document.querySelector('.bg-cover');

    if (bgImage) {
      const rect = bgImage.getBoundingClientRect();
      setIsOverlap(rect.top < 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed h-16 top-0 left-0 right-0 z-50 transition-all duration-500 ${
        !isOverlap ? 'bg-white text-black' : 'bg-white text-black'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold">
          Faithfull Steward
        </Link>
        <div className="flex space-x-4">
          <Link to="/schedule" className={`hover:text-gray-300 ${isOverlap ? 'text-black' : 'text-black'}`}>
            Schedule
          </Link>
          <Link to="/speakers" className={`hover:text-gray-300 ${isOverlap ? 'text-black' : 'text-black'}`}>
            Speakers
          </Link>
          <Link to="/register" className={`hover:text-gray-300 ${isOverlap ? 'text-black' : 'text-black'}`}>
            Registration
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
