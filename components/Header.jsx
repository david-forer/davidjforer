import React, { useState } from "react";

function MyApp() {
  const [show, setShow] = useState(false);
  return (
    <div className="overflow-hidden">
      <img className="absolute lg:right-72 z-0 w-1/3 transform -translate-y-1/2 opacity-70 top-3/4" src="https://cdn.devdojo.com/tails/images/gradient-blob.svg" />
    <img className="absolute right-72 z-0 object-cover object-center w-full h-1/2 opacity-30 overflow-hidden" src="https://cdn.devdojo.com/tails/images/swirl-white.svg" />
      <div className="grid md:grid-cols-1 mx-auto container relative px-4 pt-8 xl:px-6">
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 items-center pb-20">
          <div className="xl:mt-8">
            <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hover:opacity-90 flex items-center relative  justify-center mb-12 mt-5 lg:mt-10 text-sm lg:text-base font-medium text-indigo-600 p-2 lg:p-2 bg-indigo-100 rounded-md">
              More About Me
              <svg
                className="ml-5"
                xmlns="http://www.w3.org/2000/svg"
                width={26}
                height={17}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                />
              </svg>
            </button>
            <div className="text-3xl lg:text-6xl xl:text-8xl text-gray-800 tracking-1px font-extrabold">
              <h1 className="lg:text-7xl leading-tight mt-3 lg:mt-4">
                I Design & Develop Transformational Websites{" "}
              </h1>
            </div>
            <h2 className="text-base lg:text-lg tracking-wide leading-9 lg:w-10/12 mt-2 lg:mt-6 text-gray-700">
              I look beyond your website and see the big picture of what your business is. Rather than jump headfirst, I learn as much as possible about your business, products and goals1. This allows me to show you through a purposeful lense/website.
            </h2>
            <div className="my-2">
              <button className="focus:ring-indigo-700 focus:ring-2 focus:ring-offset-2 focus:outline-none mt-5 lg:mt-10 bg-indigo-700 text-base leading-none text-white hover:bg-indigo-500 p-4 rounded">
                Lets have a Chat
              </button>
            </div>
          </div>

          <div className=" pl-48 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3" >
         
            <div>
            
              <div className="flex w-36 h-64 mt-12 rounded-md ">
                <img
                  src="https://res.cloudinary.com/david-j-forer/image/upload/c_scale,w_144/v1638083092/IMG_20190615_161956_fsf9uq.jpg"
                  className="rounded-md"
                />
              </div>
              <div className="flex bg-red-500  w-36 h-64 mt-8 rounded-md object-scale-down">
                <img
                  src="https://res.cloudinary.com/david-j-forer/image/upload/c_scale,w_144/v1638084921/IMG_1037_o2aahg.jpg"
                  className="rounded-md"
                />
              </div>
            </div>
            <div>
              <div className="flex bg-yellow-500 w-36 h-64 mt-24 rounded-md object-contain">
                <img
                  src="https://res.cloudinary.com/david-j-forer/image/upload/c_scale,w_144/v1638084914/LBYU0235_heci8m.jpg"
                  className="rounded-md"
                />
              </div>
              <div className="flex bg-green-500 w-36 h-64 mt-8 rounded-md">
                <img
                  src="https://res.cloudinary.com/david-j-forer/image/upload/c_scale,w_144/v1638088929/IMG-20190323-WA0003_m3yda9.jpg"
                  className="rounded-md"
                />
              </div>
            </div>
            <div>
              <div className="flex bg-gray-500 w-36 h-64 rounded-md">
                <img
                  src="https://res.cloudinary.com/david-j-forer/image/upload/c_scale,w_144/v1638084914/IMG-20190110-WA0001_mxhhrl.jpg"
                  className="rounded-md"
                />
              </div>
              <div className="flex bg-pink-500 w-36 h-64 mt-8 rounded-md">
                <img
                  src="https://res.cloudinary.com/david-j-forer/image/upload/c_scale,w_214/v1638084913/IMG-20200904-WA0000_hkt9gx.jpg"
                  className="rounded-md"
                />
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div className="border-t-2 border-gray-300 dark:border-white-300 w-screen" />
    </div>
  );
}

export default MyApp;
