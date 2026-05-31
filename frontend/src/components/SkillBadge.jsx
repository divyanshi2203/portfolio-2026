import React from 'react'
import { motion } from 'framer-motion'

export default function SkillBadge({ label, index = 0 }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      whileHover={{ y: -3 }}
      className="inline-flex items-center rounded-full border border-rose-100
                 bg-white px-4 py-2 text-sm font-medium text-ink-main
                 shadow-sm transition-all duration-200
                 hover:border-rose-primary/40 hover:bg-rose-light hover:text-rose-dark
                 hover:shadow-soft cursor-default"
    >
      {label}
    </motion.span>
  )
}
