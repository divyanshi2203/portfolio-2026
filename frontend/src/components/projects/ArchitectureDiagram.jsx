import React from 'react'

/**
 * Theme-aware architecture diagram for the Paragraph Indexer API.
 * Pure inline SVG so it stays crisp, needs no image asset, and reads
 * clearly on the light rose surface. Decorative detail is aria-hidden;
 * the figure carries an accessible description.
 */
export default function ArchitectureDiagram() {
  const box = {
    fill: '#FFFFFF',
    stroke: '#FBCFD8',
  }
  const label = { fill: '#191B23', fontWeight: 600 }
  const sub = { fill: '#737B8C' }
  const flow = '#E11D48'
  const flowMuted = '#BE123C'

  return (
    <figure className="w-full">
      <svg
        viewBox="0 0 720 380"
        role="img"
        aria-label="Request flow for the Paragraph Indexer API. A client calls the Django REST API, which is JWT authenticated and runs under Gunicorn. The API reads ranked word counts from PostgreSQL, and enqueues indexing jobs to Redis. A Celery worker consumes the queue and writes the index back to PostgreSQL. The API, Redis, worker, and database run as Docker services."
        className="w-full h-auto"
        fontFamily="Inter, system-ui, sans-serif"
      >
        {/* Docker boundary */}
        <rect
          x="20"
          y="70"
          width="680"
          height="290"
          rx="16"
          fill="#FFF1F2"
          stroke="#FBCFD8"
          strokeDasharray="6 6"
          aria-hidden="true"
        />
        <text x="36" y="94" fontSize="12" fill="#881337" fontWeight="700" aria-hidden="true">
          DOCKER COMPOSE STACK
        </text>

        {/* Client */}
        <g aria-hidden="true">
          <rect x="40" y="150" width="130" height="70" rx="12" fill={box.fill} stroke={box.stroke} />
          <text x="105" y="182" fontSize="14" textAnchor="middle" style={label}>
            Client
          </text>
          <text x="105" y="200" fontSize="11" textAnchor="middle" style={sub}>
            REST requests
          </text>
        </g>

        {/* API */}
        <g aria-hidden="true">
          <rect x="250" y="130" width="170" height="110" rx="12" fill={box.fill} stroke="#E11D48" strokeWidth="1.5" />
          <text x="335" y="160" fontSize="14" textAnchor="middle" style={label}>
            Django REST API
          </text>
          <text x="335" y="180" fontSize="11" textAnchor="middle" style={sub}>
            JWT auth (SimpleJWT)
          </text>
          <text x="335" y="197" fontSize="11" textAnchor="middle" style={sub}>
            Gunicorn
          </text>
          <text x="335" y="214" fontSize="11" textAnchor="middle" style={sub}>
            OpenAPI docs
          </text>
        </g>

        {/* PostgreSQL */}
        <g aria-hidden="true">
          <rect x="500" y="130" width="180" height="70" rx="12" fill={box.fill} stroke={box.stroke} />
          <text x="590" y="160" fontSize="14" textAnchor="middle" style={label}>
            PostgreSQL
          </text>
          <text x="590" y="180" fontSize="11" textAnchor="middle" style={sub}>
            composite index (user, word, count)
          </text>
        </g>

        {/* Redis */}
        <g aria-hidden="true">
          <rect x="250" y="285" width="170" height="60" rx="12" fill={box.fill} stroke={box.stroke} />
          <text x="335" y="312" fontSize="14" textAnchor="middle" style={label}>
            Redis
          </text>
          <text x="335" y="330" fontSize="11" textAnchor="middle" style={sub}>
            task queue
          </text>
        </g>

        {/* Celery worker */}
        <g aria-hidden="true">
          <rect x="500" y="275" width="180" height="70" rx="12" fill={box.fill} stroke={box.stroke} />
          <text x="590" y="303" fontSize="14" textAnchor="middle" style={label}>
            Celery worker
          </text>
          <text x="590" y="322" fontSize="11" textAnchor="middle" style={sub}>
            async indexing + beat
          </text>
        </g>

        {/* Arrows */}
        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L8,3 L0,6 Z" fill={flow} />
          </marker>
          <marker id="arrowMuted" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L8,3 L0,6 Z" fill={flowMuted} />
          </marker>
        </defs>

        {/* Client -> API */}
        <line x1="170" y1="185" x2="246" y2="185" stroke={flow} strokeWidth="2" markerEnd="url(#arrow)" aria-hidden="true" />
        {/* API -> Postgres (read) */}
        <line x1="420" y1="165" x2="496" y2="165" stroke={flow} strokeWidth="2" markerEnd="url(#arrow)" aria-hidden="true" />
        <text x="458" y="156" fontSize="10" textAnchor="middle" fill={flowMuted} aria-hidden="true">
          ranked read
        </text>
        {/* API -> Redis (enqueue) */}
        <line x1="335" y1="240" x2="335" y2="281" stroke={flowMuted} strokeWidth="2" markerEnd="url(#arrowMuted)" aria-hidden="true" />
        <text x="398" y="268" fontSize="10" textAnchor="middle" fill={flowMuted} aria-hidden="true">
          enqueue
        </text>
        {/* Redis -> Worker */}
        <line x1="420" y1="315" x2="496" y2="312" stroke={flowMuted} strokeWidth="2" markerEnd="url(#arrowMuted)" aria-hidden="true" />
        {/* Worker -> Postgres (write) */}
        <path d="M590,275 C590,235 590,215 590,202" fill="none" stroke={flowMuted} strokeWidth="2" markerEnd="url(#arrowMuted)" aria-hidden="true" />
        <text x="628" y="240" fontSize="10" textAnchor="middle" fill={flowMuted} aria-hidden="true">
          write index
        </text>
      </svg>
    </figure>
  )
}
