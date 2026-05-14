import { motion } from 'framer-motion'
import { profile } from '../data.js'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[88vh] flex items-center pt-16"
    >
      <div className="section pt-12 md:pt-20 w-full">
        <div className="grid md:grid-cols-5 gap-10 md:gap-16 items-end">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="md:col-span-3 order-2 md:order-1 pb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1] mb-5">
              {profile.name}
            </h1>

            <p className="text-xl md:text-2xl text-slate-700 mb-3">
              {profile.title}
            </p>

            <p className="text-base md:text-lg text-slate-500 max-w-xl mb-8">
              {profile.tagline}
            </p>

            <p className="text-sm text-slate-500 mb-2">
              {profile.meta}
            </p>

            {profile.current && (
              <p className="text-sm text-slate-700 mb-8">
                <span className="text-slate-400 uppercase tracking-[0.18em] text-[10px] mr-2 align-middle">
                  Currently
                </span>
                <span className="align-middle">{profile.current}</span>
              </p>
            )}

            <div className="flex flex-wrap items-center gap-3">
              <a href="#contact" className="btn-primary">
                Get in touch
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Photo column — tall editorial portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="md:col-span-2 order-1 md:order-2 flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-xs md:max-w-none">
              <img
                src={profile.photoUrl}
                alt={profile.name}
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextElementSibling.style.display = 'flex'
                }}
                className="w-full h-[420px] md:h-[580px] rounded-2xl object-cover object-top ring-1 ring-slate-200 shadow-xl shadow-slate-300/40"
              />
              {/* Initials fallback */}
              <div
                style={{ display: 'none' }}
                className="w-full h-[420px] md:h-[580px] rounded-2xl items-center justify-center text-6xl md:text-7xl font-bold text-white bg-slate-900 ring-1 ring-slate-200 shadow-xl shadow-slate-300/40"
              >
                GR
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
