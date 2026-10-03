import { Link } from 'react-router-dom'
import { site } from '../data/site.js'
import Reveal from './Reveal.jsx'

/** Contact CTA band used at the bottom of several pages. */
export default function ContactCta() {
  return (
    <section className="contact-cta">
      <div className="container">
        <Reveal className="contact-cta-inner">
          <div>
            <h2>{site.contactHeadline}</h2>
            <p>{site.contactText}</p>
          </div>
          <div className="contact-cta-actions">
            <Link className="btn btn-primary" to="/contact">
              Get in touch
            </Link>
            <a
              className="btn btn-secondary"
              href={site.links.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
