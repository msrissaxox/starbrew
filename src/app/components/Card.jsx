"use client";
import React, { useState } from "react";
// import { data } from "./coffeedata";

export default function Card(props) {
  const [price, setPrice] = useState(props.prices["medium"]);
  const [selectedSize, setSelectedSize] = useState("medium"); // Track selected size for background change

  function sizeClick(event, size) {
    console.log("i was clicked");
    console.log(event.target);
    console.log("Price for " + size + " size: $" + props.prices[size]);
    setPrice(props.prices[size]);
    setSelectedSize(size); // Set selected size when a size is clicked
  }

  return (
    <div className="max-w-sm rounded-lg overflow-hidden bg-offWhite shadow-lg">
      <img
        className="w-full h-48 object-cover"
        src={props.picture}
        alt="coffee image placeholder"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 dark:text-gray-700">{props.name}</div>
        <p className="text-gray-700 text-base">{props.description} </p>
      </div>

      <div className="px-6 py-4 flex-grow flex flex-col">
        <div>
          <span
            onClick={(event) => sizeClick(event, "small")}
            className={`cursor-pointer inline-block ${selectedSize === "small" ? "bg-green-800 text-offWhite" : "bg-gray-200"} rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
          >
            Small
          </span>
          <span
            onClick={(event) => sizeClick(event, "medium")}
            className={`cursor-pointer inline-block ${selectedSize === "medium" ? "bg-green-800 text-offWhite" : "bg-gray-200"} rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
          >
            Medium
          </span>
          <span
            onClick={(event) => sizeClick(event, "large")}
            className={`cursor-pointer inline-block ${selectedSize === "large" ? "bg-green-800 text-offWhite" : "bg-gray-200"} rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
          >
            Large
          </span>

          <span className="inline-block text-sm font-semibold text-gray-700 ml-4">
            Price: ${price}
          </span>
        </div>

        <button className="w-full cursor-pointer bg-green-800 hover:bg-green-700 rounded-full px-6 py-2 mt-8 text-sm font-semibold text-center text-offWhite">
          Add to Order
        </button>
      </div>
    </div>
  );
}
