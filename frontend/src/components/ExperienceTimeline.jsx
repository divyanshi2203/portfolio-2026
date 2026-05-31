import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Building2 } from 'lucide-react'

export default function ExperienceTimeline({ items = [] }) {
  return (
    <div className="relative">
      <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-rose-soft via-rose-primary/40 to-rose-soft sm:-translate-x-1/2" />

      <ul className="space-y-12">
        {items.map((item, idx) => {
          const left = idx % 2 === 0
          return (
            <motion.li
              key={item.id || idx}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="relative sm:grid sm:grid-cols-2 sm:gap-12"
            >
              {/* Dot */}
              <span className="absolute left-4 sm:left-1/2 top-2 sm:top-6 -translate-x-1/2 grid h-8 w-8 place-items-center rounded-full bg-btn-gradient shadow-glow z-10">
                <Briefcase className="h-3.5 w-3.5 text-white" />
              </span>

              <div
                className={`pl-14 sm:pl-0 ${
                  left ? 'sm:pr-10 sm:text-right' : 'sm:col-start-2 sm:pl-10'
                }`}
              >
                <div className="card-base">
                  <div
                    className={`flex items-center gap-2 text-rose-dark text-xs font-semibold uppercase tracking-wider ${
                      left ? 'sm:justify-end' : ''
                    }`}
                  >
                    <Building2 className="h-3.5 w-3.5" />
                    {item.company}
                  </div>
                  <h3 className="mt-2 font-display text-lg font-bold text-ink-main">
                    {item.role}
                  </h3>
                  <p className="text-xs text-ink-muted mt-1">{item.duration}</p>
                  <p className="mt-3 text-sm text-ink-secondary leading-relaxed">
                    {item.description}
                  </p>

                  {item.responsibilities?.length > 0 && (
                    <ul className={`mt-4 space-y-1.5 ${left ? 'sm:text-right' : ''}`}>
                      {item.responsibilities.map((r, i) => (
                        <li
                          key={i}
                          className={`text-sm text-ink-secondary leading-relaxed flex gap-2 ${
                            left ? 'sm:flex-row-reverse' : ''
                          }`}
                        >
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-rose-primary flex-shrink-0" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.technologies?.length > 0 && (
                    <div
                      className={`mt-4 flex flex-wrap gap-2 ${
                        left ? 'sm:justify-end' : ''
                      }`}
                    >
                      {item.technologies.map((t) => (
                        <span key={t} className="badge-rose">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.li>
          )
        })}
      </ul>
    </div>
  )
}
