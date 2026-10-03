import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { site } from '../data/site.js'

/**
 * Hero — headline, supporting copy, CTAs, and the network visual
 * (pure SVG + CSS animation, no images).
 */
export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Ambient background glow — decorative only */}
      <div className="hero-glow" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="hero-eyebrow">
            <span className="hero-eyebrow-dot" aria-hidden="true" />
            Independent technology company
          </span>

          <h1 className="hero-title">
            Building technology for the <span className="accent">problems that matter</span>.
          </h1>

          <p className="hero-sub">
            {site.description}
          </p>

          <div className="hero-actions">
            <Link className="btn btn-primary" to="/projects">
              Explore Projects <ArrowRight size={16} />
            </Link>
            <Link className="btn btn-secondary" to="/about">
              About T2T
            </Link>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <HeroNetwork />
        </div>
      </div>
    </section>
  )
}

/**
 * The T2T network: a slow-drifting SVG graph with the company at the center.
 * Deliberately restrained — low opacity lines, gentle float, no neon.
 */
function HeroNetwork() {
  // Center node + labeled satellites. Coordinates are in a 520x540 viewBox.
  const nodes = [
    { label: 'AI', x: 260, y: 64 },
    { label: 'Blockchain', x: 76, y: 170 },
    { label: 'Data', x: 444, y: 170 },
    { label: 'Web3', x: 76, y: 380 },
    { label: 'Real World', x: 444, y: 380 },
    { label: 'Digital Infrastructure', x: 260, y: 470 },
  ]

  return (
    <div className="net-wrap">
      <svg viewBox="0 0 520 540" className="net-svg" role="presentation">
        {/* Edges */}
        {nodes.map((n, i) => (
          <line
            key={i}
            x1="260"
            y1="270"
            x2={n.x}
            y2={n.y}
            className={`net-edge net-edge-${i + 1}`}
          />
        ))}
        {/* Cross-links: Blockchain→Web3, Data→Real World */}
        <line x1="76" y1="170" x2="76" y2="380" className="net-edge net-edge-7" />
        <line x1="444" y1="170" x2="444" y2="380" className="net-edge net-edge-7" />

        {/* Center */}
        <circle cx="260" cy="270" r="58" className="net-center-ring" />
        <circle cx="260" cy="270" r="46" className="net-center" />

        {/* Satellites */}
        {nodes.map((n, i) => (
          <g key={n.label} className={`net-node net-node-${i + 1}`}>
            <circle cx={n.x} cy={n.y} r="7" className="net-dot" />
            <circle cx={n.x} cy={n.y} r="16" className="net-halo" />
          </g>
        ))}
      </svg>

      {/* Text labels positioned over the SVG (crisper than SVG text) */}
      <span className="net-label net-center-label">T2T</span>
      {nodes.map((n, i) => (
        <span
          key={n.label}
          className={`net-label net-label-${i + 1}${
            n.label === 'Digital Infrastructure' ? ' net-label-wide' : ''
          }`}
          style={{
            left: `${(n.x / 520) * 100}%`,
            top: `${(n.y / 540) * 100}%`,
          }}
        >
          {n.label}
        </span>
      ))}
    </div>
  )
}
