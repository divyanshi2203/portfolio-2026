import React from 'react'
import { Link } from 'react-router-dom'
import { Github, ExternalLink as ExternalIcon, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import ProjectMedia from './ProjectMedia'
import TechTag from '../shared/TechTag'

/**
 * Project card used in the Work grid. The whole card links to the
 * case-study page; live/repo links are separate real links.
 */
export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="card-base card-hover flex flex-col h-full"
    >
      <ProjectMedia project={project} priority={index === 0} />

      <h3 className="mt-5 font-display text-xl font-bold text-ink-main">
        {project.title}
      </h3>
      <p className="mt-1 text-sm font-medium text-rose-wine">
        {project.positioning}
      </p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-secondary">
        {project.value}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.slice(0, 5).map((t) => (
          <TechTag key={t}>{t}</TechTag>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-rose-wine hover:gap-2.5 transition-all"
        >
          Case study <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} live demo, opens in a new tab`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-secondary hover:text-rose-wine transition-colors"
          >
            <ExternalIcon className="h-4 w-4" aria-hidden="true" /> Live
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} source code on GitHub, opens in a new tab`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-secondary hover:text-rose-wine transition-colors"
          >
            <Github className="h-4 w-4" aria-hidden="true" /> Code
          </a>
        )}
      </div>
    </motion.article>
  )
}
