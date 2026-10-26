import { useEffect } from 'react'
import { SEO } from '../../data/portfolioData'

/**
 * Seo updates the document title and key meta/OG/canonical tags per page.
 * Lightweight, no external dependency. Pass page-specific values; anything
 * omitted falls back to the site defaults.
 */
function setMeta(selector, attr, value) {
  if (!value) return
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    const [, key, val] = selector.match(/\[(.+?)="(.+?)"\]/) || []
    if (key && val) el.setAttribute(key, val)
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
}

function setCanonical(url) {
  if (!url) return
  let el = document.head.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', url)
}

export default function Seo({ title, description, path = '/', image }) {
  const fullTitle = title ? `${title} | ${SEO.siteName}` : SEO.title
  const desc = description || SEO.description
  const canonical = `${SEO.domain}${path === '/' ? '' : path}`
  const ogImage = `${SEO.domain}${image || SEO.ogImage}`

  useEffect(() => {
    document.title = fullTitle
    setMeta('meta[name="description"]', 'content', desc)
    setMeta('meta[property="og:title"]', 'content', fullTitle)
    setMeta('meta[property="og:description"]', 'content', desc)
    setMeta('meta[property="og:url"]', 'content', canonical)
    setMeta('meta[property="og:image"]', 'content', ogImage)
    setMeta('meta[name="twitter:title"]', 'content', fullTitle)
    setMeta('meta[name="twitter:description"]', 'content', desc)
    setMeta('meta[name="twitter:image"]', 'content', ogImage)
    setCanonical(canonical)
  }, [fullTitle, desc, canonical, ogImage])

  return null
}
