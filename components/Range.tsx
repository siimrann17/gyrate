'use client';  

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const PremiumScooters = () => {
  const scooters = [
    {
      id: 1,
      src: '/scooters/Ather 450x.jpg',
      title: 'Ather 450x',
      description: [
        ' Top Speed - 90 KMPH',
        ' Range - 150 km',
        ' Acceleration - 0-40 kmph in 3.3 sec.',
        ' Calls, messages, and music',
        ' Display – smart Touchscreen',
      ],
    },
    {
      id: 2,
      src: '/scooters/Bounce infinite E1.jpg',
      title: 'Bounce infinite E1',
      description: [
        ' Top Speed - 70 KMPH',
        ' Range - 65 KM',
        ' Acceleration - 0-40 kmph in 5-6 sec.',
        ' Display - Digital',
      ],
    },
    {
      id: 3,
      src: '/scooters/Ola s1x.jpg',
      title: 'Ola s1x',
      description: [
        ' Top Speed - 90 KMPH',
        ' Range - 193km',
        ' Acceleration - 0-40 kmph in 3.3 sec.',
        ' Calls, messages, and music',
        ' Display – smart Touchscreen',
      ],
    },
    {
      id: 4,
      src: '/scooters/Tvs iqube.jpg',
      title: 'Tvs iqube',
      description: [
        ' Top Speed - 70 KMPH',
        ' Range - 74 Km',
        ' Acceleration - 0-40 kmph in 4.3 sec.',
        ' Display - Digital',
        ' Calls, messages, and music',
      ],
    },
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
                <ul className="text-gray-600 mt-2 list-disc pl-4">
                  {scooter.description.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumScooters;
