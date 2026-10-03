import Reveal from './Reveal.jsx'

/** Eyebrow + title + optional lead paragraph, revealed on scroll. */
export default function SectionTitle({ eyebrow, title, lead }) {
  return (
    <Reveal className="section-title-block">
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      {lead && <p className="section-lead">{lead}</p>}
    </Reveal>
  )
}
