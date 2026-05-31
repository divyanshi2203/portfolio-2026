import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Code2,
  Server,
  Layout,
  Database,
  KeyRound,
  Cpu,
  Cloud,
  Brain,
  Wrench,
} from 'lucide-react'
import api from '../api/axios'
import { SKILLS as FALLBACK } from '../data/fallbackData'
import SectionTitle from '../components/SectionTitle'
import SkillBadge from '../components/SkillBadge'

const GROUPS = [
  { key: 'programming', label: 'Programming Languages', icon: Code2 },
  { key: 'backend', label: 'Backend Frameworks', icon: Server },
  { key: 'frontend', label: 'Frontend Technologies', icon: Layout },
  { key: 'databases', label: 'Databases & ORMs', icon: Database },
  { key: 'apis_auth', label: 'APIs & Authentication', icon: KeyRound },
  { key: 'async_infra', label: 'Async & Infrastructure', icon: Cpu },
  { key: 'devops', label: 'DevOps & Deployment', icon: Cloud },
  { key: 'ml_data', label: 'AI / ML & Data', icon: Brain },
  { key: 'tools', label: 'Tools & Practices', icon: Wrench },
]

export default function Skills() {
  const [skills, setSkills] = useState(FALLBACK)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api
      .get('/skills')
      .then((r) => setSkills({ ...FALLBACK, ...r.data }))
      .catch(() => setSkills(FALLBACK))
      .finally(() => setLoading(false))
  }, [])

  return (
    <main className="pt-28 pb-24 bg-bg-section/40">
      <div className="container-page">
        <SectionTitle
          eyebrow="Skills"
          title="Tools I reach for, every day."
          subtitle="Backend-first stack — Python, FastAPI, Django, DRF, Postgres, Celery + Redis, Docker — plus the frontend, ML, and infra pieces I use when projects demand them."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {GROUPS.map((g, gi) => {
            const items = skills?.[g.key] || []
            if (!items.length) return null
            return (
              <motion.section
                key={g.key}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: gi * 0.04 }}
                className="card-base"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-btn-gradient text-white shadow-soft">
                    <g.icon className="h-4 w-4" />
                  </span>
                  <h3 className="font-display text-lg font-bold text-ink-main">
                    {g.label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((s, i) => (
                    <SkillBadge key={s} label={s} index={i} />
                  ))}
                </div>
              </motion.section>
            )
          })}
        </div>

        {loading && (
          <p className="mt-8 text-center text-xs text-ink-muted">
            Loading skills…
          </p>
        )}
      </div>
    </main>
  )
}
