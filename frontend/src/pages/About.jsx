import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'
import PageContainer from '../components/layout/PageContainer'
import Seo from '../components/shared/Seo'
import SectionHeading from '../components/shared/SectionHeading'
import CapabilityGrid from '../components/home/CapabilityGrid'
import { ABOUT, EDUCATION, CERTIFICATIONS } from '../data/portfolioData'

export default function About() {
  return (
    <PageContainer>
      <Seo
        title="About"
        path="/about"
        description="About Divyanshi Saini, a Python backend and software developer and Computer Science (AI/ML) graduate with backend internship experience, testing and debugging habits, and AI coding evaluation work."
      />
      <div className="container-page">
        <SectionHeading
          eyebrow="About me"
          title={ABOUT.heading}
          subtitle="Python backend developer, Computer Science (AI/ML) graduate, and a careful tester of the systems I ship."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-3xl space-y-4"
        >
          {ABOUT.paragraphs.map((p, i) => (
            <p key={i} className="text-sm sm:text-base leading-relaxed text-ink-secondary">
              {p}
            </p>
          ))}
        </motion.div>

        {/* Education */}
        <div className="mx-auto mt-14 max-w-3xl">
          <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-bold text-ink-main">
            <GraduationCap className="h-5 w-5 text-rose-primary" aria-hidden="true" />
            Education
          </h2>
          {EDUCATION.map((e, i) => (
            <div key={i} className="card-base">
              <h3 className="font-display font-bold text-ink-main">{e.degree}</h3>
              <p className="mt-1 text-sm font-medium text-rose-wine">{e.institution}</p>
              <p className="mt-1 text-xs text-ink-muted">
                {e.duration} | {e.details}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mx-auto mt-10 max-w-3xl">
          <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-bold text-ink-main">
            <Award className="h-5 w-5 text-rose-primary" aria-hidden="true" />
            Certifications and awards
          </h2>
          <div className="flex flex-wrap gap-2">
            {CERTIFICATIONS.map((c) => (
              <span key={c} className="tech-tag">
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Skills / capabilities */}
        <div className="mt-16">
          <SectionHeading
            eyebrow="Capabilities"
            title="Tools I reach for, grouped by purpose."
          />
          <CapabilityGrid />
        </div>
      </div>
    </PageContainer>
  )
}
