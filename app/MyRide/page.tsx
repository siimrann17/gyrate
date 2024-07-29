
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
// import React, { useState, useEffect } from 'react';
// import { useRouter, usePathname, useSearchParams } from 'next/navigation';

// const MyRide = () => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();
//   const { duration } = router.query || {}; // Destructure with default empty object

//   const [rating, setRating] = useState(0);
//   const [feedback, setFeedback] = useState("");
//   const [rideStatus, setRideStatus] = useState('ongoing'); // 'ongoing' or 'completed'
//   const [currentView, setCurrentView] = useState('ongoing'); // 'ongoing', 'completedView', or 'feedback'
//   const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
//   const [timer, setTimer] = useState<number | null>(null); // Timer state
//   const [timeLeft, setTimeLeft] = useState(0); // Time left for the ride

//   const handleRatingChange = (value: number) => {
//     setRating(value);
//   };

//   const handleFeedbackChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setFeedback(event.target.value);
//   };

//   const handleSubmitFeedback = () => {
//     // Implement logic to submit feedback
//     setFeedbackSubmitted(true);
//     setTimeout(() => {
//       setCurrentView('completedView');
//       setFeedbackSubmitted(false);
//     }, 2000); // Show "Thank You" message for 2 seconds
//   };

//   // Function to simulate ride completion
//   const completeRide = () => {
//     setRideStatus('completed');
//   };

//   const switchToOngoingRides = () => {
//     setCurrentView('ongoing');
//   };

//   const switchToCompletedRides = () => {
//     setCurrentView('completedView');
//   };

//   useEffect(() => {
//     if (rideStatus === 'completed') {
//       setCurrentView('feedback');
//     }
//   }, [rideStatus]);

//   useEffect(() => {
//     if (timer !== null) {
//       const interval = setInterval(() => {
//         setTimeLeft((prev) => prev - 1);
//       }, 1000);

//       if (timeLeft === 0) {
//         clearInterval(interval);
//         setRideStatus('completed');
//       }

//       return () => clearInterval(interval);
//     }
//   }, [timer, timeLeft]);

//   // Simulate QR code scan
//   const handleQrScan = () => {
//     if (duration) {
//       const ridePackageDuration = parseInt(duration as string) * 3600; // Convert duration to seconds
//       setTimeLeft(ridePackageDuration);
//       setTimer(ridePackageDuration);
//     }
//   };

