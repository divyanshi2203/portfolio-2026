import React from 'react'
import { motion } from 'framer-motion'
import { Download, ExternalLink as ExternalIcon } from 'lucide-react'
import Button from '../shared/Button'
import { PROFILE } from '../../data/portfolioData'

export default function ResumeCTA() {
  return (
    <section className="section-padding bg-surface-soft/50">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center rounded-2xl border border-line-soft bg-white p-6 sm:p-10 shadow-card">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="order-2 lg:order-1 overflow-hidden rounded-xl border border-line-soft shadow-soft"
          >
            <img
              src="/resume-preview.webp"
              alt="Preview of the first page of Divyanshi Saini's resume"
              loading="lazy"
              decoding="async"
              className="block w-full h-auto"
            />
          </motion.div>

          <div className="order-1 lg:order-2">
            <span className="eyebrow mb-4">Resume</span>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-ink-main">
              Want the concise version?
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-ink-secondary">
              A one-page PDF with the latest backend, internship, AI training, and
              project experience. Updated October 2026.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
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
          </div>
        </div>
      </div>
    </section>
  )
}
