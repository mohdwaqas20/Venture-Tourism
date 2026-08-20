import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function ServiceCard({ 
  number, 
  title, 
  description, 
  icon: Icon,
  image = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop'
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="premium-card overflow-hidden group"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex items-center gap-2 text-white">
            <span className="font-sans font-semibold">Learn More</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Service Number */}
        <p className="text-gold font-serif text-sm font-bold mb-2">{number}</p>

        {/* Title */}
        <h3 className="font-serif text-2xl font-bold text-navy mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 font-sans text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Icon */}
        {Icon && (
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-warm-bg group-hover:bg-gold/10 transition-colors">
              <Icon size={24} className="text-gold" />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}