import React from "react";

export default function Hero1() {
  return (
    <div className="bg-green-800 flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center max-w-8xl w-full">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2 md:h-[600px]">
          <img
            src="/barista.jpg"
            className="w-full h-full object-cover"
            alt="Barista"
          />
        </div>

        {/* Right Section - Content */}
        <div className="w-full md:w-1/2 md:h-[600px] bg-green-800 flex flex-col justify-center p-6 md:p-12">
          <h2 className="font-inconsolata text-4xl tracking-tight lg:text-5xl text-center md:text-center text-offWhite leading-tight font-medium">
            More reasons to stay here awhile
          </h2>
          <h3 className="font-sans mt-6 md:mt-10 text-sm lg:text-2xl text-center md:text-left text-offWhite font-light tracking-wider leading-relaxed">
            Mugs, glasses and the condiment bar are back—and all for-here orders
            include freshly brewed refills on coffee and tea.
          </h3>
          <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
            <button className="font-sans bg-transparent outline outline-1 outline-offWhite hover:bg-green-900 text-offWhite font-bold px-4 py-1 rounded-full block mx-auto">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
