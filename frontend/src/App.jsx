import React, { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import Home from './pages/Home'
import Work from './pages/Work'
import ProjectDetail from './pages/ProjectDetail'
import Experience from './pages/Experience'
import About from './pages/About'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  const location = useLocation()
  const mainRef = useRef(null)

  // Scroll to top and move focus to the main region on every route change.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
    const el = document.getElementById('main-content')
    if (el) {
      // Focus without scrolling the page a second time.
      el.focus({ preventScroll: true })
    }
  }, [location.pathname])

  return (
    <div className="flex min-h-screen flex-col bg-surface-page">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <Navbar />

      <div className="flex-1" ref={mainRef}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  )
}
