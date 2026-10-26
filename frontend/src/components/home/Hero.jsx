import React from 'react'
import { motion } from 'framer-motion'
import { Download, FolderGit2, Mail, Github, Linkedin, MapPin } from 'lucide-react'
import Button from '../shared/Button'
import { PROFILE } from '../../data/portfolioData'

export default function Hero() {
  const { hero, card } = PROFILE

  return (
    <section className="relative overflow-hidden bg-hero-gradient pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* one restrained decorative accent */}
      <span
        className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-rose-primary/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow mb-5">
            <span className="status-dot animate-pulse" aria-hidden="true" />
            {PROFILE.availability}
          </span>

          <h1 className="mt-5 font-display text-3xl sm:text-5xl font-extrabold leading-[1.08] text-ink-main">
            Python backend developer building{' '}
            <span className="bg-btn-gradient bg-clip-text text-transparent">
              reliable APIs
            </span>
            , tested systems, and production-ready web applications.
          </h1>

          <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-ink-secondary">
            {hero.subcopy}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button to={hero.primaryCta.to} icon={FolderGit2}>
              {hero.primaryCta.label}
            </Button>
            <Button to={hero.secondaryCta.to} variant="ghost" icon={Download}>
              {hero.secondaryCta.label}
            </Button>
            <Button to={hero.tertiaryCta.to} variant="ghost" icon={Mail}>
              {hero.tertiaryCta.label}
            </Button>
          </div>
        </motion.div>

        {/* Profile card: tighter crop, slimmer frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="rounded-2xl border border-line-soft bg-white p-3 shadow-card">
            <div className="aspect-[4/5] overflow-hidden rounded-xl bg-surface-soft">
              <img
                src="/profile.jpeg"
                alt={`Portrait of ${PROFILE.name}, ${card.role}`}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="px-2 pb-1 pt-4">
              <div className="flex items-center justify-between gap-3">
                <p className="font-display font-bold text-ink-main">{card.name}</p>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-soft px-2.5 py-1 text-xs font-semibold text-rose-wine">
                  <span className="status-dot" aria-hidden="true" />
                  Available
                </span>
              </div>
              <p className="mt-0.5 text-sm text-rose-wine font-medium">{card.role}</p>
              <p className="mt-1 flex items-center gap-1.5 text-xs text-ink-muted">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                {card.location}
              </p>
              <div className="mt-3 flex items-center gap-2 border-t border-line-soft pt-3">
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile, opens in a new tab"
                  className="grid h-9 w-9 place-items-center rounded-lg bg-surface-soft text-rose-wine hover:bg-wine-gradient hover:text-white transition-colors"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile, opens in a new tab"
                  className="grid h-9 w-9 place-items-center rounded-lg bg-surface-soft text-rose-wine hover:bg-wine-gradient hover:text-white transition-colors"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
