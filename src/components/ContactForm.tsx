import { useState } from 'react'
import Button from './ui/Button'

interface ContactFormProps {
  type?: 'contact' | 'devis'
  onSubmit?: (data: any) => void
}

const ContactForm = ({ type = 'contact', onSubmit }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    message: '',
    type_projet: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSubmit) {
      onSubmit(formData)
    }
    // Ici, vous pouvez ajouter la logique d'envoi du formulaire
    console.log('Formulaire soumis:', formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="nom" className="block text-sm font-medium text-gray-300 mb-1">
            Nom complet
          </label>
          <input
            type="text"
            id="nom"
            value={formData.nom}
            onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
            className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="telephone" className="block text-sm font-medium text-gray-300 mb-1">
          Téléphone
        </label>
        <input
          type="tel"
          id="telephone"
          value={formData.telephone}
          onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
          className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
        />
      </div>

      {type === 'devis' && (
        <div>
          <label htmlFor="type_projet" className="block text-sm font-medium text-gray-300 mb-1">
            Type de projet
          </label>
          <select
            id="type_projet"
            value={formData.type_projet}
            onChange={(e) => setFormData({ ...formData, type_projet: e.target.value })}
            className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
            required
          >
            <option value="">Sélectionnez un type</option>
            <option value="identite">Identité visuelle</option>
            <option value="marketing">Supports marketing</option>
            <option value="web">Design web</option>
            <option value="illustration">Illustration</option>
          </select>
        </div>
      )}

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
          Message
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={4}
          className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
          required
        />
      </div>

      <div className="text-center">
        <Button type="submit" size="lg">
          {type === 'devis' ? 'Demander un devis' : 'Envoyer le message'}
        </Button>
      </div>
    </form>
  )
}

export default ContactForm
