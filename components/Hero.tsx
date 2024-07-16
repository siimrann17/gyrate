// "use client";

// import React, { useState } from "react";
// import PopUp from "./PopUp";
// import ScooterPopup from "./ScooterPopup";

// const Hero = () => {
//   const [selectedDate, setSelectedDate] = useState("");
//   const [startTime, setStartTime] = useState("");
//   const [destination, setDestination] = useState("");
//   const [stops, setStops] = useState([]);
//   const [showMapPopup, setShowMapPopup] = useState(false);
//   const [showScooterPopup, setShowScooterPopup] = useState(false);
//   const [selectedDuration, setSelectedDuration] = useState("");
//   const [dropOffTime, setDropOffTime] = useState("");

//   const scooters = [
//     { brand: "Scooter A", price: 100, speed: 20, image: "/scooters/scooter5.jpeg" },
//     { brand: "Scooter B", price: 120, speed: 22, image: "/scooters/scooter2.jpeg" },
//     { brand: "Scooter C", price: 150, speed: 25, image: "/scooters/scooter3.jpeg" },
//     { brand: "Scooter D", price: 100, speed: 20, image: "/scooters/scooter6.jpeg" },
//   ];

//   const handleDateChange = (event) => {
//     setSelectedDate(event.target.value);
//   };
  
//   const handleTimeChange = (event) => {
//     const value = event.target.value;
//     const [hours, minutes] = value.split(":").map(Number);

//     if (
//       (hours === 8 && minutes >= 0 && minutes <= 30) || // 8:00 AM to 8:30 AM
//       (hours >= 9 && hours < 20) || // 9:00 AM to 7:59 PM
//       (hours === 20 && minutes === 0) // 8:00 PM
//     ) {
//       setStartTime(value);
//       setDropOffTime("");
//     } else {
//       alert("Please select a time between 8:00 AM and 8:30 PM");
//     }
//   };

//   const handleAddStop = () => {
//     setStops([...stops, ""]);
//   };

//   const handleStopChange = (index, event) => {
//     const newStops = stops.map((stop, i) =>
//       i === index ? event.target.value : stop
//     );
//     setStops(newStops);
//   };

//   const handleDeleteStop = (index) => {
//     const newStops = stops.filter((_, i) => i !== index);
//     setStops(newStops);
//   };

//   const handleDurationChange = (event) => {
//     setSelectedDuration(event.target.value);
//     if (startTime && event.target.value) {
//       const [startHours, startMinutes] = startTime.split(":").map(Number);
//       const durationHours = parseInt(event.target.value);

//       const totalMinutes = startHours * 60 + startMinutes + durationHours * 60;
//       const hours = Math.floor(totalMinutes / 60);
//       const minutes = totalMinutes % 60;

//       const formattedHours = hours.toString().padStart(2, "0");
//       const formattedMinutes = minutes.toString().padStart(2, "0");

//       setDropOffTime(`${formattedHours}:${formattedMinutes}`);
//     }
//   };

//   const handleProceed = () => {
//     if (!selectedDate || !startTime || !selectedDuration || !destination) {
//       alert("Please fill in all details to proceed.");
//       return;
//     }
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
//     <section className="max-container padding-container flex flex-col gap-10 py-10 pb-32 md:gap-28 mt-0 lg:py-20 xl:flex-row">
//       <div className="hero-map" />

//       <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
//         <h1 className="bold-52 lg:bold-87.8">Get Set Gyrate!</h1>

//         <div className="relative flex flex-1 items-start mt-2">
//           <div className="relative z-20 flex w-[380px] flex-col gap-8 rounded-xl bg-[rgb(202,244,255)] px-8 py-8">
//             <div className="flex flex-col">
//               <form>
//                 <select
//                   value={selectedDate}
//                   onChange={handleDateChange}
//                   className="text-10l text-gray-20 border-zinc-800 w-[250px] border-2 ml-8 m-5 px-4 py-2 rounded-md"
//                 >
//                   <option value="" disabled>
//                     Select Day
//                   </option>
//                   <option value="today">Today</option>
//                   <option value="tomorrow">Tomorrow</option>
//                   <option value="dayAfterTomorrow">Day after Tomorrow</option>
//                 </select>

//                 <input
//                   type="time"
//                   value={startTime}
//                   onChange={handleTimeChange}
//                   className="text-10l text-gray-30 border-zinc-800 w-[250px] border-2 ml-8 mt-1 m-5 px-4 py-2 rounded-md"
//                   placeholder="Enter Start Time"
//                   min="08:00"
//                   max="20:30"
//                 />

