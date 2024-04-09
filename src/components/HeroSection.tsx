import React, { useEffect, useRef } from 'react'
import HeroSectionText from './HeroSectionText'

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Attempt to play the video as soon as the component mounts
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        // Handle the error if autoplay fails
        console.error('Video playback failed:', error)
      })
    }
  }, [])

  return (
    <div className="relative h-screen flex items-center justify-center text-white">
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        className="absolute z-0 w-full h-full object-cover"
        src="/OrQA-Medium.mp4">
        Your browser does not support the video tag.
      </video>
      <div className="absolute z-10 w-full h-full bg-black opacity-50"></div>
      <HeroSectionText />
    </div>
  )
}

export default HeroSection
