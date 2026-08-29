'use client';
import Link from 'next/link';

const steps = [
  { step: '01', title: 'Go to Book Spot', desc: 'Click "Book Spot" in the navbar to open the live parking dashboard.' },
  { step: '02', title: 'Fill Your Details', desc: 'Enter your full name, vehicle number, and select the vehicle type.' },
  { step: '03', title: 'Pick a Spot', desc: 'Click any green available spot on the interactive parking map.' },
  { step: '04', title: "You're Parked!", desc: 'Hit confirm and your spot is reserved instantly in the system.' },
];

export default function HomePage() {
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 1.5rem 3rem' }}>
      <div style={{ width: '100%', maxWidth: '900px' }}>

        {/* ── Hero ── */}
        <section style={{ textAlign: 'center', padding: '3.5rem 0 3rem' }}>
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
            🚀 Real-time Parking Management
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
            Find. Book. Park.<br />That Simple.
          </h1>

          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1.05rem',
            maxWidth: '520px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.75,
          }}>
            ParkSpace is a live vehicle allotment system. See available spots across 3 lots in real-time, book instantly, and check out with one click.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/book">
              <button
                style={{
                  padding: '0.9rem 2.25rem',
                  background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  boxShadow: '0 6px 20px rgba(59, 130, 246, 0.35)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(59,130,246,0.45)'; }}
                onMouseOut={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(59,130,246,0.35)'; }}
              >
                Book a Spot Now →
              </button>
            </Link>
            <Link href="/history">
              <button
                style={{
                  padding: '0.9rem 2.25rem',
                  background: 'var(--card-bg)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border)',
                  borderRadius: '10px',
                  fontWeight: 600,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  backdropFilter: 'blur(8px)',
                  transition: 'opacity 0.2s',
                }}
              >
                View History
              </button>
            </Link>
          </div>
        </section>

        {/* ── How it works ── */}
        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>
          📖 How It Works
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(185px, 1fr))',
          gap: '1rem',
          marginBottom: '3rem',
        }}>
          {steps.map(({ step, title, desc }) => (
            <div key={step} className="glass-panel" style={{ padding: '1.25rem' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#3b82f6', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                STEP {step}
              </div>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>{title}</h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="glass-panel" style={{ textAlign: 'center', padding: '2.5rem 2rem' }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            Ready to park smarter?
          </h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
            No sign-up needed. Book your spot in under 30 seconds.
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
