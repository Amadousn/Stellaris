import Section from '../components/ui/Section'
import ContactForm from '../components/ContactForm'

const Devis = () => {
  return (
    <div className="pt-24">
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
            Demander un Devis
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Remplissez le formulaire ci-dessous pour recevoir un devis personnalisé pour votre projet
          </p>
          <ContactForm type="devis" />
        </div>
      </Section>
    </div>
  )
}

export default Devis
