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
          title="A full-stack developer who cares about useful, reliable software."
          subtitle="Computer Science (AI/ML) graduate with experience across API testing, backend development, front-end implementation, and client delivery."
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
              'Computer Science (AI/ML) graduate with experience building and supporting reliable web applications from interface to API. My work combines Python and JavaScript development with practical testing, thoughtful API design, and dependable deployment.'}
          </p>
        </motion.div>

        {/* Three cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <Card
            icon={User2}
            title="Who I Am"
            text="A B.Tech Computer Science (AI/ML) graduate who enjoys understanding a problem, building a clear solution, and taking responsibility for the result."
          />
          <Card
            icon={Code2}
            title="What I Build"
            text="Full-stack web applications, dependable APIs, and Python workflows using Django, FastAPI, Flask, JavaScript, PostgreSQL, and Docker."
          />
          <Card
            icon={Compass}
            title="What I'm Looking For"
            text="Software and full-stack development roles where I can contribute across the product, learn from a strong team, and keep growing as an engineer."
          />
        </div>

        {/* Education */}
        <div className="mt-20">
          <SectionTitle
            eyebrow="Education"
            title="Computer Science foundation with practical product experience"
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
            To contribute to a thoughtful engineering team, build software that
            solves real problems, and keep developing the judgment needed to
            create dependable products from interface to infrastructure.
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
