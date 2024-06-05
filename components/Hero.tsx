
// import Image from "next/image";
// import Button from "./Button";

// const Hero = () => {
//   return (
//     <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 mt-0 lg:py-20 xl:flex-row">
//       <div className="hero-map" />

//       <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
//         {/* <Image
//           src="/img1.jpg"
//           alt="camp"
//           width={50}
//           height={50}
//           className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
//         /> */}
//         <h1 className="bold-52 lg:bold-87.8 ">Get Set Gyrate!</h1>
//         <p className="regular-16 mt-0 text-black-30xl:max-w-[520px]">
//           {/* Discover the joy of safe and carefree rides on e-scooters with Gyrate!
//           Our company is committed to promoting both safety and happiness. With
//           cutting-edge features and meticulous design, our e-scooters offer a
//           smooth and secure journey through city streets or scenic paths.
//           Experience the thrill of urban mobility without compromising on
//           safety. Join us at Gyrate and embark on a journey where every ride is
//           a delightful adventure. */}
//         </p>

//         {/* <div className="my-11 flex flex-wrap gap-5">
//           <div className="flex items-center gap-2">
//             {Array(5)
//               .fill(1)
//               .map((_, index) => (
//                 <Image
//                   src="/star.svg"
//                   key={index}
//                   alt="star"
//                   width={24}
//                   height={24}
//                 />
//               ))}
//           </div>

//           <p className="bold-16 lg:bold-20 text-blue-70">
//             198k
//             <span className="regular-16 lg:regular-20 ml-1">
//               Excellent Reviews
//             </span>
//           </p>
//         </div> */}

//         <div className="relative flex flex-1 items-start mt-8">
//           <div className="relative z-20 flex w-[368px] flex-col gap-8 rounded-3xl bg-black px-8 py-8">
//             <div className="flex flex-col">
//               <div className="flexBetween">
//                 <p className="regular-16 text-white">Enter Details</p>
//                 {/* <Image src="/close.svg" alt="close" width={24} height={24} /> */}
//               </div>
//               <form>
//                 <input
//                   type="text"
//                   className="text-10l border-zinc-800 border-2 ml-8 m-5 px-4 py-2"
//                   placeholder="Enter Date"
//                 />
//                 <input
//                   type="text"
//                   className="text-10l border-zinc-800 border-2 ml-8 mt-1 m-5 px-4 py-2"
//                   placeholder="Enter Start Time"
//                 />
//                 <input
//                   type="text"
//                   className="text-10l border-zinc-800 border-2 ml-8 mt-1 m-5 px-4 py-2"
//                   placeholder="Enter End Time"
//                 />
//                  <input
//                   type="text"
//                   className="text-10l border-zinc-800 border-2 ml-8 mt-1 m-5 px-4 py-2"
//                   placeholder="Location"
//                 />
//                  <input
//                   type="text"
//                   className="text-10l border-zinc-800 border-2 ml-8 mt-1 m-5 px-4 py-2"
//                   placeholder="Add stops"
//                 />
//               </form>
//               <button className="border-black border-2 bg-white text-black text-5l font-bold rounded">
//                 Proceed
//               </button>
//               {/* <p className="bold-20 text-white">Aguas Calientes</p> */}
//             </div>

//             {/* <div className="flexBetween">
//               <div className="flex flex-col">
//                 <p className="regular-16 block text-gray-20">Distance</p>
//                 <p className="bold-20 text-white">173.28 mi</p>
//               </div>
//               <div className="flex flex-col">
//                 <p className="regular-16 block text-gray-20">Elevation</p>
//                 <p className="bold-20 text-white">2.040 km</p>
//               </div>
//             </div> */}
//           </div>
//         </div>
          
//         <div className="flex w-full gap-3 text-9xl mt-6">
//           {/* <Button type="button" title="How we work?" variant="btn_blue" /> */}
//           <Button
//             type="button"
//             title="How we work?"
//             icon="/play.svg"
//             variant="btn_white_text"
//             className="text-9xl"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;





// "use client";

// import React, { useState } from 'react';
// import Image from "next/image";
// import Button from "./Button";

// const Hero = () => {
//   const [selectedDate, setSelectedDate] = useState('');
//   const [startTime, setStartTime] = useState('');

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
//   return (
//     <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 mt-0 lg:py-20 xl:flex-row">
//       <div className="hero-map" />

//       <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
//         <h1 className="bold-52 lg:bold-87.8 ">Get Set Gyrate!</h1>
      
//         <div className="relative flex flex-1 items-start mt-8">
//           <div className="relative z-20 flex w-[368px] flex-col gap-8 rounded-3xl bg-black px-8 py-8">
//             <div className="flex flex-col">
//               <div className="flexBetween">
//                 <p className="regular-16 text-white">Enter Details</p>
//               </div>
//               <form>
                
//                 <select
//                   value={selectedDate}
//                   onChange={handleDateChange}
//                   className="text-10l  border-zinc-800 w-[250px] border-2 ml-8 m-5 px-4 py-2 "
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
//                   className="text-10l border-zinc-800 w-[250px] border-2 ml-8 mt-1 m-5 px-4 py-2 "
//                   placeholder="Enter Start Time"
//                   min="08:00"
//                   max="20:30"
//                 />
//                <select
//                   value={selectedDate}
//                   onChange={handleDateChange}
//                   className="text-10l  border-zinc-800 w-[250px] border-2 ml-8 m-5 mt-1 px-4 py-2 "
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
//                 <input
//                   type="text"
//                   className="text-10l border-zinc-800 border-2 ml-8 mt-1 m-5 px-4 py-2"
//                   placeholder="Destination"
//                 />
        
//               </form>
//               <button className="border-black border-5 w-[250px]  bg-white text-black text-51 font-bold rounded ml-8 mt-6 m-1 px-4 py-2">
//                 Proceed
//               </button>
//             </div>
//           </div>
//         </div>
          
//         <div className="flex w-full gap-3 text-9xl mt-6">
//           <Button
//             type="button"
//             title="How we work?"
//             icon="/play.svg"
//             variant="btn_white_text"
//             className="text-9xl"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


"use client";

import React, { useState } from 'react';
import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [destination, setDestination] = useState('');
  const [stops, setStops] = useState([]);

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

  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 mt-0 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-87.8 ">Get Set Gyrate!</h1>

        <div className="relative flex flex-1 items-start mt-8">
          <div className="relative z-20 flex w-[368px] flex-col gap-8 rounded-3xl bg-black px-8 py-8">
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
                    className="ml-2 text-white plus-sign text-2xl"
                  >
                    ➕
                  </button>
                </div>

                {stops.length > 0 && stops.map((stop, index) => (
                  <div key={index} className="flex items-center">
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
                      className="ml-2 text-white text-xl"
                    >
                      ❌
                    </button>
                  </div>
                ))}
              </form>
              <button className="border-black border-5 w-[250px] bg-white text-black text-51 font-bold rounded ml-8 mt-6 m-1 px-4 py-2">
                Proceed
              </button>
            </div>
          </div>
        </div>

        <div className="flex w-full gap-3 text-9xl mt-6">
          <Button
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="btn_white_text"
            className="text-9xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