//                 <select
//                   value={selectedDuration}
//                   onChange={handleDurationChange}
//                   className="text-10l text-gray-20 border-zinc-800 w-[250px] border-2 ml-8 m-5 mt-1 px-4 py-2 rounded-md"
//                 >
//                   <option value="" disabled>
//                     Duration
//                   </option>
//                   <option value="1">One Hour</option>
//                   <option value="2">Two Hour</option>
//                   <option value="3">Three Hour</option>
//                   <option value="4">Four Hour</option>
//                   <option value="5">Five Hour</option>
//                   <option value="6">Six Hour</option>
//                   <option value="7">Seven Hour</option>
//                 </select>

//                 <div className="flex items-center">
//                   <input
//                     type="text"
//                     value={destination}
//                     onChange={(e) => setDestination(e.target.value)}
//                     className="text-10l text-gray-30 border-zinc-800 w-[250px] border-2 ml-8 mt-1 mr-2 px-4 py-2 rounded-md"
//                     placeholder="Destination"
//                   />
//                   <div className="flex items-center">
//                     <button
//                       type="button"
//                       onClick={handleAddStop}
//                       className="text-black text-2xl flex items-center justify-center"
//                     >
//                       <img src="/plus.png" alt="Add Stop" className="w-6 h-6"/>
//                     </button>
//                   </div>
//                 </div>

//                 {stops.map((stop, index) => (
//                   <div key={index} className="flex items-center mt-2">
//                     <input
//                       type="text"
//                       value={stop}
//                       onChange={(e) => handleStopChange(index, e)}
//                       className="text-10l border-zinc-800 w-[250px] border-2 ml-8 mt-1 mr-2 px-4 py-2 rounded-md"
//                       placeholder={`Stop ${index + 1}`}
//                       style={{ width: "250px" }} 
//                     />
//                     <div className="flex items-center">
//                       <button
//                         type="button"
//                         onClick={() => handleDeleteStop(index)}
//                         className="text-black text-2xl flex items-center justify-center"
//                       >
//                         <img src="/delete-button.png" alt="Delete Stop" className="w-6 h-6"/>
//                       </button>
//                     </div>
//                   </div>
//                 ))}

//                 <button
//                   type="button"
//                   onClick={handleProceed}
//                   className="bg-blue-500 text-white text-51 font-bold rounded ml-8 mt-6 m-1 px-4 py-2 rounded-md"
//                 >
//                   Proceed
//                 </button>
//               </form>
//             </div>
//           </div>
//           <div className="relative z-20 w-[500px] h-full flex items-center justify-center -mt-16 ml-56">
//             <img
//               src="1.png"
//               alt="Scooter"
//               className="rounded-xl border-4 w-full h-auto"
//             />
//           </div>
//         </div>
//       </div>

//       {showMapPopup && (
//         <PopUp
//           distance="10"
//           duration={selectedDuration}
//           pickupTime={startTime}
//           dropOffTime={dropOffTime}
//           onClose={handleCloseMapPopup}
//           onNext={handleNextPopup}
//         />
//       )}

//       {showScooterPopup && (
//         <ScooterPopup scooters={scooters} onClose={handleCloseScooterPopup} />
//       )}
//     </section>
//   );
// };

// export default Hero;


"use client";

import React, { useState } from "react";
import PopUp from "./PopUp";
import ScooterPopup from "./ScooterPopup";

