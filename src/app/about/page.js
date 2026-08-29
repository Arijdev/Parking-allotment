'use client';
import Link from 'next/link';

const stats = [
  { value: '3', label: 'Parking Lots' },
  { value: '60', label: 'Total Spots' },
  { value: '24/7', label: 'Availability' },
  { value: '100%', label: 'Real-time Updates' },
];

const features = [
  {
    icon: '🗺️',
    title: 'Live Parking Map',
    desc: 'View an interactive, real-time map of all parking spots across Lot 1, Lot 2, and Lot 3. Instantly see which spots are available, occupied, or selected.',
  },
  {
    icon: '⚡',
    title: 'Instant Booking',
    desc: 'Reserve your spot in seconds. Simply enter your name, vehicle number, and type — then click a spot on the map to confirm your booking instantly.',
  },
  {
    icon: '🔄',
    title: 'Easy Checkout',
    desc: 'Click any occupied spot to trigger a smooth checkout flow. Vehicle records are updated in real-time the moment a driver leaves.',
  },
  {
    icon: '📋',
    title: 'Full History Log',
    desc: 'Every booking and checkout is recorded with timestamps. Browse the full history table to audit active sessions and past allocations.',
  },
  {
    icon: '🌙',
    title: 'Dark & Light Mode',
    desc: 'Switch between a sleek dark mode and a crisp light mode with a single click. Your preference is remembered across sessions.',
  },
  {
    icon: '📱',
    title: 'Fully Responsive',
    desc: 'ParkSpace works beautifully on desktops, tablets, and mobile phones — no matter the screen size, your experience stays consistent.',
  },
];

const techStack = [
  { name: 'Next.js 16', desc: 'React framework with App Router', color: '#000000' },
  { name: 'MongoDB', desc: 'Flexible NoSQL database', color: '#10b981' },
  { name: 'Mongoose', desc: 'Elegant MongoDB object modeling', color: '#880000' },
  { name: 'Tailwind CSS', desc: 'Utility-first CSS framework', color: '#3b82f6' },
];

export default function AboutPage() {
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem 1.5rem' }}>
      <div style={{ width: '100%', maxWidth: '900px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
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
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: '1rem',
            background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Smarter Parking,<br />Built for Everyone.
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '620px', margin: '0 auto', lineHeight: 1.75 }}>
            ParkSpace is a modern, full-stack vehicle allotment system designed to eliminate the chaos of manual parking management. Built with real-time data, a beautiful interface, and zero complexity for the end user.
          </p>
        </div>

        {/* Stats Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1rem',
          marginBottom: '3rem',
        }}>
          {stats.map(({ value, label }) => (
            <div key={label} className="glass-panel" style={{ textAlign: 'center', padding: '1.25rem 1rem' }}>
              <div style={{
                fontSize: '1.75rem',
                fontWeight: 800,
                background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '0.25rem',
              }}>{value}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div className="glass-panel" style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
            🎯 Our Mission
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.97rem' }}>
            We built ParkSpace because parking management deserves better than paper logs and spreadsheets. Our goal is to give lot operators and drivers a shared, real-time view of parking availability — so no one wastes time searching for a spot, and no spot goes unaccounted for.
          </p>
        </div>

        {/* Features Grid */}
        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>
          ✨ Features
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem',
        }}>
          {features.map(({ icon, title, desc }) => (
            <div key={title} className="glass-panel" style={{ padding: '1.25rem' }}>
              <div style={{ fontSize: '1.6rem', marginBottom: '0.6rem' }}>{icon}</div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>{title}</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>
          🛠️ Tech Stack
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1rem',
          marginBottom: '3rem',
        }}>
          {techStack.map(({ name, desc, color }) => (
            <div key={name} className="glass-panel" style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: color,
                flexShrink: 0,
              }} />
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)' }}>{name}</div>
                <div style={{ fontSize: '0.775rem', color: 'var(--text-secondary)' }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="glass-panel" style={{ textAlign: 'center', padding: '2rem' }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            Ready to get started?
          </h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', fontSize: '0.95rem' }}>
            Book your spot in under 30 seconds. No sign-up required.
          </p>
          <Link href="/book">
            <button className="global-btn" style={{ width: 'auto', padding: '0.8rem 2rem', borderRadius: '10px', fontSize: '0.95rem' }}>
              Book a Spot Now →
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}
