import { motion } from 'framer-motion'

export default function SectionHeading({ 
  label, 
  title, 
  subtitle, 
  centered = true,
  showGoldLine = true 
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      {label && (
        <motion.p variants={itemVariants} className="section-label mb-3">
          {label}
        </motion.p>
      )}

      {showGoldLine && (
        <motion.div 
          variants={itemVariants}
          className="h-1 bg-gold rounded-full mb-4 w-16 mx-auto"
        />
      )}

      <motion.h2 variants={itemVariants} className="heading-2 mb-4">
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p variants={itemVariants} className="text-gray-600 text-lg font-sans max-w-2xl mx-auto">
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}