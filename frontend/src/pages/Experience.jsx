import React, { useEffect, useState } from 'react'
import api from '../api/axios'
import { EXPERIENCE as FALLBACK } from '../data/fallbackData'
import SectionTitle from '../components/SectionTitle'
import ExperienceTimeline from '../components/ExperienceTimeline'

export default function Experience() {
  const [items, setItems] = useState(FALLBACK)

  useEffect(() => {
    api
      .get('/experience')
      .then((r) => setItems(r.data?.length ? r.data : FALLBACK))
      .catch(() => setItems(FALLBACK))
  }, [])

  return (
    <main className="pt-28 pb-24 bg-bg-section/40">
      <div className="container-page">
        <SectionTitle
          eyebrow="Experience"
          title="Internship, freelance, shipping."
          subtitle="A short but focused track — backend internship at ANV Tech Solutions, plus an ongoing freelance practice delivering full backend systems."
        />

        <ExperienceTimeline items={items} />
      </div>
    </main>
  )
}
