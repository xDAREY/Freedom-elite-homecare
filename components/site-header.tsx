'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

type SiteHeaderProps = { announcement?: boolean }

export function SiteHeader({ announcement = false }: SiteHeaderProps) {
  const pathname = usePathname()
  const [menu, setMenu] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const closeMenu = () => { setMenu(false); setOpenDropdown(null) }
  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href)
  const gappActive = pathname.startsWith('/gapp') || pathname.startsWith('/how-it-works')
  const servicesActive = pathname.startsWith('/services') || pathname.startsWith('/careers')

  return <>
    {announcement && <div className="announcement">Now serving families across Georgia <Link href="/contact">Check our service area →</Link></div>}
    <header className="header">
      <Link href="/" className="brand" onClick={closeMenu}>Freedom <span>Elite</span><small>HOME CARE</small></Link>
      <nav className={menu ? 'nav open' : 'nav'} aria-label="Primary navigation">
        <Link className={isActive('/') ? 'active' : ''} href="/" onClick={closeMenu}>Home</Link>
        <div className="nav-dropdown">
          <button className={servicesActive ? 'nav-parent active' : 'nav-parent'} type="button" aria-haspopup="true" aria-expanded={openDropdown === 'services'} onClick={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')}>Services <span aria-hidden="true">⌄</span></button>
          <div className={openDropdown === 'services' ? 'dropdown-menu open' : 'dropdown-menu'}>
            <Link className={pathname.startsWith('/services') ? 'active' : ''} href="/services" onClick={closeMenu}>Services</Link>
            <Link className={pathname.startsWith('/careers') ? 'active' : ''} href="/careers" onClick={closeMenu}>Careers</Link>
          </div>
        </div>
        <div className="nav-dropdown">
          <button className={gappActive ? 'nav-parent active' : 'nav-parent'} type="button" aria-haspopup="true" aria-expanded={openDropdown === 'gapp'} onClick={() => setOpenDropdown(openDropdown === 'gapp' ? null : 'gapp')}>GAPP Guide <span aria-hidden="true">⌄</span></button>
          <div className={openDropdown === 'gapp' ? 'dropdown-menu open' : 'dropdown-menu'}>
            <Link className={pathname.startsWith('/gapp') ? 'active' : ''} href="/gapp" onClick={closeMenu}>GAPP Guide</Link>
            <Link className={pathname.startsWith('/how-it-works') ? 'active' : ''} href="/how-it-works" onClick={closeMenu}>How It Works</Link>
          </div>
        </div>
        <Link className={isActive('/about') ? 'active' : ''} href="/about" onClick={closeMenu}>About</Link>
        <Link className={isActive('/contact') ? 'active' : ''} href="/contact" onClick={closeMenu}>Contact</Link>
      </nav>
      <div className="header-actions"><a className="phone" href="tel:4707369530">470-736-9530</a><Link className="button primary" href="/contact">Request Care</Link><button className="menu-button" type="button" aria-label={menu ? 'Close navigation' : 'Open navigation'} aria-expanded={menu} onClick={() => setMenu(!menu)}><span className="menu-icon" aria-hidden="true"><span /><span /><span /></span></button></div>
    </header>
  </>
}