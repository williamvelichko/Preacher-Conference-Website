import React from 'react';
import { Link } from 'react-router-dom';
import ImageSection from '../smaller-components/ImageSection';
import SchedulePage from './SchedulePage';
import SpeakersPage from './SpeakersPage';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div
        className="h-screen bg-cover bg-center flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url('/mainBiblePic.jpg')`,
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-5xl  mb-4 ">Expository Preaching</h1>
          <p className="text-2xl mb-8">Join us from July 21st to 23rd</p>
          <Link
            to="/register"
            className="text-xl text-white bg-gray-500 px-5 py-3 rounded-md hover:bg-gray-600 shadow-lg transition duration-300"
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
