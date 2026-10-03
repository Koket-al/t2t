import { useState } from 'react'
import ProjectCard from '../components/ProjectCard.jsx'
import ContactCta from '../components/ContactCta.jsx'
import Reveal from '../components/Reveal.jsx'
import { projects, projectStatuses } from '../data/projects.js'

function Projects() {
  const [filter, setFilter] = useState('All')

  const statusesInUse = ['All', ...projectStatuses.filter((s) => projects.some((p) => p.status === s))]
  const visible = filter === 'All' ? projects : projects.filter((p) => p.status === filter)

  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="section-eyebrow">Projects</span>
          <h1 className="page-title">The T2T project ecosystem.</h1>
          <p className="page-lead">
            Every project below is part of one company identity — at different stages,
            all treated as honest experiments. Statuses say exactly where each one stands.
          </p>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <Reveal className="filter-row" role="group" aria-label="Filter projects by status">
            {statusesInUse.map((status) => (
              <button
                key={status}
                type="button"
                className={`filter-chip${filter === status ? ' active' : ''}`}
                aria-pressed={filter === status}
                onClick={() => setFilter(status)}
              >
                {status}
              </button>
            ))}
          </Reveal>

          <div className="projects-grid">
            {visible.map((p, i) => (
              <ProjectCard key={p.slug} project={p} delay={i * 60} />
            ))}
          </div>

          {visible.length === 0 && (
            <p className="empty-note">No projects with this status yet.</p>
          )}
        </div>
      </section>

      <ContactCta />
    </>
  )
}

export default Projects
