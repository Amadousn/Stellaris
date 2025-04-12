import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import WebCreation from './pages/WebCreation'
import Seo from './pages/Seo'
import GraphicDesign from './pages/GraphicDesign'
import PaidAds from './pages/PaidAds'
import SocialMedia from './pages/SocialMedia'
import VideoMarketing from './pages/VideoMarketing'
import Devis from './pages/Devis'
import Portfolio from './pages/Portfolio'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/creation-site-internet" element={<WebCreation />} />
      <Route path="/referencement-naturel" element={<Seo />} />
      <Route path="/creation-graphique" element={<GraphicDesign />} />
      <Route path="/referencement-sponsorise" element={<PaidAds />} />
      <Route path="/referencement-social" element={<SocialMedia />} />
      <Route path="/referencement-video" element={<VideoMarketing />} />
      <Route path="/devis" element={<Devis />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  )
}

export default AppRoutes
