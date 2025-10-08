import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/expertise', label: 'Our Expertise' },
  { to: '/services', label: 'Services' },
  { to: '/clients', label: 'Our Clients' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur border-b border-white/5 bg-navy/70">
      <div className="container-max flex items-center justify-between py-4">
        <Link to="/" className="font-bold tracking-wide text-xl">
          2R
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-textSecondary">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `hover:text-textPrimary transition-colors ${isActive ? 'text-textPrimary' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <Link
          to="/contact"
          className="btn-primary hidden sm:inline-flex"
        >
          Get in touch
        </Link>
      </div>
    </header>
  )
}


