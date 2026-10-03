import Reveal from '../components/Reveal.jsx'
import { site } from '../data/site.js'
import { Mail, ArrowUpRight } from 'lucide-react'
import { GithubIcon, XIcon } from '../components/icons.jsx'

const INTERESTS = [
  'Web application development (web2)',
  'Blockchain & Web3 projects',
  'Research partnerships',
  'Open-source contribution',
  'Interesting problems, period',
]

function Contact() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="section-eyebrow">Contact</span>
          <h1 className="page-title">{site.contactHeadline}</h1>
          <p className="page-lead">{site.contactText}</p>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container contact-grid">
          <Reveal className="contact-card">
            <span className="contact-icon">
              <Mail size={18} strokeWidth={1.7} />
            </span>
            <h3>Email</h3>
            <p>The most reliable way to reach us.</p>
            <a href={site.links.email}>t2txyzpp@t2t.xyz</a>
          </Reveal>

          <Reveal className="contact-card" delay={80}>
            <span className="contact-icon">
              <GithubIcon size={18} />
            </span>
            <h3>GitHub</h3>
            <p>Code, issues, and open-source work.</p>
            <a href={site.links.github} target="_blank" rel="noreferrer">
              github.com/Koket-al <ArrowUpRight size={13} style={{ verticalAlign: '-1px' }} />
            </a>
          </Reveal>

          <Reveal className="contact-card" delay={160}>
            <span className="contact-icon">
              <XIcon size={16} />
            </span>
            <h3>X / Twitter</h3>
            <p>Updates, experiments, and notes in public.</p>
            <a href={site.links.x} target="_blank" rel="noreferrer">
              @Koket5_3 <ArrowUpRight size={13} style={{ verticalAlign: '-1px' }} />
            </a>
          </Reveal>
        </div>

        <div className="container">
          <Reveal className="contact-note">
            <p>
              This site is static by design — there is no form backend collecting messages.
              Email is fastest; GitHub issues work well for anything code-related.
            </p>
          </Reveal>
          <Reveal className="contact-interests-block">
            <h2 className="visually-hidden">What we are interested in</h2>
            <ul className="about-interests">
              {INTERESTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default Contact
