import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

import api from './api/axios'
import { PROFILE as FALLBACK_PROFILE, PROJECTS as FALLBACK_PROJECTS, SKILLS as FALLBACK_SKILLS, EXPERIENCE as FALLBACK_EXP } from './data/fallbackData'

export default function App() {
  const location = useLocation()
  const [profile, setProfile] = useState(FALLBACK_PROFILE)
  const [counts, setCounts] = useState({
    projects: FALLBACK_PROJECTS.length,
    skills: Object.values(FALLBACK_SKILLS).reduce((a, b) => a + b.length, 0),
    experience: FALLBACK_EXP.length,
    tech: 25,
  })

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [location.pathname])

  useEffect(() => {
    api
      .get('/profile')
      .then((r) => setProfile(r.data || FALLBACK_PROFILE))
      .catch(() => setProfile(FALLBACK_PROFILE))

    Promise.all([
      api.get('/projects').catch(() => null),
      api.get('/skills').catch(() => null),
      api.get('/experience').catch(() => null),
    ]).then(([p, s, e]) => {
      const skillData = s?.data || FALLBACK_SKILLS
      const skillCount = Object.values(skillData).reduce(
        (a, b) => a + (Array.isArray(b) ? b.length : 0),
        0
      )
      setCounts({
        projects: p?.data?.length || FALLBACK_PROJECTS.length,
        skills: skillCount,
        experience: e?.data?.length || FALLBACK_EXP.length,
        tech: skillCount,
      })
    })
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-bg-main">
      <Navbar />

      <div className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <Routes location={location}>
              <Route
                path="/"
                element={
                  <Home
                    profile={profile}
                    projectsCount={counts.projects}
                    skillsCount={counts.skills}
                    experienceCount={counts.experience}
                    techCount={counts.tech}
                  />
                }
              />
              <Route path="/about" element={<About profile={profile} />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/resume" element={<Resume profile={profile} />} />
              <Route path="/contact" element={<Contact profile={profile} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </div>

      <Footer profile={profile} />
    </div>
  )
}
