'use client';
import Link from 'next/link';

const features = [
  {
    icon: '🗺️',
    title: 'Real-time Parking Map',
    desc: 'See live availability across all 3 lots. Available, occupied, and selected spots update instantly.',
  },
  {
    icon: '⚡',
    title: 'Book in Seconds',
    desc: 'Enter your details, pick a spot on the map, and confirm — your vehicle is parked without the wait.',
  },
  {
    icon: '📋',
    title: 'Full History Log',
    desc: 'Every entry and exit is recorded with timestamps. Audit allocations or manage records anytime.',
  },
];

const steps = [
  { step: '01', title: 'Go to Book', desc: 'Navigate to the Book Spot page from the menu.' },
  { step: '02', title: 'Fill Your Details', desc: 'Enter your name, vehicle number, and type.' },
  { step: '03', title: 'Pick a Spot', desc: 'Click any green available spot on the live map.' },
  { step: '04', title: "You're Parked!", desc: 'Confirm and your spot is instantly reserved.' },
];

export default function HomePage() {
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 1.5rem 3rem' }}>
      <div style={{ width: '100%', maxWidth: '900px' }}>

        {/* ── Hero ── */}
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
            🚀 Modern Parking Management System
          </div>

          <h1 style={{
            fontSize: 'clamp(2.2rem, 6vw, 3.5rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            margin: '0.75rem 0 1.25rem',
            background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Find & Book Your<br />Parking Spot Instantly.
          </h1>

          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1.05rem',
            maxWidth: '560px',
            margin: '0 auto 2rem',
            lineHeight: 1.75,
          }}>
            ParkSpace gives drivers and lot managers a shared, real-time view of parking availability.
            No paperwork. No waiting. Just park.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/book">
              <button
                style={{
                  padding: '0.85rem 2rem',
                  background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  boxShadow: '0 6px 20px rgba(59, 130, 246, 0.35)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  minWidth: '160px',
                }}
                onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(59,130,246,0.45)'; }}
                onMouseOut={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(59,130,246,0.35)'; }}
              >
                Book a Spot →
              </button>
            </Link>
            <Link href="/about">
              <button
                style={{
                  padding: '0.85rem 2rem',
                  background: 'var(--card-bg)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border)',
                  borderRadius: '10px',
                  fontWeight: 600,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  backdropFilter: 'blur(8px)',
                  minWidth: '160px',
                  transition: 'opacity 0.2s',
                }}
              >
                Learn More
              </button>
            </Link>
          </div>
        </section>

        {/* ── Quick Stats ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1rem',
          marginBottom: '3rem',
        }}>
          {[
            { value: '3', label: 'Parking Lots' },
            { value: '60', label: 'Spots Available' },
            { value: '100%', label: 'Real-time Data' },
          ].map(({ value, label }) => (
            <div key={label} className="glass-panel" style={{ textAlign: 'center', padding: '1.25rem 1rem' }}>
              <div style={{
                fontSize: '1.75rem',
                fontWeight: 800,
                background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '0.2rem',
              }}>{value}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{label}</div>
            </div>
          ))}
        </div>

        {/* ── Features ── */}
        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>
          ✨ Why ParkSpace?
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1rem',
          marginBottom: '3rem',
        }}>
          {features.map(({ icon, title, desc }) => (
            <div key={title} className="glass-panel" style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>{icon}</div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>{title}</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* ── How it works ── */}
        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>
          📖 How It Works
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1rem',
          marginBottom: '3rem',
        }}>
          {steps.map(({ step, title, desc }) => (
            <div key={step} className="glass-panel" style={{ padding: '1.25rem', position: 'relative' }}>
              <div style={{
                fontSize: '0.75rem',
                fontWeight: 800,
                color: '#3b82f6',
                letterSpacing: '0.08em',
                marginBottom: '0.5rem',
              }}>STEP {step}</div>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>{title}</h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="glass-panel" style={{ textAlign: 'center', padding: '2.5rem 2rem' }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            Ready to park smarter?
          </h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
            Join ParkSpace and never waste time looking for a spot again.
          </p>
          <Link href="/book">
            <button
              className="global-btn"
              style={{ width: 'auto', padding: '0.85rem 2.5rem', borderRadius: '10px', fontSize: '1rem' }}
            >
              Get Started — It&apos;s Free
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}
