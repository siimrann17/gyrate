// import React, { useState } from 'react';
// import { useRouter, usePathname, useSearchParams } from 'next/navigation'

// const ScooterPopup = ({ scooters, onClose }) => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [selectedScooter, setSelectedScooter] = useState(null);
//   const router = useRouter();
//   const pathname = usePathname()
//   const searchParams = useSearchParams()

//   const handleClose = () => {
//     onClose();
//   };

//   const handleMouseEnter = (index) => {
//     setHoveredIndex(index);
//   };

//   const handleMouseLeave = () => {
//     setHoveredIndex(null);
//   };

//   const handleSelectScooter = (index) => {
//     setSelectedScooter(index);
//   };

//   const handleRedirectToPayment = () => {
//     if (selectedScooter !== null && scooters[selectedScooter]) {
//       const scooterQuery = encodeURIComponent(JSON.stringify(scooters[selectedScooter]));
//       router.push(`/Payment?scooter=${scooterQuery}`);
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white p-8 rounded-lg w-3.5/4 h-3.5/4">
//         <h2 className="bold-20">Available Scooters</h2>
//         <div className="grid grid-cols-4 gap-4 mt-4">
//           {scooters.map((scooter, index) => (
//             <div
//               key={index}
//               onMouseEnter={() => handleMouseEnter(index)}
//               onMouseLeave={handleMouseLeave}
//               onClick={() => handleSelectScooter(index)}
//               className={`p-4 rounded-lg relative cursor-pointer transition-opacity duration-300 ${
//                 hoveredIndex !== null && hoveredIndex !== index ? 'opacity-50' : 'opacity-100'
//               } ${selectedScooter === index ? 'border-2 border-blue-500' : ''}`}
//               style={{ backgroundColor: '#f9f9f9', border: '1px solid #ddd', boxShadow: selectedScooter === index ? '0 0 0 2px #3182ce' : 'none' }} // Added boxShadow for selected scooter
//             >
//               <img src={scooter.image} alt={scooter.brand} className="w-full h-32 object-cover rounded-lg" />
//               <div className="mt-2">
//                 <h3 className="bold-16">{scooter.brand}</h3>
//                 <p>Price: Rs:{scooter.price}</p>
//                 <p>Speed: {scooter.speed} km/h</p>
//               </div>
//               {hoveredIndex === index && (
//                 <div className="absolute inset-0 bg-black bg-opacity-10 rounded-lg"></div>
//               )}
//             </div>
//           ))}
//         </div>
//         <div className="flex justify-end mt-4">
//           <button
//             onClick={handleClose}
//             className="px-4 py-2 mr-4 bg-black text-white rounded"
//           >
//             Close
//           </button>
//           <button
//             onClick={handleRedirectToPayment}
//             className={`px-4 py-2 bg-blue-500 text-white rounded ${selectedScooter === null ? 'opacity-50 cursor-not-allowed' : ''}`}
//             disabled={selectedScooter === null}
//           >
//             Proceed to Payment
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScooterPopup;

import React, { useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import LoginSignupPopup from "./LoginSignupPopup";

const ScooterPopup = ({ scooters, onClose }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedScooter, setSelectedScooter] = useState(null);
  const [showLoginSignup, setShowLoginSignup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Dummy state for login status
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleClose = () => {
    onClose();
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleSelectScooter = (index) => {
    setSelectedScooter(index);
  };

  const handleRedirectToPayment = () => {
    if (selectedScooter !== null && scooters[selectedScooter]) {
      if (!isLoggedIn) {
        setShowLoginSignup(true);
      } else {
        const scooterQuery = encodeURIComponent(
          JSON.stringify(scooters[selectedScooter])
        );
        router.push(`/Payment?scooter=${scooterQuery}`);
      }
    }
  };

  const handleLoginSignupSuccess = () => {
    setIsLoggedIn(true);
    setShowLoginSignup(false);
    const scooterQuery = encodeURIComponent(
      JSON.stringify(scooters[selectedScooter])
    );
    router.push(`/Payment?scooter=${scooterQuery}`);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-8 rounded-lg w-3.5/4 h-3.5/4">
          <h2 className="bold-20">Available Scooters</h2>
          <div className="grid grid-cols-4 gap-4 mt-4">
            {scooters.map((scooter, index) => (
              <div
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleSelectScooter(index)}
                className={`p-4 rounded-lg relative cursor-pointer transition-opacity duration-300 ${
                  hoveredIndex !== null && hoveredIndex !== index
                    ? "opacity-50"
                    : "opacity-100"
                } ${
                  selectedScooter === index ? "border-2 border-blue-500" : ""
                }`}
                style={{
                  backgroundColor: "#f9f9f9",
                  border: "1px solid #ddd",
                  boxShadow:
                    selectedScooter === index ? "0 0 0 2px #3182ce" : "none",
                }}
              >
                <img
                  src={scooter.image}
                  alt={scooter.brand}
                  className="w-full h-32 object-cover rounded-lg"
                />
                <div className="mt-2">
                  <h3 className="bold-16">{scooter.brand}</h3>
                  <p>Price: Rs:{scooter.price}</p>
                  <p>Speed: {scooter.speed} km/h</p>
                </div>
                {hoveredIndex === index && (
                  <div className="absolute inset-0 bg-black bg-opacity-10 rounded-lg"></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-4">
            <button
              onClick={handleClose}
              className="px-4 py-2 mr-4 bg-black text-white rounded"
            >
              Close
            </button>
            <button
              onClick={handleRedirectToPayment}
              className={`px-4 py-2 bg-blue-500 text-white rounded ${
                selectedScooter === null ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={selectedScooter === null}
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
      {showLoginSignup && (
        <LoginSignupPopup
          onClose={() => setShowLoginSignup(false)}
          onLoginSignupSuccess={handleLoginSignupSuccess}
        />
      )}
    </>
  );
};

export default ScooterPopup;
