import { motion } from 'framer-motion'
import { Heart, Award, Globe, Users, Shield, CheckCircle } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import aboutVideo from '../assets/about.mp4'

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your satisfaction and travel experience is at the heart of everything we do.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in service delivery and customer care.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'With connections worldwide, we bring the globe closer to you.'
    },
    {
      icon: Users,
      title: 'Professional Team',
      description: 'Our experienced team brings decades of combined travel expertise.'
    },
  ]

  const storyValues = [
    {
      icon: Shield,
      title: 'TRUST',
      description: 'Your journey, our responsibility.'
    },
    {
      icon: Globe,
      title: 'EXPERTISE',
      description: 'Professional guidance at every step.'
    },
    {
      icon: Heart,
      title: 'PASSION',
      description: 'Creating memories that last a lifetime.'
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-navy text-white overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 opacity-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="80" stroke="#C9A227" strokeWidth="2" />
          </svg>
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-gold font-sans font-semibold text-xs tracking-[0.2em] uppercase">
                ✦ Premium Travel Excellence
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-4xl font-bold text-white mb-4">
              About Venture Ease Tourism
            </h1>

            <p className="text-lg text-gray-200 max-w-2xl leading-relaxed">
              Your trusted partner in creating unforgettable travel experiences. We blend expertise, passion, and innovation to turn your travel dreams into reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="relative py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Video - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Subtle Shadow Card */}
              <motion.div
                className="absolute -inset-6 bg-gradient-to-br from-gold/5 to-navy/5 rounded-3xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              />
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-cover"
                >
                  <source src={aboutVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Floating Info Card */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-navy font-serif font-bold text-sm">Trusted Since</p>
                    <p className="text-gold font-sans font-semibold text-lg">Day One</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Content - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* Label */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: -15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-gold font-sans font-semibold text-xs tracking-[0.2em] uppercase">
                  ✦ Our Journey
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                className="heading-2 text-navy mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our Story
              </motion.h2>

              {/* Decorative Line */}
              <motion.div
                className="w-20 h-1 bg-gradient-to-r from-gold to-transparent rounded-full mb-8"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
              />
              
              {/* Text Content */}
              <div className="space-y-6">
                <motion.p 
                  className="text-gray-700 font-sans text-base leading-relaxed"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Founded in Dubai, Venture Ease Tourism began with a simple mission: to make international travel accessible, affordable, and enjoyable for everyone. Our team recognized that travelers deserved more than just booking services—they needed expertise, trust, and personalized attention.
                </motion.p>

                <motion.p 
                  className="text-gray-700 font-sans text-base leading-relaxed"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Over the years, we've grown into a premier travel agency, serving thousands of satisfied customers across the globe. Our success is built on three pillars: professional expertise, customer dedication, and a passion for creating memories.
                </motion.p>

                <motion.p 
                  className="text-gray-700 font-sans text-base leading-relaxed"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  Today, Venture Ease Tourism stands as a symbol of trust and excellence in the travel industry, connecting dreams with destinations.
                </motion.p>
              </div>

              {/* Story Values - Cleaner Design */}
              <motion.div 
                className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {storyValues.map((value, index) => (
                  <motion.div
                    key={index}
                    className="text-center group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="flex justify-center mb-4"
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                    >
                      <div className="p-3 rounded-full bg-gold/10 group-hover:bg-gold/20 transition-all duration-300">
                        <value.icon size={28} className="text-navy group-hover:text-gold transition-colors duration-300" strokeWidth={1.5} />
                      </div>
                    </motion.div>
                    
                    <h4 className="font-serif font-bold text-navy text-sm mb-2">
                      {value.title}
                    </h4>
                    
                    <p className="text-gray-600 font-sans text-xs leading-relaxed mb-3">
                      {value.description}
                    </p>
                    
                    {/* Bottom accent line */}
                    <motion.div
                      className="h-0.5 w-8 bg-gold rounded-full mx-auto"
                      initial={{ width: 0 }}
                      whileInView={{ width: 32 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '5000+', label: 'Happy Travelers' },
              { number: '150+', label: 'Destinations' },
              { number: '50+', label: 'Global Partners' },
              { number: '24/7', label: 'Customer Support' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="font-serif text-5xl font-bold text-gold mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-300 font-sans">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-soft-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="OUR PRINCIPLES"
            title="Our Core Values"
            subtitle="What drives us to deliver excellence"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="premium-card p-8 text-center"
              >
                <div className="flex justify-center mb-4">
                  <motion.div 
                    className="p-4 rounded-lg bg-warm-bg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <value.icon size={32} className="text-gold" />
                  </motion.div>
                </div>
                <h3 className="font-serif font-bold text-lg text-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 font-sans text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

      

      {/* CTA
      <CTASection title="Ready to Experience Our Service?" description="Let our team create your perfect travel experience" />
     */}</div>
  )
}