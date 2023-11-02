import React from 'react';
import Speakers from '../../data/Speakers.json';
import TitleComponent from '../smaller-components/TitleComponent';

const SpeakersPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center min-h-screen py-8">
      <TitleComponent title={'Speakers'} />
      <div className="flex flex-row justify-center w-full mt-8 ">
        {Speakers.map((speaker, index) => (
          <div key={index} className="flex flex-col items-center p-4 m-4 bg-white rounded-lg">
            <img src={speaker.profilePic} alt={`${speaker.firstName} ${speaker.lastName}`} className="w-60 h-60" />
            <h2 className="text-xl mt-6">
              {speaker.firstName} {speaker.lastName}
            </h2>
            <p className="m-2">{speaker.about}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpeakersPage;