//   const formatTime = (seconds: number) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-rgb(202, 244, 255)">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl flex flex-col items-center">
//         <div className="flex justify-center mb-4 space-x-4">
//           <button
//             onClick={switchToOngoingRides}
//             className={`px-4 py-2 rounded ${currentView === 'ongoing' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
//           >
//             Ongoing Rides
//           </button>
//           <button
//             onClick={switchToCompletedRides}
//             className={`px-4 py-2 rounded ${currentView === 'completedView' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
//           >
//             Completed Rides
//           </button>
//         </div>
//         {currentView === 'ongoing' && (
//           <div className="flex w-full">
//             <div className="w-1/2 pr-4">
//               <div className="mb-4">
//                 <h2 className="font-bold text-2xl mb-4">Trip Details</h2>
//                 <div className="flex mb-2">
//                   <p className="w-1/2">Start Time:</p>
//                 </div>
//                 <div className="flex mb-2">
//                   <p className="w-1/2">Duration:</p>
//                   <p className="w-1/2">{duration} hours</p>
//                 </div>
//                 <p>Ride Number:</p>
//               </div>
//               {rideStatus === 'completed' ? (
//                 <div>
//                   <h2 className="font-bold text-2xl mb-4">Feedback</h2>
//                   <div className="flex mb-4">
//                     <p className="w-1/2">Rate your ride:</p>
//                     <div className="w-1/2 flex items-center">
//                       {[1, 2, 3, 4, 5].map((star) => (
//                         <button
//                           key={star}
//                           type="button"
//                           onClick={() => handleRatingChange(star)}
//                           className={`text-2xl ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
//                         >
//                           ★
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="mb-4">
//                     <label htmlFor="feedback" className="block mb-2">Add something about your experience (optional)</label>
//                     <textarea
//                       id="feedback"
//                       value={feedback}
//                       onChange={handleFeedbackChange}
//                       className="w-full p-2 border rounded"
//                       rows={4}
//                     />
//                   </div>
//                   <button
//                     onClick={handleSubmitFeedback}
//                     className="w-full px-4 py-2 bg-blue-500 text-white rounded"
//                   >
//                     Submit Feedback
//                   </button>
//                 </div>
//               ) : (
//                 <>
//                   <button
//                     onClick={completeRide}
//                     className="w-full px-4 py-2 bg-blue-500 text-white rounded"
//                     style={{ display: timeLeft <= 3600 - 600 ? 'block' : 'none' }} // Show after 10 minutes (600 seconds) have passed
//                   >
//                     Complete Ride
//                   </button>
//                 </>
//               )}
//             </div>
//             <div className="w-1/2 pl-4">
//               <h2 className="font-bold text-2xl mb-4">QR Code</h2>
//               {/* Display QR code here */}
//               <img src="qr-code-url" alt="QR Code" className="w-full h-64 object-cover rounded-lg" onClick={handleQrScan} />
//               {timer !== null && (
//                 <div className="mt-4">
//                   <h2 className="text-xl font-bold">Time Left: {formatTime(timeLeft)}</h2>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//         {currentView === 'completedView' && (
//           <div className="w-full">
//             <h2 className="font-bold text-2xl mb-4">Completed Rides</h2>
//             {/* Display a list of completed rides here */}
//             <ul>
//               <li>Ride 1 - Details...</li>
//               <li>Ride 2 - Details...</li>
//               {/* Add more rides as necessary */}
//             </ul>
//           </div>
//         )}
//         {currentView === 'feedback' && (
//           <div className="w-full">
//             {feedbackSubmitted ? (
//               <h2 className="font-bold text-2xl mb-4">Thank You!</h2>
//             ) : (
//               <div>
//                 <h2 className="font-bold text-2xl mb-4">Feedback</h2>
//                 <div className="flex mb-4">
//                   <p className="w-1/2">Rate your ride:</p>
//                   <div className="w-1/2 flex items-center">
//                     {[1, 2, 3, 4, 5].map((star) => (
//                       <button
//                         key={star}
//                         type="button"
//                         onClick={() => handleRatingChange(star)}
//                         className={`text-2xl ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
//                       >
//                         ★
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="mb-4">
//                   <label htmlFor="feedback" className="block mb-2">Add something about your experience (optional)</label>
//                   <textarea
//                     id="feedback"
//                     value={feedback}
//                     onChange={handleFeedbackChange}
//                     className="w-full p-2 border rounded"
//                     rows={4}
//                   />
//                 </div>
//                 <button
//                   onClick={handleSubmitFeedback}
//                   className="w-full px-4 py-2 bg-blue-500 text-white rounded"
//                   >
//                     Submit Feedback
//                   </button>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   };
  
//   export default MyRide;

// "use client";
// import React, { useState, useEffect } from 'react';

// const MyRide = () => {
//   const [rating, setRating] = useState(0);
//   const [feedback, setFeedback] = useState("");
//   const [rideStatus, setRideStatus] = useState('ongoing'); // 'ongoing' or 'completed'
//   const [currentView, setCurrentView] = useState('ongoing'); // 'ongoing', 'completedView', or 'feedback'
//   const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
//   const [timer, setTimer] = useState<number | null>(null); // Timer state
//   const [timeLeft, setTimeLeft] = useState(0); // Time left for the ride

//   const handleRatingChange = (value: number) => {
//     setRating(value);
//   };

//   const handleFeedbackChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setFeedback(event.target.value);
//   };

//   const handleSubmitFeedback = () => {
//     // Implement logic to submit feedback
//     setFeedbackSubmitted(true);
//     setTimeout(() => {
//       setCurrentView('completedView');
//       setFeedbackSubmitted(false);
//     }, 2000); // Show "Thank You" message for 2 seconds
//   };

//   // Function to simulate ride completion
//   const completeRide = () => {
//     setRideStatus('completed');
//   };

//   const switchToOngoingRides = () => {
//     setCurrentView('ongoing');
//   };

//   const switchToCompletedRides = () => {
//     setCurrentView('completedView');
//   };

//   useEffect(() => {
//     if (rideStatus === 'completed') {
//       setCurrentView('feedback');
//     }
//   }, [rideStatus]);

