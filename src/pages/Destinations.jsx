import { motion } from 'framer-motion'
import { MapPin, Compass, Heart, CheckCircle, Phone, ArrowRight } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import SectionHeading from '../components/SectionHeading'
import pic1 from '../assets/Photos/pic1.png'
import pic2 from '../assets/Photos/pic2.png'
import pic3 from '../assets/Photos/pic3.png'
import pic4 from '../assets/Photos/pic4.png'
import pic5 from '../assets/Photos/pic5.png'
import pic6 from '../assets/Photos/pic6.png'

export default function Destinations() {
  const [searchParams] = useSearchParams()
  const location = searchParams.get('location')

  useEffect(() => {
    if (location) {
      const elementId = `destination-${location.replace(/\s+/g, '-')}`
      const element = document.getElementById(elementId)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    }
  }, [location])
  // WhatsApp Handler Function
  const handleDestinationInquiry = (destinationName, e) => {
    e.preventDefault()
    
    const whatsappNumber = '+971544343501'
    const message = `Hello Venture Ease Team,

I am interested in traveling to ${destinationName}. I would like to receive comprehensive information about:

• Best time to visit
• Available tour packages and itineraries
• Accommodation options and pricing
• Visa requirements and processing
• Activities and attractions
• Special deals or promotions

Please provide me with detailed information at your earliest convenience. I look forward to hearing from you.

Best regards`

    const encodedMessage = encodeURIComponent(message)
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    
    window.open(whatsappLink, '_blank')
  }

  const destinations = [
    {
      name: 'Dubai',
      description: 'Experience the epitome of luxury and innovation. Dubai offers world-class shopping, stunning architecture, and thrilling desert adventures that cater to every traveler.',
      highlights: ['Luxury shopping & dining', 'Desert safari adventures', 'Modern architectural marvels', 'Beach activities & water sports', 'Cultural heritage experiences'],
      visa: 'UAE Visit Visa',
      image: pic1
    },
    {
      name: 'Abu Dhabi',
      description: 'Discover the capital of the UAE where rich heritage seamlessly blends with modern grandeur. Experience world-renowned attractions and authentic Emirati culture.',
      highlights: ['Sheikh Zayed Grand Mosque', 'Louvre Abu Dhabi', 'Corniche beach walks', 'Traditional souks & markets', 'Luxury resort experiences'],
      visa: 'UAE Visit Visa',
      image: pic2
    },
    {
      name: 'Paris',
      description: 'Fall in love with the City of Light—a romantic destination filled with timeless beauty, world-class art, historic landmarks, and exquisite French cuisine.',
      highlights: ['Eiffel Tower & landmarks', 'World-famous museums', 'Seine river cruises', 'Charming cafés & bistros', 'Fashion & shopping districts'],
      visa: 'Schengen Visa',
      image: pic3
    },
    {
      name: 'Switzerland',
      description: 'Discover Alpine perfection with breathtaking mountain scenery, pristine lakes, and world-class resorts. A paradise for both adventure seekers and luxury travelers.',
      highlights: ['Alpine mountain trails', 'Scenic train journeys', 'Luxury ski resorts', 'Crystal-clear lakes', 'Swiss culinary excellence'],
      visa: 'Schengen Visa',
      image: pic4
    },
    {
      name: 'Italy',
      description: 'Immerse yourself in millennia of history, art, and culture. From ancient ruins to Renaissance masterpieces, Italy offers unforgettable experiences at every turn.',
      highlights: ['Historic landmarks & ruins', 'Renaissance art & museums', 'Authentic Italian cuisine', 'Amalfi Coast beauty', 'Venice\'s romantic waterways'],
      visa: 'Schengen Visa',
      image: pic5
    },
    {
      name: 'London',
      description: 'Explore iconic landmarks, vibrant culture, and world-class attractions. From the Royal Family to cutting-edge contemporary art, London offers endless discoveries.',
      highlights: ['Big Ben & Parliament', 'Buckingham Palace', 'British Museum treasures', 'West End theater shows', 'Thames river experiences'],
      visa: 'UK Visitor Visa',
      image: pic6
    }
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
            <motion.div 
              className="mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-gold font-sans font-semibold text-xs tracking-[0.2em] uppercase">
                ✦ Explore The World
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-4xl font-bold text-white mb-4">
              Popular Destinations
            </h1>

            <p className="text-lg text-gray-200 max-w-2xl leading-relaxed mb-6">
              From iconic landmarks to hidden gems, discover destinations that match your travel style and budget. Let us create your perfect journey.
            </p>
            {/* Unique Services Badge Grid */}
            <motion.div 
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white/10 border border-white/20 rounded-full px-4 py-2">
                <span className="text-gold font-sans text-xs font-semibold">✓ Dubai</span>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-full px-4 py-2">
                <span className="text-gold font-sans text-xs font-semibold">✓ Abu Dhabi</span>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-full px-4 py-2">
                <span className="text-gold font-sans text-xs font-semibold">✓ Paris</span>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-full px-4 py-2">
                <span className="text-gold font-sans text-xs font-semibold">✓ Switzerland</span>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-full px-4 py-2">
                <span className="text-gold font-sans text-xs font-semibold">✓ Italy</span>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-full px-4 py-2">
                <span className="text-gold font-sans text-xs font-semibold">✓ London</span>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-full px-4 py-2">
                <span className="text-gold font-sans text-xs font-semibold">✓ More</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Destination Details Sections */}
      {destinations.map((destination, index) => (
        <section 
          key={index} 
          id={`destination-${destination.name.toLowerCase().replace(/\s+/g, '-')}`}
          className={`py-24 scroll-mt-20 ${index % 2 === 0 ? 'bg-white' : 'bg-soft-bg'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image Side - Order changes based on index */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={index % 2 === 1 ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="rounded-2xl shadow-premium w-full object-cover h-96"
                />
              </motion.div>

              {/* Content Side */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={index % 2 === 1 ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}
              >
                {/* Header with Icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-warm-bg">
                    <MapPin className="w-8 h-8 text-gold" />
                  </div>
                  <h2 className="heading-2 text-navy">{destination.name}</h2>
                </div>

                {/* Main Description */}
                <p className="text-gray-600 font-sans text-lg mb-6 leading-relaxed">
                  {destination.description}
                </p>

                {/* Highlights */}
                <div className="mb-8">
                  <h3 className="font-serif font-bold text-navy mb-4 text-lg">What to Experience:</h3>
                  <ul className="space-y-3">
                    {destination.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="text-gold w-5 h-5 flex-shrink-0" />
                        <span className="text-gray-600 font-sans">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Info - Visa Only */}
                <div className="mb-8">
                  <div className="p-4 bg-warm-bg rounded-lg">
                    <p className="text-xs text-gray-500 font-sans uppercase tracking-wider mb-1">Visa Required</p>
                    <p className="font-serif font-bold text-navy text-lg">{destination.visa}</p>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button 
                  onClick={(e) => handleDestinationInquiry(destination.name, e)}
                  className="premium-button inline-flex items-center gap-2 w-full sm:w-auto justify-center"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Compass className="w-5 h-5" />
                  Plan Trip to {destination.name}
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* More Countries CTA Section */}
      <section className="py-24 bg-gradient-to-r from-navy to-navy/90 text-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 opacity-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        >
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="80" stroke="#C9A227" strokeWidth="2" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-0 w-80 h-80 opacity-10"
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        >
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="60" stroke="#C9A227" strokeWidth="2" />
          </svg>
        </motion.div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="inline-block p-4 rounded-full bg-gold/20 border-2 border-gold/50">
                <MapPin className="w-12 h-12 text-gold" />
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4"
            >
              Looking for More Destinations?
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl text-gray-100 mb-8 max-w-2xl mx-auto leading-relaxed font-light"
            >
              We offer travel packages to hundreds of destinations worldwide. Whether you're dreaming of exotic beaches, historic cities, or adventure hotspots, our expert consultants are here to guide you.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
            >
              {[
                {
                  icon: Compass,
                  title: 'Expert Guidance',
                  description: 'Personalized recommendations from travel specialists'
                },
                {
                  icon: Heart,
                  title: 'Custom Itineraries',
                  description: 'Tailored packages designed just for you'
                },
                {
                  icon: CheckCircle,
                  title: 'Hassle-Free Booking',
                  description: 'Complete assistance with all arrangements'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:border-gold/50 transition-colors duration-300"
                >
                  <feature.icon className="w-8 h-8 text-gold mb-3 mx-auto" />
                  <h3 className="font-serif font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-100 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                onClick={(e) => {
                  e.preventDefault()
                  const whatsappNumber = '+971544343501'
                  const message = `Hello Venture Ease Team,

I am interested in exploring more destinations for my upcoming trip. I would like to discuss:

• Destination recommendations based on my interests
• Available tour packages and itineraries
• Customized travel solutions
• Visa requirements and support
• Best pricing and deals

Please connect me with your travel consultant who can guide me through the options.

Best regards`
                  const encodedMessage = encodeURIComponent(message)
                  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
                  window.open(whatsappLink, '_blank')
                }}
                className="px-10 py-4 bg-gold text-navy font-serif font-bold text-lg rounded-lg hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-2xl inline-flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <MapPin className="w-5 h-5" />
                Contact Our Consultant
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.button>

              <motion.a
                href="tel:+971544343501"
                className="px-10 py-4 border-2 border-gold text-gold font-serif font-bold text-lg rounded-lg hover:bg-gold/10 transition-all duration-300 inline-flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-5 h-5" />
                Call Us Directly
              </motion.a>
            </motion.div>

            {/* Support Info */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-sm text-gray-300 mt-8"
            >
              Available 24/7 to assist you with your travel needs
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="WHY VENTURE EASE"
            title="Why Choose Our Destinations?"
            subtitle="We curate experiences, not just itineraries"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                icon: Heart,
                title: 'Personalized Experiences',
                description: 'Custom itineraries tailored to your preferences and travel style'
              },
              {
                icon: CheckCircle,
                title: 'Expert Guidance',
                description: 'Local knowledge and insider tips for authentic experiences'
              },
              {
                icon: Compass,
                title: 'Seamless Planning',
                description: 'Complete travel arrangements from visa to accommodation'
              },
              {
                icon: MapPin,
                title: 'Best Value',
                description: 'Competitive pricing without compromising on quality'
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
                <div className="p-4 rounded-lg bg-warm-bg w-fit mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-serif font-bold text-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-sans text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-24 bg-soft-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="TRAVEL TIPS"
            title="Destination Planning Guide"
            subtitle="Essential advice for a smooth and enjoyable journey"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              {
                title: 'Before You Go',
                tips: ['Check visa requirements early', 'Research travel insurance', 'Book flights & hotels in advance', 'Review destination guides']
              },
              {
                title: 'During Your Travel',
                tips: ['Keep emergency contacts handy', 'Share itinerary with family', 'Stay in touch with us', 'Capture wonderful moments']
              },
              {
                title: 'Documentation Checklist',
                tips: ['Valid passport', 'Visa documents', 'Travel insurance', 'Hotel confirmations']
              },
              {
                title: 'Money & Safety',
                tips: ['Exchange currency safely', 'Inform bank of travel', 'Keep valuables secure', 'Know local emergency numbers']
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
                <h3 className="font-serif text-xl font-bold text-navy mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-600 font-sans text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}