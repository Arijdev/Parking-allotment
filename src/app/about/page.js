'use client';
import Link from 'next/link';

const features = [
  { icon: '🗺️', title: 'Interactive Live Map', desc: 'Each parking lot (Lot 1, 2, 3) is rendered as a real-time grid. Spot colors update the moment a booking or checkout occurs — no page refresh required.' },
  { icon: '⚡', title: 'Instant Allocation', desc: 'Bookings are written to MongoDB immediately on submission. The system prevents double-booking by validating spot availability before confirming.' },
  { icon: '🔄', title: 'One-Click Checkout', desc: 'Clicking an occupied spot opens a checkout panel. Confirming marks the allocation as checked_out and frees the spot for the next driver.' },
  { icon: '📋', title: 'Audit-Ready History', desc: 'Every allocation stores check-in time, check-out time, vehicle details, and lot info. The History page lets managers delete stale records.' },
  { icon: '🌙', title: 'Adaptive Theming', desc: 'The app reads the system color scheme on first load and lets users toggle between dark and light modes at any time via the navbar.' },
  { icon: '📱', title: 'Responsive Layout', desc: 'The parking grid, booking form, and history table all reflow cleanly on mobile and tablet screens with no horizontal scroll.' },
];

const techStack = [
  { name: 'Next.js 16', role: 'App Router, API Routes, SSR', color: '#000000' },
  { name: 'React 19', role: 'UI components & state management', color: '#61DAFB' },
  { name: 'MongoDB', role: 'NoSQL document database', color: '#10b981' },
  { name: 'Mongoose', role: 'Schema modeling & validation', color: '#880000' },
  { name: 'Tailwind CSS v4', role: 'Utility-first styling', color: '#3b82f6' },
  { name: 'next-themes', role: 'Dark / light mode switching', color: '#8b5cf6' },
];

export default function AboutPage() {
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 1.5rem 3rem' }}>
      <div style={{ width: '100%', maxWidth: '900px' }}>

        {/* ── Header ── */}
        <section style={{ textAlign: 'center', padding: '3rem 0 2.5rem' }}>
          <div style={{
            display: 'inline-block',
            marginBottom: '1rem',
            padding: '0.35rem 1rem',
            borderRadius: '9999px',
            background: 'rgba(59, 130, 246, 0.12)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            color: '#3b82f6',
            fontWeight: 600,
            fontSize: '0.8rem',
            letterSpacing: '0.06em',
          }}>
            ABOUT PARKSPACE
          </div>
          <h1 style={{
            fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
            fontWeight: 800,
            lineHeight: 1.2,
            margin: '0.75rem 0 1.25rem',
            background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Built to Solve Real<br />Parking Problems.
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '580px', margin: '0 auto', lineHeight: 1.8 }}>
            ParkSpace was built out of frustration with paper logbooks and silent spreadsheets. We wanted something anyone could use — operators and drivers alike — with zero training and full real-time accuracy.
          </p>
        </section>

        {/* ── Mission ── */}
        <div className="glass-panel" style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>🎯 Mission</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem' }}>
            Our mission is to replace manual, error-prone parking processes with a transparent, live system. ParkSpace tracks every vehicle from entry to exit — giving operators full visibility and giving drivers instant confidence that their spot is reserved.
          </p>
        </div>

        {/* ── Detailed Features ── */}
        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>
          🔍 Feature Deep-Dive
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1rem',
          marginBottom: '2.5rem',
        }}>
          {features.map(({ icon, title, desc }) => (
            <div key={title} className="glass-panel" style={{ padding: '1.35rem' }}>
              <div style={{ fontSize: '1.6rem', marginBottom: '0.6rem' }}>{icon}</div>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>{title}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* ── Tech Stack ── */}
        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>
          🛠️ Tech Stack
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '0.85rem',
          marginBottom: '2.5rem',
        }}>
          {techStack.map(({ name, role, color }) => (
            <div key={name} className="glass-panel" style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: color, flexShrink: 0 }} />
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)' }}>{name}</div>
                <div style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', marginTop: '0.1rem' }}>{role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Open Source note ── */}
        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <div style={{ fontSize: '2rem' }}>📂</div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Open Source</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              ParkSpace is open source. Browse the code, fork it, or contribute on GitHub.
              Built as a full-stack learning project using the latest Next.js App Router.
            </p>
          </div>
          <a
            href="https://github.com/Arijdev/Parking-allotment"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '0.6rem 1.25rem',
              background: 'var(--input-bg)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            View on GitHub →
          </a>
        </div>

      </div>
    </div>
  );
}
