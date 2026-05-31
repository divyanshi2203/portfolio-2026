import React from 'react'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { PROFILE as FALLBACK } from '../data/fallbackData'

export default function Footer({ profile }) {
  const p = profile || FALLBACK
  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-24 border-t border-rose-100 bg-gradient-to-b from-white to-rose-light/60">
      <div className="container-page py-12 grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="font-display text-xl font-bold text-ink-main">
            {p.name}<span className="text-rose-primary">.</span>
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-secondary max-w-sm">
            Backend & full-stack developer building production-grade REST APIs
            in Python, FastAPI, and Django.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-rose-dark mb-3">
            Connect
          </h4>
          <ul className="space-y-2 text-sm text-ink-secondary">
            {p.email && (
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-rose-primary" />
                <a
                  href={`mailto:${p.email}`}
                  className="hover:text-rose-dark transition-colors"
                >
                  {p.email}
                </a>
              </li>
            )}
            {p.github && (
              <li className="flex items-center gap-2">
                <Github className="h-4 w-4 text-rose-primary" />
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-rose-dark transition-colors"
                >
                  {p.github.replace('https://', '')}
                </a>
              </li>
            )}
            {p.linkedin && (
              <li className="flex items-center gap-2">
                <Linkedin className="h-4 w-4 text-rose-primary" />
                <a
                  href={p.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-rose-dark transition-colors"
                >
                  {p.linkedin.replace('https://', '')}
                </a>
              </li>
            )}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-rose-dark mb-3">
            Based in
          </h4>
          <p className="text-sm text-ink-secondary">
            {p.location || 'India'}
          </p>
          <p className="mt-4 text-xs text-ink-muted">
            Available for backend, API, and full-stack engagements.
          </p>
        </div>
      </div>

      <div className="border-t border-rose-100">
        <div className="container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-muted">
          <p>© {year} {p.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with <Heart className="h-3.5 w-3.5 text-rose-primary fill-rose-primary" /> using React + FastAPI
          </p>
        </div>
      </div>
    </footer>
  )
}
