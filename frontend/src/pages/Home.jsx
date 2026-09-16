import React from 'react'
import { motion } from 'framer-motion'
import { Download, FolderGit2, Mail, ArrowRight, Code2, Database, Server, Wrench } from 'lucide-react'
import Button from '../components/Button'

export default function Home({ profile, projectsCount = 4, skillsCount = 40, experienceCount = 2, techCount = 25 }) {
  const initial = profile?.name?.[0] || 'D'

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-gradient pt-32 pb-24 sm:pt-40 sm:pb-32">
        {/* Decorative blobs */}
        <span className="blob bg-rose-soft h-80 w-80 -top-20 -left-20" />
        <span className="blob bg-rose-primary/30 h-72 w-72 -bottom-20 right-10" />
        <span className="blob bg-rose-light h-60 w-60 top-32 right-1/2" />

        <div className="container-page relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge-rose mb-5">
              <span className="mr-1.5 h-2 w-2 rounded-full bg-rose-primary animate-pulse" />
              Available for backend & full-stack work
            </span>

            <h1 className="font-display text-4xl sm:text-6xl font-extrabold leading-[1.05] text-ink-main">
              Hi, I'm{' '}
              <span className="bg-btn-gradient bg-clip-text text-transparent">
                {profile?.name || 'Divyanshi Saini'}
              </span>
              .
            </h1>

            <h2 className="mt-4 text-lg sm:text-2xl font-semibold text-rose-dark">
              {profile?.title || 'Full-Stack Software Developer'}
            </h2>

            <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-ink-secondary">
              I build reliable web applications with Python and JavaScript,
              from clear, responsive interfaces to well-designed APIs. I am a
              Computer Science (AI/ML) graduate with experience in API testing,
              client delivery, and containerized Python workflows.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button to="/projects" icon={FolderGit2}>
                View Projects
              </Button>
              <Button href={profile?.resume_url || '/resume.pdf'} download variant="ghost" icon={Download}>
                Download Resume
              </Button>
              <Button to="/contact" variant="ghost" icon={Mail}>
                Contact Me
              </Button>
            </div>
          </motion.div>

          {/* Profile / avatar block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-btn-gradient opacity-25 blur-2xl" />
            <div className="relative rounded-[2rem] border border-rose-100 bg-white p-6 shadow-glow">
              <div className="aspect-square rounded-2xl bg-hero-gradient grid place-items-center overflow-hidden relative">
                <img
                  src="/profile.jpeg"
                  alt={profile?.name || 'Profile photo'}
                  className="absolute inset-0 h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
                <span className="font-display text-7xl sm:text-8xl font-extrabold bg-btn-gradient bg-clip-text text-transparent select-none">
                  {initial}
                </span>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <p className="font-display font-bold text-ink-main">
                    {profile?.name || 'Divyanshi Saini'}
                  </p>
                  <p className="text-xs text-ink-muted mt-0.5">
                    {profile?.location || 'Moradabad, India'}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-light px-3 py-1 text-xs font-semibold text-rose-dark">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-primary" />
                  Open to roles
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative -mt-12 z-10 container-page">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-2xl border border-rose-100 bg-white p-6 shadow-glow"
        >
          <Stat icon={FolderGit2} label="Projects" value={projectsCount} />
          <Stat icon={Code2} label="Skills" value={skillsCount} />
          <Stat icon={Server} label="Experience" value={`${experienceCount}+`} suffix="roles" />
          <Stat icon={Wrench} label="Technologies" value={`${techCount}+`} />
        </motion.div>
      </section>

      {/* HIGHLIGHT */}
      <section className="section-padding">
        <div className="container-page grid gap-8 lg:grid-cols-3">
          {[
            {
              icon: Server,
              title: 'Backend-First',
              text: 'FastAPI, Django, DRF, and Flask for request validation, authentication, and clear error handling.',
            },
            {
              icon: Database,
              title: 'Schema & Async',
              text: 'PostgreSQL schemas with composite indexes, Celery + Redis pipelines, idempotent re-indexing.',
            },
            {
              icon: Wrench,
              title: 'Shipped on Day One',
              text: 'Docker Compose, Railway, and Vercel with environment-based configuration, API documentation, and Gunicorn.',
            },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card-base card-hover"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-rose-light text-rose-dark mb-4">
                <c.icon className="h-5 w-5" />
              </span>
              <h3 className="font-display text-lg font-bold text-ink-main">{c.title}</h3>
              <p className="mt-2 text-sm text-ink-secondary leading-relaxed">{c.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button to="/about" variant="ghost" icon={ArrowRight}>
            More about me
          </Button>
        </div>
      </section>
    </main>
  )
}

function Stat({ icon: Icon, label, value, suffix }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-12 w-12 place-items-center rounded-xl bg-rose-light text-rose-dark">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="font-display text-2xl font-bold text-ink-main leading-none">
          {value}
        </p>
        <p className="text-xs text-ink-muted mt-1">
          {label}{suffix ? ` · ${suffix}` : ''}
        </p>
      </div>
    </div>
  )
}
