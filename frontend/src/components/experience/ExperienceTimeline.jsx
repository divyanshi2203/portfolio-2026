import React from 'react'
import { motion } from 'framer-motion'
import { Building2 } from 'lucide-react'
import TechTag from '../shared/TechTag'

function Bullets({ points, className = '' }) {
  return (
    <ul className={`space-y-1.5 ${className}`}>
      {points.map((p, i) => (
        <li key={i} className="flex gap-2 text-sm leading-relaxed text-ink-secondary">
          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-primary" />
          <span>{p}</span>
        </li>
      ))}
    </ul>
  )
}

/**
 * Single-rail vertical timeline. Works cleanly at every width (no
 * horizontal timeline on mobile). The current role is emphasized.
 */
export default function ExperienceTimeline({ items = [] }) {
  return (
    <ol className="relative border-l border-line-soft pl-6 sm:pl-8">
      {items.map((item, idx) => (
        <motion.li
          key={item.id || idx}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4 }}
          className="relative mb-10 last:mb-0"
        >
          <span
            className={`absolute -left-[33px] sm:-left-[41px] top-1.5 grid h-5 w-5 place-items-center rounded-full ${
              item.current ? 'bg-wine-gradient' : 'bg-white border-2 border-rose-primary'
            }`}
            aria-hidden="true"
          >
            {item.current && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
          </span>

          <div
            className={`card-base ${
              item.current ? 'border-rose-primary/40 shadow-lift' : ''
            }`}
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-rose-wine">
                <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
                {item.company}
              </span>
              {item.current && (
                <span className="rounded-full bg-wine-gradient px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-white">
                  Current
                </span>
              )}
            </div>

            <h3 className="mt-2 font-display text-lg font-bold text-ink-main">
              {item.role}
              {item.project && (
                <span className="text-rose-wine"> ({item.project})</span>
              )}
            </h3>
            <p className="mt-1 text-xs text-ink-muted">{item.duration}</p>

            {item.summary && (
              <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                {item.summary}
              </p>
            )}

            {item.subRoles ? (
              <div className="mt-4 space-y-4">
                {item.subRoles.map((sub) => (
                  <div
                    key={sub.name}
                    className="rounded-xl border border-line-soft bg-surface-soft/60 p-4"
                  >
                    <p className="text-sm font-bold text-ink-main">{sub.name}</p>
                    <Bullets points={sub.points} className="mt-2" />
                  </div>
                ))}
              </div>
            ) : (
              item.responsibilities?.length > 0 && (
                <Bullets points={item.responsibilities} className="mt-4" />
              )
            )}

            {item.technologies?.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.technologies.map((t) => (
                  <TechTag key={t}>{t}</TechTag>
                ))}
              </div>
            )}
          </div>
        </motion.li>
      ))}
    </ol>
  )
}
