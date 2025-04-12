import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import WebCreation from './pages/WebCreation'
import Seo from './pages/Seo'
import GraphicDesign from './pages/GraphicDesign'
import PaidAds from './pages/PaidAds'
import SocialMedia from './pages/SocialMedia'
import VideoMarketing from './pages/VideoMarketing'
import Devis from './pages/Devis'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Pricing from './pages/Pricing'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/creation-site-internet" element={<WebCreation />} />
          <Route path="/services/referencement-naturel" element={<Seo />} />
          <Route path="/services/creation-graphique" element={<GraphicDesign />} />
          <Route path="/services/referencement-sponsorise" element={<PaidAds />} />
          <Route path="/services/referencement-social" element={<SocialMedia />} />
          <Route path="/services/referencement-video" element={<VideoMarketing />} />
          <Route path="/devis" element={<Devis />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
