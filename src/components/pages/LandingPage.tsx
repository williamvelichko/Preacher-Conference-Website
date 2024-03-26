import React, { lazy } from 'react';
const ImageSection = lazy(() => import('../smaller-components/ImageSection'));
const SchedulePage = lazy(() => import('./SchedulePage'));
// const SpeakersPage = lazy(() => import('./SpeakersPage'));
const MainBackground = lazy(() => import('../smaller-components/MainBackground'));
const BibleVerse = lazy(() => import('../smaller-components/BibleVerse'));

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
