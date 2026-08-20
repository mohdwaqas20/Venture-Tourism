import { motion } from 'framer-motion'
import { Shield, ArrowRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

export default function PrivacyPolicy() {
  const sections = [
    {
      title: 'Information We Collect',
      content: 'We collect information you provide directly to us, such as when you fill out a contact form, book a service, or subscribe to our newsletter. This may include your name, email address, phone number, passport details (for visa services), and travel preferences. We also automatically collect certain information about your device and how you interact with our website, including IP address, browser type, and browsing activity.'
    },
    {
      title: 'How We Use Your Information',
      content: 'We use the information we collect to provide, maintain, and improve our services, process your travel bookings and visa applications, communicate with you about your inquiries and reservations, send promotional emails (which you can opt-out of), and comply with legal obligations. Your information helps us personalize your experience and provide better travel recommendations.'
    },
    {
      title: 'Information Sharing',
      content: 'We do not sell or rent your personal information to third parties. We may share your information with trusted partners who assist us in operating our website and conducting our business, such as payment processors, visa agencies, hotels, and airlines. All third parties are contractually obligated to keep your information confidential and secure.'
    },
    {
      title: 'Data Security',
      content: 'We implement comprehensive security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and restricted access to sensitive data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.'
    },
    {
      title: 'Cookies and Tracking',
      content: 'Our website uses cookies to enhance your browsing experience, remember your preferences, and analyze how you use our site. You can control cookie settings through your browser preferences. We also use analytics tools to understand website traffic and user behavior, which helps us improve our services.'
    },
    {
      title: 'Your Rights',
      content: 'You have the right to access, update, or delete your personal information at any time. You can opt-out of promotional communications by following the unsubscribe link in our emails. For privacy-related concerns or to exercise your rights, please contact us at info@venturease.ae.'
    },
    {
      title: 'Changes to This Policy',
      content: 'We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any significant changes by posting the updated policy on our website and updating the effective date. Your continued use of our website constitutes your acceptance of the updated Privacy Policy.'
    },
    {
      title: 'Contact Us',
      content: 'If you have questions about this Privacy Policy or our privacy practices, please contact us at: Email: info@venturease.ae | Phone: +971 4 332 9686 | Address: 1101 Silver Tower, Business Bay, Dubai, UAE'
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
      <section className="relative min-h-[400px] bg-gradient-to-br from-navy via-blue-900 to-navy text-white overflow-hidden flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-96 h-96 bg-gold/8 rounded-full blur-3xl"
            animate={{ y: [0, -30, 0], x: [0, 30, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-40 -left-40 w-72 h-72 bg-blue-400/8 rounded-full blur-3xl"
            animate={{ y: [0, 40, 0], x: [0, -40, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-8 flex items-center gap-3"
            >
              <Shield className="w-8 h-8 text-gold" />
              <span className="text-gold font-sans text-sm font-bold uppercase tracking-widest">Your Privacy Matters</span>
            </motion.div>

            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Privacy Policy
            </h1>

            <p className="text-xl text-gray-100 leading-relaxed">
              We are committed to protecting your personal information and your right to privacy. This policy explains how we collect, use, and safeguard your data.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-gradient-to-b from-white to-soft-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {sections.map((section, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gold/30"
              >
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-3 flex-shrink-0" />
                  <div className="flex-1">
                    <h2 className="font-serif font-bold text-2xl text-navy mb-4">
                      {section.title}
                    </h2>
                    <p className="text-gray-600 font-sans leading-relaxed text-sm">
                      {section.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Last Updated */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 p-6 bg-gold/5 border-l-4 border-gold rounded-lg"
          >
            <p className="text-gray-600 font-sans text-sm">
              <span className="font-bold text-navy">Last Updated:</span> August 2024
            </p>
            <p className="text-gray-600 font-sans text-sm mt-2">
              This Privacy Policy is effective as of the last updated date and applies to all users of our website and services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-navy via-blue-900 to-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Have Questions About Our Privacy?
            </h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              Contact us anytime at info@venturease.ae or call +971 4 332 9686
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy font-bold rounded-lg uppercase tracking-wide text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-yellow-400"
            >
              Contact Us
              <ArrowRight size={20} />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}