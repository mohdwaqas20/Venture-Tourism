import { motion } from 'framer-motion'
import { FileText, ArrowRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

export default function TermsConditions() {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: 'By accessing and using the Venture Ease Tourism website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services. Your use of our website constitutes your legal acceptance of these terms.'
    },
    {
      title: 'Services Description',
      content: 'Venture Ease Tourism provides travel consulting, airline ticket booking, hotel reservations, visa assistance, excursion packages, and international tour package services. While we strive to provide accurate information, visa approvals, flight availability, and hotel bookings are subject to availability and approval from relevant authorities and service providers. We do not guarantee approval of visa applications or confirmed availability of services.'
    },
    {
      title: 'Visa Services Disclaimer',
      content: 'Visa approval is solely at the discretion of the respective government authorities and immigration departments. Venture Ease Tourism acts as a consultant and assists with documentation but cannot guarantee visa approval. All visa-related decisions, timelines, and requirements are subject to change by government authorities. We recommend verifying all requirements directly with the relevant embassy or consulate.'
    },
    {
      title: 'Booking and Payment',
      content: 'All bookings made through our platform are subject to payment in full or as per agreed payment terms. Payments must be made through authorized payment methods. Once a booking is confirmed and payment received, the terms of the specific service provider apply. We require 72 hours notice for cancellations. Refund eligibility depends on the service provider\'s cancellation policy.'
    },
    {
      title: 'Cancellation and Refund Policy',
      content: 'Cancellation requests must be submitted in writing to info@venturease.ae. Refund amounts depend on the service provider\'s policy and timing of cancellation. Some services may not be refundable if they have been partially or fully utilized. Non-refundable amounts will be clearly stated at the time of booking. We charge a processing fee for all cancellations.'
    },
    {
      title: 'Limitation of Liability',
      content: 'Venture Ease Tourism shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services or website. This includes loss of profits, data, or business opportunities. Our liability is limited to the amount you paid for the service. We are not responsible for delays, cancellations, or changes made by airlines, hotels, visa authorities, or other service providers.'
    },
    {
      title: 'Intellectual Property',
      content: 'All content on our website, including text, images, logos, and design elements, is the property of Venture Ease Tourism or licensed to us. You may not reproduce, distribute, or transmit this content without our express written permission. Unauthorized use may violate copyright and intellectual property laws.'
    },
    {
      title: 'User Responsibilities',
      content: 'You are responsible for maintaining the confidentiality of any account information provided to us. You agree to use our website and services for lawful purposes only. You must not engage in any conduct that could damage, disable, or impair our website or services. Any fraudulent activity or misuse of our platform will result in immediate account termination.'
    },
    {
      title: 'Third-Party Services',
      content: 'Our website contains links to third-party websites and services. We are not responsible for the content, accuracy, or practices of external websites. Your use of third-party services is subject to their own terms and conditions. We recommend reviewing their policies before engaging with their services.'
    },
    {
      title: 'Modifications to Terms',
      content: 'We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any modifications constitutes your acceptance of the updated terms. We recommend reviewing this page periodically for any changes.'
    },
    {
      title: 'Governing Law',
      content: 'These Terms and Conditions are governed by and construed in accordance with the laws of the United Arab Emirates, without regard to its conflict of law provisions. Any legal action or proceeding shall be resolved exclusively in the courts located in Dubai, UAE.'
    },
    {
      title: 'Contact Information',
      content: 'If you have any questions about these Terms and Conditions, please contact us at: Email: info@venturease.ae | Phone: +971 4 332 9686 | Address: 1101 Silver Tower, Business Bay, Dubai, UAE | WhatsApp: +971 54 434 3501'
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
              <FileText className="w-8 h-8 text-gold" />
              <span className="text-gold font-sans text-sm font-bold uppercase tracking-widest">Our Legal Framework</span>
            </motion.div>

            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Terms & Conditions
            </h1>

            <p className="text-xl text-gray-100 leading-relaxed">
              Please read these terms carefully before using our services. They define the rules, rights, and responsibilities governing your relationship with Venture Ease Tourism.
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
              These Terms and Conditions are effective as of the date above and apply to all users of our website and services.
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
              Questions About Our Terms?
            </h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              Contact our team for clarifications or concerns about our Terms and Conditions
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