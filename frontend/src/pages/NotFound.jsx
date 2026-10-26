import React from 'react'
import PageContainer from '../components/layout/PageContainer'
import Seo from '../components/shared/Seo'
import Button from '../components/shared/Button'
import { Home as HomeIcon } from 'lucide-react'

export default function NotFound() {
  return (
    <PageContainer>
      <Seo title="Page not found" path="/404" />
      <div className="container-page flex min-h-[40vh] flex-col items-center justify-center text-center">
        <p className="font-display text-6xl font-extrabold text-rose-primary">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-ink-main">
          This page could not be found.
        </h1>
        <p className="mt-2 max-w-md text-sm text-ink-secondary">
          The link may be broken, or the page may have moved. Let us get you back on
          track.
        </p>
        <div className="mt-6">
          <Button to="/" icon={HomeIcon}>
            Back to Home
          </Button>
        </div>
      </div>
    </PageContainer>
  )
}
