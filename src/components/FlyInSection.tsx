'use client'
import React from 'react'
import { useInView } from 'react-intersection-observer'

interface FlyInSectionProps {
  children: React.ReactNode
}

// Will cause any children to fly in from the bottom
const FlyInSection: React.FC<FlyInSectionProps> = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  return (
    <div
      ref={ref}
      className={`transition-transform duration-700 ${
        inView ? 'translate-y-0' : 'translate-y-full'
      }`}>
      {children}
    </div>
  )
}

export default FlyInSection
