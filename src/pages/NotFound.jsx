import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="section notfound">
      <div className="container">
        <span className="section-eyebrow">404</span>
        <h1 className="page-title">This page dissolved.</h1>
        <p className="page-lead">
          Like a Ghost room after its condition triggers — it existed, but not anymore.
        </p>
        <Link className="btn btn-primary" to="/">
          Back to home
        </Link>
      </div>
    </section>
  )
}

export default NotFound
