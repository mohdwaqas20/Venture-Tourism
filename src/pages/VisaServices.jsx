import { motion } from 'framer-motion'
import { CheckCircle, FileText, Shield, ArrowRight, Zap, Lock, Globe, X } from 'lucide-react'
import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'

export default function VisaServices() {
  const [showEmailDialog, setShowEmailDialog] = useState(false)
  const [emailData, setEmailData] = useState({
    name: '',
    email: '',
    phone: '',
    visaType: '',
    message: ''
  })

  const handleSendChecklist = () => {
    if (!emailData.name || !emailData.email || !emailData.phone || !emailData.visaType) {
      alert('Please fill in all required fields: Name, Email, Phone, and Visa Type.')
      return
    }

    const subject = encodeURIComponent('Document Checklist Request - Venture Ease Tourism')
    const body = encodeURIComponent(
      `Dear Venture Ease Tourism Team,\n\nI am writing to request a personalized document checklist for my visa application.\n\n` +
      `Name: ${emailData.name}\n` +
      `Email: ${emailData.email}\n` +
      `Phone: ${emailData.phone}\n` +
      `Visa Type/Service Required: ${emailData.visaType}\n\n` +
      `${emailData.message ? `Additional Information:\n${emailData.message}\n\n` : ''}` +
      `I would appreciate your professional guidance on the documentation requirements and the application process.\n\n` +
      `Thank you for your assistance. I look forward to hearing from you soon.\n\n` +
      `Best regards,\n${emailData.name}`
    )
    
    window.location.href = `mailto:info@venturease.ae?subject=${subject}&body=${body}`
    setShowEmailDialog(false)
    setEmailData({
      name: '',
      email: '',
      phone: '',
      visaType: '',
      message: ''
    })
  }
  const visaTypes = [
    {
      title: 'UAE Single Entry',
      subtitle: 'Tourism & Business',
      duration: '30-60 days',
      description: 'Perfect for single entry visits to explore the UAE and conduct business.',
      features: ['Easy application', 'Quick approval', 'Tourism friendly', 'No medical tests'],
      icon: Shield,
      gradient: 'from-blue-600 to-blue-400',
      lightGradient: 'from-blue-50 to-blue-100',
      whatsapp: '+971XXXXXXXXX'
    },
    {
      title: 'UAE Multiple Entry',
      subtitle: 'Frequent Travelers',
      duration: '30-60 days',
      description: 'Ideal for frequent travelers who need multiple entries within a year.',
      features: ['Multiple entries', 'Extended validity', 'Business travel', 'Fast processing'],
      icon: Globe,
      gradient: 'from-purple-600 to-purple-400',
      lightGradient: 'from-purple-50 to-purple-100',
      whatsapp: '+971XXXXXXXXX'
    },
    {
      title: 'B2B Visa',
      subtitle: 'Corporate Solutions',
      duration: '60 days',
      description: 'Business-to-Business corporate visa solutions for seamless operations.',
      features: ['Corporate packages', 'Bulk processing', 'Custom duration', 'Dedicated support'],
      icon: FileText,
      gradient: 'from-emerald-600 to-emerald-400',
      lightGradient: 'from-emerald-50 to-emerald-100',
      whatsapp: '+971XXXXXXXXX'
    },
    {
      title: 'Other Visa Enquiry',
      subtitle: 'More Options',
      duration: 'Flexible',
      description: 'Need a different type of visa? Contact us for personalized solutions and expert guidance.',
      features: ['Europe visas', 'Other destinations', 'Customized solutions', 'Expert guidance'],
      icon: Zap,
      gradient: 'from-orange-600 to-orange-400',
      lightGradient: 'from-orange-50 to-orange-100',
      whatsapp: '+971XXXXXXXXX'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Document Collection',
      description: 'Gather required documents: passport, photos, bank statements, etc.',
      icon: FileText
    },
    {
      step: '02',
      title: 'Application Submission',
      description: 'We submit your application to the respective visa authority',
      icon: ArrowRight
    },
    {
      step: '03',
      title: 'Processing',
      description: 'Your application is reviewed and processed by the authorities',
      icon: Zap
    },
    {
      step: '04',
      title: 'Visa Issuance',
      description: 'Receive your approved visa and start planning your journey',
      icon: Lock
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
      <section className="relative py-32 bg-gradient-to-br from-navy via-blue-900 to-navy text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-gold/5 rounded-full blur-3xl"
            animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-40 -left-40 w-60 h-60 bg-blue-400/5 rounded-full blur-3xl"
            animate={{ y: [0, 30, 0], x: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-400/5 rounded-full blur-3xl"
            animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
            transition={{ duration: 12, repeat: Infinity }}
          />
        </div>

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-0 right-0 w-96 h-96"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          >
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="80" stroke="#C9A227" strokeWidth="2" opacity="0.5" />
              <circle cx="100" cy="100" r="60" stroke="#C9A227" strokeWidth="1" opacity="0.3" />
            </svg>
          </motion.div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block text-gold font-sans font-semibold text-xs tracking-[0.2em] uppercase bg-gold/10 px-4 py-2 rounded-full border border-gold/30">
                ✦ Premium Visa Solutions
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Visa Assistance <br />
              <span className="bg-gradient-to-r from-gold to-yellow-300 bg-clip-text text-transparent">Made Simple</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-100 max-w-2xl leading-relaxed mb-8"
            >
              Professional visa support for UAE and Europe travel. We handle all the paperwork so you can focus on planning your adventure.
            </motion.p>

            {/* Animated Badge Grid */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-3"
            >
              {['UAE Single Entry', 'UAE Multiple Entry', 'B2B Visa', 'Schengen Visa', 'UK Visitor Visa', 'More Options'].map((badge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 + 0.5 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 hover:border-gold/50 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-gold/20"
                >
                  <span className="text-gold font-sans text-xs font-bold tracking-wider">✓ {badge}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Visa Types - Enhanced Cards */}
      <section className="py-32 bg-gradient-to-b from-white via-soft-bg to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="OUR VISA SERVICES"
            title="Choose Your Visa Type"
            subtitle="Select the visa that perfectly matches your travel goals and requirements"
          />

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {visaTypes.map((visa, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gold via-yellow-300 to-gold opacity-0 group-hover:opacity-30 blur transition duration-500 rounded-2xl" />
                
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Top Gradient Bar */}
                  <div className={`h-1 bg-gradient-to-r ${visa.gradient}`} />
                  
                  {/* Card Content */}
                  <div className="p-8">
                    {/* Icon and Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <motion.h3 
                          className="font-serif text-2xl font-bold text-navy mb-2"
                          whileHover={{ color: '#C9A227' }}
                          transition={{ duration: 0.3 }}
                        >
                          {visa.title}
                        </motion.h3>
                        <p className="text-gold font-sans font-semibold text-sm mb-3">
                          {visa.subtitle}
                        </p>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                        className={`p-3 rounded-lg bg-gradient-to-br ${visa.lightGradient}`}
                      >
                        <visa.icon size={28} className={`bg-gradient-to-r ${visa.gradient} bg-clip-text text-transparent`} />
                      </motion.div>
                    </div>

                    {/* Duration Badge */}
                    <div className="mb-6 pb-6 border-b border-gray-100">
                      <p className="text-gray-500 text-xs uppercase tracking-wider font-bold">Duration</p>
                      <p className="font-sans font-bold text-base text-navy mt-1">{visa.duration}</p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 font-sans mb-6 text-sm leading-relaxed">
                      {visa.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {visa.features.map((feature, i) => (
                        <motion.div 
                          key={i} 
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ type: 'spring' }}
                          >
                            <CheckCircle className={`bg-gradient-to-r ${visa.gradient} bg-clip-text text-transparent w-5 h-5`} />
                          </motion.div>
                          <span className="text-gray-700 font-sans text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.a 
                      href={`https://wa.me/971544343501?text=Hi%2C%20I%20am%20interested%20in%20${visa.title}%20visa%20service`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold uppercase tracking-wide text-sm transition-all duration-300 bg-gradient-to-r ${visa.gradient} text-white hover:shadow-lg`}
                    >
                      Get Started
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <ArrowRight size={16} />
                      </motion.div>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section - Enhanced */}
      <section className="py-32 bg-gradient-to-b from-soft-bg to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="OUR PROCESS"
            title="Simple & Transparent Visa Process"
            subtitle="Follow our proven four-step process to get your visa approved with confidence"
          />

          <div className="mt-16 relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="relative group"
                >
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-gold/30 h-full flex flex-col">
                    {/* Step Number with Gradient */}
                    <div className="flex items-start justify-between mb-8">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="font-serif text-6xl font-bold bg-gradient-to-br from-gold to-yellow-400 bg-clip-text text-transparent"
                      >
                        {item.step}
                      </motion.div>
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                        className="p-3 rounded-lg bg-gold/10"
                      >
                        <item.icon className="w-6 h-6 text-gold" />
                      </motion.div>
                    </div>

                    {/* Title and Description */}
                    <h3 className="font-serif font-bold text-xl text-navy mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 font-sans text-sm leading-relaxed flex-grow">
                      {item.description}
                    </p>

                    {/* Animated Border */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: index * 0.2, duration: 0.8 }}
                      className="h-1 bg-gradient-to-r from-gold to-transparent mt-6 origin-left"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Document Requirements - Enhanced */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="DOCUMENTATION"
            title="Visa Requirements & Documents"
            subtitle="Every visa type has unique documentation. Our experts provide personalized checklists"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="relative group">
              {/* Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-gold via-yellow-300 to-gold rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
              
              <div className="relative bg-gradient-to-br from-navy via-blue-900 to-navy text-white p-12 rounded-2xl border border-gold/20 hover:border-gold/50 transition-all duration-300 shadow-2xl">
                <div className="text-center">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="mb-6"
                  >
                    <FileText size={56} className="mx-auto text-gold" />
                  </motion.div>
                  
                  <h3 className="font-serif text-3xl font-bold mb-4">
                    Personalized Document Checklist
                  </h3>
                  <p className="text-gray-200 font-sans text-lg mb-10 leading-relaxed max-w-3xl mx-auto">
                    Every visa type requires different documents. Our experienced visa consultants will provide you with a detailed, personalized checklist based on your specific visa category and individual circumstances.
                  </p>
                  
                  <div className="space-y-4 bg-white/5 rounded-xl p-8 mb-10 backdrop-blur-sm border border-white/10 hover:border-gold/30 transition-all duration-300">
                    {[
                      { title: 'Personalized Support', description: 'Get a tailored document list specific to your visa type' },
                      { title: 'Expert Guidance', description: 'Our team guides you through the entire documentation process' },
                      { title: 'Fast & Accurate', description: 'Efficient handling with minimal errors and delays' }
                    ].map((item, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-4 text-left hover:translate-x-2 transition-transform"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-1"
                        >
                          <CheckCircle className="w-6 h-6 text-gold" />
                        </motion.div>
                        <div>
                          <p className="font-bold text-gold mb-1">{item.title}</p>
                          <p className="text-gray-300 text-sm">{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.a 
                      href="https://wa.me/971544343501?text=Hi%2C%20I%20need%20help%20with%20visa%20document%20requirements"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold to-yellow-400 text-navy font-bold rounded-lg hover:shadow-xl transition-all duration-300 shadow-lg"
                    >
                      Get Document Checklist
                      <ArrowRight size={20} />
                    </motion.a>
                    <motion.button 
                      onClick={() => setShowEmailDialog(true)}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gold text-gold font-bold rounded-lg hover:bg-gold hover:text-navy transition-all duration-300 shadow-lg cursor-pointer"
                    >
                      Contact Our Team
                      <ArrowRight size={20} />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section - Enhanced */}
      <section className="py-32 bg-gradient-to-b from-soft-bg to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="HELP & SUPPORT"
            title="Frequently Asked Questions"
            subtitle="Common questions about visa services"
          />

          <div className="space-y-4 mt-12">
            {[
              {
                q: 'How long does a UAE tourist visa take to process?',
                a: 'Standard processing usually takes 3–5 business days. We also offer express handling for urgent cases, often completed within 24–48 hours, with our team managing every document along the way.'
              },
              {
                q: 'Can you handle urgent visa applications?',
                a: 'Yes, we offer expedited processing services. Please contact our team for urgent visa requests and associated fees.'
              },
              {
                q: 'How do I get the best flight ticket deals?',
                a: 'Our consultants compare fares across airlines and booking channels. Share your travel dates and destination and we\'ll come back with the strongest options we can find.'
              },
              {
                q: 'Can you book hotels across all the Emirates?',
                a: 'We book hotels in Dubai, Abu Dhabi, Sharjah, Ras Al Khaimah, Fujairah and Ajman, ranging from budget-friendly stays to five-star resorts and serviced apartments.'
              },
              {
                q: 'Is my personal information kept secure?',
                a: 'Always. Passport copies, financial documents and personal details are used strictly for your visa and travel applications, and are never shared with third parties without your explicit consent.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:border-gold/30 border border-gray-100"
              >
                <details className="group cursor-pointer p-8">
                  <summary className="flex justify-between items-center font-serif text-lg font-bold text-navy hover:text-gold transition-colors">
                    <span>{faq.q}</span>
                    <motion.span
                      animate={{ rotate: 0 }}
                      exit={{ rotate: 180 }}
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

      {/* Disclaimer */}
      <section className="py-12 bg-gradient-to-r from-navy via-blue-900 to-navy text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-sans text-sm text-gray-300 text-center"
          >
            <span className="font-semibold text-gold">Important Disclaimer:</span> Visa approval is subject to the sole discretion of the relevant government authorities and immigration departments. Venture Ease Tourism provides professional assistance with documentation and application submission but cannot guarantee visa approval. All applications are subject to the rules and regulations of the respective government bodies.
          </motion.p>
        </div>
      </section>

      {/* Document Checklist Email Dialog Modal */}
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
              <h2 className="text-2xl font-serif font-bold text-gold">Document Checklist Request</h2>
              <button
                onClick={() => setShowEmailDialog(false)}
                className="text-white hover:text-gold transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Form Content */}
            <div className="p-8">
              <p className="text-gray-600 font-sans mb-6 text-sm">
                Fill in your details below and we'll provide you with a personalized document checklist based on your specific visa requirements.
              </p>
              
              <form onSubmit={(e) => { e.preventDefault(); handleSendChecklist(); }} className="space-y-5">
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

                {/* Visa Type Select */}
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">Visa Type / Service Required *</label>
                  <select
                    value={emailData.visaType}
                    onChange={(e) => setEmailData({...emailData, visaType: e.target.value})}
                    className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold text-gray-900 bg-white text-base"
                    required
                  >
                    <option value="">Select visa type...</option>
                    <option value="UAE Single Entry">UAE Single Entry Visa</option>
                    <option value="UAE Multiple Entry">UAE Multiple Entry Visa</option>
                    <option value="B2B Visa">B2B Corporate Visa</option>
                    <option value="Schengen Visa">Schengen Visa</option>
                    <option value="UK Visitor Visa">UK Visitor Visa</option>
                    <option value="Other Visa Enquiry">Other Visa Enquiry</option>
                  </select>
                </div>

                {/* Additional Information Textarea */}
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">Additional Information</label>
                  <textarea
                    value={emailData.message}
                    onChange={(e) => setEmailData({...emailData, message: e.target.value})}
                    placeholder="Any additional details about your visa requirements or personal circumstances..."
                    rows="4"
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
                    Send Request
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
                  * Required fields. Your email client will open to complete the send.
                </p>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}