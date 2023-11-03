// import React from 'react';

// const ImageSection: React.FC = () => {
//   return (
//     <div className="w-full flex justify-center mb-4">
//       <div className="flex flex-row justify-evenly w-full">
//         <div className="flex flex-col items-center justify-center space-y-4">
//           <div className="w-full h-full relative">
//             <img className="w-full h-96 object-cover" src="/bibleStudy.jpg" alt="Placeholder" />
//             <h3 className="text-white text-6xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//               Equipping
//             </h3>
//           </div>
//           <div className="w-full h-full relative">
//             <img className="w-full h-96 object-cover" src="/fellowship.jpg" alt="Placeholder" />
//             <h3 className="text-white text-6xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//               Fellowship
//             </h3>
//           </div>
//         </div>
//         <div className="flex  flex-col items-center justify-center space-y-4">
//           <div className="w-full h-full relative">
//             <img className="w-full h-96 object-cover" src="/coffee.jpg" alt="Placeholder" />
//             <h3 className="text-white text-6xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//               Refreshments
//             </h3>
//           </div>
//           <div className="w-full h-full relative">
//             <img className="w-full h-96 object-cover" src="truth.jpg" alt="Placeholder" />
//             <h3 className="text-white text-6xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//               Truth
//             </h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageSection;
import React from 'react';

const ImageSection: React.FC = () => {
  return (
    <div className="w-full h-full flex justify-center mb-4">
      <div className="flex flex-col md:flex-row justify-evenly w-full md:space-x-4">
        <div className="flex flex-col items-center justify-center space-y-4 mb-4 md:mb-0">
          <div className="w-full h-96 relative">
            <img src="/bibleStudy.jpg" alt="Placeholder" className="w-full h-full object-cover" />
            <h3 className="text-white text-4xl md:text-4xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Equipping
            </h3>
          </div>
          <div className="w-full h-96 relative">
            <img src="/fellowship.jpg" alt="Placeholder" className="w-full h-full object-cover" />
            <h3 className="text-white text-4xl md:text-4xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Fellowship
            </h3>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="w-full h-96 relative">
            <img src="/coffee.jpg" alt="Placeholder" className="w-full h-full object-cover" />
            <h3 className="text-white text-4xl md:text-4xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Refreshments
            </h3>
          </div>
          <div className="w-full h-96 relative">
            <img src="/truth.jpg" alt="Placeholder" className="w-full h-full object-cover" />
            <h3 className="text-white text-4xl md:text-4xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Truth
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
