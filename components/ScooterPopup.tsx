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

<<<<<<< HEAD

// import React, { useState } from 'react';
// import { useRouter, usePathname, useSearchParams } from 'next/navigation';
// import LoginSignupPopup from './LoginSignupPopup';

// const ScooterPopup = ({ scooters, onClose }) => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [selectedScooter, setSelectedScooter] = useState(null);
//   const [showLoginSignup, setShowLoginSignup] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Dummy state for login status
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

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
//       if (!isLoggedIn) {
//         setShowLoginSignup(true);
//       } else {
//         const scooterQuery = encodeURIComponent(JSON.stringify(scooters[selectedScooter]));
//         router.push(`/Payment?scooter=${scooterQuery}`);
//       }
//     }
//   };

//   const handleLoginSignupSuccess = () => {
//     setIsLoggedIn(true);
//     setShowLoginSignup(false);
//     const scooterQuery = encodeURIComponent(JSON.stringify(scooters[selectedScooter]));
//     router.push(`/Payment?scooter=${scooterQuery}`);
//   };

//   return (
//     <>
//       <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//         <div className="bg-white p-8 rounded-lg w-3.5/4 h-3.5/4">
//           <h2 className="bold-20">Available Scooters</h2>
//           <div className="grid grid-cols-4 gap-4 mt-4">
//             {scooters.map((scooter, index) => (
//               <div
//                 key={index}
//                 onMouseEnter={() => handleMouseEnter(index)}
//                 onMouseLeave={handleMouseLeave}
//                 onClick={() => handleSelectScooter(index)}
//                 className={`p-4 rounded-lg relative cursor-pointer transition-opacity duration-300 ${
//                   hoveredIndex !== null && hoveredIndex !== index ? 'opacity-50' : 'opacity-100'
//                 } ${selectedScooter === index ? 'border-2 border-blue-500' : ''}`}
//                 style={{ backgroundColor: '#f9f9f9', border: '1px solid #ddd', boxShadow: selectedScooter === index ? '0 0 0 2px #3182ce' : 'none' }}
//               >
//                 <img src={scooter.image} alt={scooter.brand} className="w-full h-32 object-cover rounded-lg" />
//                 <div className="mt-2">
//                   <h3 className="bold-16">{scooter.brand}</h3>
//                   <p>Price: Rs:{scooter.price}</p>
//                   <p>Speed: {scooter.speed} km/h</p>
//                 </div>
//                 {hoveredIndex === index && (
//                   <div className="absolute inset-0 bg-black bg-opacity-10 rounded-lg"></div>
//                 )}
//               </div>
//             ))}
//           </div>
//           <div className="flex justify-end mt-4">
//             <button
//               onClick={handleClose}
//               className="px-4 py-2 mr-4 bg-black text-white rounded"
//             >
//               Close
//             </button>
//             <button
//               onClick={handleRedirectToPayment}
//               className={`px-4 py-2 bg-blue-500 text-white rounded ${selectedScooter === null ? 'opacity-50 cursor-not-allowed' : ''}`}
//               disabled={selectedScooter === null}
//             >
//               Proceed to Payment
//             </button>
//           </div>
//         </div>
//       </div>
//       {showLoginSignup && (
//         <LoginSignupPopup
//           onClose={() => setShowLoginSignup(false)}
//           onLoginSignupSuccess={handleLoginSignupSuccess}
//         />
//       )}
//     </>
//   );
// };

