
import React from 'react';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="bg-rgb(218, 238, 252) min-h-screen flex flex-col items-center py-12">
      <div className="container mx-auto px-4 text-center">

        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Gyrate - <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">Revolutionizing Urban Mobility</span></h2>
          <p className="text-lg text-gray-700">At Gyrate, we envision a world where city travel is seamless, sustainable, and accessible to all. We believe in a future where every urban journey is an opportunity for joy and discovery, not a challenge to overcome.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6"><span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-400">Our Mission</span></h2>
          <p className="text-lg text-gray-700">It is to transform intracity mobility with our fleet of eco-friendly electric scooters, offering an affordable and convenient alternative to conventional transportation. We’re not just a service; we’re a movement towards a <span className="font-bold text-green-500">greener</span>, <span className="font-bold text-green-500">cleaner</span>, and more connected urban life.</p>
          <div className="mt-8 flex justify-center">
            <Image src="/gyrate_scooter.jpeg" alt="Gyrate Scooter" width={600} height={450} className="rounded-lg shadow-lg" />
          </div>
          <p className="text-blue-500 mt-4"><a href="#" className="underline">Click here to know more about the Gyrate Beacon</a></p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">How it all started</h2>
          <p className="text-lg text-gray-700">It all began when we noticed the daily struggles of people trying to navigate the city. The high costs and inconvenience of traditional rickshaws, especially for individuals or pairs, sparked an idea. Why not provide a solution that’s not only <span className="font-bold text-blue-500">cost-effective</span> but also kind to the environment?</p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Discover with Gyrate</h2>
          <p className="text-lg text-gray-700">Gyrate is more than just a mobility company; it’s the answer to the urban commute conundrum. With our user-friendly platform, you can book electric scooters on an hourly basis, giving you the freedom to explore the city at your pace. Whether you’re running errands, meeting friends, or just enjoying a solo ride, Gyrate empowers you to move hassle-free.</p>
          <div className="mt-8 flex justify-center">
            <Image src="/explore_city.jpeg" alt="Explore the City" width={600} height={450} className="rounded-lg shadow-lg" />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Team Gyrate</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <Image src="/team1.jpeg" alt="Team Member 1" width={300} height={300} className="rounded-full mx-auto shadow-md" />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-lg text-gray-700">CEO & Founder</p>
              <p className="text-lg text-gray-700">John leads the vision and strategy of Gyrate, driving innovation in urban mobility.</p>
            </div>
            <div className="text-center">
              <Image src="/team2.jpeg" alt="Team Member 2" width={300} height={300} className="rounded-full mx-auto shadow-md" />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-lg text-gray-700">COO</p>
              <p className="text-lg text-gray-700">Jane oversees the day-to-day operations, ensuring everything runs smoothly and efficiently.</p>
            </div>
            <div className="text-center">
              <Image src="/team3.jpeg" alt="Team Member 3" width={300} height={300} className="rounded-full mx-auto shadow-md" />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">Robert Brown</h3>
              <p className="text-lg text-gray-700">CTO</p>
              <p className="text-lg text-gray-700">Robert is the tech genius behind Gyrate's innovative platform and eco-friendly scooters.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Join Us</h2>
          <p className="text-lg text-gray-700">We’re always on the lookout for talented individuals who share our vision of redefining urban mobility. If you’re passionate about making a positive impact and eager to be part of a dynamic team, Gyrate is the place for you. Visit our <a href="#" className="text-blue-500 underline">careers page</a> to learn more about current opportunities.</p>
        </section>
      </div>
    </div>
  );
}
