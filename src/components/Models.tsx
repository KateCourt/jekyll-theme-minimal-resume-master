import { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import IconButton from '@mui/material/IconButton'
import Collapse from '@mui/material/Collapse'

const organInfo = [
  {
    title: 'Liver',
    image: 'organ-icons/liver-light.png',
    text: 'The liver model is currently on version 2.0 and can consistently assess steatosis accurately to within 0.4 of the value that the majority of surgeons have scored the image.',
  },
  {
    title: 'Kidney',
    image: 'organ-icons/kidney-light.png',
    text: 'The kidney model is currently on version 1.0 and can consistently assess the perfusion within a kidney to within 0.5 of the value that the majority of surgeons have scored the image.',
  },
  {
    title: 'Pancreas',
    image: 'organ-icons/pancreas-light.png',
    text: 'The pancreas model is currently awaiting development.',
  },
]

const Models = () => {
  const [expanded, setExpanded] = useState(Array(3).fill(false))

  const handleExpandClick = (index: number) => {
    const newExpanded = [...expanded]
    newExpanded[index] = !newExpanded[index]
    setExpanded(newExpanded)
  }

  return (
    <div className="mt-6 mb-12 sm:mt-12 sm:mb-24 xl:mx-24">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8">
        Models
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 mx-12 sm:mx-8 lg:grid-cols-3 lg:gap-6 lg:mx-12 xl:mx-24 2xl:mx-64 gap-12 sm:gap-8 xl:gap-12 2xl:gap-18 px-2 sm:px-4">
        {organInfo.map((info, index) => (
          <div
            key={index}
            className="group/container flex flex-col text-center rounded-lg p-2 sm:p-8 space-y-4 text-black dark:text-white shadow-md">
            <div className="w-full flex justify-center">
              <img
                src={`/${info.image}`}
                className="rounded-xl"
                width={180}
                height={180}
                alt={info.title}
              />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">{info.title}</h2>
            <div
              onClick={() => handleExpandClick(index)}
              className="group group-hover:text-teal-500 cursor-pointer rounded-full hover:bg-gray-800 dark:hover:bg-white">
              <IconButton
                aria-expanded={expanded[index]}
                aria-label="show more"
                className="">
                <ExpandMoreIcon className="group-hover/container:text-teal-500 text-gray-800 group-hover:text-white dark:text-white dark:group-hover:text-gray-800" />
              </IconButton>
            </div>
            <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
              <p className="text-md">{info.text}</p>
            </Collapse>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Models
