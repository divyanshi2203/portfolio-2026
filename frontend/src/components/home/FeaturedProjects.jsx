import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PROJECTS } from '../../data/portfolioData'
import SectionHeading from '../shared/SectionHeading'
import ProjectCard from '../projects/ProjectCard'

export default function FeaturedProjects() {
  return (
    <section className="section-padding bg-surface-soft/50">
      <div className="container-page">
        <SectionHeading
          eyebrow="Selected work"
          title="Three projects I have shipped."
          subtitle="A healthcare inference platform, a containerized search API, and an AI research assistant. Each one solves a real problem end to end."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/work"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-rose-wine hover:gap-2.5 transition-all"
          >
            See all work and case studies{' '}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
