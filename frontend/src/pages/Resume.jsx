import React, { useEffect, useState } from 'react'
import { Download, ExternalLink, GraduationCap, Briefcase, FolderGit2, Award } from 'lucide-react'
import api from '../api/axios'
import Button from '../components/Button'
import SectionTitle from '../components/SectionTitle'
import {
  PROFILE as FALLBACK_PROFILE,
  SKILLS as FALLBACK_SKILLS,
  PROJECTS as FALLBACK_PROJECTS,
  EXPERIENCE as FALLBACK_EXP,
  EDUCATION as FALLBACK_EDU,
  CERTIFICATIONS as FALLBACK_CERTS,
} from '../data/fallbackData'

export default function Resume({ profile }) {
  const [skills, setSkills] = useState(FALLBACK_SKILLS)
  const [projects, setProjects] = useState(FALLBACK_PROJECTS)
  const [experience, setExperience] = useState(FALLBACK_EXP)
  const [education, setEducation] = useState(FALLBACK_EDU)
  const [certs, setCerts] = useState(FALLBACK_CERTS)

  const p = profile || FALLBACK_PROFILE

  useEffect(() => {
    api.get('/skills').then((r) => setSkills({ ...FALLBACK_SKILLS, ...r.data })).catch(() => {})
    api.get('/projects').then((r) => r.data?.length && setProjects(r.data)).catch(() => {})
    api.get('/experience').then((r) => r.data?.length && setExperience(r.data)).catch(() => {})
    api.get('/education').then((r) => r.data?.length && setEducation(r.data)).catch(() => {})
    api.get('/certifications').then((r) => r.data?.certifications && setCerts(r.data.certifications)).catch(() => {})
  }, [])

  return (
    <main className="pt-28 pb-24">
      <div className="container-page">
        <SectionTitle
          eyebrow="Resume"
          title="Quick summary — and a downloadable PDF."
          subtitle="The same content as my full resume, formatted for quick on-page reading. Hit Download for the PDF."
        />

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Button href="/resume.pdf" download icon={Download}>
            Download Resume
          </Button>
          <Button href="/resume.pdf" variant="ghost" icon={ExternalLink}>
            View Resume
          </Button>
        </div>

        {/* Header card */}
        <div className="card-base max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-ink-main">{p.name}</h2>
          <p className="text-rose-dark font-semibold mt-1">{p.title}</p>
          <p className="mt-4 text-sm text-ink-secondary leading-relaxed">{p.summary}</p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-muted">
            {p.location && <span>{p.location}</span>}
            {p.email && <span>· {p.email}</span>}
            {p.phone && <span>· {p.phone}</span>}
          </div>
        </div>

        {/* Sections */}
        <div className="max-w-3xl mx-auto mt-10 space-y-10">
          <Block icon={Briefcase} title="Experience">
            <div className="space-y-5">
              {experience.map((e) => (
                <div key={e.id} className="border-l-2 border-rose-soft pl-4">
                  <h4 className="font-semibold text-ink-main">{e.role} — <span className="text-rose-dark">{e.company}</span></h4>
                  <p className="text-xs text-ink-muted mt-0.5">{e.duration}</p>
                  <ul className="mt-2 space-y-1">
                    {e.responsibilities.map((r, i) => (
                      <li key={i} className="text-sm text-ink-secondary leading-relaxed flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-rose-primary flex-shrink-0" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Block>

          <Block icon={FolderGit2} title="Projects">
            <div className="space-y-4">
              {projects.map((pr) => (
                <div key={pr.id} className="border-l-2 border-rose-soft pl-4">
                  <h4 className="font-semibold text-ink-main">{pr.title}</h4>
                  <p className="text-xs text-rose-dark font-medium mt-0.5">
                    {pr.tech_stack.join(' · ')}
                  </p>
                  <p className="mt-1.5 text-sm text-ink-secondary leading-relaxed">
                    {pr.description}
                  </p>
                </div>
              ))}
            </div>
          </Block>

          <Block icon={GraduationCap} title="Education">
            {education.map((e, i) => (
              <div key={i} className="border-l-2 border-rose-soft pl-4">
                <h4 className="font-semibold text-ink-main">{e.degree}</h4>
                <p className="text-sm text-rose-dark">{e.institution}</p>
                <p className="text-xs text-ink-muted mt-0.5">{e.duration} · {e.details}</p>
              </div>
            ))}
          </Block>

          <Block icon={Award} title="Technical Skills">
            <div className="space-y-2 text-sm text-ink-secondary">
              <p><strong className="text-ink-main">Languages:</strong> {skills.programming?.join(', ')}</p>
              <p><strong className="text-ink-main">Backend:</strong> {skills.backend?.join(', ')}</p>
              <p><strong className="text-ink-main">Databases & ORMs:</strong> {skills.databases?.join(', ')}</p>
              <p><strong className="text-ink-main">APIs & Auth:</strong> {skills.apis_auth?.join(', ')}</p>
              <p><strong className="text-ink-main">Async & Infra:</strong> {skills.async_infra?.join(', ')}</p>
              <p><strong className="text-ink-main">DevOps:</strong> {skills.devops?.join(', ')}</p>
              <p><strong className="text-ink-main">ML / Data:</strong> {skills.ml_data?.join(', ')}</p>
            </div>
          </Block>

          {certs?.length > 0 && (
            <Block icon={Award} title="Certifications">
              <ul className="space-y-1.5">
                {certs.map((c) => (
                  <li key={c} className="text-sm text-ink-secondary flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-rose-primary flex-shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </Block>
          )}
        </div>
      </div>
    </main>
  )
}

function Block({ icon: Icon, title, children }) {
  return (
    <section className="card-base">
      <div className="flex items-center gap-3 mb-4">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-rose-light text-rose-dark">
          <Icon className="h-4 w-4" />
        </span>
        <h3 className="font-display text-lg font-bold text-ink-main">{title}</h3>
      </div>
      {children}
    </section>
  )
}
