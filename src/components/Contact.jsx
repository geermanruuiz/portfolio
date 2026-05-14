import { motion } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'
import { profile } from '../data.js'

export default function Contact() {
  const hasLinkedIn =
    profile.linkedin && profile.linkedin !== 'https://www.linkedin.com/in/'

  return (
    <section id="contact" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <div className="eyebrow">Contact</div>
        <h2 className="section-title">Let's connect.</h2>
        <p className="section-subtitle">
          I'm actively looking for software engineering positions — drop a note
          and I'll get back to you.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="card max-w-3xl"
      >
        <div className="grid sm:grid-cols-2 gap-y-5 gap-x-8 mb-6">
          <div>
            <div className="eyebrow !mb-2">Email</div>
            <a
              href={`mailto:${profile.email}`}
              className="text-slate-900 hover:text-accent transition-colors break-all"
            >
              {profile.email}
            </a>
          </div>
          <div>
            <div className="eyebrow !mb-2">Phone</div>
            <a
              href={`tel:${profile.phone.replace(/\s/g, '')}`}
              className="text-slate-900 hover:text-accent transition-colors"
            >
              {profile.phone}
            </a>
          </div>
          <div>
            <div className="eyebrow !mb-2">Location</div>
            <div className="text-slate-900">{profile.location}</div>
          </div>
          <div>
            <div className="eyebrow !mb-2">Status</div>
            <div className="text-slate-900">Open to roles</div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-6 flex flex-wrap items-center gap-3">
          <a href={`mailto:${profile.email}`} className="btn-primary">
            <Mail size={16} /> Send a message
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            <Github size={16} /> GitHub
          </a>
          {hasLinkedIn && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          )}
        </div>
      </motion.div>
    </section>
  )
}
