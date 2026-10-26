import React from 'react'
import { motion } from 'framer-motion'
import { Building2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { EXPERIENCE } from '../../data/portfolioData'
import SectionHeading from '../shared/SectionHeading'
import TechTag from '../shared/TechTag'

export default function FeaturedExperience() {
  const current = EXPERIENCE.find((e) => e.current) || EXPERIENCE[0]
  const others = EXPERIENCE.filter((e) => e.id !== current.id).slice(0, 4)

  return (
    <section className="section-padding bg-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="Experience"
          title="Current work, and the path to it."
          subtitle="Backend internships, AI coding benchmark contribution, and full-stack delivery."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Current role, emphasized */}
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="card-base border-rose-primary/40 shadow-lift"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-rose-wine">
                <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
                {current.company}
              </span>
              <span className="rounded-full bg-wine-gradient px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-white">
                Current
              </span>
            </div>
            <h3 className="mt-2 font-display text-xl font-bold text-ink-main">
              {current.role}
            </h3>
            <p className="mt-1 text-xs text-ink-muted">{current.duration}</p>
            <ul className="mt-4 space-y-1.5">
              {current.responsibilities.slice(0, 5).map((r, i) => (
                <li key={i} className="flex gap-2 text-sm leading-relaxed text-ink-secondary">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-primary" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {current.technologies.map((t) => (
                <TechTag key={t}>{t}</TechTag>
              ))}
            </div>
          </motion.article>

          {/* Other roles, compact */}
          <div className="flex flex-col gap-3">
            {others.map((e, i) => (
              <motion.div
                key={e.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="card-base card-hover"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-rose-wine">
                  {e.company}
                </p>
                <p className="mt-1 font-display font-bold text-ink-main">
                  {e.role}
                  {e.project && <span className="text-rose-wine"> ({e.project})</span>}
                </p>
                <p className="mt-0.5 text-xs text-ink-muted">{e.duration}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/experience"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-rose-wine hover:gap-2.5 transition-all"
          >
            View full experience <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
