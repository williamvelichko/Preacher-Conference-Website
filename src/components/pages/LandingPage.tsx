import React from 'react';
import ImageSection from '../smaller-components/ImageSection';
import SchedulePage from './SchedulePage';
// import SpeakersPage from './SpeakersPage';
import MainBackground from '../smaller-components/MainBackground';
import BibleVerse from '../smaller-components/BibleVerse';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-white flex flex-col h-full">
      <MainBackground />
      <BibleVerse />
      {/* <SpeakersPage /> */}
      <SchedulePage />
      <ImageSection />
    </div>
  );
};

export default LandingPage;
