import React from 'react'
import { useParams } from 'react-router-dom'
import PageContainer from '../components/layout/PageContainer'
import Seo from '../components/shared/Seo'
import ProjectCaseStudy from '../components/projects/ProjectCaseStudy'
import NotFound from './NotFound'
import { PROJECTS } from '../data/portfolioData'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = PROJECTS.find((p) => p.slug === slug)

  if (!project) return <NotFound />

  return (
    <PageContainer>
      <Seo
        title={project.title}
        path={`/projects/${project.slug}`}
        description={`${project.title}: ${project.value}`}
      />
      <ProjectCaseStudy project={project} />
    </PageContainer>
  )
}
