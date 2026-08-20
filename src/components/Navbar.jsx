import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import logo from '../assets/logo.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Visa Services', path: '/visa-services' },
    { name: 'Contact', path: '/contact' },
  ]

  const handleGetQuote = () => {
    const message = "Hi, I would like to get a quote for my travel requirements. Please provide me with the best options available."
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/971544343501?text=${encodedMessage}`, '_blank')
  }

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-effect shadow-subtle' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <img src={logo} alt="Venture Ease" className="h-12 md:h-14 lg:h-16 w-auto object-contain" />
            <div className="flex flex-col justify-center">
              <span className="text-sm md:text-lg lg:text-xl font-serif font-bold text-gold leading-tight">VENTURE EASE</span>
              <span className="text-xs font-sans text-navy font-semibold tracking-wider">TRAVEL & TOURISM</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-navy font-sans font-medium hover:text-gold transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={handleGetQuote}
              className="premium-button-gold"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-navy"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4 space-y-3"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-navy font-sans font-medium hover:text-gold transition-colors duration-200 py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={handleGetQuote}
              className="premium-button-gold w-full"
            >
              Get a Quote
            </button>
          </motion.div>
        )}
      </div>
    </nav>
  )
}