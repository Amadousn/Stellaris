import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from './ui/Button'
import '../styles/ia-enhancements.css'
import Logo from './Logo'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/pricing', label: 'Tarifs' },
    { path: '/about', label: 'À propos' },
    { path: '/contact', label: 'Contact' }
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 bg-primary/70 backdrop-blur-xl shadow-lg shadow-primary/10' : 'py-4'
      }`}
      role="navigation"
      aria-label="Navigation principale"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo Premium */}
          <Link
            to="/"
            className="flex items-center space-x-2"
            aria-label="Accueil Stellaris"
          >
            <Logo size="large" animate={true} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`text-lg font-medium transition-all duration-300 hover:text-secondary relative ${
                  location.pathname === path
                    ? 'text-secondary font-semibold'
                    : 'text-white'
                } stl-nav-link group`}
                aria-current={location.pathname === path ? 'page' : undefined}
              >
                {label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-secondary to-accent group-hover:w-full transition-all duration-300 ${location.pathname === path ? 'w-full' : ''}`}></span>
              </Link>
            ))}
            <Button
              to="/devis"
              variant="primary"
              size="sm"
              className="ml-4 hover:scale-105 hover:shadow-glow transition-all duration-300 animate-pulse-subtle"
            >
              Devis gratuit
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white hover:text-secondary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
          aria-hidden={!isOpen}
        >
          <div className="py-4 space-y-4">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`block text-lg font-medium py-2 transition-colors duration-300 hover:text-secondary ${
                  location.pathname === path
                    ? 'text-secondary font-semibold'
                    : 'text-white'
                } stl-nav-link`}
                onClick={() => setIsOpen(false)}
                aria-current={location.pathname === path ? 'page' : undefined}
              >
                {label}
              </Link>
            ))}
            <Button
              to="/devis"
              variant="primary"
              size="sm"
              className="w-full hover:scale-105 hover:shadow-glow transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Devis gratuit
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
