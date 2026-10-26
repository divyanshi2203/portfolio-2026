import React from 'react'
import PageContainer from '../components/layout/PageContainer'
import Seo from '../components/shared/Seo'
import Hero from '../components/home/Hero'
import CredibilityStrip from '../components/home/CredibilityStrip'
import FeaturedProjects from '../components/home/FeaturedProjects'
import FeaturedExperience from '../components/home/FeaturedExperience'
import AboutPreview from '../components/home/AboutPreview'
import ResumeCTA from '../components/home/ResumeCTA'
import ContactCTA from '../components/home/ContactCTA'
import CapabilityGrid from '../components/home/CapabilityGrid'
import SectionHeading from '../components/shared/SectionHeading'

export default function Home() {
  return (
    <PageContainer flush>
      <Seo path="/" />
      <Hero />
      <CredibilityStrip />
      <FeaturedExperience />
      <FeaturedProjects />

      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="Capabilities"
            title="A focused, backend-first toolkit."
            subtitle="Grouped by what I actually use to build, test, and ship software."
          />
          <CapabilityGrid />
        </div>
      </section>

      <AboutPreview />
      <ResumeCTA />
      <ContactCTA />
    </PageContainer>
  )
}