//   useEffect(() => {
//     if (timer !== null) {
//       const interval = setInterval(() => {
//         setTimeLeft((prev) => prev - 1);
//       }, 1000);

//       if (timeLeft === 0) {
//         clearInterval(interval);
//         setRideStatus('completed');
//       }

//       return () => clearInterval(interval);
//     }
//   }, [timer, timeLeft]);

//   // Simulate QR code scan
//   const handleQrScan = () => {
//     const ridePackageDuration = 3600; // Example: 1 hour in seconds
//     setTimeLeft(ridePackageDuration);
//     setTimer(ridePackageDuration);
//   };

//   const formatTime = (seconds: number) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-rgb(202, 244, 255)">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl flex flex-col items-center">
//         <div className="flex justify-center mb-4 space-x-4">
//           <button
//             onClick={switchToOngoingRides}
//             className={`px-4 py-2 rounded ${currentView === 'ongoing' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
//           >
//             Ongoing Rides
//           </button>
//           <button
//             onClick={switchToCompletedRides}
//             className={`px-4 py-2 rounded ${currentView === 'completedView' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
//           >
//             Completed Rides
//           </button>
//         </div>
//         {currentView === 'ongoing' && (
//           <div className="flex w-full">
//             <div className="w-1/2 pr-4">
//               <div className="mb-4">
//                 <h2 className="font-bold text-2xl mb-4">Trip Details</h2>
//                 <div className="flex mb-2">
//                   <p className="w-1/2">Start Time:</p>
//                 </div>
//                 <div className="flex mb-2">
//                   <p className="w-1/2">Duration:</p>
//                 </div>
//                 <p>Ride Number:</p>
//               </div>
//               {rideStatus === 'completed' ? (
//                 <div>
//                   <h2 className="font-bold text-2xl mb-4">Feedback</h2>
//                   <div className="flex mb-4">
//                     <p className="w-1/2">Rate your ride:</p>
//                     <div className="w-1/2 flex items-center">
//                       {[1, 2, 3, 4, 5].map((star) => (
//                         <button
//                           key={star}
//                           type="button"
//                           onClick={() => handleRatingChange(star)}
//                           className={`text-2xl ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
//                         >
//                           ★
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="mb-4">
//                     <label htmlFor="feedback" className="block mb-2">Add something about your experience (optional)</label>
//                     <textarea
//                       id="feedback"
//                       value={feedback}
//                       onChange={handleFeedbackChange}
//                       className="w-full p-2 border rounded"
//                       rows={4}
//                     />
//                   </div>
//                   <button
//                     onClick={handleSubmitFeedback}
//                     className="w-full px-4 py-2 bg-blue-500 text-white rounded"
//                   >
//                     Submit Feedback
//                   </button>
//                 </div>
//               ) : (
//                 <>
//                   <button
//                     onClick={completeRide}
//                     className="w-full px-4 py-2 bg-blue-500 text-white rounded"
//                     style={{ display: timeLeft <= 3600 - 600 ? 'block' : 'none' }} // Show after 10 minutes (600 seconds) have passed
//                   >
//                     Complete Ride
//                   </button>
//                 </>
//               )}
//             </div>
//             <div className="w-1/2 pl-4">
//               <h2 className="font-bold text-2xl mb-4">QR Code</h2>
//               {/* Display QR code here */}
//               <img src="qr-code-url" alt="QR Code" className="w-full h-64 object-cover rounded-lg" onClick={handleQrScan} />
//               {timer !== null && (
//                 <div className="mt-4">
//                   <h2 className="text-xl font-bold">Time Left: {formatTime(timeLeft)}</h2>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//         {currentView === 'completedView' && (
//           <div className="w-full">
//             <h2 className="font-bold text-2xl mb-4">Completed Rides</h2>
//             {/* Display a list of completed rides here */}
//             <ul>
//               <li>Ride 1 - Details...</li>
//               <li>Ride 2 - Details...</li>
//               {/* Add more rides as necessary */}
//             </ul>
//           </div>
//         )}
//         {currentView === 'feedback' && (
//           <div className="w-full">
//             {feedbackSubmitted ? (
//               <h2 className="font-bold text-2xl mb-4">Thank You!</h2>
//             ) : (
//               <div>
//                 <h2 className="font-bold text-2xl mb-4">Feedback</h2>
//                 <div className="flex mb-4">
//                   <p className="w-1/2">Rate your ride:</p>
//                   <div className="w-1/2 flex items-center">
//                     {[1, 2, 3, 4, 5].map((star) => (
//                       <button
//                         key={star}
//                         type="button"
//                         onClick={() => handleRatingChange(star)}
//                         className={`text-2xl ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
//                       >
//                         ★
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="mb-4">
//                   <label htmlFor="feedback" className="block mb-2">Add something about your experience (optional)</label>
//                   <textarea
//                     id="feedback"
//                     value={feedback}
//                     onChange={handleFeedbackChange}
//                     className="w-full p-2 border rounded"
//                     rows={4}
//                   />
//                 </div>
//                 <button
//                   onClick={handleSubmitFeedback}
//                   className="w-full px-4 py-2 bg-blue-500 text-white rounded"
//                 >
//                   Submit Feedback
//                 </button>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MyRide;


