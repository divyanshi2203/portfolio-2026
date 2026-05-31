import React from 'react'
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import ContactForm from '../components/ContactForm'
import { PROFILE as FALLBACK } from '../data/fallbackData'

export default function Contact({ profile }) {
  const p = profile || FALLBACK

  const items = [
    p.email && { icon: Mail, label: 'Email', value: p.email, href: `mailto:${p.email}` },
    p.phone && { icon: Phone, label: 'Phone', value: p.phone, href: `tel:${p.phone.replace(/\s+/g, '')}` },
    p.github && { icon: Github, label: 'GitHub', value: p.github.replace('https://', ''), href: p.github },
    p.linkedin && { icon: Linkedin, label: 'LinkedIn', value: p.linkedin.replace('https://', ''), href: p.linkedin },
    p.location && { icon: MapPin, label: 'Location', value: p.location, href: null },
  ].filter(Boolean)

  return (
    <main className="pt-28 pb-24">
      <div className="container-page">
        <SectionTitle
          eyebrow="Contact"
          title="Let's build something together."
          subtitle="Got a backend, API, or full-stack project? Drop a message — I usually reply within a day."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <h3 className="font-display text-xl font-bold text-ink-main mb-5">
              Reach me directly
            </h3>
            <ul className="space-y-3">
              {items.map((it) => (
                <li key={it.label} className="card-base flex items-center gap-4 !p-4">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-btn-gradient text-white shadow-soft">
                    <it.icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-wider text-rose-dark font-semibold">{it.label}</p>
                    {it.href ? (
                      <a
                        href={it.href}
                        target={it.href.startsWith('http') ? '_blank' : undefined}
                        rel={it.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-sm text-ink-main hover:text-rose-dark transition-colors break-all"
                      >
                        {it.value}
                      </a>
                    ) : (
                      <p className="text-sm text-ink-main">{it.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold text-ink-main mb-5">
              Send me a message
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  )
}
