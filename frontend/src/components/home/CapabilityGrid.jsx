import React from 'react'
import { motion } from 'framer-motion'
import { Server, Database, FlaskConical, Layout, Bot } from 'lucide-react'
import { CAPABILITIES, STRENGTHS } from '../../data/portfolioData'
import TechTag from '../shared/TechTag'

const ICONS = {
  backend: Server,
  'data-async': Database,
  'testing-eng': FlaskConical,
  frontend: Layout,
  'ai-eval': Bot,
}

export default function CapabilityGrid() {
  return (
    <div>
      <div className="grid gap-5 md:grid-cols-2">
        {CAPABILITIES.map((group, gi) => {
          const Icon = ICONS[group.key] || Server
          return (
            <motion.section
              key={group.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: gi * 0.05 }}
              className="card-base"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-wine-gradient text-white shadow-soft">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <h3 className="font-display text-base font-bold text-ink-main">
                  {group.label}
                </h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <TechTag key={item}>{item}</TechTag>
                ))}
              </div>
            </motion.section>
          )
        })}
      </div>

      <p className="mt-6 rounded-xl border border-line-soft bg-surface-soft px-5 py-4 text-sm text-ink-secondary">
        <span className="font-semibold text-ink-main">Strengths: </span>
        {STRENGTHS}
      </p>
    </div>
  )
}
