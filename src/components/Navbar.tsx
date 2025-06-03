import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from './ui/Button'
import Logo from './Logo'
import '../styles/ia-enhancements.css'
import ThemeToggle from './ui/ThemeToggle'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  // Le thème est géré via le composant ThemeToggle

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/about', label: 'À propos' },
    { path: '/comptabilite', label: 'Comptabilité' }
  ]

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false
    return location.pathname.startsWith(path)
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 font-poppins ${
        isScrolled ? 'py-8' : 'py-14'
      }`}
    >
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="absolute inset-0 backdrop-blur-md bg-gradient-to-b from-primary/70 to-primary/30" />
        {/* Bordure lumineuse subtile avec dégradé coloré */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-purple-500/30 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        <div className={`flex items-center justify-between ${isScrolled ? 'h-24' : 'h-36'} transition-all duration-500 px-10 border-b border-blue-500/20`}>
          {/* Logo */}
          <div className="flex-shrink-0 scale-125">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="flex-1 flex justify-center ml-12">
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative text-base font-medium tracking-wide transition-all duration-300 group ${
                    isActive(item.path)
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {/* Indicateur de page active - Lueur subtile */}
                  {isActive(item.path) && (
                    <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-indigo-400/60 to-purple-400/60" />
                  )}
                  
                  {/* Effet de bordure au survol */}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-indigo-400/60 to-purple-400/60 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>
          </div>

          {/* Actions (Theme, Contact) */}
          <div className="flex items-center space-x-4">
            
            {/* Theme Toggle */}
            <ThemeToggle className="hidden md:block" />
            
            {/* Contact Button */}
            <div className="hidden md:block">
              <Button to="/contact" variant="primary" size="sm" className="relative overflow-hidden group hover:scale-105 transition-transform duration-300 border border-indigo-400/20 bg-gradient-to-r from-indigo-900/70 to-purple-900/70">
                <span className="relative z-10 bg-gradient-to-r from-white via-indigo-100 to-white bg-clip-text text-transparent font-medium">Contact</span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                {/* Effet de reflet glissant */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12 -translate-x-full z-20 animate-shimmer"></div>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 -mr-2 hover:bg-white/5 rounded-lg transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col gap-1">
                <span
                  className={`block h-0.5 bg-current transform transition-all duration-300 ${
                    isOpen ? 'rotate-45 translate-y-1.5 w-6' : 'w-6'
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? 'opacity-0 w-6' : 'w-4 ml-auto'
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current transform transition-all duration-300 ${
                    isOpen ? '-rotate-45 -translate-y-1.5 w-6' : 'w-6'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>


        
        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 relative overflow-hidden group ${
                  isActive(item.path)
                    ? 'text-white bg-gradient-to-r from-indigo-900/20 to-purple-900/20 border-l-2 border-indigo-400/50'
                    : 'text-gray-400 hover:text-white hover:bg-white/5 border-l-2 border-transparent hover:border-indigo-400/20'
                }`}
              >
                {/* Effet de brillance au survol */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
                
                <span className="relative z-10">{item.label}</span>
                <span
                  className={`absolute inset-0 bg-gradient-to-r from-indigo-900/10 to-purple-900/10 transform transition-transform duration-300 ${
                    isActive(item.path) ? 'translate-x-0' : '-translate-x-full'
                  }`}
                />
              </Link>
            ))}
            <div className="pt-4 px-2 space-y-4">
              {/* Theme Toggle in Mobile Menu */}
              <div className="flex items-center justify-between px-4 py-2 rounded-lg bg-white/5">
                <span className="text-sm text-gray-300">Changer de thème</span>
                <ThemeToggle />
              </div>
              
              <Button 
                to="/contact" 
                variant="primary" 
                size="sm" 
                className="w-full bg-gradient-to-r from-indigo-900/70 to-purple-900/70 border border-indigo-400/20 relative overflow-hidden group"
              >
                {/* Effet de brillance */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
                
                <span className="relative z-10 bg-gradient-to-r from-white via-indigo-100 to-white bg-clip-text text-transparent font-medium">Contact</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
