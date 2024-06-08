// import Image from "next/image";
// import React from "react";

// const Guide = () => {
//   return (
//     <section className="flexCenter flex-col">
//       <div className="padding-container max-container w-full pb-24">
//         {/* <Image src="/camp.svg" alt="camp" width={50} height={50} />
//         <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
//           We are here for you
//         </p> */}
//         <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
//           <h2 className="bold-42 lg:bold-64 xl:max-w-[390px]">
//             Guide You to Easy Path
//           </h2>
//           {/* <p className="regular-16 text-gray-30 xl:max-w-[520px]">
//             Only with the hilink application you will no longer get lost and get
//             lost again, because we already support offline maps when there is no
//             internet connection in the field. Invite your friends, relatives and
//             friends to have fun in the wilderness through the valley and reach
//             the top of the mountain
//           </p> */}
//         </div>
//       </div>

//       <div className="flexCenter max-container relative">
//         <Image
//           src="/img1.jpg"
//           alt="boat"
//           width={1000}
//           height={400}
//           className=" object-cover object-center 2xl:rounded-5xl"
//         />

//         <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
//           <Image
//             src="/meter.svg"
//             alt="meter"
//             width={12}
//             height={140}
//             className="h-full w-auto"
//           />
//           <div className="flexBetween flex-col">
//             <div className="flex w-full flex-col">
//               <div className="flexBetween w-full">
//                 <p className="regular-16 text-gray-20">
//                   <pre>Boombox </pre>
//                 </p>
//                 <p className="bold-16 text-green-50">48 min</p>
//               </div>
//               <p className="bold-20 mt-2">Arrival</p>
//             </div>

//             <div className="flex w-full flex-col">
//               <p className="regular-16 text-gray-20">Thapar</p>
//               <h4 className="bold-20 mt-2 whitespace-nowrap">Departure</h4>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Guide;

// pages/environment.js
// pages/environment.js
'use client';
// pages/environment.js
import React from 'react';
import Head from 'next/head';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement } from 'chart.js';
import 'tailwindcss/tailwind.css';

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
);

const Environment = () => {
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'CO2 Reduction (kg)',
        data: [30, 45, 60, 70, 90, 100],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,

      },
    ],
  };

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'E-Scooter Rides',
        data: [50, 75, 100, 150, 200, 300],
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  const doughnutData = {
    labels: ['Petrol Vehicles', 'E-Scooters'],
    datasets: [
      {
        data: [300, 150],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  return (
    <div>
      <Head>
        <title>Gyrate Environmental Impact</title>
        <meta name="description" content="How Gyrate helps in saving the environment by reducing CO2 emissions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white p-6 ml-2">
        <h1 className="text-4xl font-bold text-center mb-16">Gyrate's Environmental Impact</h1>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 mt-6 justify-center align-middle">
          <div className="bg-white p-3 rounded-lg shadow-md flex-1">
            <h2 className="text-xl font-semibold mb-4">CO2 Reduction Over Time</h2>
            <Bar data={barData} />
          </div>
          <div className="bg-white p-3 rounded-lg shadow-md flex-1">
            <h2 className="text-xl font-semibold mb-4">Comparison of Emissions</h2>
            <Doughnut data={doughnutData} />
          </div>
          <div className="bg-white p-3 rounded-lg shadow-md flex-1">
            <h2 className="text-xl font-semibold mb-4">E-Scooter Rides Over Time</h2>
            <Line data={lineData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Environment;
