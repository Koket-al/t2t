import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, CircleAlert } from 'lucide-react'
import { GithubIcon } from '../components/icons.jsx'
import StatusBadge from '../components/StatusBadge.jsx'
import Reveal from '../components/Reveal.jsx'
import ContactCta from '../components/ContactCta.jsx'
import { getProject } from '../data/projects.js'
import NotFound from './NotFound.jsx'

function ProjectDetails() {
  const { slug } = useParams()
  const project = getProject(slug)

  if (!project) return <NotFound />

  return (
    <>
      <section className="page-head project-head">
        <div className="container">
          <Link className="back-link" to="/projects">
            <ArrowLeft size={15} /> All projects
          </Link>

          <div className="project-head-row">
            <div>
              <h1 className="page-title">{project.name}</h1>
              <p className="project-tagline-lg">{project.tagline}</p>
              <p className="project-category-lg">{project.category}</p>
            </div>
            <StatusBadge status={project.status} />
          </div>

          <p className="page-lead">{project.longDescription}</p>

          {(project.github || project.demo) && (
            <div className="hero-actions project-links">
              {project.github && (
                <a className="btn btn-secondary" href={project.github} target="_blank" rel="noreferrer">
                  <GithubIcon size={16} /> GitHub
                </a>
              )}
              {project.demo && (
                <a className="btn btn-primary" href={project.demo} target="_blank" rel="noreferrer">
                  Live demo <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ---- Problem / Idea ---- */}
      <section className="section section-tight">
        <div className="container duo-grid">
          <Reveal className="duo-card">
            <h2>The problem</h2>
            <p>{project.problem}</p>
          </Reveal>
          <Reveal className="duo-card duo-card-accent" delay={90}>
            <h2>The idea</h2>
            <p>{project.idea}</p>
          </Reveal>
        </div>
      </section>

      {/* ---- How it works ---- */}
      <section className="section section-alt section-tight">
        <div className="container">
          <Reveal>
            <h2 className="section-title">How it works</h2>
          </Reveal>
          <ol className="steps-grid">
            {project.howItWorks.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 70} className="step-card">
                <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---- Technology / Architecture ---- */}
      <section className="section section-tight">
        <div className="container duo-grid">
          <Reveal className="duo-card">
            <h2>Technology</h2>
            <ul className="tech-list">
              {project.technology.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            {project.concepts && (
              <>
                <h3 className="duo-subhead">Concepts explored</h3>
                <ul className="tech-list tech-list-muted">
                  {project.concepts.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </>
            )}
          </Reveal>

          <Reveal className="duo-card duo-card-accent" delay={90}>
            <h2>Architecture</h2>
            <div className="arch-placeholder">
              <span className="arch-placeholder-box" aria-hidden="true">
                Diagram
              </span>
              <p>
                <CircleAlert size={15} style={{ verticalAlign: '-2px', marginRight: 6 }} />
                {project.architectureNote}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- Future direction ---- */}
      <section className="section section-tight">
        <div className="container">
          <Reveal>
            <h2 className="section-title">Future direction</h2>
          </Reveal>
          <ul className="future-list">
            {project.future.map((item, i) => (
              <Reveal as="li" key={item} delay={i * 60}>
                {item}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <ContactCta />
    </>
  )
}

export default ProjectDetails
