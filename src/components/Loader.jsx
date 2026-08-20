import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import logo from '../assets/logo.png'

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 bg-gradient-to-br from-navy via-slate-900 to-navy flex items-center justify-center z-[9999]"
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 opacity-5"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" stroke="#C9A227" strokeWidth="2" />
          <circle cx="100" cy="100" r="60" stroke="#C9A227" strokeWidth="2" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 opacity-5"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="70" stroke="#C9A227" strokeWidth="2" />
        </svg>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Logo Container */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotateZ: [0, 360]
            }}
            transition={{ 
              y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
              rotateZ: { duration: 4, repeat: Infinity, ease: 'linear' }
            }}
            className="relative"
          >
            <img 
              src={logo} 
              alt="Venture Ease" 
              className="h-24 w-auto object-contain filter drop-shadow-lg"
            />
            
            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{ 
                boxShadow: [
                  '0 0 20px rgba(201, 162, 39, 0.3)',
                  '0 0 40px rgba(201, 162, 39, 0.6)',
                  '0 0 20px rgba(201, 162, 39, 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">
            VENTURE EASE
          </h1>
          <p className="text-gold text-sm md:text-base font-sans font-semibold tracking-widest uppercase">
            Travel & Tourism
          </p>
        </motion.div>

        {/* Loading Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex gap-2"
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 rounded-full bg-gold"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2
              }}
            />
          ))}
        </motion.div>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-8 text-gray-400 font-sans text-sm uppercase tracking-wider"
        >
          Loading your adventure...
        </motion.p>
      </div>

      {/* Bottom Accent Line */}
      <motion.div
        className="absolute bottom-0 left-1/2 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"
        initial={{ width: 0, x: '-50%' }}
        animate={{ width: '100%', x: '-50%' }}
        transition={{ duration: 1, delay: 0.3 }}
      />
    </motion.div>
  )
}