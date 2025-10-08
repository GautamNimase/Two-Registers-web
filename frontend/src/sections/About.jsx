import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-max grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src="/images/img-2.svg"
          alt="About Two Registers"
          className="w-full max-w-xl mx-auto drop-shadow-xl"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        />
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold"
          >
            We develop high quality bespoke web and mobile applications for organizations, institutions and SMEs
          </motion.h2>
          <p className="mt-5 text-textSecondary max-w-prose">
            Our team is vast in software development and ready to build applications of your choice.
          </p>
          <p className="mt-3 text-textSecondary max-w-prose">
            We take responsibility for custom software solutions that automate business processes and improve efficiency.
          </p>
          <a href="/contact" className="btn-accent mt-8 inline-flex">Contact us</a>
        </div>
      </div>
    </section>
  )
}


