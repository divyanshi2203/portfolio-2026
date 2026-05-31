import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, X, Sparkles } from 'lucide-react'

export default function ProjectCard({ project, index = 0 }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, delay: index * 0.05 }}
        className="card-base card-hover flex flex-col h-full"
      >
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-display text-xl font-bold text-ink-main">
            {project.title}
          </h3>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-rose-light text-rose-dark">
            <Sparkles className="h-4 w-4" />
          </span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-ink-secondary flex-1">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech_stack.slice(0, 5).map((t) => (
            <span key={t} className="badge-rose">{t}</span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            onClick={() => setOpen(true)}
            className="btn-primary text-xs px-5 py-2"
          >
            View Details
          </button>
          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-secondary hover:text-rose-dark transition-colors"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          )}
          {project.live_url && (
            <a
              href={project.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-secondary hover:text-rose-dark transition-colors"
            >
              <ExternalLink className="h-4 w-4" /> Live Demo
            </a>
          )}
        </div>
      </motion.article>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-rose-dark/30 backdrop-blur-sm p-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.94, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.94, y: 20, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl bg-white p-7 sm:p-8 shadow-glow"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute top-4 right-4 grid h-9 w-9 place-items-center rounded-full bg-rose-light text-rose-dark hover:bg-rose-soft transition-colors"
              >
                <X className="h-4 w-4" />
              </button>

              <h3 className="font-display text-2xl font-bold text-ink-main pr-10">
                {project.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech_stack.map((t) => (
                  <span key={t} className="badge-rose">{t}</span>
                ))}
              </div>

              {project.problem && (
                <Section title="Problem Solved" body={project.problem} />
              )}
              {project.role && (
                <Section title="My Role" body={project.role} />
              )}

              {project.features?.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-rose-dark mb-2">
                    Main Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((f, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm text-ink-secondary leading-relaxed"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-rose-primary flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-7 flex flex-wrap gap-3">
                {project.github_url && (
                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost text-xs px-5 py-2"
                  >
                    <Github className="h-4 w-4" /> View on GitHub
                  </a>
                )}
                {project.live_url && (
                  <a
                    href={project.live_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs px-5 py-2"
                  >
                    <ExternalLink className="h-4 w-4" /> Open Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function Section({ title, body }) {
  return (
    <div className="mt-6">
      <h4 className="text-xs font-semibold uppercase tracking-wider text-rose-dark mb-1.5">
        {title}
      </h4>
      <p className="text-sm text-ink-secondary leading-relaxed">{body}</p>
    </div>
  )
}
