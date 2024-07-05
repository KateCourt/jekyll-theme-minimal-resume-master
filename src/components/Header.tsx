import React from 'react'
// import NavLink from './NavLink'

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 w-full flex justify-between items-center py-4 px-8 bg-transparent z-20">
      <div>
        <a
          href="https://transplant-dev.orqa.uk/"
          className="text-xl transition ease-in duration-300 md:text-3xl lg:text-4xl font-bold text-white tracking-widest leading-9 hover:text-teal-500">
          OrQA
        </a>
      </div>
      <nav>
        <ul className="flex space-x-4 md:space-x-12">
          {/* <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/#about">About</NavLink>
          </li>
          <li>
            <NavLink href="/#contact">Contact</NavLink>
          </li> */}
        </ul>
      </nav>
      <div></div>
    </header>
  )
}

export default Header
