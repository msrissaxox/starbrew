import React from "react";

export default function Hero2() {
  return (
    <div className="mt-10 bg-green-800 flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center max-w-8xl w-full">
        {/* Left Section - Content */}
        <div className="w-full md:w-1/2 md:h-[600px] bg-customGreen flex flex-col justify-center p-6 md:p-12">
          <h2 className="font-inconsolata tracking-tight text-4xl lg:text-5xl text-center md:text-center text-black leading-tight font-medium">
            Shaken to Perfection
          </h2>
          <h3 className="font-sans mt-6 md:mt-10 text-sm lg:text-2xl text-center md:text-left text-black font-light tracking-wider leading-relaxed">
            Experience Orlando's own feel-good Iced Brown Sugar Oatmilk Shaken
            Espresso or Iced Hazelnut Oatmilk Shaken Espresso—made with
            StarBrews® Blonde Espresso, and just 150 calories for a grande.{" "}
          </h3>
          <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
            <button className="font-sans bg-transparent outline outline-1 outline-black hover:bg-buttonGreen text-black font-bold px-4 py-1 rounded-full block mx-auto">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full md:w-1/2 h-[500px] md:h-[600px]">
          <img
            src="/hero2.jpg"
            className="w-full h-full object-cover"
            alt="Barista"
          />
        </div>
      </div>
    </div>
  );
}
