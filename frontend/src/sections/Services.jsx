import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import CustomCursor from '../components/CustomCursor.jsx'

const services = [
  {
    title: 'Energy Meter Monitoring',
    desc: 'Smart energy meter solution with audit-ready insights to reduce electricity bills and manual reading.',
    icon: '⚡',
    gradient: 'from-yellow-400 via-orange-500 to-red-500',
    bgGradient: 'from-yellow-500/10 via-orange-500/10 to-red-500/10'
  },
  {
    title: 'PM/BM Scheduling',
    desc: 'Server-based PMS that tracks runtime, idle time, job count, availability, performance, quality and OEE.',
    icon: '📊',
    gradient: 'from-blue-400 via-purple-500 to-pink-500',
    bgGradient: 'from-blue-500/10 via-purple-500/10 to-pink-500/10'
  },
  {
    title: 'Work Permit Automation',
    desc: 'Digitalize permit workflows with authorization, visibility and compliance for safe plant operations.',
    icon: '🔐',
    gradient: 'from-green-400 via-teal-500 to-blue-500',
    bgGradient: 'from-green-500/10 via-teal-500/10 to-blue-500/10'
  },
  {
    title: 'Full Stack Development',
    desc: 'Responsive, scalable products across frontend and backend using modern web technologies.',
    icon: '💻',
    gradient: 'from-purple-400 via-pink-500 to-red-500',
    bgGradient: 'from-purple-500/10 via-pink-500/10 to-red-500/10'
  },
  {
    title: 'Python Development',
    desc: 'Robust web apps, data solutions and automation tools tailored to your needs using Python.',
    icon: '🐍',
    gradient: 'from-yellow-400 via-green-500 to-blue-500',
    bgGradient: 'from-yellow-500/10 via-green-500/10 to-blue-500/10'
  },
  {
    title: 'Cloud Deployment / Migration',
    desc: 'Secure, cost-effective migrations and deployments across AWS, Azure and Google Cloud.',
    icon: '☁️',
    gradient: 'from-cyan-400 via-blue-500 to-indigo-500',
    bgGradient: 'from-cyan-500/10 via-blue-500/10 to-indigo-500/10'
  },
  {
    title: 'Wordpress Development',
    desc: 'Custom, SEO‑friendly WordPress sites, themes and plugins with e‑commerce integration.',
    icon: '🌐',
    gradient: 'from-blue-400 via-indigo-500 to-purple-500',
    bgGradient: 'from-blue-500/10 via-indigo-500/10 to-purple-500/10'
  },
  {
    title: 'AI & ML Integration & Development',
    desc: 'Automation and data‑driven insights with AI/ML to support better decision‑making.',
    icon: '🤖',
    gradient: 'from-purple-400 via-pink-500 to-orange-500',
    bgGradient: 'from-purple-500/10 via-pink-500/10 to-orange-500/10'
  },
]

function Card({ item, delay }) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)
  
  // Motion values for magnetic effect
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-300, 300], [15, -15]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [-300, 300], [-15, 15]), { stiffness: 300, damping: 30 })

  const handleMouseMove = (event) => {
    if (!cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const distanceX = event.clientX - centerX
    const distanceY = event.clientY - centerY
    
    // Magnetic effect - card follows cursor slightly
    x.set(distanceX * 0.1)
    y.set(distanceY * 0.1)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration: 0.8, 
        delay,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ 
        scale: 1.05,
        y: -10,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative"
      data-cursor-hover
    >
      {/* Animated gradient border */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
      
      {/* Main card */}
      <div className="relative bg-gradient-to-br from-slate-800/80 via-slate-900/90 to-slate-800/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full flex flex-col justify-between overflow-hidden">
        
        {/* Animated background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        {/* Floating particles effect */}
        {isHovered && (
          <>
            <motion.div
              className="absolute top-4 right-4 w-2 h-2 bg-white/20 rounded-full"
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            />
            <motion.div
              className="absolute top-8 right-8 w-1 h-1 bg-white/30 rounded-full"
              animate={{
                y: [0, -15, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div
              className="absolute top-12 right-6 w-1.5 h-1.5 bg-white/20 rounded-full"
              animate={{
                y: [0, -25, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </>
        )}

        {/* Content */}
        <div className="relative z-10">
          {/* Icon with animation */}
          <motion.div
            className="text-4xl mb-6"
            animate={isHovered ? { 
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            } : {}}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {item.icon}
          </motion.div>
          
          {/* Title with gradient text */}
          <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:via-blue-400 group-hover:to-purple-400 transition-all duration-500">
            {item.title}
          </h3>
          
          {/* Description */}
          <p className="text-sm text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
            {item.desc}
          </p>
      </div>

        {/* Animated button */}
        <motion.div 
          className="relative z-10 mt-8"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button 
            className="w-full relative overflow-hidden bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 hover:from-cyan-500/30 hover:via-blue-500/30 hover:to-purple-500/30 border border-cyan-400/30 hover:border-cyan-400/60 rounded-xl px-6 py-3 text-sm font-medium text-white transition-all duration-300 group/btn"
            data-cursor-hover
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span>Schedule Demo</span>
              <motion.span
                animate={isHovered ? { x: [0, 4, 0] } : {}}
                transition={{ duration: 0.6, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
            
            {/* Button shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={isHovered ? {
                x: ['-100%', '100%']
              } : {}}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </button>
        </motion.div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-transparent via-cyan-500/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services2" className="relative section overflow-hidden">
      <CustomCursor />
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-navy to-slate-900" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
            x: [0, -40, 0],
            y: [0, 40, 0]
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
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent mb-6"
        >
          SERVICES
        </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Comprehensive software solutions tailored to meet your business needs and drive growth across industries.
          </motion.p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Card key={service.title} item={service} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}


