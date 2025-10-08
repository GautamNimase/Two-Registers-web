import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section id="home" className="relative section overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-b from-navyDark/0 via-navyDark/40 to-navy" />
        <div className="absolute -inset-x-40 -top-40 h-[500px] blur-3xl"
             style={{background: 'radial-gradient(600px 200px at 50% 0%, rgba(100,255,218,0.15), transparent 60%)'}} />
      </div>
      <div className="container-max text-center grid md:grid-cols-2 items-center gap-10">
        <div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          Bespoke Software Solutions for Your Unique Business Needs
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-lg text-textSecondary max-w-3xl mx-auto"
        >
          Empowering industries through IoT, automation, and modern software engineering.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 flex justify-center gap-4"
        >
          <Link to="/services" className="btn-accent">Learn more</Link>
          <Link to="/contact" className="btn-accent">Get in touch</Link>
        </motion.div>
        </div>
        <div className="relative">
          <img src="/images/img-1.svg" alt="Two Registers illustration" className="w-full max-w-xl mx-auto drop-shadow-xl" />
        </div>
      </div>
    </section>
  )
}


