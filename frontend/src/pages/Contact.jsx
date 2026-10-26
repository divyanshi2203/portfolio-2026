import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin, ArrowUpRight } from 'lucide-react'
import PageContainer from '../components/layout/PageContainer'
import Seo from '../components/shared/Seo'
import SectionHeading from '../components/shared/SectionHeading'
import { PROFILE } from '../data/portfolioData'

export default function Contact() {
  const links = [
    {
      icon: Mail,
      label: 'Email',
      value: PROFILE.email,
      href: `mailto:${PROFILE.email}`,
      external: false,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/divyanshi-saini',
      href: PROFILE.linkedin,
      external: true,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: PROFILE.github.replace('https://', ''),
      href: PROFILE.github,
      external: true,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: PROFILE.location,
      href: null,
      external: false,
    },
  ]

  return (
    <PageContainer>
      <Seo
        title="Contact"
        path="/contact"
        description="Contact Divyanshi Saini, Python backend and software developer, by email or LinkedIn."
      />
      <div className="container-page">
        <SectionHeading
          eyebrow="Get in touch"
          title="Looking for a Python backend or software developer? Let us talk."
          subtitle="The fastest way to reach me is email or LinkedIn. I read everything and reply as soon as I can."
        />

        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          {links.map((it, i) => {
            const Tag = it.href ? 'a' : 'div'
            return (
              <motion.div
                key={it.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Tag
                  href={it.href || undefined}
                  target={it.external ? '_blank' : undefined}
                  rel={it.external ? 'noopener noreferrer' : undefined}
                  aria-label={
                    it.external ? `${it.label}, opens in a new tab` : undefined
                  }
                  className={`card-base flex items-center gap-4 ${
                    it.href ? 'card-hover cursor-pointer' : ''
                  }`}
                >
                  <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-surface-soft text-rose-wine">
                    <it.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-rose-wine">
                      {it.label}
                    </p>
                    <p className="truncate text-sm text-ink-main">{it.value}</p>
                  </div>
                  {it.href && (
                    <ArrowUpRight
                      className="h-4 w-4 text-ink-muted"
                      aria-hidden="true"
                    />
                  )}
                </Tag>
              </motion.div>
            )
          })}
        </div>
      </div>
    </PageContainer>
  )
}
