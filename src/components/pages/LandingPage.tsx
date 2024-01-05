import React from 'react';
import { Link } from 'react-router-dom';
import ImageSection from '../smaller-components/ImageSection';
import SchedulePage from './SchedulePage';
import SpeakersPage from './SpeakersPage';
import ImgNextGen from '../images/ImageFormat';
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
