import React from 'react'
import { ArrowUpRight } from 'lucide-react'

/**
 * External link with safe rel, descriptive aria-label, and an external icon.
 */
export default function ExternalLink({
  href,
  label,
  icon: Icon,
  showArrow = true,
  className = '',
  children,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`inline-flex items-center gap-1.5 text-sm font-semibold text-ink-secondary transition-colors hover:text-rose-wine ${className}`}
    >
      {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
      <span>{children}</span>
      {showArrow && <ArrowUpRight className="h-4 w-4" aria-hidden="true" />}
    </a>
  )
}
