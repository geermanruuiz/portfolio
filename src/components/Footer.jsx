import { profile } from '../data.js'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const hasLinkedIn =
    profile.linkedin && profile.linkedin !== 'https://www.linkedin.com/in/'

  return (
    <footer className="border-t border-slate-200 mt-10 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="text-lg font-bold text-slate-900 mb-1">
              {profile.name}
            </div>
            <div className="text-sm text-slate-500">{profile.title}</div>
            <div className="text-sm text-slate-500">{profile.location}</div>
          </div>

          <div>
            <div className="eyebrow">Explore</div>
            <ul className="grid grid-cols-2 gap-y-1 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-slate-700 hover:text-slate-900 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow">Follow</div>
            <ul className="space-y-1 text-sm">
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-700 hover:text-slate-900 transition-colors"
                >
                  GitHub
                </a>
              </li>
              {hasLinkedIn && (
                <li>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-700 hover:text-slate-900 transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              )}
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-slate-700 hover:text-slate-900 transition-colors break-all"
                >
                  {profile.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <div>
            © {year} {profile.name}. All rights reserved.
          </div>
          <div>Built with React, Vite & Tailwind CSS.</div>
        </div>
      </div>
    </footer>
  )
}
