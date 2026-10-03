import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import StatusBadge from './StatusBadge.jsx'
import Reveal from './Reveal.jsx'

/** Card for one project — used on Home (featured) and Projects (all). */
export default function ProjectCard({ project, featured = false, delay = 0 }) {
  return (
    <Reveal delay={delay} className="project-card-wrap">
      <article className={`project-card${featured ? ' featured' : ''}`}>
        {featured && <span className="featured-flag">Flagship</span>}

        <div className="project-card-top">
          <StatusBadge status={project.status} />
          <span className="project-category">{project.category}</span>
        </div>

        <h3 className="project-name">{project.name}</h3>
        <p className="project-tagline">{project.tagline}</p>
        <p className="project-desc">{project.description}</p>

        <ul className="project-tech" aria-label="Technologies">
          {project.technology.slice(0, featured ? 6 : 4).map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className="project-card-actions">
          <Link className="btn btn-secondary btn-sm" to={`/projects/${project.slug}`}>
            View project <ArrowRight size={15} />
          </Link>
          {project.github && (
            <a
              className="project-icon-link"
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} on GitHub`}
            >
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </article>
    </Reveal>
  )
}
