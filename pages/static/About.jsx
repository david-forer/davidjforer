import React from "react";

const AboutMe = () => {
  return (
    <>
      <div className="2xl:container 2xl:mx-auto lg:pb-8  md:py-12 md:px-6 py-9 px-4">
        <div className="relative">
         
          <div  className="w-full h-full">
          <section className="overflow-hidden text-gray-700 ">
                <div className="container px-5 py-1 mx-auto lg:pt-6 lg:px-32">
                  <div className="flex flex-wrap -m-1 lg:-m-2">
                    <div className="flex flex-wrap w-1/2">
                      <div className="w-1/2 p-1 md:p-2">
                        <img
                          alt="gallery"
                          className="block object-cover object-center w-full h-full rounded-lg"
                          src="https://res.cloudinary.com/david-j-forer/image/upload/c_scale,w_888/v1638083092/IMG_1012_jalcgv.jpg"
                        />
                      </div>
                      <div className="w-1/2 p-1 md:p-2">
                        <img
                          alt="gallery"
                          className="block object-cover object-center w-full h-full rounded-lg"
                          src="https://res.cloudinary.com/david-j-forer/image/upload/v1638083091/pic12_mncuta.jpg"
                        />
                      </div>
                      <div className="w-full p-1 md:p-2">
                        <img
                          alt="gallery"
                          className="block object-cover object-center w-full h-full rounded-lg"
                          src="https://res.cloudinary.com/david-j-forer/image/upload/c_scale,w_1135/v1638083103/family_jp5kws.jpg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                      <div className="w-full p-1 md:p-2">
                        <img
                          alt="gallery"
                          className="block object-cover object-center w-full h-full rounded-lg"
                          src="https://res.cloudinary.com/david-j-forer/image/upload/v1638083091/Kalpana-David_npx3xp.jpg"
                        />
                      </div>
                      <div className="w-1/2 p-1 md:p-2">
                        <img
                          alt="gallery"
                          className="block object-cover object-center w-full h-full rounded-lg"
                          src="https://res.cloudinary.com/david-j-forer/image/upload/v1638084913/KIEH3285_vljmgc.jpg"
                        />
                      </div>
                      <div className="w-1/2 p-1 md:p-2">
                        <img
                          alt="gallery"
                          className="block object-cover object-center w-full h-full rounded-lg"
                          src="https://res.cloudinary.com/david-j-forer/image/upload/v1638084913/IMG-20190525-WA0000_mftkyc.jpg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
          </div>
        </div>
        <h2 className="font-bold lg:text-6xl text-3xl lg:leading-9 leading-7 text-gray-800 text-center mt-12 mb-12">
          My Story
        </h2>
        <div className="lg:mt-14 sm:mt-7 mt-14">
          <div className="flex lg:flex-row flex-col items-center">
            <div className="w-full lg:w-7/12">
              <p className="font-bold lg:text-xl text-xl lg:leading-9 leading-7 text-gray-800">
                Personal
              </p>
              <p className="pr-6 font-normal text-base leading-6 text-gray-600 mt-4 w-full xl:w-9/12">
                I am a father to Derrick, a husband to Kalpana, a son to Roger
                and Carol and D4 to my close friends. My journey has been a long
                and fun one, that has made me who I am today. Every person I
                have come into contact with has helped write this story. I was
                adopted at an early age and my parents raised me as an
                independent thinker. The decisions that shaped my life were
                truly my decisions to make even as a young adult. It was this
                freedom to make mistakes and learn from them that has served me
                well over the years.
              </p>
              <p className="pr-6 font-normal text-base leading-6 text-gray-600 mt-6 w-full xl:w-9/12">
                {" "}
                I have learned how to handle the adversity that comes with
                change and challenge. Equally, this trust and belief in myself
                has allowed me to become a career changer later in life–not
                once, not twice, but three times! The people who know me best
                say I am a dedicated, funny and loyal. I always try to bring
                creative and positive energy to whatever situation I am in. I am
                a person who values learning and is constantly trying to upgrade
                my knowledge and skills, be that in cooking, digital marketing,
                coding or sports statistics. Complacency is something that is
                not allowed!
              </p>
              <p className="font-bold lg:text-xl text-xl lg:leading-9 leading-7 text-gray-800 mt-2">
                Professional
              </p>
              <p className="pr-6 font-normal text-base leading-6 text-gray-600 w-full xl:w-9/12 mt-4">
                As a young adult, my first two jobs were as a farmer and a cook
                at McDonald’s. These positions taught me about the value of work
                ethic, which is a thread throughout my career. I started out in
                sales early; yet, sales was always a job to me, never a passion
                or career. Can I sell? Yes! Do I enjoy sales? Sometimes. Do
                sales define me? Never. From there I sold mortgages for the next
                15 years, including managing several mortgage branches that were
                very successful.{" "}
              </p>
              <p className="pr-6 font-normal text-base leading-6 text-gray-600 w-full xl:w-9/12 mt-6">
                When I finally decided to get out of mortgages, I helped run a
                law office doing debt settlement and bankruptcies. My role was
                to handle customers and marketing. While doing this, I realized
                I had a passion for websites and online marketing, so I started
                teaching myself what I could. Going forward in other companies,
                I continued in online marketing but took on operations which
                included search engine optimization and driving leads. My
                enjoyment of website development, SEO and a passion for learning
                in this field is what ultimately drove me to study with
                CoderAcademy and Flat Iron Web Development.
              </p>
            </div>
            <div className="lg:pt-16 xl:pt-0 cursor-pointer w-full lg:w-5/12 lg:mt-0 sm:mt-10 mt-8">
              <div className="w-full grid sm:grid-cols-2 grid-cols-1">
                {/* <!-- Company Founded --> */}
                <div className="pb-5 border-r-2 border-gray-200">
                  <div className="flex justify-between">
                    <div className="w-auto">
                      <h2 className="-mt-2 font-semibold text-xl leading-5 text-gray-800">
                        {" "}
                        Wisconsin
                      </h2>
                      <p className="font-normal text-base leading-6 text-gray-600 mt-2">
                        Born & Raised in La Crosse, lived in Madison & Milwaukee
                      </p>
                    </div>
                    <div className="-mt-1 -mr-2">
                      <svg
                        width="60"
                        height="12"
                        viewBox="0 0 60 12"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="54" cy="6" r="5.5" stroke="#4338CA" />
                        <circle cx="42" cy="6" r="1.5" stroke="#4338CA" />
                        <circle
                          cx="18"
                          cy="6"
                          r="1.5"
                          stroke="#4338CA"
                          strokeOpacity="0.3"
                        />
                        <circle
                          cx="34"
                          cy="6"
                          r="1.5"
                          stroke="#4338CA"
                          strokeOpacity="0.7"
                        />
                        <circle
                          cx="10"
                          cy="6"
                          r="1.5"
                          stroke="#4338CA"
                          strokeOpacity="0.2"
                        />
                        <circle
                          cx="26"
                          cy="6"
                          r="1.5"
                          stroke="#4338CA"
                          strokeOpacity="0.5"
                        />
                        <circle
                          cx="2"
                          cy="6"
                          r="1.5"
                          stroke="#4338CA"
                          strokeOpacity="0.1"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div></div>

                {/* <!-- Denver --> */}
                <div className="sm:hidden block pb-5 border-r-2 border-gray-200">
                  <div className="flex justify-between">
                    <div className="w-auto">
                      <h2 className="font-semibold text-xl leading-5 text-gray-800">
                        Denver, CO
                      </h2>
                      <p className="font-normal text-base leading-6 text-gray-600 mt-2">
                        We lived in Denver for 5 years
                      </p>
                    </div>
                    <div className="mt-1 -mr-2">
                      <svg
                        width="60"
                        height="12"
                        viewBox="0 0 60 12"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="54" cy="6" r="5.5" stroke="#4338CA" />
                        <circle cx="42" cy="6" r="1.5" stroke="#4338CA" />
                        <circle
                          cx="18"
                          cy="6"
                          r="1.5"
                          stroke="#4338CA"
                          strokeOpacity="0.3"
                        />
                        <circle
                          cx="34"
                          cy="6"
                          r="1.5"
                          stroke="#4338CA"
                          strokeOpacity="0.7"
                        />
                        <circle
                          cx="10"
                          cy="6"
                          r="1.5"
                          stroke="#4338CA"
                          strokeOpacity="0.2"
                        />
                        <circle
                          cx="26"
                          cy="6"
                          r="1.5"
                          stroke="#4338CA"
                          strokeOpacity="0.5"
                        />
                        <circle
                          cx="2"
                          cy="6"
                          r="1.5"
                          stroke="#4338CA"
                          strokeOpacity="0.1"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* <!-- Denver ENDS--> */}

                <div className="border-r-2 border-gray-200"></div>

                {/* <!-- Denver monthly Views --> */}

                <div className="sm:block hidden pb-7">
                  <div className="flex justify-between">
                    <div className="-mt-1 -ml-2">
                      <svg
                        className=""
                        width="60"
                        height="12"
                        viewBox="0 0 60 12"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="6"
                          cy="6"
                          r="5.5"
                          transform="rotate(-180 6 6)"
                          stroke="#4338CA"
                        />
                        <circle
                          cx="18"
                          cy="6"
                          r="1.5"
                          transform="rotate(-180 18 6)"
                          stroke="#4338CA"
                        />
                        <circle
                          cx="42"
                          cy="6"
                          r="1.5"
                          transform="rotate(-180 42 6)"
                          stroke="#4338CA"
                          strokeOpacity="0.3"
                        />
                        <circle
                          cx="26"
                          cy="6"
                          r="1.5"
                          transform="rotate(-180 26 6)"
                          stroke="#4338CA"
                          strokeOpacity="0.7"
                        />
                        <circle
                          cx="50"
                          cy="6"
                          r="1.5"
                          transform="rotate(-180 50 6)"
                          stroke="#4338CA"
                          strokeOpacity="0.2"
                        />
                        <circle
                          cx="34"
                          cy="6"
                          r="1.5"
                          transform="rotate(-180 34 6)"
                          stroke="#4338CA"
                          strokeOpacity="0.5"
                        />
                        <circle
                          cx="58"
                          cy="6"
                          r="1.5"
                          transform="rotate(-180 58 6)"
                          stroke="#4338CA"
                          strokeOpacity="0.1"
                        />
                      </svg>
                    </div>
                    <div className="ml-auto w-auto">
                      <h2 className="-mt-2 font-semibold text-xl leading-5 text-gray-800">
                        Denver, CO
                      </h2>
                      <p className="font-normal text-base leading-6 text-gray-600 mt-2">
                        We lived in Denver for 5 years
                      </p>
                    </div>
                  </div>
                </div>

                <div></div>

                {/* <!-- Melbourne --> */}

                <div className="sm:hidden block pb-5 border-r-2 border-gray-200">
                  <div className="flex justify-between">
                    <div className="w-auto">
                      <h2 className="-mt-2 font-semibold text-xl leading-5 text-gray-800">
                        Melbourne, AU
                      </h2>
                      <p className="font-normal text-base leading-6 text-gray-600 mt-2">
                        Lived in Melbourne for almost 3 years
                      </p>
                    </div>
                    <div className="-mt-1 -mr-2">
                      <svg
                        width="60"
                        height="12"
                        viewBox="0 0 60 12"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="54" cy="6" r="5.5" stroke="#4338CA" />
                        <circle cx="42" cy="6" r="1.5" stroke="#4338CA" />
                        <circle
                          cx="18"
                          cy="6"
                          r="1.5"
                          stroke="#4338CA"
                          strokeOpacity="0.3"
                        />
                        <circle
                          cx="34"
                          cy="6"
                          r="1.5"
                          stroke="#4338CA"
                          strokeOpacity="0.7"
                        />
                        <circle
                          cx="10"
                          cy="6"
                          r="1.5"
                          stroke="#4338CA"
                          strokeOpacity="0.2"
                        />
                        <circle
                          cx="26"
                          cy="6"
                          r="1.5"
                          stroke="#4338CA"
                          strokeOpacity="0.5"
                        />
                        <circle
                          cx="2"
                          cy="6"
                          r="1.5"
                          stroke="#4338CA"
                          strokeOpacity="0.1"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* <!-- Melbourne Responsiveness ENDS--> */}

                <div></div>

                {/* <!-- Melbourne --> */}

                <div className="sm:block hidden pb-5 border-r-2 border-gray-200">
                  <div className="flex justify-between">
                    <div className="w-auto">
                      <h2 className="font-semibold text-xl leading-5 text-gray-800">
                        Melborune, AU
                      </h2>
                      <p className="font-normal text-base leading-6 text-gray-600 mt-2">
                        Lived in Melbourne for almost 3 years
                      </p>
                    </div>
                    <div className="mt-1 -mr-2">
                      <svg
                        width="60"
                        height="12"
                        viewBox="0 0 60 12"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="54" cy="6" r="5.5" stroke="#4338CA" />
                        <circle cx="42" cy="6" r="1.5" stroke="#4338CA" />
                        <circle
                          cx="18"
                          cy="6"
                          r="1.5"
                          stroke="#4338CA"
                          strokeOpacity="0.3"
                        />
                        <circle
                          cx="34"
                          cy="6"
                          r="1.5"
                          stroke="#4338CA"
                          strokeOpacity="0.7"
                        />
                        <circle
                          cx="10"
                          cy="6"
                          r="1.5"
                          stroke="#4338CA"
                          strokeOpacity="0.2"
                        />
                        <circle
                          cx="26"
                          cy="6"
                          r="1.5"
                          stroke="#4338CA"
                          strokeOpacity="0.5"
                        />
                        <circle
                          cx="2"
                          cy="6"
                          r="1.5"
                          stroke="#4338CA"
                          strokeOpacity="0.1"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div></div>

                {/* <!-- Cape Town Responsiveness STARTS--> */}

                <div className="sm:hidden block pb-5 border-r-2 border-gray-200">
                  <div className="flex justify-between">
                    <div className="w-auto">
                      <h2 className="font-semibold text-xl leading-5 text-gray-800">
                        Cape Town South Africa
                      </h2>
                      <p className="font-normal text-base leading-6 text-gray-600 mt-2">
                        Spent a year loving South Africa
                      </p>
                    </div>
                    <div className="mt-1 -mr-2">
                      <svg
                        width="60"
                        height="12"
                        viewBox="0 0 60 12"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="54" cy="6" r="5.5" stroke="#4338CA" />
                        <circle cx="42" cy="6" r="1.5" stroke="#4338CA" />
                        <circle
                          cx="18"
                          cy="6"
                          r="1.5"
                          stroke="#4338CA"
                          strokeOpacity="0.3"
                        />
                        <circle
                          cx="34"
                          cy="6"
                          r="1.5"
                          stroke="#4338CA"
                          strokeOpacity="0.7"
                        />
                        <circle
                          cx="10"
                          cy="6"
                          r="1.5"
                          stroke="#4338CA"
                          strokeOpacity="0.2"
                        />
                        <circle
                          cx="26"
                          cy="6"
                          r="1.5"
                          stroke="#4338CA"
                          strokeOpacity="0.5"
                        />
                        <circle
                          cx="2"
                          cy="6"
                          r="1.5"
                          stroke="#4338CA"
                          strokeOpacity="0.1"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* <!-- Cape Town For Responsiveness ENDS--> */}

                <div className="border-r-2 border-gray-200"></div>

                {/* <!-- Cape Town --> */}

                <div className="sm:block hidden pb-5">
                  <div className="flex justify-between">
                    <div className="-mt-1 -ml-2">
                      <svg
                        className=""
                        width="60"
                        height="12"
                        viewBox="0 0 60 12"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="6"
                          cy="6"
                          r="5.5"
                          transform="rotate(-180 6 6)"
                          stroke="#4338CA"
                        />
                        <circle
                          cx="18"
                          cy="6"
                          r="1.5"
                          transform="rotate(-180 18 6)"
                          stroke="#4338CA"
                        />
                        <circle
                          cx="42"
                          cy="6"
                          r="1.5"
                          transform="rotate(-180 42 6)"
                          stroke="#4338CA"
                          strokeOpacity="0.3"
                        />
                        <circle
                          cx="26"
                          cy="6"
                          r="1.5"
                          transform="rotate(-180 26 6)"
                          stroke="#4338CA"
                          strokeOpacity="0.7"
                        />
                        <circle
                          cx="50"
                          cy="6"
                          r="1.5"
                          transform="rotate(-180 50 6)"
                          stroke="#4338CA"
                          strokeOpacity="0.2"
                        />
                        <circle
                          cx="34"
                          cy="6"
                          r="1.5"
                          transform="rotate(-180 34 6)"
                          stroke="#4338CA"
                          strokeOpacity="0.5"
                        />
                        <circle
                          cx="58"
                          cy="6"
                          r="1.5"
                          transform="rotate(-180 58 6)"
                          stroke="#4338CA"
                          strokeOpacity="0.1"
                        />
                      </svg>
                    </div>
                    <div className="ml-auto w-auto">
                      <h2 className="-mt-2 w-auto font-semibold text-xl leading-5 text-gray-800">
                        Cape Town, South Africa
                      </h2>
                      <p className="w-auto font-normal text-base leading-6 text-gray-600 mt-2">
                        Spent a year loving South Africa
                      </p>
                    </div>
                  </div>
                </div>

                {/* added 2 lines */}
                <div></div>

                {/* <!-- Start Tokyo--> */}

                <div className="sm:hidden block pb-5 border-r-2 border-gray-200">
                  <div className="flex justify-between">
                    <div className="w-auto">
                      <h2 className="-mt-2 font-semibold text-xl leading-5 text-gray-800">
                        Tokyo, Japan
                      </h2>
                      <p className="font-normal text-base leading-6 text-gray-600 mt-2">
                        Our current residence for nearly 3 years
                      </p>
                    </div>
                    <div className="-mt-1 -mr-2">
                      <svg
                        width="60"
                        height="12"
                        viewBox="0 0 60 12"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="54" cy="6" r="5.5" stroke="#4338CA" />
                        <circle cx="42" cy="6" r="1.5" stroke="#4338CA" />
                        <circle
                          cx="18"
                          cy="6"
                          r="1.5"
                          stroke="#4338CA"
                          strokeOpacity="0.3"
                        />
                        <circle
                          cx="34"
                          cy="6"
                          r="1.5"
                          stroke="#4338CA"
                          strokeOpacity="0.7"
                        />
                        <circle
                          cx="10"
                          cy="6"
                          r="1.5"
                          stroke="#4338CA"
                          strokeOpacity="0.2"
                        />
                        <circle
                          cx="26"
                          cy="6"
                          r="1.5"
                          stroke="#4338CA"
                          strokeOpacity="0.5"
                        />
                        <circle
                          cx="2"
                          cy="6"
                          r="1.5"
                          stroke="#4338CA"
                          strokeOpacity="0.1"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* <!-- Tokyo Responsiveness ENDS--> */}

                <div></div>

                {/* <!-- Tokyo --> */}

                <div className="sm:block hidden pb-5 border-r-2 border-gray-200">
                  <div className="flex justify-between">
                    <div className="w-auto">
                      <h2 className="font-semibold text-xl leading-5 text-gray-800">
                        Tokyo, Japan
                      </h2>
                      <p className="font-normal text-base leading-6 text-gray-600 mt-2">
                        Our current residence for nearly 3 years
                      </p>
                    </div>
                    <div className="mt-1 -mr-2">
                      <svg
                        width="60"
                        height="12"
                        viewBox="0 0 60 12"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="54" cy="6" r="5.5" stroke="#4338CA" />
                        <circle cx="42" cy="6" r="1.5" stroke="#4338CA" />
                        <circle
                          cx="18"
                          cy="6"
                          r="1.5"
                          stroke="#4338CA"
                          strokeOpacity="0.3"
                        />
                        <circle
                          cx="34"
                          cy="6"
                          r="1.5"
                          stroke="#4338CA"
                          strokeOpacity="0.7"
                        />
                        <circle
                          cx="10"
                          cy="6"
                          r="1.5"
                          stroke="#4338CA"
                          strokeOpacity="0.2"
                        />
                        <circle
                          cx="26"
                          cy="6"
                          r="1.5"
                          stroke="#4338CA"
                          strokeOpacity="0.5"
                        />
                        <circle
                          cx="2"
                          cy="6"
                          r="1.5"
                          stroke="#4338CA"
                          strokeOpacity="0.1"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div></div>
                <div className="sm:hidden block pb-5 border-r-2 border-gray-200">
                  <div className="flex justify-between">
                    <div className="w-auto">
                      <h2 className="font-semibold text-xl leading-5 text-gray-800">
                        In the Planning Stages
                      </h2>
                      <p className="font-normal text-base leading-6 text-gray-600 mt-2">
                        Where to next? Stay tuned.
                      </p>
                    </div>
                    <div className="mt-1 -mr-2">
                      <svg
                        width="60"
                        height="12"
                        viewBox="0 0 60 12"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="54" cy="6" r="5.5" stroke="#4338CA" />
                        <circle cx="42" cy="6" r="1.5" stroke="#4338CA" />
                        <circle
                          cx="18"
                          cy="6"
                          r="1.5"
                          stroke="#4338CA"
                          strokeOpacity="0.3"
                        />
                        <circle
                          cx="34"
                          cy="6"
                          r="1.5"
                          stroke="#4338CA"
                          strokeOpacity="0.7"
                        />
                        <circle
                          cx="10"
                          cy="6"
                          r="1.5"
                          stroke="#4338CA"
                          strokeOpacity="0.2"
                        />
                        <circle
                          cx="26"
                          cy="6"
                          r="1.5"
                          stroke="#4338CA"
                          strokeOpacity="0.5"
                        />
                        <circle
                          cx="2"
                          cy="6"
                          r="1.5"
                          stroke="#4338CA"
                          strokeOpacity="0.1"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* <!-- Tokyo For Responsiveness ENDS--> */}

                <div className=""></div>

                {/* <!-- Tokyo --> */}

                <div className="sm:block hidden pb-5">
                  <div className="flex justify-between">
                    <div className="-mt-1 -ml-2">
                      <svg
                        className=""
                        width="60"
                        height="12"
                        viewBox="0 0 60 12"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="6"
                          cy="6"
                          r="5.5"
                          transform="rotate(-180 6 6)"
                          stroke="#4338CA"
                        />
                        <circle
                          cx="18"
                          cy="6"
                          r="1.5"
                          transform="rotate(-180 18 6)"
                          stroke="#4338CA"
                        />
                        <circle
                          cx="42"
                          cy="6"
                          r="1.5"
                          transform="rotate(-180 42 6)"
                          stroke="#4338CA"
                          strokeOpacity="0.3"
                        />
                        <circle
                          cx="26"
                          cy="6"
                          r="1.5"
                          transform="rotate(-180 26 6)"
                          stroke="#4338CA"
                          strokeOpacity="0.7"
                        />
                        <circle
                          cx="50"
                          cy="6"
                          r="1.5"
                          transform="rotate(-180 50 6)"
                          stroke="#4338CA"
                          strokeOpacity="0.2"
                        />
                        <circle
                          cx="34"
                          cy="6"
                          r="1.5"
                          transform="rotate(-180 34 6)"
                          stroke="#4338CA"
                          strokeOpacity="0.5"
                        />
                        <circle
                          cx="58"
                          cy="6"
                          r="1.5"
                          transform="rotate(-180 58 6)"
                          stroke="#4338CA"
                          strokeOpacity="0.1"
                        />
                      </svg>
                    </div>
                    <div className="ml-auto w-auto">
                      <h2 className="-mt-2 w-auto font-semibold text-xl leading-5 text-gray-800">
                        In the Planning Stages
                      </h2>
                      <p className="w-auto font-normal text-base leading-6 text-gray-600 mt-2">
                        Where to next? Stay tuned.
                      </p>
                    </div>
                  </div>
                </div>
                {/* ended 2 lines */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="py-8 bg-gray-100">
          <div className="container mx-auto pb-12 px-6 lg:px-0">
            <div>
              <h2 className="text-3xl text-center font-bold pt-4">
                15 Facts about me
              </h2>
              <p className="text-xl text-center font-semibold pb-12">
                Things that you might not know
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-5 sm:grid-cols-1 ">
              <div className="flex bg-white rounded shadow border border-blue-400">
                <div className="w-1/12 flex items-center justify-center text-3xl bg-blue-400 rounded-l">
                  1
                </div>
                <div className="p-4">
                  I dated my partner for 11 years before finally settling down,
                  LOL! (Love you Kalpana)
                </div>
              </div>
              <div className="flex bg-white rounded shadow border border-blue-400">
                <div
                  className="w-1/12 flex items-center justify-center text-3xl bg-blue-400 rounded-l">
                  2
                </div>
                <div className="p-4">
                  I was adopted at a young age and have the best parents in the
                  world (Rog & Carol)
                </div>
              </div>
              <div className="flex bg-white rounded shadow border border-blue-400">
                <div className="w-1/12 flex items-center justify-center text-3xl bg-blue-400 rounded-l">
                  3
                </div>
                <div className="p-4">
                  My favorite sports team is the Green Bay Packers (WI Badgers a
                  close 2nd)
                </div>
              </div>
              <div className="flex bg-white rounded  shadow border border-blue-400">
                <div className="w-1/12 flex items-center justify-center text-3xl bg-blue-400 rounded-l">
                  4
                </div>
                <div className="p-4">
                  I am a professional chef who has chosen to code
                </div>
              </div>
              <div className="flex bg-white rounded  shadow border border-blue-400">
                <div className="w-1/12 flex items-center justify-center text-3xl bg-blue-400 rounded-l">
                  5
                </div>
                <div className="p-4">
                  My first cooking job was at a McDonalds
                </div>
              </div>
              <div className="flex bg-white rounded  shadow border border-blue-400">
                <div className="w-1/12 flex items-center justify-center text-3xl bg-blue-400">
                  6
                </div>
                <div className="p-4">
                  I am a level 1 Sommelier (a wine waiter)
                </div>
              </div>
              <div className="flex bg-white rounded  shadow border border-blue-400">
                <div className="w-1/12 flex items-center justify-center text-3xl bg-blue-400 rounded-l">
                  7
                </div>
                <div className="p-4">
                  I hate stuffed peppers with tomato sauce (sorry Mom)
                </div>
              </div>
              <div className="flex bg-white rounded  shadow border border-blue-400">
                <div className="w-1/12 flex items-center justify-center text-3xl bg-blue-400 rounded-l">
                  8
                </div>
                <div className="p-4">
                  I am a Sci-Fi nerd who will watch any movie in that genre
                </div>
              </div>
              <div className="flex bg-white rounded  shadow border border-blue-400">
                <div className="w-1/12 flex items-center justify-center text-3xl bg-blue-400 rounded-l">
                  9
                </div>
                <div className="p-4">
                  My music of choice over a lifetime has been the 60s and 70s
                  rock
                </div>
              </div>
              <div className="flex bg-white rounded  shadow border border-blue-400">
                <div className="w-1/12 flex items-center justify-center text-3xl bg-blue-400 rounded-l">
                  10
                </div>
                <div className="p-4">
                  I once thought politics was a good career choice
                </div>
              </div>
              <div className="flex bg-white rounded  shadow border border-blue-400">
                <div className="w-1/12 flex items-center justify-center text-3xl bg-blue-400 rounded-l">
                  11
                </div>
                <div className="p-4">
                  I once hit a half-court shot and won a year’s worth of Burger
                  King Whoppers
                </div>
              </div>
              <div className="flex bg-white rounded  shadow border border-blue-400">
                <div className="w-1/12 flex items-center justify-center text-3xl bg-blue-400 rounded-l">
                  12
                </div>
                <div className="p-4">
                  My first job was detasseling corn on a local farm
                </div>
              </div>
              <div className="flex bg-white rounded  shadow border border-blue-400">
                <div className="w-1/12 flex items-center justify-center text-3xl bg-blue-400 rounded-l">
                  13
                </div>
                <div className="p-4">
                  If I could choose any profession, it would be a Pro Basketball
                  Player
                </div>
              </div>
              <div className="flex bg-white rounded  shadow border border-blue-400">
                <div className="w-1/12 flex items-center justify-center text-3xl bg-blue-400 rounded-l">
                  14
                </div>
                <div className="p-4">
                  My favorite meal is weekend brunch (satisfying and relaxing)
                </div>
              </div>
              <div className="flex bg-white rounded  shadow border border-blue-400">
                <div className="w-1/12 flex items-center justify-center text-3xl bg-blue-400 rounded-l">
                  15
                </div>
                <div className="p-4">
                  My first car was a 66′ Mustang and I lost my license in 2
                  months
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
