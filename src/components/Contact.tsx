import React, { useEffect, useState } from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import DraftsIcon from '@mui/icons-material/Drafts'
import NotesIcon from '@mui/icons-material/Notes'
import SendIcon from '@mui/icons-material/Send'

const Contact = () => {
  const iconClass =
    'transition duration-300 ease-in-out transform group-hover:scale-110'
  const [activeIcon, setActiveIcon] = useState(0)
  const [sendAnimation, setSendAnimation] = useState(false)

  const handleMailTo = () => {
    window.location.href = `mailto:info@orqa.uk?subject=Contact&body=Hello&unique=${Date.now()}`
  }

  const icons = [
    <DraftsIcon className={iconClass} key={1} style={{ fontSize: '7rem' }} />,
    <NotesIcon className={iconClass} key={2} style={{ fontSize: '7rem' }} />,
    <MailOutlineIcon
      className={iconClass}
      key={3}
      style={{ fontSize: '7rem' }}
    />,
    <SendIcon className={iconClass} key={4} style={{ fontSize: '7rem' }} />,
    // <MailOutlineIcon
    //   className={`${iconClass} ${sendAnimation ? 'send-off-animation' : ''}`}
    // />,`
  ]
  // Change the active icon every 2 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIcon((currentIcon) => {
        const nextIndex = (currentIcon + 1) % icons.length
        if (nextIndex === 4) {
          setSendAnimation(true)
          setTimeout(() => {
            setSendAnimation(false)
            setActiveIcon(0)
          }, 2000)
        }
        return nextIndex
      })
    }, 2000)

    return () => clearInterval(intervalId)
  }, [icons.length])

  return (
    <div
      id="contact"
      className="flex h-[10rem] lg:h-[20rem] w-full py-12 sm:py-24 min-h-full justify-center bg-transparent">
      <div className="group flex flex-row items-center space-x-8 md:space-x-12">
        <button onClick={handleMailTo}>{icons[activeIcon]}</button>
        <div className="transition duration-300 transform ease-in-out group-hover:scale-110 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl ">
          <button onClick={handleMailTo}>Get in touch </button>
        </div>
      </div>
    </div>
  )
}

export default Contact
