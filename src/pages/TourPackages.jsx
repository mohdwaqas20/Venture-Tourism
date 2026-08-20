import { motion } from 'framer-motion'
import { MapPin, Clock, Users, DollarSign, CheckCircle, Star } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'

export default function TourPackages() {
  const packages = [
    {
      title: 'European Escape',
      subtitle: 'Paris • Switzerland • Italy',
      duration: '10 days',
      groupSize: '2-8 people',
      price: 'From AED 8,999',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop',
      highlights: ['Eiffel Tower tour', 'Swiss Alps experience', 'Italian cuisine', 'Gondola rides', 'Vatican City'],
      description: 'Experience the romance and culture of Europe with visits to Paris, Swiss mountains, and Italian heritage sites.'
    },
    {
      title: 'Asian Discovery',
      subtitle: 'Thailand • Singapore • Bali',
      duration: '9 days',
      groupSize: '2-10 people',
      price: 'From AED 6,499',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      highlights: ['Temple visits', 'Beach resorts', 'Street food tours', 'Traditional massage', 'Night markets'],
      description: 'Discover the vibrant cultures and stunning landscapes of Southeast Asia with this comprehensive tour.'
    },
    {
      title: 'Luxury Maldives',
      subtitle: 'Island Resorts • Water Activities',
      duration: '7 days',
      groupSize: '2-4 people',
      price: 'From AED 12,999',
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop',
      highlights: ['Overwater bungalows', 'Snorkeling', 'Spa treatments', 'Private beach', 'Water sports'],
      description: 'Experience ultimate luxury and relaxation in the Maldives with private islands and exclusive amenities.'
    },
    {
      title: 'Dubai Experience',
      subtitle: 'City Tours • Desert Safari • Leisure',
      duration: '5 days',
      groupSize: '1-6 people',
      price: 'From AED 3,999',
      image: 'https://images.unsplash.com/photo-1512453475888-5953c798b20c?w=400&h=300&fit=crop',
      highlights: ['Burj Khalifa', 'Desert safari', 'Gold souk', 'Marina yacht', 'Luxury shopping'],
      description: 'Explore the best of Dubai with city landmarks, desert adventures, and world-class shopping and dining.'
    },
    {
      title: 'Swiss Alpine Adventure',
      subtitle: 'Mountains • Lakes • Villages',
      duration: '8 days',
      groupSize: '2-8 people',
      price: 'From AED 9,499',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=300&fit=crop',
      highlights: ['Mountain hiking', 'Interlaken cable car', 'Jungfrau railway', 'Chalets', 'Alpine lakes'],
      description: 'Immerse yourself in Swiss alpine beauty with outdoor adventures and picturesque village experiences.'
    },
    {
      title: 'Mediterranean Cruise',
      subtitle: 'Greece • Croatia • Italy',
      duration: '12 days',
      groupSize: '2-12 people',
      price: 'From AED 14,999',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop',
      highlights: ['Cruise ship', 'Greek islands', 'Dubrovnik tours', 'Mediterranean dining', 'Water activities'],
      description: 'Sail through Mediterranean waters visiting iconic destinations and enjoying luxury cruise amenities.'
    },
  ]

  const features = [
    {
      icon: MapPin,
      title: 'Customizable Itineraries',
      description: 'Choose pre-made packages or customize your own travel experience'
    },
    {
      icon: Clock,
      title: 'Flexible Timing',
      description: 'Various duration options from short getaways to extended tours'
    },
    {
      icon: Users,
      title: 'Group Discounts',
      description: 'Special rates for group bookings and family packages'
    },
    {
      icon: DollarSign,
      title: 'All-Inclusive',
      description: 'Flights, hotels, meals, and activities included in package price'
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-navy text-white overflow-hidden">
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
            <h1 className="heading-1 text-white mb-6">Your Next Adventure Starts Here</h1>
            <p className="text-xl text-gray-200">
              Curated international tour packages for unforgettable experiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-soft-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-lg bg-warm-bg">
                    <feature.icon size={32} className="text-gold" />
                  </div>
                </div>
                <h3 className="font-serif font-bold text-lg text-navy mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-sans text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Packages Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="CURATED PACKAGES"
            title="Featured Tour Packages"
            subtitle="Handpicked destinations and experiences for every type of traveler"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="premium-card overflow-hidden group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute top-4 right-4 bg-gold text-navy px-4 py-2 rounded-lg font-sans font-bold text-sm">
                    {pkg.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-navy mb-1">
                    {pkg.title}
                  </h3>
                  <p className="text-gold font-sans font-semibold text-sm mb-4">
                    {pkg.subtitle}
                  </p>

                  <p className="text-gray-600 font-sans text-sm mb-4">
                    {pkg.description}
                  </p>

                  {/* Package Details */}
                  <div className="space-y-2 mb-6 pb-6 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                      <Clock size={16} className="text-gold" />
                      <span className="text-gray-600 font-sans text-sm">{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users size={16} className="text-gold" />
                      <span className="text-gray-600 font-sans text-sm">{pkg.groupSize}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <p className="font-sans font-semibold text-navy text-xs uppercase tracking-wider mb-3">
                      Package Highlights
                    </p>
                    <div className="space-y-1">
                      {pkg.highlights.slice(0, 3).map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle size={14} className="text-gold" />
                          <span className="text-gray-600 font-sans text-xs">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <motion.button 
                    className="premium-button w-full text-center"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Package
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Customization */}
      <section className="py-24 bg-soft-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="PERSONALIZED TRAVEL"
            title="Customize Your Package"
            subtitle="Don't see exactly what you want? Create your own itinerary"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: MapPin,
                title: 'Choose Destinations',
                description: 'Select any destinations worldwide for your custom tour'
              },
              {
                icon: Clock,
                title: 'Set Duration',
                description: 'Choose trip length from short getaways to extended tours'
              },
              {
                icon: Star,
                title: 'Select Activities',
                description: 'Pick activities and experiences that match your interests'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="premium-card p-8 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-lg bg-warm-bg">
                    <item.icon size={32} className="text-gold" />
                  </div>
                </div>
                <h3 className="font-serif font-bold text-lg text-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-sans text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <motion.button 
              className="premium-button-gold inline-flex items-center gap-2 group px-6 sm:px-8 py-3 sm:py-4"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Planning Your Custom Package
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="PACKAGE DETAILS"
            title="What's Included in Our Packages"
            subtitle="Comprehensive travel solutions for worry-free vacations"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              {
                title: 'Transportation',
                items: ['International flights', 'Airport transfers', 'Local transportation', 'Train tickets']
              },
              {
                title: 'Accommodation',
                items: ['Hotel bookings', 'Resort stays', 'Quality accommodations', 'Central locations']
              },
              {
                title: 'Experiences',
                items: ['Guided tours', 'Activity bookings', 'Entrance fees', 'Local experiences']
              },
              {
                title: 'Meals & Dining',
                items: ['Breakfast included', 'Dinner experiences', 'Local cuisine', 'Special dining']
              }
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="premium-card p-8"
              >
                <h3 className="font-serif text-2xl font-bold text-navy mb-6">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle size={18} className="text-gold flex-shrink-0" />
                      <span className="text-gray-600 font-sans">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection title="Ready to Book Your Dream Tour?" description="Choose from our packages or create your own adventure" />
    </div>
  )
}