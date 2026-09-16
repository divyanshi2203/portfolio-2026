import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin, Sparkles, ArrowUpRight } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { PROFILE as FALLBACK } from '../data/fallbackData'

export default function Contact({ profile }) {
  const p = profile || FALLBACK

  const links = [
    p.email && { icon: Mail, label: 'Email', value: p.email, href: `mailto:${p.email}` },
    p.linkedin && { icon: Linkedin, label: 'LinkedIn', value: p.linkedin.replace('https://', ''), href: p.linkedin },
    p.github && { icon: Github, label: 'GitHub', value: p.github.replace('https://', ''), href: p.github },
    p.location && { icon: MapPin, label: 'Location', value: p.location, href: null },
  ].filter(Boolean)

  return (
    <main className="pt-28 pb-24 relative overflow-hidden">
      {/* Decorative blobs */}
      <span className="blob bg-rose-soft h-72 w-72 -top-10 -left-20" />
      <span className="blob bg-rose-primary/30 h-72 w-72 bottom-10 -right-20" />

      <div className="container-page relative">
        <SectionTitle
          eyebrow="Get in touch"
          title="Let's connect."
          subtitle="Have a software, API, or full-stack project in mind? My inbox is open, and LinkedIn messages are always welcome."
        />

        {/* Hero CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative mx-auto max-w-3xl rounded-[2rem] bg-btn-gradient p-[2px] shadow-glow"
        >
          <div className="rounded-[1.92rem] bg-white p-8 sm:p-12 text-center">
            <span className="inline-grid h-14 w-14 place-items-center rounded-2xl bg-btn-gradient text-white shadow-soft mb-5">
              <Sparkles className="h-6 w-6" />
            </span>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink-main">
              I'd love to hear from you.
            </h3>
            <p className="mt-3 text-sm sm:text-base text-ink-secondary leading-relaxed max-w-xl mx-auto">
              The fastest way to reach me is over email. For a quick hello,
              referral, or development question, LinkedIn works just as
              well. I read everything and reply as soon as I can.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              {p.email && (
                <a
                  href={`mailto:${p.email}`}
                  className="btn-primary w-full sm:w-auto"
                >
                  <Mail className="h-4 w-4" /> Email Me
                </a>
              )}
              {p.linkedin && (
                <a
                  href={p.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost w-full sm:w-auto"
                >
                  <Linkedin className="h-4 w-4" /> Connect on LinkedIn
                </a>
              )}
            </div>

            <p className="mt-6 text-xs uppercase tracking-[0.18em] text-rose-dark font-semibold">
              Looking forward to hearing from you
            </p>
          </div>
        </motion.div>

        {/* Contact link cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 max-w-3xl mx-auto">
          {links.map((it, i) => (
            <motion.a
              key={it.label}
              href={it.href || undefined}
              target={it.href && it.href.startsWith('http') ? '_blank' : undefined}
              rel={it.href && it.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`card-base flex items-center gap-4 group ${
                it.href ? 'card-hover cursor-pointer' : 'cursor-default'
              }`}
            >
              <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-rose-light text-rose-dark group-hover:bg-btn-gradient group-hover:text-white transition-all">
                <it.icon className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-xs uppercase tracking-wider text-rose-dark font-semibold">
                  {it.label}
                </p>
                <p className="text-sm text-ink-main truncate group-hover:text-rose-dark transition-colors">
                  {it.value}
                </p>
              </div>
              {it.href && (
                <ArrowUpRight className="h-4 w-4 text-ink-muted group-hover:text-rose-dark group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </main>
  )
}
