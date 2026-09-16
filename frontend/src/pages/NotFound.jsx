import React from 'react'
import { motion } from 'framer-motion'
import { Home as HomeIcon } from 'lucide-react'
import Button from '../components/Button'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-hero-gradient pt-24 pb-24 relative overflow-hidden">
      <span className="blob bg-rose-soft h-80 w-80 -top-10 -left-10" />
      <span className="blob bg-rose-primary/30 h-72 w-72 -bottom-10 -right-10" />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative text-center container-page"
      >
        <p className="font-display text-[7rem] sm:text-[10rem] font-extrabold leading-none bg-btn-gradient bg-clip-text text-transparent">
          404
        </p>
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-ink-main">
          This page took a wrong turn.
        </h1>
        <p className="mt-3 text-ink-secondary max-w-md mx-auto">
          The route you're looking for doesn't exist, but the rest of the
          portfolio is just one click away.
        </p>
        <div className="mt-7">
          <Button to="/" icon={HomeIcon}>Back to Home</Button>
        </div>
      </motion.div>
    </main>
  )
}
