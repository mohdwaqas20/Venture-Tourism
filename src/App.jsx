import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loader from './components/Loader'
import FloatingButtons from './components/FloatingButtons'
import Home from './pages/Home'
import Services from './pages/Services'
import Destinations from './pages/Destinations'
import VisaServices from './pages/VisaServices'
import TourPackages from './pages/TourPackages'
import About from './pages/About'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'

// Suppress non-critical warnings globally
const originalWarn = console.warn
const originalError = console.error

console.warn = function(...args) {
  // Suppress React Router Future Flag warnings
  if (
    typeof args[0] === 'string' &&
    (args[0].includes('React Router Future Flag Warning') ||
     args[0].includes('future flag'))
  ) {
    return
  }
  originalWarn.apply(console, args)
}

console.error = function(...args) {
  // Suppress CORS-related errors and specific React warnings
  if (
    typeof args[0] === 'string' &&
    (args[0].includes('CORS') ||
     args[0].includes('Cross-Origin') ||
     args[0].includes('Access to XMLHttpRequest') ||
     args[0].includes('Response was blocked'))
  ) {
    return
  }
  originalError.apply(console, args)
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    const scrollToTopSmooth = () => {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }

    scrollToTopSmooth()
    
    const timer = setTimeout(scrollToTopSmooth, 50)
    
    return () => clearTimeout(timer)
  }, [pathname])

  return null
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Loader */}
      <Loader />
      
      {/* Floating Buttons */}
      <FloatingButtons />
      
      {/* Navbar */}
      <Navbar />
      
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/visa-services" element={<VisaServices />} />
        <Route path="/tour-packages" element={<TourPackages />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
      </Routes>
      
      {/* Footer */}
      <Footer />
    </Router>
  )
}