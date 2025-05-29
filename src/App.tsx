import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Services from './pages/Services'
import WebCreation from './pages/WebCreation'
import Seo from './pages/Seo'
import GraphicDesign from './pages/GraphicDesign'
import PaidAds from './pages/PaidAds'
import SocialMedia from './pages/SocialMedia'
import VideoMarketing from './pages/VideoMarketing'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Comptabilite from './pages/Comptabilite'
import ContactForm from './pages/ContactForm'
import { ThemeProvider } from './context/ThemeContext'
import LoadingSpinner from './components/ui/LoadingSpinner'
import { Suspense } from 'react'

function App() {
  const location = useLocation();
  
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col transition-colors duration-300">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow pt-16">
          <Suspense fallback={
            <div className="flex items-center justify-center h-screen">
              <LoadingSpinner size="large" color="secondary" />
            </div>
          }>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/creation-site-internet" element={<WebCreation />} />
                <Route path="/services/referencement-naturel" element={<Seo />} />
                <Route path="/services/creation-graphique" element={<GraphicDesign />} />
                <Route path="/services/referencement-sponsorise" element={<PaidAds />} />
                <Route path="/services/referencement-social" element={<SocialMedia />} />
                <Route path="/services/referencement-video" element={<VideoMarketing />} />
                <Route path="/devis" element={<ContactForm />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/about" element={<About />} />
                <Route path="/pricing" element={<Comptabilite />} />
                <Route path="/comptabilite" element={<Comptabilite />} />
                <Route path="/contact" element={<ContactForm />} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
