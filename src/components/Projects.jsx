import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { projects } from '../data.js'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="eyebrow">Portfolio</div>
        <h2 className="section-title">Selected work.</h2>
        <p className="section-subtitle">Client work and side projects.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="card"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <div className="text-xs text-slate-500 mb-1">
                  {p.role}
                  {p.year && (
                    <span className="text-slate-400"> · {p.year}</span>
                  )}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                  {p.name}
                </h3>
              </div>
              {p.status && (
                <span
                  className={`text-[10px] uppercase tracking-[0.15em] px-2 py-0.5 rounded-full border whitespace-nowrap ${
                    p.status === 'In Progress' || p.status === 'Ongoing'
                      ? 'border-amber-200 text-amber-700 bg-amber-50'
                      : 'border-emerald-200 text-emerald-700 bg-emerald-50'
                  }`}
                >
                  {p.status}
                </span>
              )}
            </div>

            <p className="text-slate-700 leading-relaxed mb-4 text-[15px]">
              {p.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {p.stack.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>

            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-dark transition-colors"
              >
                View project <ExternalLink size={14} />
              </a>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  )
}
