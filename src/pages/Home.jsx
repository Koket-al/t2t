import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import Reveal from '../components/Reveal.jsx'
import ContactCta from '../components/ContactCta.jsx'
import { projects } from '../data/projects.js'
import { Code2, FlaskConical, Search, GitBranch, Globe } from 'lucide-react'

const PRINCIPLES = [
  {
    icon: Code2,
    title: 'Building',
    text: 'Working software over slideware. Every idea eventually becomes code.',
  },
  {
    icon: FlaskConical,
    title: 'Experimentation',
    text: 'Projects are experiments — hypotheses tested honestly, results documented.',
  },
  {
    icon: Search,
    title: 'Research',
    text: 'Understanding why something works before scaling what works.',
  },
  {
    icon: GitBranch,
    title: 'Open technology',
    text: 'Selected work is published so others can read it, use it, build on it.',
  },
  {
    icon: Globe,
    title: 'Real-world applications',
    text: 'The test of a system is whether it solves a problem outside the screen.',
  },
]

function Home() {
  const flagship = projects.find((p) => p.featured) ?? projects[0]
  const rest = projects.filter((p) => p.slug !== flagship.slug)

  return (
    <>
      <Hero />

      {/* ---- Philosophy ---- */}
      <section className="section" id="philosophy">
        <div className="container">
          <SectionTitle
            eyebrow="Philosophy"
            title="We build, experiment, and learn."
            lead="T2T Technologies is a solution-building company — web2 applications, blockchain systems, and everything in between. The technology follows the problem, never the other way around."
          />
          <div className="principles-grid">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={i * 70} className="principle">
                <span className="principle-icon">
                  <p.icon size={19} strokeWidth={1.7} />
                </span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Projects ---- */}
      <section className="section section-alt" id="projects">
        <div className="container">
          <SectionTitle
            eyebrow="Projects"
            title="One ecosystem, many experiments."
            lead="Each project explores a different intersection — circular economy, privacy, insurance, marketplaces — under one company identity."
          />
          <ProjectCard project={flagship} featured />
          <div className="projects-grid">
            {rest.map((p, i) => (
              <ProjectCard key={p.slug} project={p} delay={i * 70} />
            ))}
          </div>
          <Reveal className="section-more">
            <Link className="btn btn-secondary" to="/projects">
              View all projects
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---- Technology teaser ---- */}
      <section className="section" id="technology">
        <div className="container tech-teaser">
          <div>
            <SectionTitle
              eyebrow="Technology"
              title="A stack chosen for the problem, not the hype."
              lead="Web applications, blockchain, AI, Web3, DeFi, digital identity, and data — combined where the combination is the point."
            />
            <Reveal delay={120}>
              <Link className="btn btn-secondary" to="/technology">
                Explore the technology
              </Link>
            </Reveal>
          </div>
          <Reveal className="tech-chip-cloud" delay={150} aria-hidden="true">
            {['Web Applications', 'Blockchain', 'Smart Contracts', 'AI', 'Web3', 'DeFi', 'Digital Identity', 'Data', 'Software Engineering', 'Sustainability'].map(
              (tech, i) => (
                <span className={`tech-chip chip-${i % 3}`} key={tech}>
                  {tech}
                </span>
              ),
            )}
          </Reveal>
        </div>
      </section>

      {/* ---- Lab teaser ---- */}
      <section className="section section-alt" id="research">
        <div className="container lab-teaser">
          <Reveal className="lab-teaser-card">
            <span className="section-eyebrow">T2T Lab</span>
            <h2>Not every experiment becomes a product.</h2>
            <p>
              The T2T Lab is where ideas are tested — prototypes, research notes, and
              half-formed concepts that earn their next step or get documented and set aside.
            </p>
            <Link className="btn btn-secondary" to="/research">
              Look inside the lab
            </Link>
          </Reveal>
        </div>
      </section>

      <ContactCta />
    </>
  )
}

export default Home
