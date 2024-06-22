"use client";
// import React, { useState } from 'react';

// const MyRide = () => {
//   const [rating, setRating] = useState(0);
//   const [feedback, setFeedback] = useState("");

//   const handleRatingChange = (value: number) => {
//     setRating(value);
//   };

//   const handleFeedbackChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setFeedback(event.target.value);
//   };

//   const handleSubmitFeedback = () => {
//     // Implement logic to submit feedback
//     alert('Feedback submitted successfully!');
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-rgb(202, 244, 255)">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl flex">
//         <div className="w-1/2 pr-4">
//           <div className="mb-4">
//             <h2 className="font-bold text-2xl mb-4">Trip Details</h2>
//             <div className="flex mb-2">
//               <p className="w-1/2">Start Time:</p>
//               <p className="w-1/2">Duration:</p>
//             </div>
//             <p>Ride Number:</p>
//           </div>
//           <div>
//             <h2 className="font-bold text-2xl mb-4">Feedback</h2>
//             <div className="flex mb-4">
//               <p className="w-1/2">Rate your ride:</p>
//               <div className="w-1/2 flex items-center">
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <button
//                     key={star}
//                     type="button"
//                     onClick={() => handleRatingChange(star)}
//                     className={`text-2xl ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
//                   >
//                     ★
//                   </button>
//                 ))}
//               </div>
//             </div>
//             <div className="mb-4">
//               <label htmlFor="feedback" className="block mb-2">Add something about your experience (optional)</label>
//               <textarea
//                 id="feedback"
//                 value={feedback}
//                 onChange={handleFeedbackChange}
//                 className="w-full p-2 border rounded"
//                 rows={4}
//               />
//             </div>
//             <button
//               onClick={handleSubmitFeedback}
//               className="w-full px-4 py-2 bg-blue-500 text-white rounded"
//             >
//               Submit Feedback
//             </button>
//           </div>
//         </div>
//         <div className="w-1/2 pl-4">
//           <h2 className="font-bold text-2xl mb-4">QR Code</h2>
//           {/* Display QR code here */}
//           <img src="qr-code-url" alt="QR Code" className="w-full h-64 object-cover rounded-lg" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyRide;

import React, { useState } from 'react';

const MyRide = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [rideStatus, setRideStatus] = useState('ongoing'); // 'ongoing' or 'completed'

  const handleRatingChange = (value: number) => {
    setRating(value);
  };

  const handleFeedbackChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(event.target.value);
  };

  const handleSubmitFeedback = () => {
    // Implement logic to submit feedback
    alert('Feedback submitted successfully!');
  };

  // Function to simulate ride completion
  const completeRide = () => {
    setRideStatus('completed');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-rgb(202, 244, 255)">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl flex">
        <div className="w-1/2 pr-4">
          <div className="mb-4">
            <h2 className="font-bold text-2xl mb-4">Trip Details</h2>
            <div className="flex mb-2">
              <p className="w-1/2">Start Time:</p>
              </div>
              <div className="flex mb-2">
              <p className="w-1/2">Duration:</p>
            </div>
            <p>Ride Number:</p>
          </div>
          {rideStatus === 'completed' ? (
            <div>
              <h2 className="font-bold text-2xl mb-4">Feedback</h2>
              <div className="flex mb-4">
                <p className="w-1/2">Rate your ride:</p>
                <div className="w-1/2 flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleRatingChange(star)}
                      className={`text-2xl ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="feedback" className="block mb-2">Add something about your experience (optional)</label>
                <textarea
                  id="feedback"
                  value={feedback}
                  onChange={handleFeedbackChange}
                  className="w-full p-2 border rounded"
                  rows={4}
                />
              </div>
              <button
                onClick={handleSubmitFeedback}
                className="w-full px-4 py-2 bg-blue-500 text-white rounded"
              >
                Submit Feedback
              </button>
            </div>
          ) : (
            <button
              onClick={completeRide}
              className="w-full px-4 py-2 bg-blue-500 text-white rounded"
            >
              Complete Ride
            </button>
          )}
        </div>
        <div className="w-1/2 pl-4">
          <h2 className="font-bold text-2xl mb-4">QR Code</h2>
          {/* Display QR code here */}
          <img src="qr-code-url" alt="QR Code" className="w-full h-64 object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default MyRide;

