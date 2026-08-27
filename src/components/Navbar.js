import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="logo">
          <span className="logo-icon">🅿️</span>
          <span className="logo-text">ParkSpace</span>
        </Link>
        <div className="nav-links">
          <Link href="/" className="nav-link active">Dashboard</Link>
          <a href="#" className="nav-link disabled" title="Coming Soon">History</a>
          <a href="#" className="nav-link disabled" title="Coming Soon">Logs</a>
        </div>
      </div>
    </nav>
  );
}
