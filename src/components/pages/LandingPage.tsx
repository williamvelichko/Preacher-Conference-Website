// LandingPage.tsx
import React from 'react';
import ImageSection from '../smaller-components/ImageSection';
import BibleVerse from '../smaller-components/BibleVerse';
import Location from '../smaller-components/Location';
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
          <a
            href="#register"
            className="bg-gray-500 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300"
          >
            Register Now
          </a>
        </div>
      </div>
      <SchedulePage />
      <SpeakersPage />
      {/* <BibleVerse /> */}
      <ImageSection />
    </div>
  );
};

export default LandingPage;
