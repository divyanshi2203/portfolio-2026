import React from 'react'
import { motion } from 'framer-motion'

export default function SectionTitle({ eyebrow, title, subtitle, align = 'center' }) {
  const alignClass = align === 'left' ? 'text-left' : 'text-center mx-auto'
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className={`${alignClass} max-w-2xl mb-12`}
    >
      {eyebrow && (
        <div
          className={`mb-3 inline-flex items-center rounded-full border border-rose-100 bg-rose-light px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-rose-dark`}
        >
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-ink-main leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-ink-secondary leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
