import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

interface Scooter {
  image: string;
  brand: string;
  price: number;
  speed: number;
}

const PaymentPage = () => {
  const router = useRouter();
  const { scooter } = router.query;
  const selectedScooter: Scooter | null = scooter ? JSON.parse(scooter as string) : null;

  if (!selectedScooter) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-8 min-h-screen flex">
      <div className="w-1/2">
        <Image src={selectedScooter.image} alt={selectedScooter.brand} width={400} height={300} className="rounded-lg" />
        <h2 className="text-2xl font-bold mt-4">{selectedScooter.brand}</h2>
        <p>Price: Rs:{selectedScooter.price}</p>
        <p>Speed: {selectedScooter.speed} km/h</p>
      </div>
      <div className="w-1/2 pl-8">
        <h2 className="text-2xl font-bold mb-4">Payment Options</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Payment Method</label>
            <select className="block w-full border rounded py-2 px-3">
              <option value="upi">UPI</option>
              <option value="credit">Credit Card</option>
              <option value="debit">Debit Card</option>
              <option value="netbanking">Net Banking</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Card Number</label>
            <input type="text" className="block w-full border rounded py-2 px-3" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Expiry Date</label>
            <input type="text" className="block w-full border rounded py-2 px-3" placeholder="MM/YY" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">CVV</label>
            <input type="text" className="block w-full border rounded py-2 px-3" />
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
