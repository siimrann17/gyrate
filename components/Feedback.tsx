'use client';  // Mark the component as a client component

import React from 'react';

const feedbacks = [
  {
    id: 1,
    name: 'Deepak',
    feedback: 'The services at Gyrate are amazing! The scooters are always well-maintained and the rental process is seamless.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Smriti',
    feedback: 'Gyrate has changed the way I commute. Affordable and convenient!',
    rating: 4,
  },
  {
    id: 3,
    name: 'Piyush',
    feedback: 'Great customer service and easy-to-use app. Highly recommend Gyrate for e-scooty rentals.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Riya',
    feedback: 'Love the eco-friendly approach of Gyrate. The scooters are fun and easy to ride.',
    rating: 4,
  },
  {
    id: 5,
    name: 'Rohan',
    feedback: 'Great customer service and easy-to-use app. Highly recommend Gyrate for e-scooty rentals.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Naina',
    feedback: 'Love the eco-friendly approach of Gyrate. The scooters are fun and easy to ride.',
    rating: 4,
  },
];


const FeedbackSection = () => {
  return (
    <section className="py-16 mb-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {feedbacks.map(({ id, name, feedback, rating }) => (
            <div key={id} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{name}</h3>
              <p className="text-gray-600 mb-4">{feedback}</p>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.914c.969 0 1.371 1.24.588 1.81l-3.974 2.88a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.974-2.88a1 1 0 00-1.176 0l-3.974 2.88c-.784.57-1.838-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.98 10.1c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.95-.69L9.049 2.927z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
