import React from 'react'

/**
 * PageContainer wraps a routed page. It provides the main landmark,
 * top spacing to clear the fixed navbar, and consistent bottom padding.
 * Pass `flush` for pages (like Home) whose first section owns its own top space.
 */
export default function PageContainer({ children, flush = false, className = '' }) {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className={`${flush ? '' : 'pt-28 pb-20'} outline-none ${className}`}
    >
      {children}
    </main>
  )
}
