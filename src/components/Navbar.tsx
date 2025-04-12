import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Création Site Internet', path: '/creation-site-internet' },
    { name: 'Référencement Naturel', path: '/referencement-naturel' },
    { name: 'Création Graphique', path: '/creation-graphique' },
    { name: 'Référencement Sponsorisé', path: '/referencement-sponsorise' },
    { name: 'Référencement Social', path: '/referencement-social' },
    { name: 'Référencement Vidéo', path: '/referencement-video' },
  ]

  return (
    <nav className="bg-primary/95 backdrop-blur-sm fixed w-full z-50 border-b border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-3xl font-bold group"
          >
            <span className="bg-gradient-to-r from-secondary via-secondary to-accent bg-clip-text text-transparent bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500">
              Stellaris
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 text-sm relative group ${
                  location.pathname === item.path 
                    ? 'text-secondary'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-300 hover:text-secondary transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="px-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 rounded-lg transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-secondary bg-gray-800/50'
                    : 'text-gray-300 hover:text-secondary hover:bg-gray-800/30'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
