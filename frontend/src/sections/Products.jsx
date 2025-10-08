import { motion } from 'framer-motion'
import { AiOutlineDesktop, AiOutlineMobile, AiOutlineCloudServer } from 'react-icons/ai'
import { GiFactory } from 'react-icons/gi'
import { MdSchool, MdGroups } from 'react-icons/md'

const products = [
  {
    title: 'Web Development',
    icon: AiOutlineDesktop,
    desc: 'High-quality, custom websites and web apps. Responsive, accessible, fast.',
    hue: 'from-cyan-400 to-accent',
    image: '/images/web-dev.webp',
  },
  {
    title: 'Mobile App Development',
    icon: AiOutlineMobile,
    desc: 'Cross‑platform mobile apps focused on performance and great UX.',
    hue: 'from-fuchsia-400 to-accent',
    image: '/images/mobile-dev.webp',
  },
  {
    title: 'Cloud Deployment & Migration',
    icon: AiOutlineCloudServer,
    desc: 'Seamless transitions to AWS, Azure, and GCP with security and scale.',
    hue: 'from-sky-400 to-accent',
    image: '/images/cloud-2.png',
  },
  {
    title: 'Industrial IoT Solutions',
    icon: GiFactory,
    desc: 'Industry-grade IoT integrations, telemetry, and dashboards for insight.',
    hue: 'from-indigo-400 to-accent',
    image: '/images/iot-6.jpg',
  },
  {
    title: 'Industry Academia Collaboration',
    icon: MdSchool,
    desc: 'Hands-on learning via electives, full-time courses, and workshops bridging academia and industry.',
    hue: 'from-emerald-400 to-accent',
    image: '/images/industry-academia-7.jpg',
  },
  {
    title: 'General IT Consultations',
    icon: MdGroups,
    desc: 'Expert guidance and support for businesses to optimize their technology solutions.',
    hue: 'from-purple-400 to-accent',
    image: '/images/general-it-8.svg',
  },
]

function ProductCard({ item, delay }) {
  const Icon = item.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      className="group relative"
    >
      {/* Glow gradient frame */}
      <div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r ${item.hue} opacity-0 blur transition-opacity duration-300 group-hover:opacity-100`} />
      <div className="relative card-dark p-7 h-full overflow-hidden transition-transform duration-300 group-hover:scale-[1.03]">
        {/* Accent corner glow */}
        <div className="pointer-events-none absolute -top-20 -right-20 h-52 w-52 rounded-full bg-accent/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />
        {item.image && (
          <img src={item.image} alt={item.title} className="w-full rounded-xl border border-white/10 object-cover h-40" />
        )}
        <div className="mt-5 flex items-center gap-4">
          <div className="shrink-0 grid place-items-center h-12 w-12 rounded-xl bg-white/5 border border-white/10 text-accent shadow-glow">
            <Icon className="text-xl" />
          </div>
          <h3 className="text-xl font-semibold">{item.title}</h3>
        </div>
        <p className="mt-3 text-sm text-textSecondary">{item.desc}</p>
      </div>
    </motion.div>
  )
}

export default function Products() {
  return (
    <section id="services" className="section">
      <div className="container-max">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-bold"
        >
          Our Expertise
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-textSecondary mt-3"
        >
          We are deeply committed to the growth and success of our clients.
        </motion.p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <ProductCard key={p.title} item={p} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  )
}


