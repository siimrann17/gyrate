

"use client";

// import { useEffect, useState } from 'react';
// import { useRouter, useSearchParams } from 'next/navigation';

// const Payment = () => {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [scooterDetails, setScooterDetails] = useState(null);
//   const [paymentMethod, setPaymentMethod] = useState('UPI');
//   const [upiId, setUpiId] = useState("");
//   const [cardNumber, setCardNumber] = useState("");
//   const [expiryDate, setExpiryDate] = useState("");
//   const [cvv, setCvv] = useState("");

//   useEffect(() => {
 
//     const scooter = searchParams.get('scooter');
//     if (scooter) {
//       try {
//         const decodedScooter = decodeURIComponent(scooter);
//         setScooterDetails(JSON.parse(decodedScooter));
//       } catch (error) {
//         console.error('Error parsing scooter data:', error);
//       }
//     }
//   }, [searchParams]);

//   const handlePayment = () => {
//     if (paymentMethod === 'UPI' && !upiId) {
//       alert('Please enter a UPI ID.');
//       return;
//     } else if ((paymentMethod === 'Credit Card' || paymentMethod === 'Debit Card') && (!cardNumber || !expiryDate || !cvv)) {
//       alert('Please enter all card details.');
//       return;
//     }

//     alert('Payment successful!');
//     router.push('/');
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-rgb(218, 238, 252)">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl flex">
//         {scooterDetails ? (
//           <>
//             <div className="w-1/2 pr-4">
//               <img
//                 src={scooterDetails.image}
//                 alt={scooterDetails.brand}
//                 className="w-full h-64 object-cover rounded-lg"
//               />
//               <div className="mt-4">
//                 <h3 className="font-bold text-xl">{scooterDetails.brand}</h3>
//                 <p>Price: Rs {scooterDetails.price}</p>
//                 <p>Speed: {scooterDetails.speed} km/h</p>
//               </div>
//             </div>
//             <div className="w-1/2 pl-4">
//               <h2 className="font-bold text-2xl mb-4">Payment Options</h2>
//               <div className="mb-4">
//                 <label htmlFor="paymentMethod" className="block mb-2">Select Payment Method</label>
//                 <select
//                   id="paymentMethod"
//                   value={paymentMethod}
//                   onChange={(e) => setPaymentMethod(e.target.value)}
//                   className="w-full p-2 border rounded"
//                 >
//                   <option value="UPI">UPI</option>
//                   <option value="Credit Card">Credit Card</option>
//                   <option value="Debit Card">Debit Card</option>
//                 </select>
//               </div>

//               {paymentMethod === 'UPI' && (
//                 <div className="mb-4">
//                   <label htmlFor="upiId" className="block mb-2">UPI ID</label>
//                   <input
//                     type="text"
//                     id="upiId"
//                     value={upiId}
//                     onChange={(e) => setUpiId(e.target.value)}
//                     className="w-full p-2 border rounded"
//                   />
//                 </div>
//               )}

//               {(paymentMethod === 'Credit Card' || paymentMethod === 'Debit Card') && (
//                 <>
//                   <div className="mb-4">
//                     <label htmlFor="cardNumber" className="block mb-2">Card Number</label>
//                     <input
//                       type="text"
//                       id="cardNumber"
//                       value={cardNumber}
//                       onChange={(e) => setCardNumber(e.target.value)}
//                       className="w-full p-2 border rounded"
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label htmlFor="expiryDate" className="block mb-2">Expiry Date</label>
//                     <input
//                       type="text"
//                       id="expiryDate"
//                       value={expiryDate}
//                       onChange={(e) => setExpiryDate(e.target.value)}
//                       className="w-full p-2 border rounded"
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label htmlFor="cvv" className="block mb-2">CVV</label>
//                     <input
//                       type="text"
//                       id="cvv"
//                       value={cvv}
//                       onChange={(e) => setCvv(e.target.value)}
//                       className="w-full p-2 border rounded"
//                     />
//                   </div>
//                 </>
//               )}

//               <button
//                 onClick={handlePayment}
//                 className="w-full px-4 py-2 bg-blue-500 text-white rounded"
//               >
//                 Pay Now
//               </button>
//             </div>
//           </>
//         ) : (
//           <p>Loading scooter details...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Payment;


import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const Payment = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [scooterDetails, setScooterDetails] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('UPI');
  const [upiId, setUpiId] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  useEffect(() => {
    const scooter = searchParams.get('scooter');
    if (scooter) {
      try {
        const decodedScooter = decodeURIComponent(scooter);
        setScooterDetails(JSON.parse(decodedScooter));
      } catch (error) {
        console.error('Error parsing scooter data:', error);
      }
    }
  }, [searchParams]);

  const handlePayment = () => {
    if (paymentMethod === 'UPI' && !upiId) {
      alert('Please enter a UPI ID.');
      return;
    } else if ((paymentMethod === 'Credit Card' || paymentMethod === 'Debit Card') && (!cardNumber || !expiryDate || !cvv)) {
      alert('Please enter all card details.');
      return;
    }

    alert('Payment successful!');
    router.push('/MyRide'); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-rgb(202, 244, 255);">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl flex">
        {scooterDetails ? (
          <>
            <div className="w-1/2 pr-4">
              <img
                src={scooterDetails.image}
                alt={scooterDetails.brand}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="mt-4">
                <h3 className="font-bold text-xl">{scooterDetails.brand}</h3>
                <p>Price: Rs {scooterDetails.price}</p>
                <p>Speed: {scooterDetails.speed} km/h</p>
              </div>
            </div>
            <div className="w-1/2 pl-4">
              <h2 className="font-bold text-2xl mb-4">Payment Options</h2>
              <div className="mb-4">
                <label htmlFor="paymentMethod" className="block mb-2">Select Payment Method</label>
                <select
                  id="paymentMethod"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-full p-2 border rounded"
                >
                  <option value="UPI">UPI</option>
                  <option value="Credit Card">Credit Card</option>
                  <option value="Debit Card">Debit Card</option>
                </select>
              </div>

              {paymentMethod === 'UPI' && (
                <div className="mb-4">
                  <label htmlFor="upiId" className="block mb-2">UPI ID</label>
                  <input
                    type="text"
                    id="upiId"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    className="w-full p-2 border rounded"
                  />
                </div>
              )}

              {(paymentMethod === 'Credit Card' || paymentMethod === 'Debit Card') && (
                <>
                  <div className="mb-4">
                    <label htmlFor="cardNumber" className="block mb-2">Card Number</label>
                    <input
                      type="text"
                      id="cardNumber"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="expiryDate" className="block mb-2">Expiry Date</label>
                    <input
                      type="text"
                      id="expiryDate"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="cvv" className="block mb-2">CVV</label>
                    <input
                      type="text"
                      id="cvv"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                </>
              )}

              <button
                onClick={handlePayment}
                className="w-full px-4 py-2 bg-blue-500 text-white rounded"
              >
                Pay Now
              </button>
            </div>
          </>
        ) : (
          <p>Loading scooter details...</p>
        )}
      </div>
    </div>
  );
};

export default Payment;

