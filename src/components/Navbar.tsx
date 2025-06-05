import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from './ui/Button'
import Logo from './Logo'
import '../styles/ia-enhancements.css'
import ThemeToggle from './ui/ThemeToggle'
import { FaSearch } from 'react-icons/fa'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Dans une application réelle, cela redirigerait vers une page de résultats de recherche
      // Pour l'instant, redirigeons vers la page Services qui est complète
      setIsSearchOpen(false)
      setSearchQuery('')
      window.location.href = '/services'
    }
  }
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
        className={`absolute inset-0 transition-all duration-300 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="absolute inset-0 backdrop-blur-sm bg-primary/90" />
        {/* Bordure simple et professionnelle */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-blue-600/20" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        <div className={`flex items-center justify-between ${isScrolled ? 'h-16' : 'h-24'} transition-all duration-300 px-6 border-b border-blue-600/10`}>
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
                  className={`relative text-sm uppercase font-montserrat font-medium tracking-wide transition-all duration-300 group ${
                    isActive(item.path)
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {/* Indicateur de page active - Ligne simple et professionnelle */}
                  {isActive(item.path) && (
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-600" />
                  )}
                  
                  {/* Effet de bordure au survol */}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-600/70 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>
          </div>

          {/* Actions (Search, Theme, Contact) */}
          <div className="flex-shrink-0 flex items-center space-x-4">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-md hover:bg-blue-600/20 transition-colors duration-300"
              aria-label="Rechercher"
            >
              <FaSearch className="text-gray-300 hover:text-blue-500 transition-colors duration-300" />
            </button>
            
            {/* Theme Toggle */}
            <ThemeToggle className="hidden md:block" />
            
            {/* Contact Button */}
            <div className="hidden md:block">
              <Button
                to="/contact"
                variant="primary"
                size="sm"
                className="relative font-montserrat bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2 transition-colors duration-300"
              >
                <span className="font-medium">Contact</span>
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

        {/* Search Bar */}
        <div
          className={`transition-all duration-300 overflow-hidden ${
            isSearchOpen ? 'max-h-20 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
          }`}
        >
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Rechercher..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-blue-600/20 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-600/50 font-montserrat text-sm"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-600 hover:text-blue-500 transition-colors duration-300"
              aria-label="Lancer la recherche"
            >
              <FaSearch />
            </button>
          </form>
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
                className={`block px-4 py-2.5 text-sm uppercase font-montserrat font-medium transition-all duration-300 relative ${
                  isActive(item.path)
                    ? 'text-white border-l-2 border-blue-600'
                    : 'text-gray-300 hover:text-white border-l-2 border-transparent hover:border-blue-600/50'
                }`}
              >
                <span className="relative">{item.label}</span>
              </Link>
            ))}
            <div className="pt-4 px-2 space-y-4">
              {/* Theme Toggle in Mobile Menu */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-blue-600/10">
                <span className="text-sm font-montserrat uppercase text-gray-300">Thème</span>
                <ThemeToggle />
              </div>
              
              <Button
                to="/contact"
                variant="primary"
                size="sm"
                className="relative font-montserrat bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2 transition-colors duration-300"
              >
                <span className="font-medium">Contact</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
