import { useState, useEffect } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { FaArrowUp } from 'react-icons/fa'

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      'Hello Venture Plus Consultancy, I am interested in your services. Please provide more information.'
    )
    const phoneNumber = '971501234567'
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <>
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-6 left-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
        title="Chat with us on WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
        <span className="absolute left-16 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat with us
        </span>
      </button>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={handleScrollTop}
          className="fixed bottom-6 right-6 z-50 bg-[#4A7BA7] hover:bg-[#3A5F81] text-white rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center animate-fadeIn"
          title="Scroll to top"
        >
          <FaArrowUp className="text-2xl" />
        </button>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  )
}