"use client";

import React, { useState, useEffect } from 'react';

const MyRide = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [rideStatus, setRideStatus] = useState('ongoing');
  const [currentView, setCurrentView] = useState('ongoing');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [timer, setTimer] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(0);

  const handleRatingChange = (value: number) => {
    setRating(value);
  };

  const handleFeedbackChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(event.target.value);
  };

  const handleSubmitFeedback = () => {
    setFeedbackSubmitted(true);
    setTimeout(() => {
      setCurrentView('completedView');
      setFeedbackSubmitted(false);
    }, 2000);
  };

  const completeRide = () => {
    setRideStatus('completed');
  };

  const switchToOngoingRides = () => {
    setCurrentView('ongoing');
  };

  const switchToCompletedRides = () => {
    setCurrentView('completedView');
  };

  useEffect(() => {
    if (rideStatus === 'completed') {
      setCurrentView('feedback');
    }
  }, [rideStatus]);

  useEffect(() => {
    if (timer !== null) {
      const interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      if (timeLeft === 0) {
        clearInterval(interval);
        setRideStatus('completed');
      }

      return () => clearInterval(interval);
    }
  }, [timer, timeLeft]);

  const handleQrScan = () => {
    const ridePackageDuration = 3600; // Example: 1 hour in seconds
    setTimeLeft(ridePackageDuration);
    setTimer(ridePackageDuration);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="min-h-screen bg-rgb(202, 244, 255) flex flex-col items-center p-8">
      <div className="w-full max-w-4xl">
        <div className="flex justify-center mb-4 space-x-4">
          <button onClick={switchToOngoingRides} className={`px-4 py-2 rounded ${currentView === 'ongoing' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}>
            Ongoing Rides
          </button>
          <button
            onClick={switchToCompletedRides}
            className={`px-4 py-2 rounded ${currentView === 'completedView' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
          >
            Completed Rides
          </button>
        </div>
        {currentView === 'ongoing' && (
          <div className="flex w-full">
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
                <>
                  <button
                    onClick={completeRide}
                    className="w-full px-4 py-2 bg-blue-500 text-white rounded"
                    style={{ display: timeLeft <= 3600 - 600 ? 'block' : 'none' }} // Show after 10 minutes (600 seconds) have passed
                  >
                    Complete Ride
                  </button>
                </>
              )}
            </div>
            <div className="w-1/2 pl-4">
              <h2 className="font-bold text-2xl mb-4">QR Code</h2>
              {/* Display QR code here */}
              <img src="qr-code-url" alt="QR Code" className="w-full h-64 object-cover rounded-lg" onClick={handleQrScan} />
              {timer !== null && (
                <div className="mt-4">
                  <h2 className="text-xl font-bold">Time Left: {formatTime(timeLeft)}</h2>
                </div>
              )}
            </div>
          </div>
        )}
        {currentView === 'completedView' && (
          <div className="w-full">
            <h2 className="font-bold text-2xl mb-4">Completed Rides</h2>
            {/* Display a list of completed rides here */}
            <ul>
              <li>Ride 1 - Details...</li>
              <li>Ride 2 - Details...</li>
              {/* Add more rides as necessary */}
            </ul>
          </div>
        )}
        {currentView === 'feedback' && (
          <div className="w-full">
            {feedbackSubmitted ? (
              <h2 className="font-bold text-2xl mb-4">Thank You!</h2>
            ) : (
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
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyRide;
