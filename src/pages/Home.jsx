import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Plane, Hotel, BadgeCheck, MapPin, Globe, DollarSign, CheckCircle, ArrowRight } from 'lucide-react'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import DestinationCard from '../components/DestinationCard'
import CTASection from '../components/CTASection'
import Services1 from '../assets/Services/Services1.png'
import Services2 from '../assets/Services/Services2.png'
import Services3 from '../assets/Services/Services3.png'
import Services4 from '../assets/Services/Services4.png'
import Services5 from '../assets/Services/Services5.png'
import Services6 from '../assets/Services/Services6.png'
import TravelWithConfidence from '../assets/TravelWithConfidence.png'
import pic1 from '../assets/Photos/pic1.png'
import pic2 from '../assets/Photos/pic2.png'
import pic3 from '../assets/Photos/pic3.png'
import pic4 from '../assets/Photos/pic4.png'
import pic5 from '../assets/Photos/pic5.png'
import pic6 from '../assets/Photos/pic6.png'

export default function Home() {
  const navigate = useNavigate()
  const [travelForm, setTravelForm] = useState({
    destination: '',
    travelType: 'Holiday',
    departure: '',
    travelers: '1 Traveler'
  })
  const services = [
    {
      id: 'airline-tickets',
      number: '01',
      title: 'Airline Tickets',
      description: 'Domestic and international flight bookings with convenient options tailored to your journey.',
      icon: Plane,
      image: Services1
    },
    {
      id: 'hotel-booking',
      number: '02',
      title: 'Hotel Booking',
      description: 'Comfortable stays ranging from premium hotels to luxury accommodations worldwide.',
      icon: Hotel,
      image: Services2
    },
    {
      id: 'uae-visit-visa',
      number: '03',
      title: 'UAE Visit Visa',
      description: 'Reliable UAE visa assistance for visitors looking to experience Dubai and the Emirates.',
      icon: BadgeCheck,
      image: Services3
    },
    {
      id: 'excursion-packages',
      number: '04',
      title: 'Excursion Packages',
      description: 'Discover Dubai and the UAE with carefully designed sightseeing and excursion experiences.',
      icon: MapPin,
      image: Services4
    },
    {
      id: 'europe-visit-visa',
      number: '05',
      title: 'Europe Visit Visa',
      description: 'Professional assistance for Europe visa applications and travel planning.',
      icon: Globe,
      image: Services5
    },
    {
      id: 'international-tour-packages',
      number: '06',
      title: 'International Tour Packages',
      description: 'Explore destinations worldwide through customized and ready-made holiday packages.',
      icon: DollarSign,
      image: Services6
    },
  ]

  const destinations = [
    {
      name: 'Dubai',
      description: 'Experience luxury, innovation, and desert adventures',
      image: pic1
    },
    {
      name: 'Abu Dhabi',
      description: 'Rich heritage meets modern grandeur',
      image: pic2
    },
    {
      name: 'Paris',
      description: 'The city of light and timeless romance',
      image: pic3
    },
    {
      name: 'Switzerland',
      description: 'Alpine beauty and precision perfection',
      image: pic4
    },
    {
      name: 'Italy',
      description: 'Art, history, and culinary excellence',
      image: pic5
    },
    {
      name: 'London',
      description: 'Iconic landmarks and vibrant culture',
      image: pic6
    },
  ]

  const benefits = [
    {
      title: 'Personalized Travel Planning',
      description: 'Trips designed around your preferences, schedule and budget.',
      icon: CheckCircle
    },
    {
      title: 'Professional Assistance',
      description: 'Experienced support throughout your travel planning process.',
      icon: CheckCircle
    },
    {
      title: 'Hassle-Free Visa Support',
      description: 'Guidance for UAE and Europe visa requirements and applications.',
      icon: CheckCircle
    },
    {
      title: 'Global Travel Solutions',
      description: 'From flights and hotels to complete international holiday packages.',
      icon: CheckCircle
    },
  ]

  const steps = [
    { number: '01', title: 'Tell Us Your Plan', description: 'Share your travel dreams and preferences with our team' },
    { number: '02', title: 'Choose Your Service', description: 'Select from our comprehensive range of travel services' },
    { number: '03', title: 'We Arrange the Details', description: 'Our experts handle all bookings and arrangements' },
    { number: '04', title: 'Start Your Journey', description: 'Sit back and enjoy your perfectly planned adventure' },
  ]

  // WhatsApp Handler for Dubai Section
  const handleExploreDbubai = (e) => {
    e.preventDefault()
    
    const whatsappNumber = '+971544343501'
    const message = `Hello Venture Ease Team,\n\nI'm interested in exploring Dubai with your premium travel packages. Please share the best options available for my upcoming trip.\n\nThank you!`
    
    const encodedMessage = encodeURIComponent(message)
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    
    window.open(whatsappLink, '_blank')
  }

  // WhatsApp Handler Function
  const handlePlanMyTrip = (e) => {
    e.preventDefault()
    
    if (!travelForm.destination.trim()) {
      alert('Please enter a destination')
      return
    }

    const whatsappNumber = '+971544343501'
    const message = `Hello! I'm interested in planning my travel. Here are my details:

📍 *Destination:* ${travelForm.destination}
🏷️ *Travel Type:* ${travelForm.travelType}
📅 *Departure Date:* ${travelForm.departure || 'Not specified'}
👥 *Number of Travelers:* ${travelForm.travelers}

Please provide me with the best options for my trip. Thank you!`

    const encodedMessage = encodeURIComponent(message)
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    
    window.open(whatsappLink, '_blank')
  }

  const handleTravelFormChange = (e) => {
    const { name, value } = e.target
    setTravelForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleServiceClick = (serviceId) => {
    navigate(`/services?service=${serviceId}`)
  }

  return (
    <>
      {/* Hero Section */}
      <Hero 
        title="Explore the World with Venture Ease"
        description="Premium travel, visa and holiday solutions from Dubai to destinations around the world."
        primaryCTA="Explore Our Services"
        secondaryCTA="Plan Your Journey"
      />



      {/* Travel Planning Card */}
      <section className="relative -mt-24 z-20 mb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="premium-card p-8 md:p-12 bg-white shadow-premium"
          >
            <form onSubmit={handlePlanMyTrip}>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-end">
                <div>
                  <label className="block text-navy font-sans font-semibold mb-2">Destination</label>
                  <input 
                    type="text" 
                    name="destination"
                    value={travelForm.destination}
                    onChange={handleTravelFormChange}
                    placeholder="Where to?" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block text-navy font-sans font-semibold mb-2">Travel Type</label>
                  <select 
                    name="travelType"
                    value={travelForm.travelType}
                    onChange={handleTravelFormChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gold"
                  >
                    <option>Holiday</option>
                    <option>Business</option>
                    <option>Adventure</option>
                  </select>
                </div>
                <div>
                  <label className="block text-navy font-sans font-semibold mb-2">Departure</label>
                  <input 
                    type="date" 
                    name="departure"
                    value={travelForm.departure}
                    onChange={handleTravelFormChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block text-navy font-sans font-semibold mb-2">Travelers</label>
                  <select 
                    name="travelers"
                    value={travelForm.travelers}
                    onChange={handleTravelFormChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gold"
                  >
                    <option>1 Traveler</option>
                    <option>2 Travelers</option>
                    <option>3+ Travelers</option>
                  </select>
                </div>
                <motion.button 
                  type="submit"
                  className="premium-button-gold px-4 py-3 flex items-center justify-center gap-2 whitespace-nowrap"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Plan My Trip
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={18} />
                  </motion.div>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-soft-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="OUR SERVICES"
            title="Our Travel Services"
            subtitle="Everything you need for a seamless journey, all in one place."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => handleServiceClick(service.id)}
                className="cursor-pointer"
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="DISCOVER"
            title="Featured Destinations"
            subtitle="Explore some of our most popular travel destinations"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => navigate(`/destinations?location=${dest.name.toLowerCase()}`)}
              >
                <DestinationCard {...dest} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-soft-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="hidden lg:block"
            >
              <img
                src={TravelWithConfidence}
                alt="Travel with Confidence"
                className="rounded-xl shadow-premium w-full"
              />
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-2 mb-8">Travel with Confidence</h2>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-gold mt-1" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-navy mb-1">{benefit.title}</h3>
                      <p className="text-gray-600 font-sans text-sm">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dubai Feature Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512453475888-5953c798b20c?w=1200&h=600&fit=crop)' }} />
        
        {/* Enhanced Dark Overlay for Better Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/70 to-navy/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/50 to-navy/70" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Label */}
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gold font-sans font-semibold text-sm uppercase tracking-widest drop-shadow-lg"
            >
              ✨ EXPERIENCE LUXURY
            </motion.p>

            {/* Main Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight drop-shadow-2xl"
            >
              Discover Dubai
            </motion.h2>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-light"
            >
              From iconic skylines and luxury experiences to unforgettable desert adventures, discover Dubai with Venture Ease Tourism.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4"
            >
              <motion.button 
                onClick={handleExploreDbubai}
                className="premium-button-gold inline-flex items-center gap-2 group px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Dubai
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="flex"
                >
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-b from-white via-soft-bg to-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            label="SIMPLE PROCESS"
            title="How It Works"
            subtitle="Four simple steps to your perfect journey"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8 mt-16">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Animated Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ y: -12, transition: { duration: 0.3 } }}
                  className="group relative h-full"
                >
                  {/* Glowing Background Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-gold/20 via-transparent to-navy/10 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                  
                  {/* Card Border Glow */}
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-gold/30 to-transparent rounded-xl opacity-0 group-hover:opacity-50 blur transition-opacity duration-500" />

                  {/* Card Content */}
                  <div className="relative premium-card p-8 h-full border border-gray-100 group-hover:border-gold/30 transition-colors duration-300 bg-white/80 backdrop-blur-sm">
                    {/* Animated Number */}
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      className="inline-block mb-4"
                    >
                      <div className="font-serif text-5xl font-bold bg-gradient-to-r from-gold to-yellow-500 bg-clip-text text-transparent">
                        {step.number}
                      </div>
                    </motion.div>

                    {/* Title */}
                    <motion.h3 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.25 }}
                      viewport={{ once: true }}
                      className="font-serif font-bold text-xl text-navy mb-3 group-hover:text-gold transition-colors duration-300"
                    >
                      {step.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                      viewport={{ once: true }}
                      className="text-gray-600 font-sans text-sm leading-relaxed"
                    >
                      {step.description}
                    </motion.p>

                    {/* Bottom Accent Line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.35 }}
                      viewport={{ once: true }}
                      className="mt-6 h-1 bg-gradient-to-r from-gold to-transparent origin-left"
                    />
                  </div>
                </motion.div>

                {/* Connecting Arrows - Enhanced Animation */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                    viewport={{ once: true }}
                    className="hidden md:flex absolute top-1/4 -right-10 z-20 lg:-right-12"
                  >
                    <motion.div
                      animate={{ x: [0, 8, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="flex items-center gap-2"
                    >
                      {/* Arrow Circle Background */}
                      <motion.div
                        animate={{ 
                          boxShadow: [
                            '0 0 0 0 rgba(212, 165, 116, 0.7)',
                            '0 0 0 10px rgba(212, 165, 116, 0)'
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-10 h-10 rounded-full bg-gold/10 border-2 border-gold/50 flex items-center justify-center"
                      >
                        <ArrowRight className="text-gold w-5 h-5" />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Final CTA 
      <CTASection />*/}
    </>
  )
}