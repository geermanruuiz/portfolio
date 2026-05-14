import { motion } from 'framer-motion'
import { experience } from '../data.js'

function getInitials(company) {
  const cleaned = company.replace(/[^a-zA-Z]/g, '')
  return cleaned.substring(0, 2).toUpperCase()
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="eyebrow">Experience</div>
        <h2 className="section-title">Where I've worked.</h2>
        <p className="section-subtitle">
          Three roles where I've shipped real software and learned to run real
          operations.
        </p>
      </motion.div>

      <ol className="space-y-5">
        {experience.map((exp, i) => (
          <motion.li
            key={`${exp.company}-${exp.role}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="card"
          >
            <div className="flex flex-col md:flex-row gap-5 md:gap-6">
              {/* Number + initials column */}
              <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-4 md:w-20 shrink-0">
                <span className="text-xs font-mono text-slate-400">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-accent text-white text-sm font-semibold tracking-wider">
                  {getInitials(exp.company)}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start gap-x-3 gap-y-1 mb-1">
                  <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                    {exp.role}
                  </h3>
                  {exp.status && (
                    <span className="text-[10px] uppercase tracking-[0.15em] px-2 py-0.5 rounded-full border border-emerald-200 text-emerald-700 bg-emerald-50 mt-1">
                      {exp.status}
                    </span>
                  )}
                </div>

                <div className="text-accent font-medium text-sm mb-1">
                  {exp.company}
                </div>

                <div className="text-xs text-slate-500 mb-4">
                  {exp.period}
                  {exp.location && (
                    <span className="text-slate-400"> · {exp.location}</span>
                  )}
                </div>

                {exp.bullets && exp.bullets.length > 0 && (
                  <ul className="space-y-1.5 mb-4 text-slate-700">
                    {exp.bullets.map((b, idx) => (
                      <li
                        key={idx}
                        className="relative pl-5 leading-relaxed text-[15px]"
                      >
                        <span className="absolute left-0 top-2.5 w-1 h-1 rounded-full bg-slate-400" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                {exp.stack && exp.stack.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((s) => (
                      <span key={s} className="chip">
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  )
}
