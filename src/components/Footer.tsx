import React from 'react'
import { Link } from 'react-router-dom'
import Button from './ui/Button'
import '../styles/ia-enhancements.css'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { label: 'Création Web', path: '/services#web' },
      { label: 'Applications', path: '/services#apps' },
      { label: 'Design Graphique', path: '/services#design' },
      { label: 'SEO', path: '/services#seo' },
      { label: 'Marketing Digital', path: '/services#marketing' }
    ],
    company: [
      { label: 'À propos', path: '/about' },
      { label: 'Portfolio', path: '/portfolio' },
      { label: 'Carrières', path: '/careers' },
      { label: 'Blog', path: '/blog' }
    ],
    legal: [
      { label: 'Mentions légales', path: '/legal' },
      { label: 'Politique de confidentialité', path: '/privacy' },
      { label: 'CGV', path: '/terms' }
    ],
    social: [
      { label: 'LinkedIn', path: 'https://linkedin.com', external: true },
      { label: 'Twitter', path: 'https://twitter.com', external: true },
      { label: 'Instagram', path: 'https://instagram.com', external: true },
      { label: 'GitHub', path: 'https://github.com', external: true }
    ]
  }

  return (
    <footer className="relative z-10 pt-20 pb-10 px-4">
      <div className="container mx-auto">
        {/* Newsletter Section */}
        <div className="stl-glass rounded-2xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 stl-neon-text">
                Recevoir les nouveautés
              </h2>
              <p className="text-gray-300">
                Recevez nos actualités et conseils pour développer votre présence en ligne
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300"
                aria-label="Adresse email pour la newsletter"
              />
              <Button type="submit" variant="primary" size="md">
                S'inscrire
              </Button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Link
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent stl-neon-text mb-4 block"
            >
              Stellaris
            </Link>
            <p className="text-gray-400 mb-6">
              Solutions digitales innovantes pour propulser votre entreprise vers de nouveaux horizons.
            </p>
            <div className="flex space-x-4">
              {footerLinks.social.map(({ label, path }) => (
                <a
                  key={label}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label={`Visitez notre page ${label}`}
                >
                  <span className="text-xl">{label[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map(({ label, path }) => (
                <li key={label}>
                  <Link
                    to={path}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Entreprise</h3>
            <ul className="space-y-3">
              {footerLinks.company.map(({ label, path }) => (
                <li key={label}>
                  <Link
                    to={path}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="tel:+33123456789" className="hover:text-white transition-colors duration-300">
                  +33 1 23 45 67 89
                </a>
              </li>
              <li>
                <a href="mailto:contact@stellaris.fr" className="hover:text-white transition-colors duration-300">
                  contact@stellaris.fr
                </a>
              </li>
              <li>
                <address className="not-italic">
                  123 Avenue des Étoiles<br />
                  75000 Paris, France
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              {currentYear} Stellaris. Tous droits réservés.
            </div>
            <ul className="flex flex-wrap justify-center gap-6 text-sm">
              {footerLinks.legal.map(({ label, path }) => (
                <li key={label}>
                  <Link
                    to={path}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
