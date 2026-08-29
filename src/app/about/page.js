'use client';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="flex flex-col flex-grow w-full items-center py-12 px-6">
      
      <div style={{ width: '100%', maxWidth: '900px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center" style={{
          background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          About ParkSpace
        </h1>

        <div className="glass-panel w-full mb-10" style={{ animationDelay: '0s' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Our Mission</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.75, fontSize: '1.05rem' }}>
            At ParkSpace, we believe that finding a parking spot shouldn&apos;t be the hardest part of your day.
            Our mission is to streamline the vehicle allotment process, bringing transparency, speed, and
            efficiency to modern parking management.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: '1.05rem' }}>
            Whether you are managing a commercial lot or simply looking for a guaranteed spot before you arrive,
            our platform provides real-time updates and seamless booking experiences.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', width: '100%', marginBottom: '3rem' }}>
          <div className="glass-panel" style={{ animationDelay: '0.1s' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem', color: '#3b82f6', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              🚀 Modern Technology
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Built with Next.js and MongoDB, ParkSpace leverages the latest in web technology to deliver
              a lightning-fast, highly responsive user interface that works perfectly across all your devices.
            </p>
          </div>
          
          <div className="glass-panel" style={{ animationDelay: '0.2s' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem', color: '#8b5cf6', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              🎨 Premium Design
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              We prioritize aesthetic excellence. From our glassmorphic interfaces to our smooth animations
              and dynamic dark mode, we ensure that every interaction feels premium and intuitive.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontWeight: 500 }}>Ready to experience the difference?</p>
          <Link href="/book">
            <button className="global-btn" style={{ width: 'auto', padding: '0.85rem 2rem', borderRadius: '10px' }}>
              Book a Spot Today
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

