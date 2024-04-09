const PrivacyPolicy = () => {
  const headingClass = 'text-4xl'
  const paragraphClass = 'leading-8'
  return (
    <div className="flex-col relative h-full flex p-8 pt-24 lg:p-48 text-black dark:text-white space-y-8">
      <div className="space-y-4">
        <h1 className={`${headingClass}`}>Privacy Policy</h1>
        <p className={`${paragraphClass}`}>
          OrQA is committed to protecting the privacy and security of our
          customers&apos; personal information. This privacy notice explains how
          we collect, use, and share your personal information when you use our
          services, sign up for our newsletters, or interact with our website.
        </p>
      </div>
      <div className="space-y-4">
        <h1 className={`${headingClass}`}>Information We Collect</h1>
        <p className={`${paragraphClass}`}>
          When you register to score images on OrQA, you may be asked to provide
          the following types of information:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="font-bold">Contact Information:</span> Your name,
            email address, and other contact details.
          </li>
          <li>
            <span className="font-bold">Occupational Information:</span> Your
            job title, occupation, and workplace details.
          </li>
          <li>
            <span className="font-bold">Other Information:</span> Any other
            information you voluntarily provide to us through forms or other
            interactions.
          </li>
        </ul>
      </div>
      <div className="space-y-4">
        <h1 className={`${headingClass}`}>How We May Use Your Information</h1>
        <p className={`${paragraphClass}`}>
          We will only use your information to provide verification that you
          have the expertise to accurately score images. We may use your contact
          information to get in touch with you should there be further
          opportunities to contribute to OrQA. If you would like to opt of out
          of any future communications, you can do so in any of the emails sent
          to you.
        </p>
      </div>
      <div className="space-y-4">
        <h1 className={`${headingClass}`}>Sharing Your Information</h1>
        <p className={`${paragraphClass}`}>
          We <span className="font-bold">do not</span> sell your personal
          information. However, we may share your information in the following
          circumstances:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="font-bold">Legal Requirements and Security:</span>
            When required by law, or when we believe in good faith that
            disclosure is necessary to protect our rights, protect your safety
            or the safety of others, investigate fraud, or respond to a
            government request.
          </li>
          <li>
            <span className="font-bold">With Your Consent:</span> We may share
            your information with other third parties with your explicit
            consent.
          </li>
        </ul>
      </div>
      <div className="space-y-4">
        <h1 className={`${headingClass}`}>Data Protection</h1>
        <p className={`${paragraphClass}`}>
          Click{' '}
          <a
            href="https://www.ncl.ac.uk/data-protection/"
            target="_blank"
            className="hover:text-teal-500">
            here
          </a>{' '}
          to view our data protection policy.
        </p>
      </div>
    </div>
  )
}

export default PrivacyPolicy
