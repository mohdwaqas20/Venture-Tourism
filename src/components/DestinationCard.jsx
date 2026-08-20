import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function DestinationCard({ 
  name, 
  image = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=500&fit=crop',
  description
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="relative h-96 rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Image */}
      <motion.img
        src={image}
        alt={name}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
      />

      {/* Dark Overlay Base - Always visible */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />

      {/* Enhanced Dark Overlay on Hover - Smooth transition */}
      <motion.div
        animate={{ 
          opacity: isHovered ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90"
      />

      {/* Gold Accent Line - Animated width */}
      <motion.div
        animate={{ width: isHovered ? 70 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute top-0 left-0 h-2 bg-gradient-to-r from-gold via-yellow-400 to-gold rounded-r-full shadow-lg"
      />

      {/* Content - Bottom positioned */}
      <div className="absolute inset-0 flex flex-col justify-end p-8">
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 1,
            y: isHovered ? 0 : 6
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Destination Name */}
          <motion.h3 
            animate={{
              fontSize: isHovered ? '42px' : '36px',
              textShadow: isHovered 
                ? '0 4px 12px rgba(0,0,0,0.8), 0 2px 6px rgba(0,0,0,0.6)'
                : '0 2px 8px rgba(0,0,0,0.6), 0 1px 3px rgba(0,0,0,0.4)'
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="font-serif font-bold mb-3 text-white"
          >
            {name}
          </motion.h3>

          {/* Description */}
          {description && (
            <motion.p
              animate={{
                opacity: isHovered ? 1 : 0.95,
                marginBottom: isHovered ? '20px' : '14px',
                y: isHovered ? 0 : 3,
                textShadow: isHovered 
                  ? '0 3px 10px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.6)'
                  : '0 2px 6px rgba(0,0,0,0.6), 0 1px 2px rgba(0,0,0,0.4)'
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-white font-sans text-sm mb-4 line-clamp-2 leading-relaxed font-semibold tracking-wide"
            >
              {description}
            </motion.p>
          )}

          {/* CTA Button Style */}
          <motion.div
            animate={{
              opacity: isHovered ? 1 : 0.9,
              x: isHovered ? 0 : -3,
              textShadow: isHovered 
                ? '0 2px 8px rgba(0,0,0,0.6)'
                : '0 1px 4px rgba(0,0,0,0.4)'
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex items-center gap-2 text-gold font-sans font-bold text-base transition-all"
          >
            <span className="text-lg">Explore</span>
            <motion.div
              animate={{
                x: isHovered ? 8 : 0,
                scale: isHovered ? 1.3 : 1
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex"
            >
              <ArrowRight size={24} strokeWidth={2.5} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Light Effect on Hover */}
      <motion.div
        animate={{
          opacity: isHovered ? 0.15 : 0,
          x: isHovered ? 0 : -100
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none"
      />
    </motion.div>
  )
}