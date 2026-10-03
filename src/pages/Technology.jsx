import SectionTitle from '../components/SectionTitle.jsx'
import Reveal from '../components/Reveal.jsx'
import ContactCta from '../components/ContactCta.jsx'
import TechMap from '../components/TechMap.jsx'
import { technologies } from '../data/technologies.js'
import { Network } from 'lucide-react'

function Technology() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="section-eyebrow">Technology</span>
          <h1 className="page-title">The areas we work in.</h1>
          <p className="page-lead">
            T2T Technologies sits where several technology areas overlap — web2, web3,
            AI, and data. Individually each is mature; the interesting problems appear
            where they combine.
          </p>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <Reveal className="techmap-head">
            <span className="techmap-head-icon">
              <Network size={18} strokeWidth={1.7} />
            </span>
            <h2 className="section-title">The technology map</h2>
          </Reveal>
          <TechMap />
        </div>
      </section>

      <section className="section section-alt section-tight">
        <div className="container">
          <SectionTitle
            eyebrow="Areas"
            title="Eleven areas, one practice."
            lead="Short, honest definitions — what each area means inside T2T Technologies."
          />
          <div className="tech-grid">
            {technologies.map((tech, i) => (
              <Reveal key={tech.name} delay={i * 50} className="tech-card">
                <h3>{tech.name}</h3>
                <p>{tech.summary}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  )
}

export default Technology
