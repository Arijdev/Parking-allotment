'use client';
import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      width: '100%',
      background: 'var(--card-bg)',
      borderTop: '1px solid var(--border)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      position: 'relative',
      zIndex: 10,
    }}>
      {/* Main footer row */}
      <div style={{
        maxWidth: '1024px',
        margin: '0 auto',
        padding: '1.25rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        flexWrap: 'wrap',
      }}>

        {/* Brand */}
        <Link href="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          textDecoration: 'none',
          fontWeight: 700,
          fontSize: '1.05rem',
          flexShrink: 0,
        }}>
          <span>🅿️</span>
          <span style={{
            background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>ParkSpace</span>
        </Link>

        {/* Nav links — center */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
        }}>
          {[
            { href: '/', label: 'Home' },
            { href: '/book', label: 'Book' },
            { href: '/history', label: 'History' },
            { href: '/about', label: 'About' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                transition: 'color 0.2s',
              }}
              onMouseOver={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Copyright — right */}
        <p style={{
          fontSize: '0.8rem',
          color: 'var(--text-secondary)',
          flexShrink: 0,
          opacity: 0.7,
        }}>
          &copy; {year} ParkSpace
        </p>

      </div>
    </footer>
  );
}
