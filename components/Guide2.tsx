
import React from "react";
import Head from "next/head";
import "tailwindcss/tailwind.css";

const Environment = () => {
  return (
    <div>
      <Head>
        <title>Gyrate Environmental Impact</title>
        <meta
          name="description"
          content="How Gyrate helps in saving the environment by reducing CO2 emissions."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white p-5">
        <h1 className="text-4xl font-bold text-center mb-8">
          Gyrate's Environmental Impact
        </h1>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex-1 text-center">
            <h2 className="text-xl font-semibold mb-4">CO2 Emissions Saved</h2>
            <p className="text-3xl font-bold text-green-500">2,500 kg</p>
            <p className="text-gray-500">Equivalent to 100 trees planted</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex-1 text-center">
            <h2 className="text-xl font-semibold mb-4">Miles Driven on E-Scooters</h2>
            <p className="text-3xl font-bold text-blue-500">10,000 miles</p>
            <p className="text-gray-500">Reducing urban traffic congestion</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex-1 text-center">
            <h2 className="text-xl font-semibold mb-4">Gasoline Saved</h2>
            <p className="text-3xl font-bold text-red-500">500 gallons</p>
            <p className="text-gray-500">Reducing dependence on fossil fuels</p>
          </div>
        </div>

        <div className="mt-10 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-6">
            How We Compare to Traditional Vehicles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2">E-Scooter vs. Car CO2 Emissions</h3>
              <p className="text-gray-700">
                <span className="text-green-500 font-bold">E-Scooter:</span> 0.1 kg CO2 per mile
              </p>
              <p className="text-gray-700">
                <span className="text-red-500 font-bold">Car:</span> 0.4 kg CO2 per mile
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2">Energy Efficiency</h3>
              <p className="text-gray-700">
                <span className="text-green-500 font-bold">E-Scooter:</span> 200 Wh per mile
              </p>
              <p className="text-gray-700">
                <span className="text-red-500 font-bold">Car:</span> 900 Wh per mile
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Environment;

