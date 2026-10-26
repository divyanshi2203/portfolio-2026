import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github } from 'lucide-react'
import { PROFILE } from '../../data/portfolioData'

export default function ContactCTA() {
  return (
    <section className="section-padding bg-white">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="relative overflow-hidden rounded-2xl bg-wine-gradient p-8 sm:p-12 text-center shadow-card"
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Looking for a Python backend or software developer? Let us talk.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base leading-relaxed text-white/85">
            The fastest way to reach me is email or LinkedIn. I read everything and
            reply as soon as I can.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-rose-wine shadow-soft transition hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" aria-hidden="true" /> Email Me
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect on LinkedIn, opens in a new tab"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/20"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" /> Connect on LinkedIn
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View GitHub profile, opens in a new tab"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/20"
            >
              <Github className="h-4 w-4" aria-hidden="true" /> View GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
