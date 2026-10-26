import React from 'react'
import PageContainer from '../components/layout/PageContainer'
import Seo from '../components/shared/Seo'
import SectionHeading from '../components/shared/SectionHeading'
import ExperienceTimeline from '../components/experience/ExperienceTimeline'
import { EXPERIENCE } from '../data/portfolioData'

export default function Experience() {
  return (
    <PageContainer>
      <Seo
        title="Experience"
        path="/experience"
        description="Divyanshi Saini's experience: Python developer intern at SaaSBanana Technologies, AI coding benchmark contribution at Handshake AI and Outlier AI, freelance full-stack delivery, and a backend internship at ANV Tech Solutions."
      />
      <div className="container-page max-w-3xl">
        <SectionHeading
          align="left"
          eyebrow="Experience"
          title="Building, testing, and shipping."
          subtitle="Backend development and API testing today, with AI coding benchmark work and full-stack delivery alongside it."
        />
        <ExperienceTimeline items={EXPERIENCE} />
      </div>
    </PageContainer>
  )
}
