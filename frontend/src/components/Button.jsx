import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Unified button — supports anchor (href), router link (to), or button (onClick).
 * Variants: "primary" (rose gradient) | "ghost" (white w/ rose border)
 */
export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  download,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  icon: Icon,
  ...rest
}) {
  const classes =
    variant === 'ghost' ? 'btn-ghost' : 'btn-primary'
  const merged = `${classes} ${disabled ? 'opacity-60 cursor-not-allowed hover:translate-y-0' : ''} ${className}`

  const content = (
    <>
      {Icon && <Icon className="h-4 w-4" />}
      {children}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={merged} {...rest}>
        {content}
      </Link>
    )
  }
  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={merged}
        {...rest}
      >
        {content}
      </a>
    )
  }
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={merged}
      {...rest}
    >
      {content}
    </button>
  )
}
