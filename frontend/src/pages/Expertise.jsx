import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { AiOutlineDesktop, AiOutlineMobile, AiOutlineCloudServer } from 'react-icons/ai'
import { GiFactory } from 'react-icons/gi'
import { MdSchool, MdGroups } from 'react-icons/md'
import CustomCursor from '../components/CustomCursor.jsx'

const products = [
  {
    title: 'Web Development',
    icon: AiOutlineDesktop,
    desc: 'High-quality, custom websites and web apps. Responsive, accessible, fast.',
    gradient: 'from-blue-400 via-cyan-400 to-teal-400',
    bgGradient: 'from-blue-500/20 via-cyan-500/20 to-teal-500/20',
    iconColor: 'text-blue-400',
    image: '/images/web-dev.webp',
  },
  {
    title: 'Mobile App Development',
    icon: AiOutlineMobile,
    desc: 'Cross‑platform mobile apps focused on performance and great UX.',
    gradient: 'from-purple-400 via-pink-400 to-rose-400',
    bgGradient: 'from-purple-500/20 via-pink-500/20 to-rose-500/20',
    iconColor: 'text-purple-400',
    image: '/images/mobile-dev.webp',
  },
  {
    title: 'Cloud Deployment & Migration',
    icon: AiOutlineCloudServer,
    desc: 'Seamless transitions to AWS, Azure, and GCP with security and scale.',
    gradient: 'from-sky-400 via-blue-400 to-indigo-400',
    bgGradient: 'from-sky-500/20 via-blue-500/20 to-indigo-500/20',
    iconColor: 'text-sky-400',
    image: '/images/cloud-2.png',
  },
  {
    title: 'Industrial IoT Solutions',
    icon: GiFactory,
    desc: 'Industry-grade IoT integrations, telemetry, and dashboards for insight.',
    gradient: 'from-emerald-400 via-green-400 to-lime-400',
    bgGradient: 'from-emerald-500/20 via-green-500/20 to-lime-500/20',
    iconColor: 'text-emerald-400',
    image: '/images/iot-6.jpg',
  },
  {
    title: 'Industry Academia Collaboration',
    icon: MdSchool,
    desc: 'Hands-on learning via electives, full-time courses, and workshops bridging academia and industry.',
    gradient: 'from-orange-400 via-amber-400 to-yellow-400',
    bgGradient: 'from-orange-500/20 via-amber-500/20 to-yellow-500/20',
    iconColor: 'text-orange-400',
    image: '/images/industry-academia-7.jpg',
  },
  {
    title: 'General IT Consultations',
    icon: MdGroups,
    desc: 'Expert guidance and support for businesses to optimize their technology solutions.',
    gradient: 'from-violet-400 via-purple-400 to-fuchsia-400',
    bgGradient: 'from-violet-500/20 via-purple-500/20 to-fuchsia-500/20',
    iconColor: 'text-violet-400',
    image: '/images/general-it-8.svg',
  },
]

function ProductCard({ item, delay }) {
  const Icon = item.icon
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const cardRef = useRef(null)
  
  // Motion values for magnetic effect
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-200, 200], [8, -8]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [-200, 200], [-8, 8]), { stiffness: 300, damping: 30 })

  const handleMouseMove = (event) => {
    if (!cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const distanceX = event.clientX - centerX
    const distanceY = event.clientY - centerY
    
    x.set(distanceX * 0.08)
    y.set(distanceY * 0.08)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  const handleClick = () => {
    setIsClicked(true)
    setTimeout(() => setIsClicked(false), 600)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration: 0.8, 
        delay,
        type: "spring",
        stiffness: 120,
        damping: 20
      }}
      whileHover={{ 
        scale: 1.05,
        rotate: [0, -1, 1, 0],
        transition: { duration: 0.3 }
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className="group relative"
      data-cursor-hover
    >
      {/* Animated gradient border */}
      <div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
      
      {/* Main card with glassmorphism */}
      <div className="relative bg-gradient-to-br from-slate-800/60 via-slate-900/80 to-slate-800/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full overflow-hidden transition-all duration-300">
        
        {/* Animated background shimmer */}
        <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        {/* Shimmer effect overlay */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            animate={{
              x: ['-100%', '100%']
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        )}
        
        {/* Click ripple effect */}
        {isClicked && (
          <motion.div
            className="absolute inset-0 bg-gradient-radial from-white/20 via-transparent to-transparent"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        )}

        {/* Image with glassmorphism overlay */}
        {item.image && (
          <div className="relative mb-6 overflow-hidden rounded-xl">
            <motion.img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105" 
            />
            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        )}

        {/* Icon with floating animation */}
        <motion.div 
          className="flex items-center gap-4 mb-4"
          animate={isHovered ? { 
            y: [0, -2, 0],
          } : {}}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div 
            className={`shrink-0 grid place-items-center h-14 w-14 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 ${item.iconColor} shadow-lg group-hover:shadow-xl transition-all duration-300`}
            animate={isHovered ? { 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            } : {}}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Icon className="text-2xl" />
          </motion.div>
          <h3 className="text-xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:via-blue-400 group-hover:to-purple-400 transition-all duration-500">
            {item.title}
          </h3>
        </motion.div>
        
        {/* Description */}
        <p className="text-sm text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
          {item.desc}
        </p>

        {/* Floating tooltip on hover */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute -top-3 right-3 text-[10px] px-3 py-1 rounded-full bg-slate-800/90 backdrop-blur-md border border-white/20 text-cyan-200 shadow-lg"
          >
            Explore →
          </motion.div>
        )}

        {/* Corner accent glow */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-transparent via-cyan-500/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  )
}

export default function Expertise() {
  return (
    <section className="relative section overflow-hidden">
      <CustomCursor />
      
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-navy to-slate-900" />
        <motion.div
          className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
            x: [0, -25, 0],
            y: [0, 25, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent mb-6"
          >
            Our Expertise
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            We are deeply committed to the growth and success of our clients through cutting-edge technology solutions.
          </motion.p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <ProductCard key={product.title} item={product} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
