import { Link, useNavigate } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { MdClose } from 'react-icons/md'
import { motion } from 'framer-motion'
import { useState } from 'react'
import logo from '../assets/logo.png'

export default function Footer() {
  const navigate = useNavigate()
  const currentYear = new Date().getFullYear()
  const [showEmailDialog, setShowEmailDialog] = useState(false)
  const [emailData, setEmailData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Travel Inquiry - Venture Ease Tourism',
    message: ''
  })

  const handleServiceClick = (serviceId) => {
    navigate(`/services?service=${serviceId}`)
  }

  const handleSendEmail = () => {
    if (!emailData.name || !emailData.email || !emailData.phone) {
      alert('Please fill in your name, email address, and phone number.')
      return
    }

    const subject = encodeURIComponent(emailData.subject)
    const body = encodeURIComponent(
      `Name: ${emailData.name}\nEmail: ${emailData.email}\nPhone: ${emailData.phone}\n\n${emailData.message}`
    )
    
    window.location.href = `mailto:info@venturease.ae?subject=${subject}&body=${body}`
    setShowEmailDialog(false)
    setEmailData({
      name: '',
      email: '',
      phone: '',
      subject: 'Travel Inquiry - Venture Ease Tourism',
      message: 'Hello Venture Ease Tourism Team,\n\nI would like to inquire about your premium travel services and packages. I am interested in learning more about your offerings and would appreciate your professional guidance for my upcoming travel plans.\n\nPlease feel free to contact me at your earliest convenience.\n\nBest regards'
    })
  }

  const services = [
    { name: 'Airline Tickets', id: 'airline-tickets' },
    { name: 'Hotel Booking', id: 'hotel-booking' },
    { name: 'UAE Visit Visa', id: 'uae-visit-visa' },
    { name: 'Excursion Packages', id: 'excursion-packages' },
    { name: 'Europe Visit Visa', id: 'europe-visit-visa' },
    { name: 'Tour Packages', id: 'international-tour-packages' }
  ]

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Visa Services', path: '/visa-services' },
    { name: 'Contact', path: '/contact' }
  ]

  const socialLinks = [
    { icon: FaFacebook, label: 'Facebook', href: '#' },
    { icon: FaInstagram, label: 'Instagram', href: '#' },
    { icon: FaLinkedin, label: 'LinkedIn', href: '#' },
    { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/971544343501' }
  ]

  return (
    <footer className="bg-navy text-white">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-navy to-blue-900 py-12 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">Ready for Your Next Adventure?</h3>
              <p className="text-gray-300 text-sm">Let Venture Ease Tourism take care of the details while you enjoy the journey.</p>
            </div>
            <div className="flex gap-4">
              <motion.button
                onClick={() => {
                  const message = "Hi, I'm interested in planning my trip. Could you please help me with the best travel packages available?"
                  const encodedMessage = encodeURIComponent(message)
                  window.open(`https://wa.me/971544343501?text=${encodedMessage}`, '_blank')
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gold text-navy font-serif font-bold rounded-lg hover:bg-yellow-400 transition-colors whitespace-nowrap cursor-pointer"
              >
                Plan My Trip
              </motion.button>
              <motion.button
                onClick={() => {
                  const email = "info@venturease.ae"
                  const subject = encodeURIComponent("Travel Inquiry - Venture Ease Tourism")
                  const body = encodeURIComponent(
                    "Hello Venture Ease Tourism Team,\n\n" +
                    "I would like to inquire about your premium travel services and packages. I am interested in learning more about your offerings and would appreciate your professional guidance for my upcoming travel plans.\n\n" +
                    "Please feel free to contact me at your earliest convenience with the available options and pricing.\n\n" +
                    "Best regards"
                  )

                  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 bg-white border-navy text-navy font-serif font-bold rounded-lg hover:bg-gold hover:text-navy transition-colors whitespace-nowrap cursor-pointer"
              >
                Email Us
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Grid Layout - Improved Professional Spacing */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">

            {/* Company Info - Wider Left Section (5 columns) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 md:col-span-2"
            >
              <div className="mb-6">
                <div className="flex items-start space-x-4 mb-4">
                  <img src={logo} alt="Venture Ease" className="h-16 w-auto object-contain flex-shrink-0" />
                  <div className="flex flex-col justify-center">
                    <span className="text-2xl font-serif font-bold text-gold leading-tight">VENTURE</span>
                    <span className="text-2xl font-serif font-bold text-gold leading-tight">EASE</span>
                    <span className="text-sm font-sans text-gray-400 font-semibold tracking-wider mt-2">TRAVEL & TOURISM</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-400 font-sans text-sm leading-relaxed mb-6 max-w-sm">
                Premium travel, visa and holiday solutions from Dubai to destinations around the world.
              </p>
              {/* Social Icons */}
              <div className="flex gap-3">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={idx}
                      href={social.href}
                      target={social.href !== '#' ? '_blank' : undefined}
                      rel={social.href !== '#' ? 'noopener noreferrer' : undefined}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-gray-800 hover:bg-gold rounded-full flex items-center justify-center text-white hover:text-navy transition-all duration-300 cursor-pointer"
                      title={social.label}
                    >
                      <Icon size={18} />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* Right Section Container (7 columns) - Better spacing */}
            <div className="lg:col-span-7 md:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

                {/* Services Column */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h4 className="text-lg font-serif font-bold text-white mb-6">Our Services</h4>
                  <ul className="space-y-3">
                    {services.map((service, idx) => (
                      <li key={idx}>
                        <button
                          onClick={() => handleServiceClick(service.id)}
                          className="text-gray-400 hover:text-gold font-sans text-sm transition-colors duration-300 text-left hover:translate-x-1 transform transition-transform"
                        >
                          {service.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Quick Links Column */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h4 className="text-lg font-serif font-bold text-white mb-6">Quick Links</h4>
                  <ul className="space-y-3">
                    {quickLinks.map((link, idx) => (
                      <li key={idx}>
                        <Link
                          to={link.path}
                          className="text-gray-400 hover:text-gold font-sans text-sm transition-colors duration-300 hover:translate-x-1 transform transition-transform inline-block"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Contact Info Column */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h4 className="text-lg font-serif font-bold text-white mb-6">Contact Info</h4>
                  <div className="space-y-4">
                    {/* Email */}
                    <button
                      onClick={() => setShowEmailDialog(true)}
                      className="flex items-start space-x-3 group cursor-pointer hover:text-gold transition-colors"
                    >
                      <Mail size={18} className="text-gold flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gray-500 text-xs mb-1">Email</p>
                        <p className="text-gray-300 font-sans text-sm group-hover:text-gold transition-colors">info@venturease.ae</p>
                      </div>
                    </button>

                    {/* Phone */}
                    <a
                      href="tel:+97144343501"
                      className="flex items-start space-x-3 group cursor-pointer"
                    >
                      <Phone size={18} className="text-gold flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gray-500 text-xs mb-1">Phone</p>
                        <p className="text-gray-300 font-sans text-sm group-hover:text-gold transition-colors">+971 4 434 3501</p>
                      </div>
                    </a>

                    {/* Address */}
                    <a
                      href="#"
                      className="flex items-start space-x-3 group cursor-pointer"
                    >
                      <MapPin size={18} className="text-gold flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gray-500 text-xs mb-1">Address</p>
                        <p className="text-gray-300 font-sans text-sm group-hover:text-gold transition-colors">Dubai, UAE</p>
                      </div>
                    </a>

                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/971544343501?text=Hi%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start space-x-3 group cursor-pointer"
                    >
                      <Clock size={18} className="text-gold flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gray-500 text-xs mb-1">WhatsApp</p>
                        <p className="text-gray-300 font-sans text-sm group-hover:text-gold transition-colors">+971 54 434 3501</p>
                      </div>
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-8"></div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <p className="text-gray-400 text-sm font-sans">
              © {currentYear} All Copyright 2026 by Venture Ease Tourism LLC - UAE
            </p>
            <div className="flex space-x-6 mt-6 md:mt-0">
              <a href="/privacy-policy" className="text-gray-400 hover:text-gold text-sm font-sans transition-colors duration-300">Privacy Policy</a>
              <span className="text-gray-600">|</span>
              <a href="/terms-conditions" className="text-gray-400 hover:text-gold text-sm font-sans transition-colors duration-300">Terms & Conditions</a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Email Dialog Modal */}
      {showEmailDialog && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setShowEmailDialog(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-navy to-blue-900 p-6 flex justify-between items-center border-b border-gray-200">
              <h2 className="text-2xl font-serif font-bold text-gold">Send us an Email</h2>
              <button
                onClick={() => setShowEmailDialog(false)}
                className="text-white hover:text-gold transition-colors"
              >
                <MdClose size={24} />
              </button>
            </div>

            {/* Form Content */}
            <div className="p-8">
              <form onSubmit={(e) => { e.preventDefault(); handleSendEmail(); }} className="space-y-5">
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">Full Name *</label>
                  <input
                    type="text"
                    value={emailData.name}
                    onChange={(e) => setEmailData({...emailData, name: e.target.value})}
                    placeholder="Your full name"
                    className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold text-gray-900 placeholder-gray-500 bg-white text-base"
                    required
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">Email Address *</label>
                  <input
                    type="email"
                    value={emailData.email}
                    onChange={(e) => setEmailData({...emailData, email: e.target.value})}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold text-gray-900 placeholder-gray-500 bg-white text-base"
                    required
                  />
                </div>

                {/* Phone Input */}
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    value={emailData.phone}
                    onChange={(e) => setEmailData({...emailData, phone: e.target.value})}
                    placeholder="+971 50 123 4567"
                    className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold text-gray-900 placeholder-gray-500 bg-white text-base"
                    required
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">Subject</label>
                  <input
                    type="text"
                    value={emailData.subject}
                    onChange={(e) => setEmailData({...emailData, subject: e.target.value})}
                    className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold text-gray-900 placeholder-gray-500 bg-white text-base"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">Message</label>
                  <textarea
                    value={emailData.message}
                    onChange={(e) => setEmailData({...emailData, message: e.target.value})}
                    rows="6"
                    className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold text-gray-900 placeholder-gray-500 bg-white text-base resize-none"
                  />
                </div>

                {/* Buttons */}
                <div className="flex gap-4 pt-4">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 px-6 py-3 bg-gold text-navy font-serif font-bold rounded-lg hover:bg-yellow-400 transition-colors cursor-pointer"
                  >
                    Send Email
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={() => setShowEmailDialog(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 px-6 py-3 border-2 border-navy text-navy font-serif font-bold rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    Cancel
                  </motion.button>
                </div>

                <p className="text-xs text-gray-500 mt-4">
                  * Required fields: Full Name, Email Address, and Phone Number. Your email client will open to complete the send.
                </p>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </footer>
  )
}