// export default ScooterPopup;
import React, { useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import LoginSignupPopup from './LoginSignupPopup';
=======
import React, { useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import LoginSignupPopup from "./LoginSignupPopup";
>>>>>>> 6bca45b48fee107807c6ef9eba33b06c027e1659

const ScooterPopup = ({ scooters, onClose }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedScooter, setSelectedScooter] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showLoginSignup, setShowLoginSignup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Dummy state for login status
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleClose = () => {
    onClose();
  };

  const handleSelectScooter = (index) => {
    setSelectedScooter(index);
    setSelectedPackage(null); // Reset package selection when a new scooter is selected
  };

  const handleSelectPackage = (pkg, event) => {
    event.stopPropagation();
    setSelectedPackage(pkg);
  };

  const handleRedirectToPayment = () => {
    if (selectedScooter !== null && scooters[selectedScooter] && selectedPackage !== null) {
      if (!isLoggedIn) {
        setShowLoginSignup(true);
      } else {
<<<<<<< HEAD
        const scooterQuery = encodeURIComponent(JSON.stringify({ ...scooters[selectedScooter], selectedPackage }));
=======
        const scooterQuery = encodeURIComponent(
          JSON.stringify(scooters[selectedScooter])
        );
>>>>>>> 6bca45b48fee107807c6ef9eba33b06c027e1659
        router.push(`/Payment?scooter=${scooterQuery}`);
      }
    }
  };

  const handleLoginSignupSuccess = () => {
    setIsLoggedIn(true);
    setShowLoginSignup(false);
<<<<<<< HEAD
    const scooterQuery = encodeURIComponent(JSON.stringify({ ...scooters[selectedScooter], selectedPackage }));
=======
    const scooterQuery = encodeURIComponent(
      JSON.stringify(scooters[selectedScooter])
    );
>>>>>>> 6bca45b48fee107807c6ef9eba33b06c027e1659
    router.push(`/Payment?scooter=${scooterQuery}`);
  };

  return (
    <>
<<<<<<< HEAD
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-8 rounded-lg max-w-5xl w-full max-h-[80vh] shadow-lg overflow-hidden">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Available Scooters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-y-auto max-h-[60vh] px-4">
            {scooters.slice(0, 8).map((scooter, index) => (
=======
      <div className="max-w-7xl mx-auto fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-8 rounded-lg w-3.5/4 h-3.5/4">
          <h2 className="bold-20">Available Scooters</h2>
          <div className="grid grid-cols-4 gap-4 mt-4">
            {scooters.map((scooter, index) => (
>>>>>>> 6bca45b48fee107807c6ef9eba33b06c027e1659
              <div
                key={index}
                onClick={() => handleSelectScooter(index)}
<<<<<<< HEAD
                className={`p-4 rounded-lg relative cursor-pointer ${
                  selectedScooter === index ? 'border-4 border-blue-500' : 'border-2 border-gray-300'
                } bg-white`}
              >
                <img src={scooter.image} alt={scooter.brand} className="w-full h-32 object-cover rounded-lg" />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-700">{scooter.brand}</h3>
                  <p className="text-gray-600">Price: Rs.{scooter.price}</p>
                  <p className="text-gray-600">Speed: {scooter.speed} km/h</p>
=======
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
>>>>>>> 6bca45b48fee107807c6ef9eba33b06c027e1659
                </div>
                {selectedScooter === index && (
                  <div className="flex flex-row  justify-center align-middle mt-4 space-x-2">
                    <button
                      className={`px-2 py-1 rounded-lg text-center ${
                        selectedPackage === 'Package1' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                      }`}
                      onClick={(e) => handleSelectPackage('Package1', e)}
                    >
                      Package1: <br /> Rs20/2km
                    </button>
                    <button
                      className={`px-2 py-1 rounded-lg text-center ${
                        selectedPackage === 'Package2' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                      }`}
                      onClick={(e) => handleSelectPackage('Package2', e)}
                    >
                      Package2: <br /> Rs35/4km
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-start mt-8 px-4">
            <button
              onClick={handleClose}
              className="px-6 py-3 mr-4 bg-gray-800 text-white rounded-lg shadow-md"
            >
              Close
            </button>
            <button
              onClick={handleRedirectToPayment}
<<<<<<< HEAD
              className={`px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md ${
                selectedScooter === null || selectedPackage === null ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={selectedScooter === null || selectedPackage === null}
=======
              className={`px-4 py-2 bg-blue-500 text-white rounded ${
                selectedScooter === null ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={selectedScooter === null}
>>>>>>> 6bca45b48fee107807c6ef9eba33b06c027e1659
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
