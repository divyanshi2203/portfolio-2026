import React from 'react'
import { Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { PROFILE } from '../../data/portfolioData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-24 border-t border-line-soft bg-gradient-to-b from-white to-surface-soft">
      <div className="container-page py-12 grid gap-10 md:grid-cols-3">
        <div>
          <h2 className="font-display text-xl font-bold text-ink-main">
            {PROFILE.name}
            <span className="text-rose-primary">.</span>
          </h2>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-secondary">
            Python backend and software developer building reliable APIs, tested
            systems, and production-ready web applications.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-rose-wine">
            Connect
          </h3>
          <ul className="space-y-2 text-sm text-ink-secondary">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-rose-primary" aria-hidden="true" />
              <a
                href={`mailto:${PROFILE.email}`}
                className="hover:text-rose-wine transition-colors"
              >
                {PROFILE.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin className="h-4 w-4 text-rose-primary" aria-hidden="true" />
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile, opens in a new tab"
                className="hover:text-rose-wine transition-colors"
              >
                LinkedIn
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Github className="h-4 w-4 text-rose-primary" aria-hidden="true" />
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile, opens in a new tab"
                className="hover:text-rose-wine transition-colors"
              >
                {PROFILE.github.replace('https://', '')}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-rose-wine">
            Based in
          </h3>
          <p className="flex items-center gap-2 text-sm text-ink-secondary">
            <MapPin className="h-4 w-4 text-rose-primary" aria-hidden="true" />
            {PROFILE.location}
          </p>
          <p className="mt-4 text-xs text-ink-muted">{PROFILE.availability}</p>
        </div>
      </div>

      <div className="border-t border-line-soft">
        <div className="container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-muted">
          <p>
            Copyright {year} {PROFILE.name}. All rights reserved.
          </p>
          <p>Built with React, Vite, and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}
