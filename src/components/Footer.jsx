import { Link } from 'react-router-dom'
import { GithubIcon, XIcon } from './icons.jsx'
import { site } from '../data/site.js'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link className="nav-logo" to="/" aria-label="T2T Technologies — home">
            <span className="nav-logo-mark" aria-hidden="true">T2T</span>
            <span>T2T Technologies</span>
          </Link>
          <p className="footer-tagline">
            Building solutions across
            <br />
            Web Apps · AI · Blockchain · Web3
          </p>
        </div>

        <nav className="footer-col" aria-label="Footer">
          <h3>Explore</h3>
          <Link to="/projects">Projects</Link>
          <Link to="/research">Research</Link>
          <Link to="/technology">Technology</Link>
          <Link to="/about">About</Link>
        </nav>

        <div className="footer-col">
          <h3>Connect</h3>
          <a href={site.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={site.links.x} target="_blank" rel="noreferrer">
            X
          </a>
          <a href={site.links.email}>Email</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 T2T Technologies</p>
        <div className="footer-social">
          <a href={site.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GithubIcon size={17} />
          </a>
          <a href={site.links.x} target="_blank" rel="noreferrer" aria-label="X (Twitter)">
            <XIcon size={15} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
