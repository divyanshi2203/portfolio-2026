import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Code2, Compass, User2, Award } from 'lucide-react'
import api from '../api/axios'
import { EDUCATION as FALLBACK_EDU, CERTIFICATIONS as FALLBACK_CERTS } from '../data/fallbackData'
import SectionTitle from '../components/SectionTitle'

export default function About({ profile }) {
  const [education, setEducation] = useState(FALLBACK_EDU)
  const [certs, setCerts] = useState(FALLBACK_CERTS)

  useEffect(() => {
    api
      .get('/education')
      .then((r) => setEducation(r.data || FALLBACK_EDU))
      .catch(() => setEducation(FALLBACK_EDU))
    api
      .get('/certifications')
      .then((r) => setCerts(r.data?.certifications || FALLBACK_CERTS))
      .catch(() => setCerts(FALLBACK_CERTS))
  }, [])

  return (
    <main className="pt-28 pb-24">
      <div className="container-page">
        <SectionTitle
          eyebrow="About me"
          title="A backend-focused engineer who likes shipping."
          subtitle="Computer Science (AI/ML) fresher, graduated in June 2026, interested in backend and full-stack development, and someone happiest when an API runs fast and an inference pipeline returns the right answer."
        />

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card-base max-w-3xl mx-auto"
        >
          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
            {profile?.summary ||
              'Backend-focused CS (AI/ML) fresher, graduated in June 2026, with hands-on experience building production-grade REST APIs and full-stack applications using Python, Django, DRF, Flask, FastAPI, and modern web technologies. Comfortable with JWT auth, PostgreSQL schema design with composite indexing, async task processing using Celery + Redis, and containerized deployment with Docker Compose.'}
          </p>
        </motion.div>

        {/* Three cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <Card
            icon={User2}
            title="Who I Am"
            text="A backend-focused B.Tech CS (AI/ML) fresher from Moradabad Institute of Technology with a backend and full-stack developer's mindset — schemas first, indexes second, endpoints third."
          />
          <Card
            icon={Code2}
            title="What I Build"
            text="Production-grade REST APIs and full-stack applications with Django, DRF, Flask, and FastAPI — JWT auth, Postgres indexing, Celery + Redis pipelines, Dockerized stacks, OpenAPI docs."
          />
          <Card
            icon={Compass}
            title="What I'm Looking For"
            text="Backend, full-stack development, and API-focused fresher roles where I can ship clean code, take ownership of schemas and pipelines, and grow into scalable software architecture."
          />
        </div>

        {/* Education */}
        <div className="mt-20">
          <SectionTitle
            eyebrow="Education"
            title="Currently looking for fresher roles in CS (AI/ML), backend, and full-stack development"
          />
          <div className="max-w-3xl mx-auto space-y-4">
            {education.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="card-base flex items-start gap-4"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-btn-gradient text-white shadow-soft flex-shrink-0">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink-main">
                    {e.degree}
                  </h3>
                  <p className="text-sm text-rose-dark font-semibold mt-1">
                    {e.institution}
                  </p>
                  <p className="text-xs text-ink-muted mt-1">{e.duration}</p>
                  {e.details && (
                    <p className="text-sm text-ink-secondary mt-2">{e.details}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        {certs?.length > 0 && (
          <div className="mt-16 max-w-3xl mx-auto">
            <h3 className="font-display text-xl font-bold text-ink-main mb-4 flex items-center gap-2">
              <Award className="h-5 w-5 text-rose-primary" /> Certifications & Awards
            </h3>
            <div className="flex flex-wrap gap-2">
              {certs.map((c) => (
                <span key={c} className="badge-rose">{c}</span>
              ))}
            </div>
          </div>
        )}

        {/* Career objective */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 mx-auto max-w-3xl rounded-2xl bg-btn-gradient p-8 text-white shadow-glow"
        >
          <h3 className="font-display text-xl font-bold">Career objective</h3>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/90">
            To contribute to backend and full-stack teams building reliable,
            scalable services — with a focus on clean API design, well-modeled
            data, and asynchronous, containerized infrastructure that scales
            beyond a single machine.
          </p>
        </motion.div>
      </div>
    </main>
  )
}

function Card({ icon: Icon, title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
      className="card-base card-hover"
    >
      <span className="grid h-12 w-12 place-items-center rounded-xl bg-rose-light text-rose-dark mb-4">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="font-display text-lg font-bold text-ink-main">{title}</h3>
      <p className="mt-2 text-sm text-ink-secondary leading-relaxed">{text}</p>
    </motion.div>
  )
}