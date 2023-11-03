import React from 'react';
import Speakers from '../../data/Speakers.json';
import TitleComponent from '../smaller-components/TitleComponent';

const SpeakersPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <TitleComponent title={'Speakers'} />
      <div className="main flex flex-col items-center justify-evenly w-full max-w-screen-lg py-8 m-auto">
        <div className="speakers w-full flex flex-wrap justify-center items-start my-8 py-4 ">
          {Speakers.map((speaker, index) => (
            <div key={index} className="flex flex-col items-center p-4 m-4 bg-white rounded-lg">
              <img src={speaker.profilePic} alt={`${speaker.firstName} ${speaker.lastName}`} className="w-64 h-64" />
              <h2 className="text-xl mt-6">
                {speaker.firstName} {speaker.lastName}
              </h2>
              <p className="m-2">{speaker.about}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeakersPage;
