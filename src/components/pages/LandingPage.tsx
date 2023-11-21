import React from 'react';
import { Link } from 'react-router-dom';
import ImageSection from '../smaller-components/ImageSection';
import SchedulePage from './SchedulePage';
import SpeakersPage from './SpeakersPage';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div
        className="h-screen bg-cover bg-center flex flex-col justify-center items-center relative"
        style={{
          backgroundImage: `url('/mainBiblePic.jpg')`,
        }}
      >
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="text-center text-white relative z-10">
          <h1 className="sm:text-5xl text-4xl mb-4 italic">Expository Preaching</h1>
          <div className="flex justify-center items-center">
            <img
              src="logo.png"
              alt="Your Logo"
              className="w-16 h-16 mb-4 filter brightness-0 invert" // Changed class to adjust the color
            />
          </div>
          <p className="sm:text-xl text-lg mb-8">April 13, 2024</p>
          <Link
            to="/register"
            className="sm:text-xl text:lg text-white bg-gray-500 px-5 py-3 rounded-md hover:bg-gray-600 shadow-lg transition duration-300"
          >
            Register Now
          </Link>
        </div>
      </div>

      <SpeakersPage />
      <SchedulePage />
      <ImageSection />
    </div>
  );
};

export default LandingPage;
