import React from 'react'

const Services = () => {
  return (
    <>
    <section className="py-12 bg-white">
    <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight text-center">Project Management</h2>
        <p className="mt-2 text-lg text-center text-gray-600">as a Project Manager yu have to have have your fingers in every aspect of the project. managing the project is not quite enought though. It must be on time and within budget for all stake holders to be happy.</p>
        <div className="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">

            <div className="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 hover:bg-gray-200  sm:rounded-xl">
                <div className="p-3 text-white bg-blue-500 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5"></path><circle cx="6" cy="14" r="3"></circle><path d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5"></path></svg>
                </div>
                <h4 className="text-xl font-medium text-gray-700 ">Google Tag Manager</h4>
                <p className="text-base text-center text-gray-500 ">The technology that allows regular people to add scripts to their website without needing a developer.</p>
            </div>

            <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl hover:bg-gray-200">
                <div className="p-3 text-white bg-blue-500 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 8a3 3 0 0 1 0 6"></path><path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5"></path><path d="M12 8h0l4.524 -3.77a0.9 .9 0 0 1 1.476 .692v12.156a0.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8"></path></svg>
                </div>
                <h4 className="text-xl font-medium text-gray-700">Web Development</h4>
                <p className="text-base text-center text-gray-500">I love building things for the interwebs and use HTML, CSS, and Javascript. For more complex projects React or Next.js.</p>
            </div>

            <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl hover:bg-gray-200">
                <div className="p-3 text-white bg-blue-500 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3"></polyline><line x1="12" y1="12" x2="20" y2="7.5"></line><line x1="12" y1="12" x2="12" y2="21"></line><line x1="12" y1="12" x2="4" y2="7.5"></line><line x1="16" y1="5.25" x2="8" y2="9.75"></line></svg>
                </div>
                <h4 className="text-xl font-medium text-gray-700">SEO</h4>
                <p className="text-base text-center text-gray-500">Search Engine Optimization changes every few months but ranking high is always a priority for businesses.</p>
            </div>

            <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl hover:bg-gray-200">
                <div className="p-3 text-white bg-blue-500 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 9l3 3l-3 3"></path><line x1="13" y1="15" x2="16" y2="15"></line><rect x="3" y="4" width="18" height="16" rx="2"></rect></svg>
                </div>
                <h4 className="text-xl font-medium text-gray-700">Web Analytics</h4>
                <p className="text-base text-center text-gray-500">You can't improve what you don't measure. we use analytics to improve conversions and ranking.</p>
            </div>

            <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl hover:bg-gray-200">
                <div className="p-3 text-white bg-blue-500 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="9.5" y1="11" x2="9.51" y2="11"></line><line x1="14.5" y1="11" x2="14.51" y2="11"></line><path d="M9.5 15a3.5 3.5 0 0 0 5 0"></path><path d="M7 5h1v-2h8v2h1a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3v1h-10v-1a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3"></path></svg>
                </div>
                <h4 className="text-xl font-medium text-gray-700">FB and Google Ads</h4>
                <p className="text-base text-center text-gray-500">It is no longer about getting traffic, it is about getting targeted and relevant visitors to your offers.</p>
            </div>

            <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl hover:bg-gray-200">
                <div className="p-3 text-white bg-blue-500 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="15" y1="5" x2="15" y2="7"></line><line x1="15" y1="11" x2="15" y2="13"></line><line x1="15" y1="17" x2="15" y2="19"></line><path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2"></path></svg>
                </div>
                <h4 className="text-xl font-medium text-gray-700">Content Creation</h4>
                <p className="text-base text-center text-gray-500">We find the top keywords, consumer questions, and blog topics for you to answer on your site.</p>
            </div>

        </div>
    </div>
</section>


<section className="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
    <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">

       {/* Image */}
        <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
            <img src="https://cdn.devdojo.com/images/december2020/productivity.png" className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 " />
        </div>

        {/* Content */}
        <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
            <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                Boost Productivity
            </h2>
            <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
                Build an atmosphere that creates productivity in your organization and your company culture.
            </p>
            <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Maximize productivity and growth
                </li>
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Speed past your competition
                </li>
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Learn the top techniques
                </li>
            </ul>
        </div>
        {/* End  Content */}
    </div>
    <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">

        {/* Content */}
        <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
            <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                Automated Tasks
            </h2>
            <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
                Save time and money with our revolutionary services. We are the leaders in the industry.
            </p>
            <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Automated task management workflow
                </li>
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Detailed analytics for your data
                </li>
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Some awesome integrations
                </li>
            </ul>
        </div>
        {/* End  Content */}

        {/* Image */}
        <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
            <img src="https://cdn.devdojo.com/images/december2020/settings.png" className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32" />
        </div>
    </div>
</section>

</>
  )
}

export default Services
