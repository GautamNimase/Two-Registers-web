import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <section className="section">
      <div className="container-max grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src="/images/img-2.svg"
          alt="About Two Registers"
          className="w-full max-w-xl mx-auto drop-shadow-xl"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold"
          >
            We develop high quality bespoke web and mobile applications for organizations, institutions and SMEs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-textSecondary max-w-prose"
          >
            Our team is vast in software development and ready to build applications of your choice.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-textSecondary max-w-prose"
          >
            We take responsibility for custom software solutions that automate business processes and improve efficiency.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/contact" className="btn-accent mt-8 inline-flex">
              Contact us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
