import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { BiMenu } from 'react-icons/bi'

interface NavigationItemsProps {
  url: string
  label: string
  activeNav: string
  handleNavLinkActive: React.MouseEventHandler<HTMLAnchorElement>
}

const navItems = [
  { url: '#home', label: 'Home' },
  { url: '#skills', label: 'Skills' },
  { url: '#projects', label: 'Projects' },
  { url: '#experience', label: 'Experience' },
]

export default function Navigation() {
  const router = useRouter()
  const [activeNav, setActiveNav] = useState<string>('')
  const [openMobileNav, setOpenMobileNav] = useState<boolean>(false)

  const handleNavLinkActive = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setOpenMobileNav(false)

    const href = (e.target as HTMLAnchorElement)?.href
    if (href && href.includes('#')) {
      setActiveNav('#' + href.split('#')[1])
    } else {
      console.error('Invalid href value in the clicked element.')
    }
  }

  useEffect(() => {
    setActiveNav('#' + router.asPath.split('#')[1])
  }, [])

  return (
    <nav className="bg-[#303030] md:bg-white sticky top-0 z-10 border-b-[1px] py-3">
      <div className="mx-auto sm:w-[93vw] md:w-[90vw] lg:w-[900px]">
        <div className="flex md:hidden justify-between mb-3 md:mb-0 px-3">
          <img
            src="/images/428620546_857791846358566_1232556522448431069_n.jpg"
            alt="LOGO"
            width={48}
            className="rounded-full"
          />
          <button
            onClick={() => setOpenMobileNav((openMobileNav) => !openMobileNav)}
          >
            <BiMenu
              size={28}
              className="text-white"
            />
          </button>
        </div>
        <ul
          className={`md:flex md:gap-6 md:justify-center text-white md:text-[#191919] 
          ${openMobileNav ? 'block' : 'hidden'}`}
        >
          {navItems.map((item) => (
            <li
              key={item.label}
              className="p-3 "
            >
              <NavigationItems
                url={item.url}
                label={item.label}
                activeNav={activeNav}
                handleNavLinkActive={handleNavLinkActive}
              />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

const NavigationItems = ({
  url,
  label,
  activeNav,
  handleNavLinkActive,
}: NavigationItemsProps) => {
  return (
    <a
      href={url}
      className={`active:font-bold  ${activeNav === url && 'font-bold'}`}
      onClick={handleNavLinkActive}
    >
      {label}
    </a>
  )
}
