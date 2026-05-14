import { motion } from 'framer-motion'
import { education } from '../data.js'

export default function Education() {
  return (
    <section id="education" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="eyebrow">Education</div>
        <h2 className="section-title">Where I trained.</h2>
        <p className="section-subtitle">
          Two CS programs across Madrid and Lausanne.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {education.map((ed, i) => (
          <motion.div
            key={ed.school}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="card"
          >
            <div className="text-xs text-slate-500 mb-2">{ed.period}</div>
            <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-1">
              {ed.degree}
            </h3>
            <div className="text-accent text-sm font-medium mb-1">
              {ed.school}
            </div>
            <div className="text-xs text-slate-500 mb-4">{ed.location}</div>

            {ed.highlights.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {ed.highlights.map((h) => (
                  <span key={h} className="chip">
                    {h}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
