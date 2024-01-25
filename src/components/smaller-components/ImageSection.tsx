import React from 'react';
import images from '../../data/Images.json';
import ImgNextGen from '../images/ImageFormat';

const ImageSection: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center mt-8 p-4 bg-gray-100">
      <div className="flex flex-wrap justify-between md:w-10/12 w-11/12 mt-20">
        {images.map((image, index) => (
          <div key={index} className="w-full sm:w-1/2 xl:w-1/2 p-2">
            <div className="w-full h-96 relative">
              <ImgNextGen
                srcWebp={image.webp}
                fallback={image.jpg}
                alt={image.alt}
                styling={'w-full h-full object-cover'}
              />
              <div className="flex flex-col justify-end items-start absolute inset-0 bg-black bg-opacity-30 p-4 text-white">
                <h3 className="text-4xl md:text-4xl font-bold">{image.text}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col w-10/12 text-center my-24 p-4">
        <h2 className="text-xl font-bold mb-4">Purpose & Mission</h2>
        <p className="text-sm">
          Welcome to Faithful Steward Conference, where men are nurtured in truth and empowered as stewards of faith
          through the Scriptures, Discipleship, and Fellowship.
        </p>
      </div>
    </div>
  );
};

export default ImageSection;
