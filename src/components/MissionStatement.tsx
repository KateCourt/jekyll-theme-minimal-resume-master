import React from 'react'

const MissionStatement: React.FC = () => {
  return (
    <div className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 bg-transparent transition-colors duration-500">
      <div className="max-w-4xl mx-12 sm:mx-auto text-center">
        <div className="flex justify-center items-center space-x-2 mb-4"></div>
        <h2 className="text-2xl sm:text-3xl leading-9 font-bold text-gray-900 dark:text-white sm:leading-10">
          Our Mission
        </h2>
        <p className="mt-4 text-md xl:text-xl leading-10 text-gray-600 dark:text-gray-300">
          Each year thousands of viable organs are wasted due to poor management
          and quality assessment. Our mission is to leverage modern machine
          learning techniques to generate robust automated predictions of
          transplant viability from images of donor organs.
        </p>
      </div>
    </div>
  )
}

export default MissionStatement
