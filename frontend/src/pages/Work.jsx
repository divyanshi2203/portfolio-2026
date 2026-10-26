import React from 'react'
import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import PageContainer from '../components/layout/PageContainer'
import Seo from '../components/shared/Seo'
import SectionHeading from '../components/shared/SectionHeading'
import ProjectCard from '../components/projects/ProjectCard'
import TechTag from '../components/shared/TechTag'
import { PROJECTS, EARLIER_WORK, PROFILE } from '../data/portfolioData'

export default function Work() {
  return (
    <PageContainer>
      <Seo
        title="Work"
        path="/work"
        description="Selected software projects by Divyanshi Saini: an AI healthcare inference platform, a containerized Django search API, and an AI medical research assistant."
      />
      <div className="container-page">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects built to solve real problems."
          subtitle="Three flagship projects, each shipped end to end. Open any case study for the problem, my contribution, and the main technical decision."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* Earlier work, intentionally smaller */}
        {EARLIER_WORK.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display text-lg font-bold text-ink-main">
              Earlier work
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {EARLIER_WORK.map((w, i) => (
                <motion.div
                  key={w.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="rounded-xl border border-line-soft bg-white p-5"
                >
                  <h3 className="font-semibold text-ink-main">{w.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-secondary">
                    {w.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {w.techStack.map((t) => (
                      <TechTag key={t}>{t}</TechTag>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Global GitHub profile link */}
        <div className="mt-14 flex justify-center">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View full GitHub profile, opens in a new tab"
            className="btn-ghost"
          >
            <Github className="h-4 w-4" aria-hidden="true" /> View GitHub Profile
          </a>
        </div>
      </div>
    </PageContainer>
  )
}
