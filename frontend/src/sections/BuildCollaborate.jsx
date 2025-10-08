import { motion } from 'framer-motion'
import { AiOutlineApi } from 'react-icons/ai'
import { FiCode } from 'react-icons/fi'

const features = [
  {
    title: 'We Build',
    icon: AiOutlineApi,
    body:
      'With over 4 years experience in software analysis and design and a deep understanding of the latest IT trends and solutions, we provide customized recommendations and strategies to help you improve your operations, reduce costs, and increase efficiency.',
  },
  {
    title: 'We Collaborate',
    icon: FiCode,
    body:
      'We can collaborate with your existing tech team to scale existing software applications or design customized software applications that suits your everyday need and simplifies various processes.',
  },
]

export default function BuildCollaborate() {
  return (
    <section className="section">
      <div className="container-max grid gap-12 md:grid-cols-2">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className=""
          >
            <div className="text-accent">
              <f.icon className="text-5xl" />
            </div>
            <h3 className="mt-5 text-2xl font-semibold text-textPrimary">{f.title}</h3>
            <p className="mt-4 text-textSecondary leading-relaxed">{f.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}


