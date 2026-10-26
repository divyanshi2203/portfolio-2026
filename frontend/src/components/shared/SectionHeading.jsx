import React from 'react'
import { motion } from 'framer-motion'

/**
 * SectionHeading: eyebrow, title, and optional subtitle.
 * `align` controls text alignment. Pass `id` to anchor the section.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  id,
}) {
  const alignCls =
    align === 'left' ? 'text-left' : 'text-center mx-auto'

  return (
    <motion.header
      id={id}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4 }}
      className={`mb-10 max-w-2xl ${alignCls}`}
    >
      {eyebrow && <span className="eyebrow mb-3">{eyebrow}</span>}
      <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-ink-main leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-ink-secondary leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.header>
  )
}
