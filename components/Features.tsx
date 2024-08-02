import { FEATURES } from "@/constants";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-rgb(218, 238, 252) py-24">
      <div className="max-container padding-container relative w-full flex justify-end bg-rgb(218, 238, 252)">
        <div className="flex flex-1 lg:min-h-[900px] bg-rgb(218, 238, 252)">
          <Image
            src="/scooty.jpg"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%] bg-rgb(218, 238, 252)">
          <div className="relative bg-rgb(218, 238, 252)">
            <h2 className="bold-40 bold-78 bg-rgb(218, 238, 252)">
              Why Choose Gyrate?
            </h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20 bg-rgb(218, 238, 252)">
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type FeatureItemProps = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItem = ({ title, icon, description }: FeatureItemProps) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start bg-rgb(218, 238, 252)">
      <div>
        <Image src={icon} alt="icon" width={70} height={70} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize bg-rgb(218, 238, 252)">
        {title}
      </h2>
      <p className="regular-16 mt-5 bg-rgb(218, 238, 252) text-black lg:mt-[30px] lg:bg-none bg-rgb(218, 238, 252)">
        {description}
      </p>
    </li>
  );
};

export default Features;
