import { motion } from 'framer-motion'
import { about, certifications, languages } from '../data.js'

export default function About() {
  return (
    <section id="about" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="eyebrow">About</div>
        <h2 className="section-title">Engineering, end-to-end.</h2>
        <p className="section-subtitle">
          A quick introduction — who I am and what I care about.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 card"
        >
          {about.split('\n\n').map((p, i) => (
            <p
              key={i}
              className="text-slate-700 leading-relaxed mb-4 last:mb-0 text-[15px] md:text-base"
            >
              {p}
            </p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          <div className="card">
            <div className="eyebrow !mb-3">Certifications</div>
            <ul className="space-y-2 text-sm">
              {certifications.map((c) => (
                <li key={c.name}>
                  <div className="font-medium text-slate-900">{c.name}</div>
                  <div className="text-slate-500 text-xs">{c.issuer}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <div className="eyebrow !mb-3">Languages</div>
            <ul className="space-y-2 text-sm">
              {languages.map((l) => (
                <li
                  key={l.name}
                  className="flex justify-between items-center"
                >
                  <span className="font-medium text-slate-900">{l.name}</span>
                  <span className="text-slate-500 text-xs">{l.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
