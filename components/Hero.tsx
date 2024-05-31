
import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 mt-0 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        {/* <Image
          src="/img1.jpg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        /> */}
        <h1 className="bold-52 lg:bold-87.8 ">Get Set Gyrate!</h1>
        <p className="regular-16 mt-0 text-black-30xl:max-w-[520px]">
          {/* Discover the joy of safe and carefree rides on e-scooters with Gyrate!
          Our company is committed to promoting both safety and happiness. With
          cutting-edge features and meticulous design, our e-scooters offer a
          smooth and secure journey through city streets or scenic paths.
          Experience the thrill of urban mobility without compromising on
          safety. Join us at Gyrate and embark on a journey where every ride is
          a delightful adventure. */}
        </p>

        {/* <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">
              Excellent Reviews
            </span>
          </p>
        </div> */}

        <div className="relative flex flex-1 items-start mt-8">
          <div className="relative z-20 flex w-[368px] flex-col gap-8 rounded-3xl bg-black px-8 py-8">
            <div className="flex flex-col">
              <div className="flexBetween">
                <p className="regular-16 text-white">Enter Details</p>
                {/* <Image src="/close.svg" alt="close" width={24} height={24} /> */}
              </div>
              <form>
                <input
                  type="text"
                  className="text-10l border-zinc-800 border-2 ml-8 m-5 px-4 py-2"
                  placeholder="Enter Date"
                />
                <input
                  type="text"
                  className="text-10l border-zinc-800 border-2 ml-8 mt-1 m-5 px-4 py-2"
                  placeholder="Enter Start Time"
                />
                <input
                  type="text"
                  className="text-10l border-zinc-800 border-2 ml-8 mt-1 m-5 px-4 py-2"
                  placeholder="Enter End Time"
                />
                 <input
                  type="text"
                  className="text-10l border-zinc-800 border-2 ml-8 mt-1 m-5 px-4 py-2"
                  placeholder="Location"
                />
                 <input
                  type="text"
                  className="text-10l border-zinc-800 border-2 ml-8 mt-1 m-5 px-4 py-2"
                  placeholder="Add stops"
                />
              </form>
              <button className="border-black border-2 bg-white text-black text-5l font-bold rounded">
                Proceed
              </button>
              {/* <p className="bold-20 text-white">Aguas Calientes</p> */}
            </div>

            {/* <div className="flexBetween">
              <div className="flex flex-col">
                <p className="regular-16 block text-gray-20">Distance</p>
                <p className="bold-20 text-white">173.28 mi</p>
              </div>
              <div className="flex flex-col">
                <p className="regular-16 block text-gray-20">Elevation</p>
                <p className="bold-20 text-white">2.040 km</p>
              </div>
            </div> */}
          </div>
        </div>
          
        <div className="flex w-full gap-3 text-9xl mt-6">
          {/* <Button type="button" title="How we work?" variant="btn_blue" /> */}
          <Button
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="btn_white_text"
            className="text-9xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

