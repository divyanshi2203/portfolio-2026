import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Github, ExternalLink as ExternalIcon } from 'lucide-react'
import ProjectMedia from './ProjectMedia'
import TechTag from '../shared/TechTag'
import Button from '../shared/Button'

function Block({ title, children }) {
  return (
    <section className="mt-8">
      <h2 className="text-xs font-semibold uppercase tracking-wider text-rose-wine">
        {title}
      </h2>
      <div className="mt-2 text-sm sm:text-base leading-relaxed text-ink-secondary">
        {children}
      </div>
    </section>
  )
}

export default function ProjectCaseStudy({ project }) {
  return (
    <div className="container-page max-w-3xl">
      <Link
        to="/work"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-secondary hover:text-rose-wine transition-colors"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to work
      </Link>

      <header className="mt-6">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-main">
          {project.title}
        </h1>
        <p className="mt-2 text-base font-medium text-rose-wine">
          {project.positioning}
        </p>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-ink-secondary">
          {project.value}
        </p>
      </header>

      <div className="mt-8">
        <ProjectMedia project={project} priority />
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.liveUrl && (
          <Button href={project.liveUrl} icon={ExternalIcon}>
            Open Live Demo
          </Button>
        )}
        {project.repoUrl && (
          <Button href={project.repoUrl} variant="ghost" icon={Github}>
            View Source
          </Button>
        )}
      </div>

      <Block title="Problem">{project.problem}</Block>
      <Block title="My contribution">{project.contribution}</Block>
      <Block title="Main technical decision">{project.keyDecision}</Block>

      <Block title="Main features">
        <ul className="mt-1 space-y-2">
          {project.features.map((f, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-primary" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </Block>

      <Block title="Technology stack">
        <div className="mt-1 flex flex-wrap gap-2">
          {project.techStack.map((t) => (
            <TechTag key={t}>{t}</TechTag>
          ))}
        </div>
      </Block>
    </div>
  )
}
