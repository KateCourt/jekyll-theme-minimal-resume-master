import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => {
  const location = useLocation()
  const path = location.pathname
  const [active, setActive] = useState(false)
  // Might not have multiple pages, so active isn't in use currently.
  useEffect(() => {
    if (path == href) setActive(true)
  }, [href, path])

  return (
    <a
      href={href}
      className={`text-white lg:text-lg py-2 relative hover:text-teal-400 active:text-teal-400 ease-in-out mb transition-all duration-400 ${
        !active && 'hover:border-b-4'
      } border-teal-500 ${active && 'text-teal-400 border-b-0'}`}>
      {children}
    </a>
  )
}

export default NavLink
