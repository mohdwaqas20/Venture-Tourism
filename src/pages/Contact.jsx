import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, CheckCircle2, ArrowRight, X } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    destination: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [showSubmitDialog, setShowSubmitDialog] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      alert('Please fill in all required fields')
      return
    }

    setShowSubmitDialog(true)
  }

  const handleSubmitViaWhatsApp = () => {
    const whatsappMessage = `
*Travel Inquiry from Contact Form*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone || 'Not provided'}
*Service Type:* ${formData.service}
*Destination:* ${formData.destination || 'Not specified'}

*Travel Plans:*
${formData.message}

---
Please help me with this inquiry.
    `.trim()

    const encodedMessage = encodeURIComponent(whatsappMessage)
    window.open(`https://wa.me/971544343501?text=${encodedMessage}`, '_blank')
    
    setShowSubmitDialog(false)
    setSubmitted(true)
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      destination: '',
      message: ''
    })

    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleSubmitViaEmail = () => {
    const subject = encodeURIComponent('Travel Inquiry - Venture Ease Tourism')
    const body = encodeURIComponent(
      `Dear Venture Ease Tourism Team,\n\n` +
      `I have submitted a travel inquiry through your website with the following details:\n\n` +
      `---\n` +
      `NAME: ${formData.name}\n` +
      `EMAIL: ${formData.email}\n` +
      `PHONE: ${formData.phone || 'Not provided'}\n` +
      `SERVICE TYPE: ${formData.service}\n` +
      `DESTINATION: ${formData.destination || 'Not specified'}\n\n` +
      `TRAVEL PLANS:\n${formData.message}\n` +
      `---\n\n` +
      `Please provide me with detailed information and guidance regarding my inquiry.\n\n` +
      `Thank you for your time and assistance. I look forward to hearing from you soon.\n\n` +
      `Best regards,\n${formData.name}`
    )

    window.location.href = `mailto:info@venturease.ae?subject=${subject}&body=${body}`
    
    setShowSubmitDialog(false)
    setSubmitted(true)
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      destination: '',
      message: ''
    })

    setTimeout(() => setSubmitted(false), 3000)
  }

  const handlePhoneClick = () => {
    window.location.href = 'tel:+97143329686'
  }

  const handleEmailClick = () => {
    const subject = encodeURIComponent('Travel Inquiry - Venture Ease Tourism')
    const body = encodeURIComponent(
      `Hi,\n\n` +
      `I would like to inquire about your travel services. Please provide me with more information and pricing details.\n\n` +
      `Thank you.\n\n` +
      `Best regards`
    )
    window.location.href = `mailto:info@venturease.ae?subject=${subject}&body=${body}`
  }

  const handleWhatsAppClick = () => {
    const message = "Hi, I would like to get in touch with you."
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/971544343501?text=${encodedMessage}`, '_blank')
  }

  const handleLocationClick = () => {
    window.open('https://maps.app.goo.gl/MWh7X3iSU9PLTpxH7?g_st=awb', '_blank')
  }

  const contactCards = [
    {
      icon: Phone,
      title: 'Call Us',
      detail: '+971 4 332 9686',
      description: 'Available Monday - Friday 10 AM - 7 PM',
      onClick: handlePhoneClick
    },
    {
      icon: Mail,
      title: 'Email Us',
      detail: 'info@venturease.ae',
      description: 'We reply within 24 hours',
      onClick: handleEmailClick
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      detail: '1101 Silver Tower, Business Bay',
      description: 'Dubai, UAE - Floor 11',
      onClick: handleLocationClick
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      detail: '+971 54 434 3501',
      description: 'Quick messaging support',
      onClick: handleWhatsAppClick
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[500px] bg-gradient-to-br from-navy via-blue-900 to-navy text-white overflow-hidden flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large rotating circle */}
          <motion.div
            className="absolute -top-40 -right-40 w-96 h-96 bg-gold/8 rounded-full blur-3xl"
            animate={{ y: [0, -30, 0], x: [0, 30, 0], rotate: [0, 360] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
          
          {/* Secondary circle */}
          <motion.div
            className="absolute top-40 -left-40 w-72 h-72 bg-blue-400/8 rounded-full blur-3xl"
            animate={{ y: [0, 40, 0], x: [0, -40, 0], rotate: [360, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
          />

          {/* Animated grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-8"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-gold/15 border border-gold/50 text-gold font-sans text-xs font-bold uppercase tracking-widest">
                ✦ Contact Support
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="font-serif text-6xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="text-white">Get in </span>
                <span className="bg-gradient-to-r from-gold via-yellow-300 to-gold bg-clip-text text-transparent">Touch</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed max-w-2xl"
            >
              Have questions? Our team is here to help you plan your perfect journey
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-wrap gap-4 mb-24"
            >
              <motion.a
                href="#contact-form"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gold text-navy font-bold rounded-lg uppercase tracking-wider text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-yellow-400 inline-block"
              >
                Start Your Journey
              </motion.a>
              <motion.a
                href="https://wa.me/971544343501"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-gold text-gold font-bold rounded-lg uppercase tracking-wider text-lg hover:bg-gold hover:text-navy transition-all duration-300 inline-block"
              >
                Quick Contact
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator - Positioned at section bottom */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block z-20"
          >
            <div className="text-center">
              <p className="text-gray-300 text-sm mb-3 font-sans uppercase tracking-wider">Scroll to explore</p>
              <svg className="w-6 h-6 text-gold mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards - Professional */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {contactCards.map((card, index) => (
              <motion.button
                key={index}
                onClick={card.onClick}
                variants={itemVariants}
                whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(201, 162, 39, 0.15)' }}
                className="group text-left"
              >
                <div className="relative h-full bg-white hover:bg-navy rounded-2xl p-8 border-2 border-gold/30 hover:border-gold transition-all duration-300 shadow-md hover:shadow-2xl overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    {/* Icon Container */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                      className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold/10 to-gold/5 flex items-center justify-center mb-6 group-hover:from-gold/20 group-hover:to-gold/10 transition-all duration-300"
                    >
                      <card.icon className="w-8 h-8 text-gold" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="font-serif font-bold text-2xl text-navy mb-3 group-hover:text-white group-hover:text-gold transition-colors duration-300">
                      {card.title}
                    </h3>

                    {/* Detail - Main Contact Info */}
                    <p className="font-sans font-bold text-lg text-gold mb-2 group-hover:text-gold">
                      {card.detail}
                    </p>

                    {/* Description */}
                    <p className="text-gray-600 font-sans text-sm mb-6 leading-relaxed flex-grow group-hover:text-gray-200 transition-colors duration-300">
                      {card.description}
                    </p>

                    {/* CTA Link */}
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="inline-flex items-center gap-2 text-gold font-bold text-sm hover:text-white group-hover:text-white transition-colors duration-300 group-hover:gap-3"
                    >
                      Click to {card.title}
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </motion.div>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <SectionHeading
                label="CONTACT FORM"
                title="Send Us Your Inquiry"
                subtitle="We'd love to hear from you. Share your travel dreams and let our experts craft the perfect itinerary"
                centered={false}
              />

              <motion.form 
                onSubmit={handleSubmit} 
                className="space-y-6 mt-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Success Message */}
                <motion.div
                  animate={{ 
                    opacity: submitted ? 1 : 0,
                    scale: submitted ? 1 : 0.95,
                    height: submitted ? 'auto' : 0
                  }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 overflow-hidden"
                >
                  <CheckCircle2 size={20} className="flex-shrink-0" />
                  <span className="font-sans text-sm">Message sent successfully! Our team will contact you soon.</span>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="name" className="block text-navy font-sans font-bold mb-3 text-sm uppercase tracking-wide">
                      Full Name <span className="text-gold">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all duration-300 bg-white hover:border-gray-300 placeholder-gray-400"
                      placeholder="John Doe"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <label htmlFor="email" className="block text-navy font-sans font-bold mb-3 text-sm uppercase tracking-wide">
                      Email Address <span className="text-gold">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all duration-300 bg-white hover:border-gray-300 placeholder-gray-400"
                      placeholder="john@example.com"
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="phone" className="block text-navy font-sans font-bold mb-3 text-sm uppercase tracking-wide">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all duration-300 bg-white hover:border-gray-300 placeholder-gray-400"
                      placeholder="+971 50 123 4567"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <label htmlFor="service" className="block text-navy font-sans font-bold mb-3 text-sm uppercase tracking-wide">
                      Service Type <span className="text-gold">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all duration-300 bg-white hover:border-gray-300"
                    >
                      <option value="">Select a service</option>
                      <option value="flights">Airline Tickets</option>
                      <option value="hotels">Hotel Booking</option>
                      <option value="uae-visa">UAE Visit Visa</option>
                      <option value="excursions">Excursion Packages</option>
                      <option value="europe-visa">Europe Visit Visa</option>
                      <option value="tours">International Tour Packages</option>
                    </select>
                  </motion.div>
                </div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="destination" className="block text-navy font-sans font-bold mb-3 text-sm uppercase tracking-wide">
                    Destination
                  </label>
                  <input
                    id="destination"
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    className="w-full px-5 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all duration-300 bg-white hover:border-gray-300 placeholder-gray-400"
                    placeholder="Where would you like to go?"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-navy font-sans font-bold mb-3 text-sm uppercase tracking-wide">
                    Tell Us Your Travel Plans <span className="text-gold">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-5 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all duration-300 bg-white hover:border-gray-300 resize-none placeholder-gray-400"
                    placeholder="Share your travel preferences, dates, budget, and any special requests..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-navy font-bold rounded-lg uppercase tracking-wide text-lg shadow-md hover:shadow-xl transition-all duration-300 hover:bg-yellow-400"
                >
                  <Send size={20} />
                  Send Inquiry
                </motion.button>
              </motion.form>
            </motion.div>

            {/* Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Office Hours */}
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gold/50"
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="p-4 rounded-lg bg-navy/5"
                  >
                    <Clock className="w-6 h-6 text-gold" />
                  </motion.div>
                  <h3 className="font-serif font-bold text-lg text-navy">
                    Office Hours
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-600 font-sans text-sm">
                  <li className="flex justify-between items-center pb-3 border-b border-gray-100 hover:text-navy transition-colors">
                    <span>Monday - Friday</span>
                    <span className="font-bold text-gold">10:00 AM - 7:00 PM</span>
                  </li>
                  <li className="flex justify-between items-center hover:text-navy transition-colors">
                    <span>Saturday - Sunday</span>
                    <span className="font-bold text-gold">By Appointment</span>
                  </li>
                </ul>
              </motion.div>

              {/* Response Time */}
              <motion.div
                whileHover={{ y: -8 }}
                className="p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gold/50 bg-gradient-to-br from-navy to-blue-900"
              >
                <h4 className="font-serif font-bold text-white text-lg mb-8">
                  Quick Contact
                </h4>
                <div className="space-y-6">
                  <motion.a 
                    href="tel:+97143329686" 
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4 cursor-pointer group/link"
                  >
                    <Phone className="w-6 h-6 flex-shrink-0 mt-0.5 text-gold group-hover/link:scale-110 transition-transform" />
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-300 font-sans text-xs uppercase tracking-widest font-bold mb-2">Call Us</p>
                      <p className="font-bold text-white text-sm group-hover/link:text-gold transition-colors">+971 4 332 9686</p>
                    </div>
                  </motion.a>
                  
                  <motion.button 
                    onClick={handleEmailClick}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4 pt-2 cursor-pointer group/link text-left w-full"
                  >
                    <Mail className="w-6 h-6 flex-shrink-0 mt-0.5 text-gold group-hover/link:scale-110 transition-transform" />
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-300 font-sans text-xs uppercase tracking-widest font-bold mb-2">Email</p>
                      <p className="font-bold text-white text-sm break-all group-hover/link:text-gold transition-colors">info@venturease.ae</p>
                    </div>
                  </motion.button>
                  
                  <motion.a 
                    href="https://wa.me/971544343501"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4 pt-2 cursor-pointer group/link"
                  >
                    <MessageCircle className="w-6 h-6 flex-shrink-0 mt-0.5 text-gold group-hover/link:scale-110 transition-transform" />
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-300 font-sans text-xs uppercase tracking-widest font-bold mb-2">WhatsApp</p>
                      <p className="font-bold text-white text-sm group-hover/link:text-gold transition-colors hover:underline">+971 54 434 3501</p>
                    </div>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-32 bg-gradient-to-b from-soft-bg to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="LOCATION"
            title="Visit Our Office"
            subtitle="Located in the heart of Dubai"
          />

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 rounded-xl overflow-hidden shadow-lg h-96 group hover:shadow-2xl transition-shadow duration-300"
          >
            <iframe
              title="Venture Ease Tourism Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.4906435433754!2d55.27211802346951!3d25.18563037666455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f692b8b8b8b8b%3A0x1234567890abcdef!2s1101%20Silver%20Tower%2C%20Business%20Bay%2C%20Dubai!5e0!3m2!1sen!2sae!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="group-hover:brightness-110 transition-all duration-500"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="SUPPORT"
            title="Frequently Asked Questions"
            subtitle="Common questions about contacting us"
          />

          <div className="space-y-4 mt-12">
            {[
              {
                q: 'What is the best way to reach you?',
                a: 'You can reach us via phone, email, WhatsApp, or by filling out our contact form. WhatsApp provides the quickest response.'
              },
              {
                q: 'Do you offer emergency travel assistance?',
                a: 'Yes, we provide 24/7 emergency support for our travelers. Call our emergency line for immediate assistance.'
              },
              {
                q: 'What time zone are you in?',
                a: 'We are based in Dubai, UAE (GST: UTC+4). Office hours are 10 AM - 7 PM (Monday-Friday). For weekend inquiries, please schedule an appointment.'
              },
              {
                q: 'Can I schedule a consultation?',
                a: 'Absolutely! Contact us to schedule a personalized consultation with one of our travel experts.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden hover:border-gold/50 border border-gray-100"
              >
                <details className="group cursor-pointer p-6">
                  <summary className="flex justify-between items-center font-serif text-lg font-bold text-navy hover:text-gold transition-colors duration-300">
                    <span>{faq.q}</span>
                    <motion.span
                      className="group-open:rotate-180 transition-transform"
                    >
                      ▼
                    </motion.span>
                  </summary>
                  <motion.p 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 text-gray-600 font-sans leading-relaxed"
                  >
                    {faq.a}
                  </motion.p>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Submission Method Dialog */}
      {showSubmitDialog && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setShowSubmitDialog(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-navy to-blue-900 p-8 flex justify-between items-center border-b border-gray-200">
              <h2 className="text-2xl font-serif font-bold text-gold">Send Your Inquiry</h2>
              <button
                onClick={() => setShowSubmitDialog(false)}
                className="text-white hover:text-gold transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="p-8">
              <p className="text-gray-600 font-sans mb-8 text-center text-sm leading-relaxed">
                Choose how you'd like to send your inquiry to us
              </p>
              
              <div className="space-y-4">
                {/* WhatsApp Option */}
                <motion.button
                  onClick={handleSubmitViaWhatsApp}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <MessageCircle size={20} />
                  WhatsApp Us
                </motion.button>

                {/* Email Option */}
                <motion.button
                  onClick={handleSubmitViaEmail}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-gold to-yellow-400 text-navy font-bold rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <Mail size={20} />
                  Email Us
                </motion.button>
              </div>

              <p className="text-xs text-gray-500 mt-6 text-center">
                Your inquiry will be sent to our team for review
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}