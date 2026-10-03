import SectionTitle from '../components/SectionTitle.jsx'
import Reveal from '../components/Reveal.jsx'
import ContactCta from '../components/ContactCta.jsx'
import { labEntries, labCategories } from '../data/lab.js'
import { FlaskConical } from 'lucide-react'

function Research() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="section-eyebrow">T2T Lab</span>
          <h1 className="page-title">Where ideas are tested.</h1>
          <p className="page-lead">
            Not every experiment becomes a product. The T2T Lab is where ideas are tested —
            some graduate into projects, others are documented and set aside. Both outcomes matter.
          </p>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="lab-cats">
            {labCategories.map((cat, i) => (
              <Reveal key={cat} delay={i * 50} className="lab-cat">
                {cat}
              </Reveal>
            ))}
          </div>

          <div className="lab-grid">
            {labEntries.map((entry, i) => (
              <Reveal key={entry.name} delay={i * 60} className="lab-card">
                <span className="lab-card-icon">
                  <FlaskConical size={16} strokeWidth={1.7} />
                </span>
                <span className="lab-cat-label">{entry.category}</span>
                <h3>{entry.name}</h3>
                <p>{entry.note}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="lab-note">
            <p>
              Lab notes are updated as experiments progress. Anything that reaches
              prototype stage gets its own project page.
            </p>
          </Reveal>
        </div>
      </section>

      <ContactCta />
    </>
  )
}

export default Research
