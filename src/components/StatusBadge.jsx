/** Status badge — color varies per status but stays muted and readable. */
export default function StatusBadge({ status }) {
  const key = String(status || '').toLowerCase().replace(/\s+/g, '-')
  return (
    <span className={`status-badge status-${key}`}>
      <span className="status-dot" aria-hidden="true" />
      {status}
    </span>
  )
}
