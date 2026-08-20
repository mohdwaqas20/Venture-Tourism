import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'

export default function CTASection({ 
  title = "Ready for Your Next Adventure?",
  description = "Let Venture Ease Tourism take care of the details while you enjoy the journey.",
  primaryCTA = "Plan My Trip",
  secondaryCTA = "Email Us"
}) {
  const handlePrimaryClick = () => {
    const message = "Hi, I'm interested in planning my trip. Could you please help me with the best travel packages available?"
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/971544343501?text=${encodedMessage}`, '_blank')
  }

  const handleSecondaryClick = () => {
    const email = "info@venturease.ae"
    const subject = encodeURIComponent("Travel Inquiry - Venture Ease Tourism")
    const body = encodeURIComponent(
      "Hello Venture Ease Tourism Team,\n\n" +
      "I would like to inquire about your premium travel services and packages. I am interested in learning more about your offerings and would appreciate your professional guidance for my upcoming travel plans.\n\n" +
      "Please feel free to contact me at your earliest convenience with the available options and pricing.\n\n" +
      "Best regards"
    )
    
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
  }

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy" />

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 opacity-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" stroke="#C9A227" strokeWidth="2" />
          <circle cx="100" cy="100" r="60" stroke="#C9A227" strokeWidth="2" />
        </svg>
      </motion.div>

      {/* Gold Line */}
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 h-1 bg-gold w-32"
        initial={{ width: 0 }}
        whileInView={{ width: 128 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="heading-2 text-white mb-4"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xl text-gray-100 mb-8 font-sans max-w-2xl mx-auto"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button 
            onClick={handlePrimaryClick}
            className="premium-button-gold group flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {primaryCTA}
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </motion.button>
          
          <motion.button 
            onClick={handleSecondaryClick}
            className="premium-button px-6 sm:px-8 py-3 sm:py-4 flex items-center justify-center gap-2 group hover:bg-gold/20 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail size={18} className="text-gold group-hover:scale-110 transition-transform" />
            {secondaryCTA}
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}