import React from 'react'
import { motion } from 'framer-motion'
import { Download, ExternalLink as ExternalIcon } from 'lucide-react'
import PageContainer from '../components/layout/PageContainer'
import Seo from '../components/shared/Seo'
import SectionHeading from '../components/shared/SectionHeading'
import Button from '../components/shared/Button'
import { PROFILE } from '../data/portfolioData'

export default function Resume() {
  return (
    <PageContainer>
      <Seo
        title="Resume"
        path="/resume"
        description="Download or view the one-page resume of Divyanshi Saini, Python backend and software developer."
      />
      <div className="container-page max-w-3xl">
        <SectionHeading
          eyebrow="Resume"
          title="Want the concise version?"
          subtitle="A one-page PDF with the latest backend, internship, AI training, and project experience. Updated October 2026."
        />

        <div className="flex flex-wrap justify-center gap-3">
          <Button
            href={PROFILE.resumeUrl}
            download
            downloadName={PROFILE.resumeDownloadName}
            icon={Download}
          >
            Download PDF
          </Button>
          <Button href={PROFILE.resumeUrl} variant="ghost" icon={ExternalIcon}>
            View Resume
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mt-10 overflow-hidden rounded-2xl border border-line-soft shadow-card"
        >
          <img
            src="/resume-preview.webp"
            alt="First page of Divyanshi Saini's resume"
            loading="lazy"
            decoding="async"
            className="block w-full h-auto"
          />
        </motion.div>

        <p className="mt-6 text-center text-xs text-ink-muted">
          Prefer the full picture? The Work and Experience pages cover each project
          and role in more depth.
        </p>
      </div>
    </PageContainer>
  )
}
