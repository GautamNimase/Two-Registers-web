import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import CustomCursor from '../components/CustomCursor.jsx'

const clients = [
  { 
    name: 'APCOE&R', 
    logo: '/images/clients/apcoer.jpg',
    description: 'Agricultural Polytechnic College of Engineering and Research - Leading agricultural engineering education and research institution.'
  },
  { 
    name: 'Atharva', 
    logo: '/images/clients/atharva.jpg',
    description: 'Innovative technology solutions provider specializing in digital transformation and software development.'
  },
  { 
    name: 'Carraro', 
    logo: '/images/clients/carraro.jpg',
    description: 'Global leader in agricultural and construction machinery, providing advanced equipment solutions worldwide.'
  },
  { 
    name: 'John Deere', 
    logo: '/images/clients/john-deere.jpg',
    description: 'World-renowned manufacturer of agricultural, construction, and forestry machinery with cutting-edge technology.'
  },
  { 
    name: 'Suntech', 
    logo: '/images/clients/suntech.jpg',
    description: 'Technology corporation specializing in solar energy solutions and renewable technology innovations.'
  },
  { 
    name: 'Trinity', 
    logo: '/images/clients/trinity.jpg',
    description: 'Multi-sector organization providing comprehensive solutions in technology, education, and business services.'
  },
  { 
    name: 'VIIT', 
    logo: '/images/clients/viit.jpg',
    description: 'Vishwakarma Institute of Information Technology - Premier engineering institute fostering innovation and excellence.'
  },
  { 
    name: 'VPKBIET', 
    logo: '/images/clients/vpkbiet.jpg',
    description: 'Vasantrao Patil College of Engineering and Technology - Leading technical education institution in Maharashtra.'
  },
  { 
    name: 'PIYUSH NUTRIPHARMA', 
    logo: '/images/clients/piyush-nutripharma.jpg',
    description: 'Leading pharmaceutical and nutraceutical company focused on health and wellness solutions.'
  },
]

function ClientCard({ client, delay }) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)

  // Parallax tilt / magnetic effect
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-200, 200], [12, -12]), { stiffness: 260, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-200, 200], [-12, 12]), { stiffness: 260, damping: 20 })

  const onMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * 0.15)
    y.set((e.clientY - cy) * 0.15)
  }

  const onLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, type: 'spring', stiffness: 120, damping: 18 }}
      whileHover={{ scale: 1.03, y: -6, transition: { duration: 0.25 } }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={onMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={onLeave}
      className="group relative"
      data-cursor-hover
    >
      {/* Gradient/glow border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-emerald-400 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]" />

      {/* Card body */}
      <div className="relative card-dark border border-white/10 rounded-2xl p-6 h-full flex flex-col items-center text-center overflow-hidden">
        {/* Soft animated bg when hovered */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-emerald-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Logo with pulse/bounce */}
        <motion.div
          className="mb-4"
          animate={isHovered ? { scale: [1, 1.08, 1], y: [0, -4, 0] } : {}}
          transition={{ duration: 0.8, repeat: isHovered ? Infinity : 0, ease: 'easeInOut' }}
        >
          <img
            src={client.logo}
            alt={`${client.name} logo`}
            className="max-h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
            onError={(e) => { e.currentTarget.style.display = 'none' }}
            loading="lazy"
          />
        </motion.div>

        <h3 className="text-lg font-semibold text-textPrimary mb-2 bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
          {client.name}
        </h3>
        <p className="text-sm text-textSecondary leading-relaxed relative z-[1]">{client.description}</p>

        {/* Tooltip */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.2 }}
            className="absolute -top-3 right-3 text-[10px] px-2 py-1 rounded-md bg-slate-800/80 border border-white/10 text-cyan-200 shadow-glow"
          >
            View profile
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default function Clients() {
  return (
    <section id="clients" className="relative section overflow-hidden">
      <CustomCursor />
      <div className="container-max">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-bold gradient-text-animated"
        >
          Our Clients
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-textSecondary mt-3 max-w-2xl mx-auto"
        >
          Trusted by leading organizations and institutions across various industries.
        </motion.p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((client, i) => (
            <ClientCard key={client.name} client={client} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}


