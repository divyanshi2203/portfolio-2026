import React, { useEffect, useState } from 'react'
import api from '../api/axios'
import { PROJECTS as FALLBACK } from '../data/fallbackData'
import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const [projects, setProjects] = useState(FALLBACK)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api
      .get('/projects')
      .then((r) => setProjects(r.data?.length ? r.data : FALLBACK))
      .catch(() => setProjects(FALLBACK))
      .finally(() => setLoading(false))
  }, [])

  return (
    <main className="pt-28 pb-24">
      <div className="container-page">
        <SectionTitle
          eyebrow="Projects"
          title="A few things I have shipped."
          subtitle="From a CNN-backed healthcare API to a containerized Django indexer — each project here is built to ship, not just to demo."
        />

        {loading ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="card-base h-64 animate-pulse bg-gradient-to-br from-white to-rose-light"
              />
            ))}
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
