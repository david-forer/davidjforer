import React from 'react'

const Footer = () => {
  return (
    <footer className="flex items-center justify-center w-full h-24 border-t ">
        <a
          className="flex items-center justify-center"
          href="https://davidjforer.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/David_J_Forer.png" alt="D4" className="h-14 ml-2" />
        </a>
      </footer>
  )
}

export default Footer
