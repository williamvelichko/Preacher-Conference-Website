import React from 'react';
import ImageSection from '../smaller-components/ImageSection';
import SchedulePage from './SchedulePage';
import SpeakersPage from './SpeakersPage';
import MainBackground from '../smaller-components/MainBackground';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-white">
      <MainBackground />
      <SpeakersPage />
      <SchedulePage />
      <ImageSection />
    </div>
  );
};

export default LandingPage;
