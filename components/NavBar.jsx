import React from 'react'

const NavBar = () => {
  return (
    <section className="w-full px-6 text-gray-700 bg-white ">
        <div className="flex flex-col flex-wrap items-center justify-between pt-6 pb-16 mx-auto md:flex-row max-w-7xl">
          <div className="relative flex flex-col md:flex-row">
            <a
              href="/"
              className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
            >
              <img src="/David_J_Forer.png" alt="Logo" />
            </a>
          </div>

          <div className="inline-flex flex-col items-center sm:flex-row sm:ml-5 lg:justify-end">
            <nav className="flex flex-wrap items-center space-x-4 text-lg font-semibold tracking-wide uppercase sm:space-x-6">
              <a href="/" className="text-gray-500 hover:text-gray-500">
                Home
              </a>
              <a href="/static/Services" className="text-gray-400 hover:text-gray-500">
                Services
              </a>
              <a href="/static/Projects" className="text-gray-400 hover:text-gray-500">
                Projects
              </a>
              <a href="/static/About" className="text-gray-400 hover:text-gray-500">
                About Me
              </a>
              <a href="/static/Blog" className="text-gray-400 hover:text-gray-500">
                Blog
              </a>
              <a href="/static/Contact" className="text-gray-400 hover:text-gray-500">
                Contact
              </a>
            </nav>
            <a
              href="#"
              className="inline-flex tracking-wide uppercase text-xs items-center sm:mt-0 mt-5 sm:ml-8 justify-center px-5 py-2.5 font-semibold text-white bg-indigo-700 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Free E Book
            </a>
          </div>
        </div>
      </section>

  )
}

export default NavBar
