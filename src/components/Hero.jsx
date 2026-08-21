import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import bg1 from '../assets/bg1.png'
import bg2 from '../assets/bg2.png'
import bg3 from '../assets/bg3.png'
import bg4 from '../assets/bg4.png'
import bg5 from '../assets/bg5.png'
import bg6 from '../assets/bg6.png'

export default function Hero({ 
  title, 
  subtitle, 
  description, 
  primaryCTA, 
  secondaryCTA,
}) {
  const navigate = useNavigate()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const backgroundImages = [bg1, bg2, bg3, bg4, bg5, bg6]
  const [intervalKey, setIntervalKey] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [intervalKey])

  const handleDotClick = (index) => {
    setCurrentImageIndex(index)
    // Reset the auto-play interval
    setIntervalKey(prev => prev + 1)
  }

  const handlePrimaryClick = () => {
    navigate('/services')
  }

  const handleSecondaryClick = () => {
    const message = "Hi, I'm interested in planning my journey with Venture Ease. Could you please provide more information about your travel packages?"
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/971544343501?text=${encodedMessage}`, '_blank')
  }

  return (
    <section className="relative w-full max-w-full min-h-[85vh] md:min-h-screen flex items-center overflow-hidden">
      {/* Background Images Carousel with Smooth Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          initial={{ scale: 1 }}
          animate={{ scale: 1.04 }}
          exit={{ scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Cinematic Slow Scale Effect */}
          <motion.div
            className="absolute inset-0"
            animate={{ scale: [1, 1.02] }}
            transition={{ duration: 16, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Professional Gradient Overlay - Stronger for Text Visibility */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, rgba(4, 27, 58, 0.9) 0%, rgba(4, 27, 58, 0.75) 30%, rgba(4, 27, 58, 0.4) 60%, rgba(4, 27, 58, 0.15) 100%)'
        }}
      />

      {/* Decorative Gold Curved Line - Lower Right */}
      <motion.svg
        className="absolute bottom-40 right-12 md:bottom-48 md:right-24 w-32 h-32 md:w-48 md:h-48 opacity-20 pointer-events-none hidden md:block"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.2, delay: 0.8 }}
      >
        <path
          d="M 20 180 Q 80 120, 150 60"
          stroke="#C9A227"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 30 190 Q 90 130, 160 70"
          stroke="#C9A227"
          strokeWidth="1"
          opacity="0.6"
          fill="none"
          strokeLinecap="round"
        />
      </motion.svg>

      {/* Content Container - Left Aligned */}
      <div className="relative z-20 w-full h-full flex items-center px-2 sm:px-4 md:px-8 lg:px-12 py-6 sm:py-8 max-w-full">
        <div className="w-full max-w-sm sm:max-w-2xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="mb-3 sm:mb-4"
          >
            <span className="text-xs sm:text-sm md:text-base font-medium tracking-widest text-[#C9A227] uppercase">
              YOUR JOURNEY. OUR EXPERTISE.
            </span>
          </motion.div>

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 40 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="h-0.5 sm:h-1 bg-[#C9A227] mb-4 sm:mb-6"
            style={{ maxWidth: 60 }}
          />

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-3 sm:mb-6 leading-tight drop-shadow-xl break-words"
          >
            {title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            className="text-xs sm:text-base md:text-lg lg:text-xl text-white mb-5 sm:mb-8 drop-shadow-lg font-light max-w-full"
          >
            {description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
            className="flex flex-col w-full sm:flex-row gap-2 sm:gap-4 items-stretch sm:items-center"
          >
            <motion.button 
              onClick={handlePrimaryClick}
              className="premium-button-gold group flex items-center justify-center gap-2 px-3 sm:px-8 py-2.5 sm:py-4 font-semibold whitespace-nowrap text-xs sm:text-base flex-1 sm:flex-none"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              {primaryCTA}
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={16} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </motion.button>
            <motion.button 
              onClick={handleSecondaryClick}
              className="premium-button-outline-white px-3 sm:px-8 py-2.5 sm:py-4 font-semibold whitespace-nowrap text-xs sm:text-base flex-1 sm:flex-none"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              {secondaryCTA}
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Image Carousel Dot Indicators - Professional Minimalist Design */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-3 backdrop-blur-sm px-4 py-2 rounded-full bg-black bg-opacity-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {backgroundImages.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`rounded-full transition-all duration-300 cursor-pointer ${
              index === currentImageIndex
                ? 'w-2.5 h-2.5 bg-[#C9A227] shadow-[0_0_12px_rgba(201,162,39,0.6)]'
                : 'w-1.5 h-1.5 bg-white bg-opacity-50 hover:bg-opacity-80'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 left-8 md:left-12 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 border-2 border-white border-opacity-60 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-white rounded-full mt-2"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}