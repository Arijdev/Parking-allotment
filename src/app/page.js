'use client';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col flex-grow w-full items-center justify-center p-6">
      
      {/* Hero Section */}
      <section className="w-full max-w-5xl mx-auto flex flex-col items-center text-center py-16">
        <div style={{
          display: 'inline-block',
          marginBottom: '1rem',
          padding: '0.4rem 1.2rem',
          borderRadius: '9999px',
          background: 'rgba(59, 130, 246, 0.12)',
          border: '1px solid rgba(59, 130, 246, 0.3)',
          color: '#3b82f6',
          fontWeight: 600,
          fontSize: '0.85rem',
          letterSpacing: '0.05em'
        }}>
          The Future of Parking is Here
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6" style={{
          background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: 1.2
        }}>
          Seamless Parking,<br />Zero Stress.
        </h1>
        
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', maxWidth: '600px', marginBottom: '2.5rem', lineHeight: 1.7 }}>
          Experience the ultimate convenience with ParkSpace. Reserve your premium spot in seconds, track availability in real-time, and manage your vehicle history effortlessly.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/book">
            <button style={{
              padding: '1rem 2rem',
              background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontWeight: 700,
              fontSize: '1.05rem',
              cursor: 'pointer',
              minWidth: '200px',
              boxShadow: '0 8px 24px rgba(59, 130, 246, 0.35)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(59, 130, 246, 0.45)'; }}
            onMouseOut={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.35)'; }}
            >
              Book a Spot Now
            </button>
          </Link>
          <Link href="/about">
            <button style={{
              padding: '1rem 2rem',
              background: 'var(--card-bg)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              fontWeight: 700,
              fontSize: '1.05rem',
              cursor: 'pointer',
              minWidth: '200px',
              backdropFilter: 'blur(8px)',
              transition: 'background 0.2s',
            }}>
              Learn More
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-5xl mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Real-time Availability", desc: "View live parking maps to find open spots instantly across multiple lots.", icon: "🗺️" },
          { title: "Secure Checkout", desc: "Guaranteed spots and automated checkout tracking for your peace of mind.", icon: "🔒" },
          { title: "Detailed History", desc: "Access comprehensive records of all your past parking allocations.", icon: "📊" }
        ].map((feature, idx) => (
          <div key={idx} className="glass-panel text-center flex flex-col items-center" style={{ animationDelay: `${idx * 0.1}s`, padding: '2rem' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{feature.icon}</div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>{feature.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>{feature.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

