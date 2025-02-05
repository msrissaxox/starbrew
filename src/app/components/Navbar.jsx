"use client";
import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("i was clicked");

    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-800">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://starbucks.com"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/starbuckslogo.jpg"
              className="h-12"
              alt="Starbucks Logo"
            />
            <span className="self-center text-2xl font-medium whitespace-nowrap dark:text-white font-sans">
              StarBrews
            </span>
          </a>
          {/* menu button */}
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="font-sans block py-2 px-3 font-semibold text-white bg-green-800 rounded-sm md:bg-transparent md:text-green-800 md:p-0 dark:text-white md:dark:text-green-800"
                  aria-current="page"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-sans block py-2 px-3 font-semibold text-gray-900 rounded-sm hover:bg-green-800 md:hover:bg-transparent md:border-0 md:hover:text-green-800 md:p-0 dark:text-white md:dark:hover:text-green-800 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Rewards
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-sans block py-4 px-3 font-semibold text-gray-900 rounded-sm hover:bg-green-800 md:hover:bg-transparent md:border-0 md:hover:text-green-800 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Gift Cards
                </a>
              </li>

              <li>
                <button className="font-sans bg-black hover:bg-gray-700 text-white font-bold px-4 py-1 rounded-full mb-4 md:mb-0">
                  Join
                </button>
              </li>
              <li>
                <button className="font-sans bg-white outline outline-1 outline-black hover:bg-gray-300 text-black font-bold px-4 py-1 rounded-full">
                  Sign In
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr className="my-4 h-0.5 border-t-2 bg-neutral-100 dark:bg-white/10" />
    </div>
  );
}
