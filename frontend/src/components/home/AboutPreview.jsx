import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ABOUT, EDUCATION } from '../../data/portfolioData'

export default function AboutPreview() {
  const edu = EDUCATION[0]

  return (
    <section className="section-padding bg-white">
      <div className="container-page grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <span className="eyebrow mb-4">About</span>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-ink-main leading-tight">
            {ABOUT.heading}
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-ink-secondary">
            {ABOUT.paragraphs[0]}
          </p>
          <Link
            to="/about"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-rose-wine hover:gap-2.5 transition-all"
          >
            Read more about me <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="card-base flex items-start gap-4"
        >
          <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-wine-gradient text-white shadow-soft">
            <GraduationCap className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h3 className="font-display font-bold text-ink-main">{edu.degree}</h3>
            <p className="mt-1 text-sm font-medium text-rose-wine">{edu.institution}</p>
            <p className="mt-1 text-xs text-ink-muted">
              {edu.duration} | {edu.details}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
