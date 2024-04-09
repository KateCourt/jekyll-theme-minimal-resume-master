const Partners = () => {
  const logos = [
    {
      name: 'Bradford.png',
      altText: 'Bradford University Logo',
      link: 'https://www.bradford.ac.uk/external/',
    },
    {
      name: 'Newcastle-University-Logo.png',
      altText: 'Newcastle University Logo',
      link: 'https://www.ncl.ac.uk/',
    },
    {
      name: 'nhs.png',
      altText: 'Newcastle NHS Trust Logo',
      link: 'https://www.newcastle-hospitals.nhs.uk/',
    },
  ]

  const partnerHover =
    'transition duration-300 transform ease-in-out group-hover:font-semibold group-hover:text-teal-500 group-hover:tracking-wide group-hover:scale-110'

  return (
    <div
      id="about"
      className="flex justify-center flex-col mt-6 mb-12 sm:mt-12 sm:mb-24 lg:mx-12 xl:mx-24 2xl:mx-64 ">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8 mx-auto">
        Partners
      </h1>
      <div className="group text-center self-center space-y-4 lg:space-y-8 mx-12 lg:max-w-7xl">
        <p className="md:text-xl">
          OrQA is an innovative and collaborative project that brings together
          an esteemed consortium of partners, including academic institutions
          and healthcare organizations. Spearheaded by{' '}
          <a
            className={partnerHover}
            href="https://www.newcastle-hospitals.nhs.uk/">
            NHS Newcastle Trust
          </a>
          , this initiative stands as a testament to the power of collaborative
          effort in advancing the frontier of medical research and practice.
        </p>
        <p className="md:text-xl">
          The essence of OrQA lies in its commitment to fostering an environment
          where ideas can be shared freely, challenges can be addressed
          collectively, and solutions can be developed without hinderance.
        </p>
        <p className="md:text-xl">
          As OrQA moves forward, the collaboration between{' '}
          <a
            className={partnerHover}
            href="https://www.bradford.ac.uk/external/">
            Bradford University
          </a>
          ,{' '}
          <a className={partnerHover} href="https://www.ncl.ac.uk/">
            Newcastle University
          </a>
          , and the{' '}
          <a
            className={partnerHover}
            href="https://www.newcastle-hospitals.nhs.uk/">
            NHS Newcastle Trust
          </a>{' '}
          continues to be a model of interdisciplinary cooperation.
        </p>
      </div>
      <div className="flex justify-between xl:space-x-24 mx-12 sm:mx-8 flex-col lg:flex-row lg:mx-12 xl:mx-24 2xl:mx-auto px-2 sm:px-4">
        {logos.map((_, index) => (
          <div
            key={index}
            className="flex flex-col text-center rounded-lg p-2 md:p-8 space-y-2 lg:space-y-4 text-black dark:text-white"></div>
        ))}
      </div>
    </div>
  )
}

export default Partners
