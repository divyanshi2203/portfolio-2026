import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Button renders:
 *  - an internal router link when `to` is set
 *  - an anchor when `href` is set (supports download)
 *  - a native button otherwise
 */
export default function Button({
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  icon: Icon,
  iconRight = false,
  download = false,
  downloadName,
  className = '',
  children,
  ...rest
}) {
  const cls = `${variant === 'ghost' ? 'btn-ghost' : 'btn-primary'} ${className}`

  const content = (
    <>
      {Icon && !iconRight && <Icon className="h-4 w-4" aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconRight && <Icon className="h-4 w-4" aria-hidden="true" />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {content}
      </Link>
    )
  }

  if (href) {
    const external = href.startsWith('http')
    return (
      <a
        href={href}
        className={cls}
        download={download ? downloadName || true : undefined}
        target={external && !download ? '_blank' : undefined}
        rel={external && !download ? 'noopener noreferrer' : undefined}
        {...rest}
      >
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={cls} {...rest}>
      {content}
    </button>
  )
}
