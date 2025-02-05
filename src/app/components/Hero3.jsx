import React from "react";

export default function Hero3() {
  return (
    <div className="mt-10 min-h-[300px] bg-backgroundGreen flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center max-w-8xl w-full">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2 h-[500px] md:h-[600px]">
          <img
            src="/hero3.jpg"
            className="w-full h-full object-cover"
            alt="Barista"
          />
        </div>
        {/* Right Section - Content */}
        <div className="w-full md:w-1/2 md:h-[600px] flex flex-col justify-center p-6 md:p-12">
          <h2 className="font-inconsolata tracking-tight text-4xl lg:text-5xl text-center md:text-center text-offWhite leading-tight font-medium">
            You'll always be welcome here
          </h2>
          <h3 className="font-sans mt-6 md:mt-10 text-sm lg:text-2xl text-center md:text-left text-offWhite font-light tracking-wider leading-relaxed">
            We'll do our part in the Orlando community, providing you with a
            space where you can feel welcome and safe, always.{" "}
          </h3>
          <div className="font-sans mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
            <button className="font-sans bg-transparent outline outline-1 outline-offWhite  hover:bg-backgroundButton text-offWhite font-bold px-4 py-1 rounded-full block mx-auto">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
