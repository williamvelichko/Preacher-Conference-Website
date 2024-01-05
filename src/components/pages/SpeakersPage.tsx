import React from 'react';
import Speakers from '../../data/Speaker2.json';
import TitleComponent from '../smaller-components/TitleComponent';
import ImgNextGen from '../images/ImageFormat';

const SpeakersPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      <TitleComponent title={'Speakers'} />
      <div className="w-full h-full flex items-center justify-center ">
        <div className="flex flex-col sm:flex-row w-full justify-evenly">
          {Speakers.map((speaker, index) => (
            <div key={index} className="flex flex-col items-center p-4 bg-white w-2/4">
              <ImgNextGen
                srcWebp={speaker.webp}
                fallback={speaker.jpg}
                alt={speaker.alt}
                styling="w-96 h-96 object-contain "
              />
              <h2 className="text-lg font-semibold mt-4">
                {speaker.firstName} {speaker.lastName}
              </h2>
              <p className="text-sm mt-1">{speaker.about}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeakersPage;
