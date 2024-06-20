

'use client';  

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const PremiumScooters = () => {
  const scooters = [
    { id: 1, src: '/scooters/scooter1.jpeg', title: 'Scooter Model 1', description: 'Description of the first scooter model.' },
    { id: 2, src: '/scooters/scooter2.jpeg', title: 'Scooter Model 2', description: 'Description of the second scooter model.' },
    { id: 3, src: '/scooters/scooter3.jpeg', title: 'Scooter Model 3', description: 'Description of the third scooter model.' },
    { id: 4, src: '/scooters/scooter4.jpeg', title: 'Scooter Model 4', description: 'Description of the fourth scooter model.' },
    { id: 5, src: '/scooters/scooter5.jpeg', title: 'Scooter Model 5', description: 'Description of the fifth scooter model.' },
    { id: 6, src: '/scooters/scooter6.jpeg', title: 'Scooter Model 6', description: 'Description of the sixth scooter model.' },
  ];

  const carouselRef = useRef(null);
  const scrollIntervalRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    const startInfiniteScroll = () => {
      const scrollWidth = carousel.scrollWidth / 2;
      let scrollLeft = 0;

      const scroll = () => {
        if (scrollLeft >= scrollWidth) {
          scrollLeft = 0;
          carousel.scrollLeft = scrollLeft;
        } else {
          scrollLeft += 1;
          carousel.scrollLeft = scrollLeft;
        }
      };

      scrollIntervalRef.current = setInterval(scroll, 17);
    };

    const stopInfiniteScroll = () => {
      clearInterval(scrollIntervalRef.current);
    };

    startInfiniteScroll();

    carousel.addEventListener('mouseover', stopInfiniteScroll);
    carousel.addEventListener('mouseout', startInfiniteScroll);

    return () => {
      stopInfiniteScroll();
      carousel.removeEventListener('mouseover', stopInfiniteScroll);
      carousel.removeEventListener('mouseout', startInfiniteScroll);
    };
  }, []);

  return (
    <section className="py-16 bg-rgb(218, 238, 252)">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mt-5 mb-16">Our Premium Range of Scooters</h2>
        <div ref={carouselRef} className="overflow-x-hidden whitespace-nowrap py-4 relative">
          <div className="inline-flex space-x-6">
            {scooters.concat(scooters).map((scooter, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md inline-block">
                <Image
                  src={scooter.src}
                  alt={scooter.title}
                  width={300}
                  height={200}
                  className="rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-700">{scooter.title}</h3>
                <p className="text-gray-600 mt-2">{scooter.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumScooters;

