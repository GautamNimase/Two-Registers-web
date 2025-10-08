import { motion } from 'framer-motion'

const services = [
  {
    title: 'Energy Meter Monitoring',
    desc:
      'Smart energy meter solution with audit-ready insights to reduce electricity bills and manual reading.',
  },
  {
    title: 'PM/BM Scheduling',
    desc:
      'Server-based PMS that tracks runtime, idle time, job count, availability, performance, quality and OEE.',
  },
  {
    title: 'Work Permit Automation',
    desc:
      'Digitalize permit workflows with authorization, visibility and compliance for safe plant operations.',
  },
  {
    title: 'Full Stack Development',
    desc:
      'Responsive, scalable products across frontend and backend using modern web technologies.',
  },
  {
    title: 'Python Development',
    desc:
      'Robust web apps, data solutions and automation tools tailored to your needs using Python.',
  },
  {
    title: 'Cloud Deployment / Migration',
    desc:
      'Secure, cost-effective migrations and deployments across AWS, Azure and Google Cloud.',
  },
  {
    title: 'Wordpress Development',
    desc:
      'Custom, SEO‑friendly WordPress sites, themes and plugins with e‑commerce integration.',
  },
  {
    title: 'AI & ML Integration & Development',
    desc:
      'Automation and data‑driven insights with AI/ML to support better decision‑making.',
  },
]

function Card({ item, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="card-dark p-6 flex flex-col justify-between hover:shadow-glow hover:border-accent/40 border border-white/10"
    >
      <div>
        <h3 className="text-xl font-semibold">{item.title}</h3>
        <p className="mt-3 text-sm text-textSecondary leading-relaxed">{item.desc}</p>
      </div>
      <div className="mt-6">
        <button className="btn-accent">Schedule Demo</button>
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section className="section">
      <div className="container-max">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-bold"
        >
          SERVICES
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-textSecondary mt-3 max-w-2xl mx-auto"
        >
          Comprehensive software solutions tailored to meet your business needs and drive growth.
        </motion.p>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Card key={s.title} item={s} delay={i * 0.03} />
          ))}
        </div>
      </div>
    </section>
  )
}
