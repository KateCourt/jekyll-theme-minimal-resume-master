export default function SignUp() {
  return (
    <div
      id="signup"
      className="flex py-12 sm:py-24 dark:border-t-2 min-h-full justify-center bg-transparent mx-8 sm:mx-12 xl:mx-48">
      <div className="flex flex-col align-center space-y-6 lg:space-y-8 text-center">
        <div className="space-y-2 lg:space-y-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
          <h2>Are you an experienced kidney, liver or pancreas surgeon?</h2>
        </div>
        <p className="text-xs leading-6 md:text-md lg:text-lg text-gray-900 font-normal tracking-wide dark:text-white">
          We need surgeons to score images to increase the quality of OrQA. All
          surgeons that contribute a minimum of one hundred scores will be
          credited on resulting publications.
        </p>
        <a
          href="https://transplant-dev.orqa.uk/register"
          target="_blank"
          className="flex self-center w-1/4 text-md justify-center rounded-md bg-teal-500 px-4 py-2 md:text-lg font-semibold text-white shadow hover:bg-teal-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition duration-300 ease-in-out">
          Sign Up
        </a>
        <p className="text-xs md:text-sm text-gray-900 dark:text-gray-300">
          We care about your data. Read our{' '}
          <a
            href="https://www.ncl.ac.uk/data-protection/"
            className="font-semibold text-teal-500 hover:text-black dark:hover:text-white">
            data protection policy
          </a>
          .
        </p>
      </div>
    </div>
  )
}
