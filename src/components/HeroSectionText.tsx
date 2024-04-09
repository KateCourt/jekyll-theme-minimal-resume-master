import React, { useEffect, useState } from 'react'

const HeroSectionText: React.FC = () => {
  const [activeWord, setActiveWord] = useState('academics')
  const words = ['academics', 'clinicians', 'software engineers']
  const [isHovering, setIsHovering] = useState(false)

  // Change the active word every 2 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveWord((currentWord) => {
        const currentIndex = words.indexOf(currentWord)
        const nextIndex = (currentIndex + 1) % words.length
        return words[nextIndex]
      })
    }, 2000)

    return () => clearInterval(intervalId) // Clean up the interval on component unmount
  })

  // Toggle hover state
  const toggleHover = () => setIsHovering(!isHovering)

  // Class names for hover and size
  const spanClass = `text-5xl md:text-6xl lg:text-7xl`
  const spanHover = isHovering ? `text-teal-500` : `hover:text-teal-500`
  const transitionClass = `transition-colors duration-1000`

  return (
    <div
      className="z-20
       p-5 text-center mb-0">
      <h1 className="tracking-wide text-white font-bold mb-4 text-4xl md:text-5xl lg:text-6xl">
        <div onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
          <span className={`${spanClass} ${spanHover} ${transitionClass}`}>
            O
          </span>
          <span className={`${spanHover} ${transitionClass}`}>r</span>gan{' '}
          <span className={`${spanClass} ${spanHover} ${transitionClass}`}>
            Q
          </span>
          uality{' '}
          <span className={`${spanClass} ${spanHover} ${transitionClass}`}>
            A
          </span>
          ssessment
        </div>
      </h1>
      <p className="mx-auto leading-9 md:w-2/3 lg:w-1/2 text-lg md:text-xl">
        The aim of this project is to leverage modern machine learning
        techniques to generate robust automated predictions of transplant
        viability from images of candidates organs.
      </p>
      <div className="mx-auto grid grid-cols-2 gap mt-2 md:w-2/3 lg:w-1/2 text-lg md:text-xl items-center">
        <div className="flex justify-end">
          <p className="">A collaboration between</p>
        </div>
        <div className="flex justify-start">
          <p className="transition-all ml-2 text-teal-500 font-bold duration-700 opacity-100 md:text-xl">
            {activeWord}.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeroSectionText
