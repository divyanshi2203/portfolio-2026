import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Bot, Rocket, CheckCircle2 } from 'lucide-react'
import { CREDIBILITY } from '../../data/portfolioData'

const ICONS = [Briefcase, Bot, Rocket, CheckCircle2]

export default function CredibilityStrip() {
  return (
    <section className="container-page relative z-10 -mt-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 rounded-2xl border border-line-soft bg-white p-4 shadow-card"
      >
        {CREDIBILITY.map((item, i) => {
          const Icon = ICONS[i % ICONS.length]
          return (
            <div key={item.label} className="flex items-start gap-3 p-2">
              <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-surface-soft text-rose-wine">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-bold text-ink-main leading-tight">
                  {item.label}
                </p>
                <p className="mt-0.5 text-xs text-ink-muted">{item.note}</p>
              </div>
            </div>
          )
        })}
      </motion.div>
    </section>
  )
}
