import { motion } from 'framer-motion'
import { Plane, Hotel, BadgeCheck, MapPin, Globe, DollarSign, CheckCircle } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import CTASection from '../components/CTASection'
import Services1 from '../assets/Services/Services1.png'
import Services2 from '../assets/Services/Services2.png'
import Services3 from '../assets/Services/Services3.png'
import Services4 from '../assets/Services/Services4.png'
import Services5 from '../assets/Services/Services5.png'
import Services6 from '../assets/Services/Services6.png'

export default function Services() {
  const [searchParams] = useSearchParams()
  const serviceId = searchParams.get('service')

  useEffect(() => {
    if (serviceId) {
      // Add a small delay to ensure DOM is rendered
      setTimeout(() => {
        const element = document.getElementById(`service-${serviceId}`)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          // Add visual highlight
          element.classList.add('highlight-service')
          setTimeout(() => {
            element.classList.remove('highlight-service')
          }, 2000)
        }
      }, 300)
    }
  }, [serviceId])
  // WhatsApp Handler Function
  const handleServiceInquiry = (serviceName, e) => {
    e.preventDefault()
    
    const whatsappNumber = '+971544343501'
    const message = `Hello Venture Ease Team,

I am writing to inquire about your ${serviceName} service. I would like to receive comprehensive information about:

• Service features and offerings
• Available packages and pricing
• Booking timeline and process
• Any special promotions or deals

Please provide me with detailed information at your earliest convenience. I look forward to hearing from you.

Best regards`

    const encodedMessage = encodeURIComponent(message)
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    
    window.open(whatsappLink, '_blank')
  }

  const allServices = [
    {
      number: '01',
      title: 'Airline Tickets',
      description: 'Domestic and international flight bookings with convenient options tailored to your journey.',
      icon: Plane,
      image: Services1,
      fullDescription: 'Find and book the best flights worldwide. We work with all major airlines to offer competitive prices and flexible booking options.'
    },
    {
      number: '02',
      title: 'Hotel Booking',
      description: 'Comfortable stays ranging from premium hotels to luxury accommodations worldwide.',
      icon: Hotel,
      image: Services2,
      fullDescription: 'Discover thousands of hotel properties across the globe. From budget-friendly to luxury resorts, we have options for every budget.'
    },
    {
      number: '03',
      title: 'UAE Visit Visa',
      description: 'Reliable UAE visa assistance for visitors looking to experience Dubai and the Emirates.',
      icon: BadgeCheck,
      image: Services3,
      fullDescription: 'Streamlined visa processing for UAE visits. Our team handles all documentation and liaison with authorities.'
    },
    {
      number: '04',
      title: 'Excursion Packages',
      description: 'Discover Dubai and the UAE with carefully designed sightseeing and excursion experiences.',
      icon: MapPin,
      image: Services4,
      fullDescription: 'Experience authentic Dubai and UAE attractions. Our curated excursion packages include guided tours and exclusive experiences.'
    },
    {
      number: '05',
      title: 'Europe Visit Visa',
      description: 'Professional assistance for Europe visa applications and travel planning.',
      icon: Globe,
      image: Services5,
      fullDescription: 'Navigate European visa requirements with expert guidance. Schengen, UK, and other European visa support.'
    },
    {
      number: '06',
      title: 'International Tour Packages',
      description: 'Explore destinations worldwide through customized and ready-made holiday packages.',
      icon: DollarSign,
      image: Services6,
      fullDescription: 'All-inclusive tour packages designed for unforgettable experiences. Flights, accommodation, and activities included.'
    },
  ]

  const process = [
    { icon: CheckCircle, step: 'Consultation', description: 'We understand your travel needs and preferences' },
    { icon: CheckCircle, step: 'Customization', description: 'Create a personalized itinerary just for you' },
    { icon: CheckCircle, step: 'Booking', description: 'Secure all bookings at the best rates' },
    { icon: CheckCircle, step: 'Support', description: '24/7 assistance throughout your journey' },
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
                ✦ Complete Travel Solutions
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-4xl font-bold text-white mb-4">
              Our Services
            </h1>

            <p className="text-lg text-gray-200 max-w-2xl leading-relaxed mb-6">
              Comprehensive travel solutions tailored to your needs. From flights to visas, excursions to complete packages—we handle it all.
            </p>

            {/* Unique Services Badge Grid */}
            <motion.div 
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white/10 border border-white/20 rounded-full px-4 py-2">
                <span className="text-gold font-sans text-xs font-semibold">✓ Flights</span>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-full px-4 py-2">
                <span className="text-gold font-sans text-xs font-semibold">✓ Hotels</span>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-full px-4 py-2">
                <span className="text-gold font-sans text-xs font-semibold">✓ Visas</span>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-full px-4 py-2">
                <span className="text-gold font-sans text-xs font-semibold">✓ Excursions</span>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-full px-4 py-2">
                <span className="text-gold font-sans text-xs font-semibold">✓ Packages</span>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-full px-4 py-2">
                <span className="text-gold font-sans text-xs font-semibold">✓ More</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service Details - Airline Tickets */}
      <section id="service-airline-tickets" className="py-24 bg-soft-bg scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src={Services1}
                alt="Airline Tickets"
                className="rounded-xl shadow-premium w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-lg bg-warm-bg">
                  <Plane className="w-8 h-8 text-gold" />
                </div>
                <h2 className="heading-2">Airline Tickets</h2>
              </div>
              <p className="text-gray-600 font-sans text-lg mb-4">
                Book flights to anywhere in the world with competitive rates and flexible options. We partner with major airlines to offer you the best deals.
              </p>
              <ul className="space-y-3 mb-6">
                {['Competitive pricing', 'Flexible booking options', 'Multiple airline choices', 'Quick confirmation'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-gold w-5 h-5" />
                    <span className="text-gray-600 font-sans">{item}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={(e) => handleServiceInquiry('Airline Tickets', e)}
                className="premium-button"
              >
                Inquire About Flight Booking
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Details - Hotels */}
      <section id="service-hotel-booking" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-lg bg-warm-bg">
                  <Hotel className="w-8 h-8 text-gold" />
                </div>
                <h2 className="heading-2">Hotel Booking</h2>
              </div>
              <p className="text-gray-600 font-sans text-lg mb-4">
                Choose from thousands of hotels worldwide. From luxury 5-star resorts to budget accommodations, we have options for every traveler.
              </p>
              <ul className="space-y-3 mb-6">
                {['Best rate guarantee', 'No hidden fees', 'Free cancellation options', '24/7 customer support'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-gold w-5 h-5" />
                    <span className="text-gray-600 font-sans">{item}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={(e) => handleServiceInquiry('Hotel Booking', e)}
                className="premium-button"
              >
                Inquire About Hotel Booking
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <img
                src={Services2}
                alt="Hotel Booking"
                className="rounded-xl shadow-premium w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Details - UAE Visit Visa */}
      <section id="service-uae-visit-visa" className="py-24 bg-soft-bg scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src={Services3}
                alt="UAE Visit Visa"
                className="rounded-xl shadow-premium w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-lg bg-warm-bg">
                  <BadgeCheck className="w-8 h-8 text-gold" />
                </div>
                <h2 className="heading-2">UAE Visit Visa</h2>
              </div>
              <p className="text-gray-600 font-sans text-lg mb-4">
                Hassle-free visa assistance for travelers planning to visit Dubai and the Emirates. Our experienced team streamlines the entire visa application process, ensuring quick approval and smooth entry to the UAE.
              </p>
              <ul className="space-y-3 mb-6">
                {['Express processing service', 'Complete documentation assistance', 'Experienced visa consultants', 'Quick turnaround time', 'End-to-end support'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-gold w-5 h-5" />
                    <span className="text-gray-600 font-sans">{item}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={(e) => handleServiceInquiry('UAE Visit Visa', e)}
                className="premium-button"
              >
                Apply for UAE Visa
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Details - Excursion Packages */}
      <section id="service-excursion-packages" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-lg bg-warm-bg">
                  <MapPin className="w-8 h-8 text-gold" />
                </div>
                <h2 className="heading-2">Excursion Packages</h2>
              </div>
              <p className="text-gray-600 font-sans text-lg mb-4">
                Explore the best of Dubai and the UAE with our carefully curated excursion packages. From thrilling desert safaris to cultural heritage tours, we offer unforgettable experiences tailored to your preferences.
              </p>
              <ul className="space-y-3 mb-6">
                {['Guided city tours', 'Desert safari adventures', 'Cultural experiences', 'Premium accommodations', 'Professional tour guides', 'Flexible scheduling'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-gold w-5 h-5" />
                    <span className="text-gray-600 font-sans">{item}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={(e) => handleServiceInquiry('Excursion Packages', e)}
                className="premium-button"
              >
                Explore Tour Options
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <img
                src={Services4}
                alt="Excursion Packages"
                className="rounded-xl shadow-premium w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Details - Europe Visit Visa */}
      <section id="service-europe-visit-visa" className="py-24 bg-soft-bg scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src={Services5}
                alt="Europe Visit Visa"
                className="rounded-xl shadow-premium w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-lg bg-warm-bg">
                  <Globe className="w-8 h-8 text-gold" />
                </div>
                <h2 className="heading-2">Europe Visit Visa</h2>
              </div>
              <p className="text-gray-600 font-sans text-lg mb-4">
                Obtain your European visa with expert guidance from our professional visa consultants. We specialize in Schengen visas, UK visas, and other European travel documents with high approval rates.
              </p>
              <ul className="space-y-3 mb-6">
                {['Schengen visa expertise', 'UK visa assistance', 'Document preparation', 'Interview coaching', 'Multiple country support', 'High success rate'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-gold w-5 h-5" />
                    <span className="text-gray-600 font-sans">{item}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={(e) => handleServiceInquiry('Europe Visit Visa', e)}
                className="premium-button"
              >
                Inquire About Europe Visa
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Details - International Tour Packages */}
      <section id="service-international-tour-packages" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-lg bg-warm-bg">
                  <DollarSign className="w-8 h-8 text-gold" />
                </div>
                <h2 className="heading-2">International Tour Packages</h2>
              </div>
              <p className="text-gray-600 font-sans text-lg mb-4">
                Experience the world's most exciting destinations with our all-inclusive international tour packages. From Asia to Europe, our custom itineraries combine adventure, culture, and luxury.
              </p>
              <ul className="space-y-3 mb-6">
                {['All-inclusive packages', 'Customizable itineraries', 'Flight & accommodation included', 'Professional tour guides', 'Visa assistance included', 'Competitive pricing'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-gold w-5 h-5" />
                    <span className="text-gray-600 font-sans">{item}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={(e) => handleServiceInquiry('International Tour Packages', e)}
                className="premium-button"
              >
                View Tour Packages
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <img
                src={Services6}
                alt="International Tour Packages"
                className="rounded-xl shadow-premium w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-24 bg-soft-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="HOW WE WORK"
            title="Our Service Process"
            subtitle="Simple steps to book your perfect trip"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="premium-card p-8">
                  <div className="p-4 rounded-lg bg-warm-bg w-fit mb-4">
                    <item.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-navy mb-2">
                    {item.step}
                  </h3>
                  <p className="text-gray-600 font-sans text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 
      <CTASection title="Ready to Book Your Perfect Trip?" description="Our team is ready to assist you with all your travel needs" />
   */} </div>
  )
}