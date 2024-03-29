import React from 'react';
import { Link } from 'react-router-dom';
import { useFetchData } from '../store/FetchData';
import mainBiblePicWebp from '/mainBiblePic.webp';
import mainBiblePicJpg from '/mainBiblePic.jpg';
import ImgNextGen from '../images/ImageFormat';

const MainBackground: React.FC = () => {
  const { conferenceData } = useFetchData();

  const preloadImage = (src: string) => {
    const img = new Image();
    img.src = src;
  };

  React.useEffect(() => {
    preloadImage(mainBiblePicJpg);
    preloadImage(mainBiblePicWebp);
  }, []);

  return (
    <div className="h-screen bg-cover bg-center flex flex-col justify-center items-center relative">
      <ImgNextGen
        srcWebp={mainBiblePicWebp}
        fallback={mainBiblePicJpg}
        alt="Background Image"
        styling="w-full h-screen object-cover absolute top-0 left-0 z-0"
      />

      <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
        <div>
          <h1 className="sm:text-5xl text-4xl mb-4 italic">{conferenceData.Title}</h1>
          <div className="flex justify-center items-center">
            <img src="/logo.png" alt="Logo" className="w-16 h-16 mb-4 filter brightness-0 invert" loading="lazy" />
          </div>
          <p className="sm:text-xl text-lg mb-8">{conferenceData.Date}</p>
          <Link
            to="/register"
            className="sm:text-xl text-lg text-white bg-gray-500 px-5 py-3 rounded-md hover:bg-gray-600 shadow-lg transition duration-300"
          >
            Register Now
          </Link>
        </div>
      </div>

      <div className="absolute inset-0 bg-black opacity-30 z-5"></div>
    </div>
  );
};

export default MainBackground;
