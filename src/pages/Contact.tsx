import React, { useState } from 'react'
import Button from '../components/ui/Button'
import '../styles/ia-enhancements.css'

type FormData = {
  name: string
  email: string
  phone: string
  company: string
  subject: string
  message: string
  budget: string
  services: string[]
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    budget: '',
    services: []
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const services = [
    'Site Web',
    'Application',
    'Design Graphique',
    'SEO',
    'Marketing Digital',
    'Maintenance'
  ]

  const budgetRanges = [
    'Moins de 5k€',
    '5k€ - 10k€',
    '10k€ - 20k€',
    '20k€ - 50k€',
    'Plus de 50k€'
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulation d'un appel API
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitStatus('success')
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden pt-40 pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/40"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent stl-neon-text">
              Parlons de votre projet
            </h1>
            <p className="text-xl text-gray-300">
              Remplissez le formulaire ci-dessous et nous vous recontacterons dans les plus brefs délais
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="stl-glass p-8 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nom */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300"
                  placeholder="Prénom Nom"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300"
                  placeholder="votre.email@exemple.com"
                />
              </div>

              {/* Téléphone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300"
                  placeholder="Votre numéro de téléphone"
                />
              </div>

              {/* Entreprise */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Entreprise
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300"
                  placeholder="Nom de l'entreprise (Optionnel)"
                />
              </div>

              {/* Budget */}
              <div className="md:col-span-2">
                <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                  Budget estimé
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300"
                >
                  <option value="">Sélectionnez une fourchette</option>
                  {budgetRanges.map(range => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>

              {/* Services */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Services qui vous intéressent
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {services.map(service => (
                    <label
                      key={service}
                      className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all duration-300 ${
                        formData.services.includes(service)
                          ? 'border-secondary bg-secondary/20'
                          : 'border-white/20 hover:border-white/40'
                      }`}
                    >
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={formData.services.includes(service)}
                        onChange={() => handleServiceToggle(service)}
                      />
                      <span className="text-sm text-white">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sujet */}
              <div className="md:col-span-2">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Sujet *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300"
                  placeholder="L'objet de votre message"
                />
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300 resize-none"
                  placeholder="Décrivez votre projet en quelques mots..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 flex justify-center">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                isLoading={isSubmitting}
              >
                Envoyer le message
              </Button>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mt-4 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-center">
                Message envoyé avec succès ! Nous vous recontacterons rapidement.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mt-4 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400 text-center">
                Une erreur est survenue. Veuillez réessayer plus tard.
              </div>
            )}
          </form>

          {/* Contact Info */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="text-lg font-semibold text-white mb-2">Téléphone</h3>
              <a
                href="tel:+33123456789"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                +33 1 23 45 67 89
              </a>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">✉️</div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <a
                href="mailto:contact@stellaris.fr"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                contact@stellaris.fr
              </a>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="text-lg font-semibold text-white mb-2">Adresse</h3>
              <address className="text-gray-300 not-italic">
                123 Avenue des Étoiles<br />
                75000 Paris, France
              </address>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
