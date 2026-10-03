import SectionTitle from '../components/SectionTitle.jsx'
import Reveal from '../components/Reveal.jsx'
import ContactCta from '../components/ContactCta.jsx'
import { site } from '../data/site.js'
import { GithubIcon, XIcon } from '../components/icons.jsx'
import { Mail, FileText } from 'lucide-react'

function About() {
  const { founder } = site

  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="section-eyebrow">About</span>
          <h1 className="page-title">Technology is changing quickly. Real problems are not waiting.</h1>
          <p className="page-lead">
            T2T Technologies exists to explore how emerging technologies can be applied to
            practical problems — rather than building technology simply because it is new.
          </p>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container about-grid">
          <Reveal className="about-block">
            <h2>Why T2T exists</h2>
            <p>
              Technology is changing quickly, but many real-world problems remain difficult.
              Recycling still lacks good incentives. Financial tools still exclude people.
              Digital spaces still cannot promise to end. Businesses still need web software
              that simply works. These gaps are not lack-of-hype problems — they are hard,
              unglamorous, worth-solving problems.
            </p>
            <p>
              T2T Technologies is an independent, solution-first company. We build web2
              applications, blockchain systems, and AI-powered tools — choosing whatever
              technology the problem actually needs. The brief decides the stack, never the
              hype cycle.
            </p>
          </Reveal>

          <Reveal className="about-block" delay={90}>
            <h2>What we work on</h2>
            <ul className="about-interests">
              {              [
                'Web application development (web2)',
                'Blockchain & smart contracts',
                'Artificial intelligence',
                'Web3 & digital identity',
                'Sustainability & circular economy',
                'Digital systems & infrastructure',
                'Financial infrastructure (DeFi)',
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h2 className="about-h2-gap">How we work</h2>
            <p>
              Small by design. Build first, document honestly, publish what is useful.
              The company identity stays primary — projects join one coherent ecosystem
              instead of scattering across disconnected repos.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---- Founder ---- */}
      <section className="section section-alt section-tight">
        <div className="container">
          <SectionTitle eyebrow="Founder" title="Built by Koket Alemayehu" />
          <Reveal className="founder-card">
            <div className="founder-avatar" aria-hidden="true">
              {founder.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </div>
            <div className="founder-body">
              <h3>{founder.name}</h3>
              <p className="founder-role">{founder.role}</p>
              <p className="founder-bio">{founder.bio}</p>
              <ul className="founder-areas">
                {founder.areas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
              <div className="founder-links">
                <a href={founder.links.github} target="_blank" rel="noreferrer">
                  <GithubIcon size={15} /> GitHub
                </a>
                <a href={founder.links.x} target="_blank" rel="noreferrer">
                  <XIcon size={13} /> X
                </a>
                <a href={founder.links.email}>
                  <Mail size={15} /> Email
                </a>
                {founder.links.cv && (
                  <a href={founder.links.cv} target="_blank" rel="noreferrer">
                    <FileText size={15} /> CV
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactCta />
    </>
  )
}

export default About
