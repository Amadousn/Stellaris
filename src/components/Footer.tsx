import React from 'react'
import { Link } from 'react-router-dom'
import Button from './ui/Button'
import '../styles/ia-enhancements.css'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { label: 'Création Web', path: '/services/creation-site-internet' },
      { label: 'Design Graphique', path: '/services/creation-graphique' },
      { label: 'SEO', path: '/services/referencement-naturel' },
      { label: 'Publicité en ligne', path: '/services/referencement-sponsorise' },
      { label: 'Réseaux Sociaux', path: '/services/referencement-social' }
    ],
    company: [
      { label: 'À propos', path: '/about' },
      { label: 'Portfolio', path: '/portfolio' },
      { label: 'Comptabilité', path: '/comptabilite' },
      { label: 'Devis', path: '/devis' }
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
                <a href="tel:+33752036246" className="hover:text-white transition-colors duration-300">
                  07 52 03 62 46
                </a>
              </li>
              <li>
                <a href="mailto:contact@stellariscreations.com" className="hover:text-white transition-colors duration-300">
                  contact@stellariscreations.com
                </a>
              </li>
              <li>
                <address className="not-italic">
                  115 rue du Général-Leclerc<br />
                  93220 Gagny
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex justify-center items-center">
            <div className="text-gray-400 text-sm">
              {currentYear} Stellaris. Tous droits réservés.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