const Hero = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [destination, setDestination] = useState("");
  const [stops, setStops] = useState([]);
  const [showMapPopup, setShowMapPopup] = useState(false);
  const [showScooterPopup, setShowScooterPopup] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState("");
  const [dropOffTime, setDropOffTime] = useState("");

  const scooters = [
    { brand: "Ather 450x", price: 100, speed: 20, image: "/scooters/Ather 450x.jpg" },
    { brand: "Bounce infinite E1", price: 120, speed: 22, image: "scooters/Bounce infinite E1.jpg" },
    { brand: "Ola s1x", price: 150, speed: 25, image: "/scooters/Ola s1x.jpg" },
    { brand: "Tvs iqube", price: 100, speed: 20, image: "/scooters/Tvs iqube.jpg" },
  ];

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    const value = event.target.value;
    const [hours, minutes] = value.split(":").map(Number);

    if (
      (hours === 8 && minutes >= 0 && minutes <= 30) || // 8:00 AM to 8:30 AM
      (hours >= 9 && hours < 20) || // 9:00 AM to 7:59 PM
      (hours === 20 && minutes === 0) // 8:00 PM
    ) {
      setStartTime(value);
      setDropOffTime("");
    } else {
      alert("Please select a time between 8:00 AM and 8:30 PM");
    }
  };

  const handleAddStop = () => {
    setStops([...stops, ""]);
  };

  const handleStopChange = (index, event) => {
    const newStops = stops.map((stop, i) =>
      i === index ? event.target.value : stop
    );
    setStops(newStops);
  };

  const handleDeleteStop = (index) => {
    const newStops = stops.filter((_, i) => i !== index);
    setStops(newStops);
  };

  const handleDurationChange = (event) => {
    setSelectedDuration(event.target.value);
    if (startTime && event.target.value) {
      const [startHours, startMinutes] = startTime.split(":").map(Number);
      const durationHours = parseInt(event.target.value);

      const totalMinutes = startHours * 60 + startMinutes + durationHours * 60;
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;

      const formattedHours = hours.toString().padStart(2, "0");
      const formattedMinutes = minutes.toString().padStart(2, "0");

      setDropOffTime(`${formattedHours}:${formattedMinutes}`);
    }
  };

  const handleProceed = () => {
    if (!selectedDate || !startTime || !selectedDuration || !destination) {
      alert("Please fill in all details to proceed.");
      return;
    }
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
    <section className="max-container padding-container flex flex-col gap-10 py-10 pb-32 md:gap-28 mt-0 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-87.8">Get Set Gyrate!</h1>

        <div className="relative flex flex-1 items-start mt-2">
          {/* <div className="relative z-20 flex w-[380px] flex-col gap-8 rounded-xl bg-[rgb(202,244,255)] px-8 py-8"> */}
            <div className="flex flex-col">
              <form>
                <select
                  value={selectedDate}
                  onChange={handleDateChange}
                  className="text-10l text-gray-20 border-zinc-800 w-[300px] border-2 ml-8 m-5 px-4 py-2 rounded-md"
                >
                  <option value="" disabled>
                    Select Day
                  </option>
                  <option value="today">Today</option>
                  <option value="tomorrow">Tomorrow</option>
                  <option value="dayAfterTomorrow">Day after Tomorrow</option>
                </select>

                <input
                  type="time"
                  value={startTime}
                  onChange={handleTimeChange}
                  className="text-10l text-gray-30 border-zinc-800 w-[300px] border-2 ml-8 mt-1 m-5 px-4 py-2 rounded-md"
                  placeholder="Enter Start Time"
                  min="08:00"
                  max="20:30"
                  onClick={(e) => e.target.showPicker()}
                />

                <select
                  value={selectedDuration}
                  onChange={handleDurationChange}
                  className="text-10l text-gray-20 border-zinc-800 w-[300px] border-2 ml-8 m-5 mt-1 px-4 py-2 rounded-md"
                >
                  <option value="" disabled>
                    Duration
                  </option>
                  <option value="1">One Hour</option>
                  <option value="2">Two Hour</option>
                  <option value="3">Three Hour</option>
                  <option value="4">Four Hour</option>
                  <option value="5">Five Hour</option>
                  <option value="6">Six Hour</option>
                  <option value="7">Seven Hour</option>
                </select>

                <div className="flex items-center">
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="text-10l text-gray-30 border-zinc-800 w-[300px] border-2 ml-8 mt-1 mr-2 px-4 py-2 rounded-md"
                    placeholder="Destination"
                  />
                  <div className="flex items-center">
                    <button
                      type="button"
                      onClick={handleAddStop}
                      className="text-black text-2xl flex items-center justify-center"
                    >
                      <img src="/plus.png" alt="Add Stop" className="w-6 h-6 " />
                    </button>
                  </div>
                </div>

                {stops.map((stop, index) => (
                  <div key={index} className="flex items-center mt-2">
                    <input
                      type="text"
                      value={stop}
                      onChange={(e) => handleStopChange(index, e)}
                      className="text-10l border-zinc-800 w-[300px] border-2 ml-8 mt-1 mr-2 px-4 py-2 rounded-md"
                      placeholder={`Stop ${index + 1}`}
                      style={{ width: "300px" }}
                    />
                    <div className="flex items-center">
                      <button
                        type="button"
                        onClick={() => handleDeleteStop(index)}
                        className="text-black text-2xl flex items-center justify-center"
                      >
                        <img src="/delete-button.png" alt="Delete Stop" className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={handleProceed}
                  className="bg-blue-500 text-white text-51 font-bold rounded ml-8 mt-6 m-1 px-4 py-2 rounded-md"
                >
                  Proceed
                </button>
              </form>
            </div>
          {/* </div> */}
          <div className="relative z-20 w-[1100px] h-full flex items-center justify-center -mt-16 ml-56 mr-20">
            <img
              src="1.png"
              alt="Scooter"
              className="rounded-xl border-4 w-full h-auto"
            />
          </div>
        </div>
      </div>

      {showMapPopup && (
        <PopUp
        distance="10"
        duration={selectedDuration}
        pickupTime={startTime}
        dropOffTime={dropOffTime}
        onClose={handleCloseMapPopup}
        onNext={handleNextPopup}
      />
    )}

    {showScooterPopup && (
      <ScooterPopup scooters={scooters} onClose={handleCloseScooterPopup} />
    )}
  </section>
);
};

export default Hero;

