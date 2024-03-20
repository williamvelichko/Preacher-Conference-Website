import React from 'react';
import ImageSection from '../smaller-components/ImageSection';
import SchedulePage from './SchedulePage';
import SpeakersPage from './SpeakersPage';
import MainBackground from '../smaller-components/MainBackground';
import BibleVerse from '../smaller-components/BibleVerse';
import { useFetchData } from '../store/FetchData';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-white">
      <MainBackground />
      <BibleVerse />
      {/* <SpeakersPage /> */}
      <SchedulePage />
      <ImageSection />
    </div>
  );
};

export default LandingPage;
