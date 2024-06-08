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

      <div className="min-h-screen bg-gradient-to-r p-5">
        <h1 className="text-4xl font-bold text-center text-black mb-8">
        Pioneering Environmental Change Together
        </h1>

        <section className="max-w-4xl mx-auto mb-10">
          <p className="text-lg text-center text-gray-800">
            By choosing Gyrate, you’re not just choosing a ride, you’re choosing to make a difference. Together, we can drive towards a sustainable future.
          </p>
        </section>

        <section className="max-w-4xl mx-auto mb-10">
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
            Transforming Urban Travel
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center border-l-4 border-green-500">
            <p className="text-lg text-gray-800 mb-4">
              Did you know that 60% of all car trips are less than six miles? These short trips contribute significantly to traffic congestion and air pollution.
            </p>
            <p className="text-lg text-gray-800">
              By choosing Gyrate for these short distances, you’re helping to reduce the number of cars on the road, leading to less traffic and lower emissions.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto mb-10">
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
            Your Ride, Your Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-blue-800 mb-2">CO2 Emissions</h3>
              <p className="text-lg text-gray-800 mb-4">
                The average passenger vehicle emits about 251 grams per kilometer of CO2.
              </p>
              <p className="text-lg text-gray-800">
                Our e-scooters emit over 90% less CO2 per passenger kilometer traveled compared to a petrol bike.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center border-l-4 border-red-500">
              <h3 className="text-lg font-bold text-red-800 mb-2">Annual Savings</h3>
              <p className="text-lg text-gray-800 mb-4">
                By choosing Gyrate for your daily mobility needs, we could collectively save more than 44,000 tonnes of CO2 a year.
              </p>
              <p className="text-lg text-gray-800">
                That’s equivalent to the annual emissions from 29,000 cars!
              </p>
            </div>
          </div>
        </section>

        {/* <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
            How We Compare to Traditional Vehicles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-green-800 mb-2">E-Scooter vs. Car CO2 Emissions</h3>
              <p className="text-gray-800">
                <span className="text-green-500 font-bold">E-Scooter:</span> 0.1 kg CO2 per mile
              </p>
              <p className="text-gray-800">
                <span className="text-red-500 font-bold">Car:</span> 0.4 kg CO2 per mile
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-blue-800 mb-2">Energy Efficiency</h3>
              <p className="text-gray-800">
                <span className="text-green-500 font-bold">E-Scooter:</span> 200 Wh per mile
              </p>
              <p className="text-gray-800">
                <span className="text-red-500 font-bold">Car:</span> 900 Wh per mile
              </p>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default Environment;

