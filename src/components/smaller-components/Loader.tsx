import React from 'react';

const Loader: React.FC = () => {
  const [dots, setDots] = React.useState('');

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setDots((prevDots) => {
        if (prevDots.length >= 3) {
          return '';
        } else {
          return prevDots + '.';
        }
      });
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-50 z-50">
      <div className="text-black text-lg font-semibold flex items-center">
        <span>Loading{dots}</span>
      </div>
    </div>
  );
};

export default Loader;
