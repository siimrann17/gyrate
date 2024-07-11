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
import { useState, useEffect } from 'react'
import { mmi } from "mapmyindia-map-cordova-ionic-beta";

const MapPopup = ({ distance, duration, pickupTime, dropOffTime, onClose, onNext ,points}) => {

  const [point, setpoint]=useState<any>([])

  const handleClose = () => {
    onClose();
  };

  const handleNext = () => {
    onNext();
  };
  var maps = new mmi()
  useEffect(() => {
    console.log(points)
    try{
      const mapss=  maps.loadMaps("maps", {
          center: [ 30.34368, 76.37875 ],
          zoom: 10,
          key: process.env.token,
          location: { control: true, initial: true, bounds: true }, // Initial zoom level
        });

      var pts=
      [ 
        [ 30.35243, 76.37487 ],
    [ 30.3528, 76.37496 ],
    [ 30.35275, 76.37453 ],
    [ 30.35249, 76.37391 ],
    [ 30.35239, 76.37401 ],
    [ 30.35173, 76.37408 ],
    [ 30.35091, 76.37429 ],
    [ 30.34561, 76.37754 ],
    [ 30.34368, 76.37875 ],
    [ 30.34359, 76.37887 ]]
        console.log("hello polylinr");
        console.log(points[0]);

        // var polyline = map.prototype.L.polyline(pts, {weight:10,color:"red"})
        // maps.L.fitBounds(polyline.getBounds());
      }
    catch(e){
      console.log(e)
    }
    try{

      var polyline = maps.polyline(points, {
        weight: 7,
        color: "green",
        fitbounds: true,
      tooltip: "polyline tooltip",
      popup: "this is first popup",
      openpopup: false,
      
    });
  }
  catch(e){
    console.log(e)
  }
  },[])
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg w-3/4 h-3/4">
        <h2 className="font-bold text-2xl mb-4">Trip Details</h2>
 <div id="maps" style={{ width: "100%", height: "200px" }}></div>
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
