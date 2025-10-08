import { motion } from 'framer-motion'

const clients = [
  { 
    name: 'APCOER', 
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
    name: 'Piyush Nutripharma', 
    logo: '/images/clients/piyush-nutripharma.jpg',
    description: 'Leading pharmaceutical and nutraceutical company focused on health and wellness solutions.'
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
]

function ClientCard({ client, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="card-dark p-6 flex flex-col items-center text-center hover:shadow-glow hover:border-accent/40 border border-white/10 transition-all duration-300 group"
    >
      <div className="mb-4">
        <img
          src={client.logo}
          alt={`${client.name} logo`}
          className="max-h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
        />
      </div>
      <h3 className="text-lg font-semibold text-textPrimary mb-3">{client.name}</h3>
      <p className="text-sm text-textSecondary leading-relaxed">{client.description}</p>
    </motion.div>
  )
}

export default function Clients() {
  return (
    <section className="section">
      <div className="container-max">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-bold"
        >
          Our Clients
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-textSecondary mt-3 max-w-2xl mx-auto"
        >
          Trusted by leading organizations and institutions across various industries.
        </motion.p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((client, i) => (
            <ClientCard key={client.name} client={client} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  )
}
