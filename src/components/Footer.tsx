import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-4 bg-gray-900 text-xs md:text-md text-white flex justify-center items-center space-x-4">
      <a href="/" className="hover:underline">
        OrQA © 2024
      </a>
      <span>|</span>
      <a
        href="https://rse.ncldata.dev/"
        className="hover:underline"
        target="_blank"
        rel="noopener noreferrer">
        Developed by Newcastle RSE Team
      </a>
    </footer>
  )
}

export default Footer
