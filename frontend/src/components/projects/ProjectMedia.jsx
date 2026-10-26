import React from 'react'
import ArchitectureDiagram from './ArchitectureDiagram'

/**
 * Renders either a project screenshot or the architecture diagram,
 * inside a consistent framed surface. Screenshots keep their own
 * (darker) theme and sit on a neutral mount so they read cleanly.
 */
export default function ProjectMedia({ project, priority = false }) {
  if (project.diagram) {
    return (
      <div className="rounded-xl border border-line-soft bg-surface-soft p-4 sm:p-6">
        <ArchitectureDiagram />
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-xl border border-line-soft bg-ink-main/5">
      <img
        src={project.image}
        alt={project.imageAlt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className="block w-full h-auto"
      />
    </div>
  )
}
