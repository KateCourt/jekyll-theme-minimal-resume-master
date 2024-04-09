const About = () => {
  const aboutInfo = [
    {
      title: 'Generate Training data',
      text: 'We are developing an application to facilitate transplant experts to view and assess images of organs for transplantability. We are currently looking for transplant professionals to get involved, so if you have the expertise to help we would love to hear from you',
      image: 'data.jpg',
    },
    {
      title: 'Develop machine learning models',
      text: 'Images of organs that have been assessed by experts can then be used to train cutting-edge machine learning models to provide an automated assessment.',
      image: 'develop.jpg',
    },
    {
      title: 'Organ Quality Scoring',
      text: 'The main deliverable of this project will be a tool that allows surgeons to upload a photograph of an organ and receive an automated assessment of how viable the organ is for transplant. This is intended to support decision making around transplantation, in the hopes that we can increase the number of successful transplants in the UK and beyond.',
      image: 'score.jpg',
    },
  ]
  return (
    <div id="about" className="mt-6 mb-12 sm:mt-12 sm:mb-24">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8">About</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-12 sm:mx-8 lg:grid-cols-3 lg:gap-6 lg:mx-12 xl:mx-24 2xl:mx-64 gap-12 sm:gap-8 xl:gap-12 2xl:gap-18 px-2 sm:px-4">
        {aboutInfo.map((info, index) => (
          <div
            key={index}
            className="flex flex-col justify-between text-center rounded-lg border p-4 md:p-8 space-y-4 text-black dark:text-white shadow-md">
            <div className="w-full flex justify-center">
              <img
                src={`/${info.image}`}
                className="rounded-full"
                width={150}
                height={150}
                alt={info.title}
              />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">{info.title}</h2>
            <p className="text-sm sm:text-lg font-light flex-1 leading-7">
              {info.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
