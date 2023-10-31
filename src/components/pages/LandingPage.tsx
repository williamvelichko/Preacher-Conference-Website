// LandingPage.tsx
import React from 'react';
import NavBar from '../smaller-components/NavBar';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <NavBar />
      <div
        className="h-screen bg-cover bg-center flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url('/mainBiblePic.jpg')`,
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Preacher Conference 2023</h1>
          <p className="text-2xl mb-8">Join us from July 21st to 23rd</p>
          <a href="#register" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Register Now
          </a>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Preacher Conference 2023</h1>
          <p className="text-lg text-gray-600 mb-8">Join us for a transformative experience.</p>
          <a href="#register" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Register Now
          </a>
        </div>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">About</h2>
          <p className="text-lg text-gray-600">
            The Preacher Conference is an annual gathering of spiritual leaders and pastors from around the world. Join
            us for a time of learning, fellowship, and spiritual renewal.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Schedule</h2>
          <p className="text-lg text-gray-600">Check back soon for the detailed conference schedule.</p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Speakers</h2>
          <p className="text-lg text-gray-600">
            Our lineup of speakers includes renowned pastors and spiritual leaders who will share their insights and
            wisdom.
          </p>
        </section>
      </div>

      <footer className="bg-gray-800 text-white text-center p-4 mt-8">&copy; 2023 Preacher Conference</footer>
    </div>
  );
};

export default LandingPage;
