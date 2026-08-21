import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
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
    setIsOpen(false)
  }

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 w-full ${isScrolled ? 'glass-effect shadow-md' : 'bg-white shadow-sm'}`}>
      <div className="w-full max-w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 lg:h-20 w-full">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-1.5 sm:space-x-2 flex-shrink-0 min-w-0">
            <img src={logo} alt="Venture Ease" className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain" />
            <div className="flex flex-col justify-center min-w-0">
              <span className="text-xs sm:text-sm md:text-base lg:text-lg font-serif font-bold text-gold leading-tight whitespace-nowrap">VENTURE EASE</span>
              <span className="text-[9px] sm:text-[10px] md:text-xs font-sans text-navy font-semibold tracking-wider whitespace-nowrap">TRAVEL & TOURISM</span>
            </div>
          </Link>

          {/* Desktop Navigation - Hidden on tablet & mobile */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-navy font-sans text-sm xl:text-base font-medium hover:text-gold transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <button 
              onClick={handleGetQuote}
              className="premium-button-gold text-sm xl:text-base px-6 xl:px-8"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button
            className="lg:hidden text-navy hover:text-gold transition-colors p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile & Tablet Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gold border-opacity-20"
            >
              <div className="py-3 sm:py-4 space-y-0.5 px-2 sm:px-0">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className="block text-navy font-sans font-medium text-sm sm:text-base hover:text-gold hover:bg-gold hover:bg-opacity-5 transition-all duration-200 px-3 sm:px-4 py-2.5 rounded-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.button 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  onClick={handleGetQuote}
                  className="premium-button-gold w-full mt-2 text-sm sm:text-base py-2.5"
                >
                  Get a Quote
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}