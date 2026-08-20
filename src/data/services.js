import { Plane, Hotel, BadgeCheck, MapPin, Globe, DollarSign } from 'lucide-react'
import Services1 from '../assets/Services/Services1.png'
import Services2 from '../assets/Services/Services2.png'
import Services3 from '../assets/Services/Services3.png'
import Services4 from '../assets/Services/Services4.png'
import Services5 from '../assets/Services/Services5.png'
import Services6 from '../assets/Services/Services6.png'

export const services = [
  {
    number: '01',
    title: 'Airline Tickets',
    description: 'Domestic and international flight bookings with convenient options tailored to your journey.',
    icon: Plane,
    image: Services1
  },
  {
    number: '02',
    title: 'Hotel Booking',
    description: 'Comfortable stays ranging from premium hotels to luxury accommodations worldwide.',
    icon: Hotel,
    image: Services2
  },
  {
    number: '03',
    title: 'UAE Visit Visa',
    description: 'Reliable UAE visa assistance for visitors looking to experience Dubai and the Emirates.',
    icon: BadgeCheck,
    image: Services3
  },
  {
    number: '04',
    title: 'Excursion Packages',
    description: 'Discover Dubai and the UAE with carefully designed sightseeing and excursion experiences.',
    icon: MapPin,
    image: Services4
  },
  {
    number: '05',
    title: 'Europe Visit Visa',
    description: 'Professional assistance for Europe visa applications and travel planning.',
    icon: Globe,
    image: Services5
  },
  {
    number: '06',
    title: 'International Tour Packages',
    description: 'Explore destinations worldwide through customized and ready-made holiday packages.',
    icon: DollarSign,
    image: Services6
  },
]