import React from "react";

const About = () => {
  return (
    <div className="flex lg:flex-row flex-col lg:gap-24 sm:gap-10 gap-12 bg-gray-100 py-16 px-36">
      <div className="w-full lg:w-6/12 justify-center">
        <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 leading-9 m-12">
         Hello, I'm David ✌
        </h2>
        <p className="font-normal text-base leading-6 text-gray-600 mt-6 mx-12">
          Thanks for checking out my website. My little corner of the web discusses how you can get a beautiful website created, rank that site, and drive trafic to it. That is me on the right side so you can put a picture to the name. I decided to get into all things digital because of the power the internet had to drive people to my business,
          <p className="m-12 font-semibold text-xl">
          Are you ready to see the same improvements?
          </p>
        </p>
        <div className="mt-24">
        <a href="/static/About" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-indigo-700 border border-transparent rounded-md shadow hover:bg-indigo-700">Learn More About Me</a>
        </div>
        
      </div>
      <div className="w-full lg:w-6/12">
        <img
          className="lg:block hidden w-full"
          src="https://i.ibb.co/RjNH7QB/Rectangle-122-1.png"
          alt="people discussing on board"
        />
        <img
          className="lg:hidden sm:block hidden w-full"
          src="https://i.ibb.co/16fPqrg/Rectangle-122-2.png"
          alt="people discussing on board"
        />
        <img
          className="sm:hidden block w-full"
          src="https://i.ibb.co/Jxhpxh6/Rectangle-122.png"
          alt="people discussing on board"
        />
       
      </div>
      
    </div>
  );
};

export default About;
