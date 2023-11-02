// import React from 'react';
// import { Link } from 'react-router-dom';

// const NavBar: React.FC = () => {
//   return (
//     <nav className="bg-white absolute top-0 left-0 right-0 z-50 sticky w-full">
//       <div className="container mx-auto flex justify-between items-center p-4 bg-white">
//         <Link to="/" className="text-2xl font-bold text-gray-800">
//           Preacher Conference
//         </Link>
//         <div className="flex space-x-4">
//           <Link to="/schedule" className="text-gray-800 hover:text-gray-600">
//             Schedule
//           </Link>
//           <Link to="/speakers" className="text-gray-800 hover:text-gray-600">
//             Speakers
//           </Link>
//           <Link to="/register" className="text-gray-800 hover:text-gray-600">
//             Registration
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [isOverlap, setIsOverlap] = useState(false);

  const handleScroll = () => {
    const bgImage = document.querySelector('.bg-cover');
    console.log(bgImage);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        !isOverlap ? 'bg-transparent text-white' : 'bg-white text-black'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold">
          Preacher Conference
        </Link>
        <div className="flex space-x-4">
          <Link to="/schedule" className={`hover:text-gray-300 ${isOverlap ? 'text-black' : 'text-white'}`}>
            Schedule
          </Link>
          <Link to="/speakers" className={`hover:text-gray-300 ${isOverlap ? 'text-black' : 'text-white'}`}>
            Speakers
          </Link>
          <Link to="/register" className={`hover:text-gray-300 ${isOverlap ? 'text-black' : 'text-white'}`}>
            Registration
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
