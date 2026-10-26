import React, { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X, Terminal } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Work' },
  { to: '/experience', label: 'Experience' },
  { to: '/about', label: 'About' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const linkClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
      isActive
        ? 'text-white bg-wine-gradient shadow-soft'
        : 'text-ink-secondary hover:text-rose-wine hover:bg-surface-soft'
    }`

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-line-soft shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="container-page flex items-center justify-between py-3.5"
        aria-label="Primary"
      >
        <Link
          to="/"
          className="group flex items-center gap-2 font-display text-lg font-bold text-ink-main"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-btn-gradient text-white shadow-soft transition-transform group-hover:scale-105">
            <Terminal className="h-4 w-4" aria-hidden="true" />
          </span>
          <span>
            Divyanshi<span className="text-rose-primary">.</span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.to === '/'} className={linkClass}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid h-11 w-11 place-items-center rounded-xl border border-line-soft bg-white shadow-soft text-rose-wine"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-line-soft bg-white/97 backdrop-blur-md">
          <ul className="container-page flex flex-col py-3">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-white bg-wine-gradient'
                        : 'text-ink-secondary hover:text-rose-wine hover:bg-surface-soft'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
