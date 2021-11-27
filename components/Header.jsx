import React, { useState } from "react";

function MyApp() {
  const [show, setShow] = useState(false);
  return (
    <div>
      
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
                I Build Expressive Websites{" "}
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

          <div className="gap-2 p-4 grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4" >
            <div>
              <div className="flex w-36 h-64 mt-12 rounded-md ">
                <img
                  src="https://www.g20.org/wp-content/uploads/2021/01/people.jpg"
                  className="rounded-md"
                />
              </div>
              <div className="flex bg-red-500  w-36 h-64 mt-8 rounded-md object-scale-down">
                <img
                  src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/02/Female_Portrait_1296x728-header-1296x729.jpg?w=1155&h=2268"
                  className="rounded-md"
                />
              </div>
            </div>
            <div>
              <div className="flex bg-yellow-500 w-36 h-64 mt-24 rounded-md object-contain">
                <img
                  src="https://publicpolicy.unc.edu/wp-content/uploads/sites/107/2020/05/danielle_allen.png"
                  className="rounded-md"
                />
              </div>
              <div className="flex bg-green-500 w-36 h-64 mt-8 rounded-md">
                <img
                  src="https://davidjforer.com/wp-content/uploads/2021/11/origin.jpg"
                  className="rounded-md"
                />
              </div>
            </div>
            <div>
              <div className="flex bg-gray-500 w-36 h-64 rounded-md">
                <img
                  src="https://davidjforer.com/wp-content/uploads/2021/11/origin.jpg"
                  className="rounded-md"
                />
              </div>
              <div className="flex bg-pink-500 w-36 h-64 mt-8 rounded-md">
                <img
                  src="https://davidjforer.com/wp-content/uploads/2021/11/origin.jpg"
                  className="rounded-md"
                />
              </div>
            </div>
            <div>
              <div className="flex bg-gray-500 w-36 h-64 rounded-md mt-16">
                <img
                  src="https://davidjforer.com/wp-content/uploads/2021/11/origin.jpg"
                  className="rounded-md"
                />
              </div>
              <div className="flex bg-pink-500 w-36 h-64 mt-8 rounded-md">
                <img
                  src="https://davidjforer.com/wp-content/uploads/2021/11/origin.jpg"
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-gray-300 dark:border-white-300 w-screen"></div>
    </div>
  );
}

export default MyApp;
