
 "use client";

import React, { useState } from 'react';
import Image from "next/image";
import Button from "./Button";
import PopUp from "./PopUp";
import ScooterPopup from "./ScooterPopup";


const Hero = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [destination, setDestination] = useState('');
  const [stops, setStops] = useState([]);
  const [showMapPopup, setShowMapPopup] = useState(false);
  const [showScooterPopup, setShowScooterPopup] = useState(false);

  const scooters = [
    { brand: 'Scooter A', price: 100, speed: 20, image: '/scooters/scooter1.jpeg' },
    { brand: 'Scooter B', price: 120, speed: 22, image: '/scooters/scooter2.jpeg' },
    { brand: 'Scooter C', price: 150, speed: 25, image: '/scooters/scooter3.jpeg' },
    { brand: 'Scooter D', price: 100, speed: 20, image: '/scooters/scooter4.jpeg' },
    { brand: 'Scooter E', price: 120, speed: 22, image: '/scooters/scooter5.jpeg' },
    { brand: 'Scooter F', price: 150, speed: 25, image: '/scooters/scooter6.jpeg' },
    { brand: 'Scooter G', price: 120, speed: 22, image: '/scooters/scooter2.jpeg' },
    { brand: 'Scooter H', price: 150, speed: 25, image: '/scooters/scooter4.jpeg' },
    
  ];

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    const value = event.target.value;
    const [hours, minutes] = value.split(':').map(Number);

    if (
      (hours === 8 && minutes >= 0 && minutes <= 30) || // 8:00 AM to 8:30 AM
      (hours >= 9 && hours < 20) || // 9:00 AM to 7:59 PM
      (hours === 20 && minutes === 0) // 8:00 PM
    ) {
      setStartTime(value);
    } else {
      alert('Please select a time between 8:00 AM and 8:30 PM');
    }
  };

  const handleAddStop = () => {
    setStops([...stops, '']);
  };

  const handleStopChange = (index, event) => {
    const newStops = stops.map((stop, i) => (i === index ? event.target.value : stop));
    setStops(newStops);
  };

  const handleDeleteStop = (index) => {
    const newStops = stops.filter((_, i) => i !== index);
    setStops(newStops);
  };

  const handleProceed = () => {
    setShowMapPopup(true);
  };

  const handleCloseMapPopup = () => {
    setShowMapPopup(false);
  };

  const handleNextPopup = () => {
    setShowMapPopup(false);
    setShowScooterPopup(true);
  };

  const handleCloseScooterPopup = () => {
    setShowScooterPopup(false);
  };

  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 mt-0 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-87.8">Get Set Gyrate!</h1>

        <div className="relative flex flex-1 items-start mt-8">
          <div className="relative z-20 flex w-[380px] flex-col gap-8 rounded-3xl bg-black px-8 py-8">
            <div className="flex flex-col">
              <div className="flexBetween">
                <p className="regular-16 text-white">Enter Details</p>
              </div>
              <form>
                <select
                  value={selectedDate}
                  onChange={handleDateChange}
                  className="text-10l border-zinc-800 w-[250px] border-2 ml-8 m-5 px-4 py-2"
                >
                  <option value="" disabled>Select Day</option>
                  <option value="today">Today</option>
                  <option value="tomorrow">Tomorrow</option>
                  <option value="dayAfterTomorrow">Day after Tomorrow</option>
                </select>

                <input
                  type="time"
                  value={startTime}
                  onChange={handleTimeChange}
                  className="text-10l border-zinc-800 w-[250px] border-2 ml-8 mt-1 m-5 px-4 py-2"
                  placeholder="Enter Start Time"
                  min="08:00"
                  max="20:30"
                />

                <select
                  value={selectedDate}
                  onChange={handleDateChange}
                  className="text-10l border-zinc-800 w-[250px] border-2 ml-8 m-5 mt-1 px-4 py-2"
                >
                  <option value="" disabled>Number of hours</option>
                  <option value="One">One</option>
                  <option value="Two">Two</option>
                  <option value="Three">Three</option>
                  <option value="Four">Four</option>
                  <option value="Five">Five</option>
                  <option value="Six">Six</option>
                  <option value="Seven">Seven</option>
                </select>

                <div className="flex items-center">
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="text-10l border-zinc-800 w-[250px] border-2 ml-8 mt-1 m-5 px-4 py-2"
                    placeholder="Destination"
                  />
                  <button
                    type="button"
                    onClick={handleAddStop}
                    className=" text-white plus-sign text-6xl mb-7"
                  >
                    +
                  </button>
                </div>

                {stops.map((stop, index) => (
                  <div key={index} className="flex items-center mt-2">
                    <input
                      type="text"
                      value={stop}
                      onChange={(e) => handleStopChange(index, e)}
                      className="text-10l border-zinc-800 w-[250px] border-2 ml-8 mt-1 m-5 px-4 py-2"
                      placeholder={`Stop ${index + 1}`}
                    />
                    <button
                      type="button"
                      onClick={() => handleDeleteStop(index)}
                      className=" text-white plus-sign text-2xl mb-7"
                    >
                      ❌
                    </button>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={handleProceed}
                  className="border-black border-5 w-[250px] bg-white text-black text-51 font-bold rounded ml-8 mt-6 m-1 px-4 py-2"
                >
                  Proceed
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {showMapPopup && (
        <PopUp
          distance="10"
          duration="2"
          onClose={handleCloseMapPopup}
          onNext={handleNextPopup}
        />
      )}

      {showScooterPopup && (
        <ScooterPopup
          scooters={scooters}
          onClose={handleCloseScooterPopup}
        />
      )}
    </section>
  );
};

export default Hero;



// import React, { useState } from 'react';
// import PopUp from './PopUp';
// import ScooterPopup from './ScooterPopup';

// const Hero = () => {
//   const [selectedDate, setSelectedDate] = useState('');
//   const [startTime, setStartTime] = useState('');
//   const [destination, setDestination] = useState('');
//   const [stops, setStops] = useState([]);
//   const [showMapPopup, setShowMapPopup] = useState(false);
//   const [showScooterPopup, setShowScooterPopup] = useState(false);

//   const scooters = [
//     { brand: 'Scooter A', price: 100, speed: 20, image: '/scooters/scooter1.jpeg' },
//     { brand: 'Scooter B', price: 120, speed: 22, image: '/scooters/scooter2.jpeg' },
//     { brand: 'Scooter C', price: 150, speed: 25, image: '/scooters/scooter3.jpeg' },
//     { brand: 'Scooter D', price: 100, speed: 20, image: '/scooters/scooter4.jpeg' },
//     { brand: 'Scooter E', price: 120, speed: 22, image: '/scooters/scooter5.jpeg' },
//     { brand: 'Scooter F', price: 150, speed: 25, image: '/scooters/scooter6.jpeg' },
//     { brand: 'Scooter G', price: 120, speed: 22, image: '/scooters/scooter2.jpeg' },
//     { brand: 'Scooter H', price: 150, speed: 25, image: '/scooters/scooter4.jpeg' },
//   ];

//   const handleDateChange = (event) => {
//     setSelectedDate(event.target.value);
//   };

//   const handleTimeChange = (event) => {
//     const value = event.target.value;
//     const [hours, minutes] = value.split(':').map(Number);

//     if (
//       (hours === 8 && minutes >= 0 && minutes <= 30) || // 8:00 AM to 8:30 AM
//       (hours >= 9 && hours < 20) || // 9:00 AM to 7:59 PM
//       (hours === 20 && minutes === 0) // 8:00 PM
//     ) {
//       setStartTime(value);
//     } else {
//       alert('Please select a time between 8:00 AM and 8:30 PM');
//     }
//   };

//   const handleAddStop = () => {
//     setStops([...stops, '']);
//   };

//   const handleStopChange = (index, event) => {
//     const newStops = stops.map((stop, i) => (i === index ? event.target.value : stop));
//     setStops(newStops);
//   };

//   const handleDeleteStop = (index) => {
//     const newStops = stops.filter((_, i) => i !== index);
//     setStops(newStops);
//   };

//   const handleProceed = () => {
//     setShowMapPopup(true);
//   };

//   const handleCloseMapPopup = () => {
//     setShowMapPopup(false);
//   };

//   const handleNextPopup = () => {
//     setShowMapPopup(false);
//     setShowScooterPopup(true);
//   };

//   const handleCloseScooterPopup = () => {
//     setShowScooterPopup(false);
//   };

//   return (
//     <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 mt-0 lg:py-20 xl:flex-row">
//       <div className="hero-map" />

//       <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
//         <h1 className="bold-52 lg:bold-87.8">Get Set Gyrate!</h1>

//         <div className="relative flex flex-1 items-start mt-8">
//           <div className="relative z-20 flex w-[380px] flex-col gap-8 rounded-3xl bg-black px-8 py-8">
//             <div className="flex flex-col">
//               <div className="flex items-center justify-between mb-3">
//                 <p className="regular-16 text-white">Enter Details</p>
//               </div>
//               <form>
//                 <select
//                   value={selectedDate}
//                   onChange={handleDateChange}
//                   className="text-10l border-zinc-800 w-[250px] border-2 ml-8 m-5 px-4 py-2"
//                 >
//                   <option value="" disabled>Select Day</option>
//                   <option value="today">Today</option>
//                   <option value="tomorrow">Tomorrow</option>
//                   <option value="dayAfterTomorrow">Day after Tomorrow</option>
//                 </select>

//                 <input
//                   type="time"
//                   value={startTime}
//                   onChange={handleTimeChange}
//                   className="text-10l border-zinc-800 w-[250px] border-2 ml-8 mt-1 m-5 px-4 py-2"
//                   placeholder="Enter Start Time"
//                   min="08:00"
//                   max="20:30"
//                 />

//                 <select
//                   value={selectedDate}
//                   onChange={handleDateChange}
//                   className="text-10l border-zinc-800 w-[250px] border-2 ml-8 m-5 mt-1 px-4 py-2"
//                 >
//                   <option value="" disabled>Number of hours</option>
//                   <option value="One">One</option>
//                   <option value="Two">Two</option>
//                   <option value="Three">Three</option>
//                   <option value="Four">Four</option>
//                   <option value="Five">Five</option>
//                   <option value="Six">Six</option>
//                   <option value="Seven">Seven</option>
//                 </select>

//                 <div className="flex items-center">
//                   <input
//                     type="text"
//                     value={destination}
//                     onChange={(e) => setDestination(e.target.value)}
//                     className="text-10l border-zinc-800 w-[250px] border-2 ml-8 mt-1 m-5 px-4 py-2"
//                     placeholder="Destination"
//                   />
//                   <div
//                     className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black cursor-pointer ml-2"
//                     onClick={handleAddStop}
//                   >
//                     +
//                   </div>
//                 </div>

//                 {stops.map((stop, index) => (
//                   <div key={index} className="flex items-center mt-2">
//                     <input
//                       type="text"
//                       value={stop}
//                       onChange={(e) => handleStopChange(index, e)}
//                       className="text-10l border-zinc-800 w-[250px] border-2 ml-8 mt-1 m-5 px-4 py-2"
//                       placeholder={`Stop ${index + 1}`}
//                     />
//                     <div
//                       className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black cursor-pointer ml-2"
//                       onClick={() => handleDeleteStop(index)}
//                     >
//                       ❌
//                     </div>
//                   </div>
//                 ))}

//                 <button
//                   type="button"
//                   onClick={handleProceed}
//                   className="border-black border-5 w-[250px] bg-white text-black text-51 font-bold rounded ml-8 mt-6 m-1 px-4 py-2"
//                 >
//                   Proceed
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       {showMapPopup && (
//         <PopUp
//           distance="10"
//           duration="2"
//           onClose={handleCloseMapPopup}
//           onNext={handleNextPopup}
//         />
//       )}

//       {showScooterPopup && (
//         <ScooterPopup
//           scooters={scooters}
//           onClose={handleCloseScooterPopup}
//         />
//       )}
//     </section>
//   );
// };

// export default Hero;

