 "use client";

// import React from 'react';
// import { useRouter } from 'next/navigation';

// const MapPopup = ({ distance, duration, onClose, onNext }) => {
//   const handleClose = () => {
//     onClose();
//   };

//   const handleNext = () => {
//     onNext();
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white p-8 rounded-lg w-3/4 h-3/4">
//         <h2 className="bold-20">Trip Details</h2>
//         <p className="mt-2">Distance: {distance} km</p>
//         <p className="mt-2">Duration: {duration} hours</p>
//         <div className="mt-4 flex gap-4">
//           <button 
//             onClick={handleClose} 
//             className="px-4 py-2 bg-black text-white rounded"
//           >
//             Close
//           </button>
//           <button 
//             onClick={handleNext} 
//             className="px-4 py-2 bg-blue-500 text-white rounded"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MapPopup;

import React from 'react';
import { useRouter } from 'next/navigation';

const MapPopup = ({ distance, duration, pickupTime, dropOffTime, onClose, onNext }) => {
  const handleClose = () => {
    onClose();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg w-3/4 h-3/4">
        <h2 className="font-bold text-2xl mb-4">Trip Details</h2>

        {/* Distance and Duration */}
        <div className="flex justify-between mb-4">
          <div>
            <p className="">Distance: {distance} km</p>
            <p className="">Duration: {duration} hours</p>
          </div>
          <div className="flex flex-col items-end -mt-12">
            <label className="text-sm mb-1">Pickup Time:</label>
            <p className="text-sm">{pickupTime}</p>
          </div>
        </div>

        {/* Drop off Time */}
        <div className="flex justify-between">
          <div>
            {/* Placeholder for future content */}
          </div>
          <div className="flex flex-col items-end -mt-16">
            <label className="text-sm mb-1">Drop off Time:</label>
            <p className="text-sm">{dropOffTime}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-end gap-4">
          <button
            onClick={handleClose}
            className="px-4 py-2 bg-black text-white rounded"
          >
            Close
          </button>
          <button 
            onClick={handleNext} 
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default MapPopup;
