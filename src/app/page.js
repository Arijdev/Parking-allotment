'use client';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col flex-grow w-full items-center justify-center p-6">
      
      {/* Hero Section */}
      <section className="w-full max-w-5xl mx-auto flex flex-col items-center text-center py-20">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold text-sm tracking-wide border border-blue-200 dark:border-blue-800">
          The Future of Parking is Here
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6" style={{ background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1.2 }}>
          Seamless Parking,<br />Zero Stress.
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-10 leading-relaxed">
          Experience the ultimate convenience with ParkSpace. Reserve your premium spot in seconds, track availability in real-time, and manage your vehicle history effortlessly.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/book">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300 min-w-[200px]">
              Book a Spot Now
            </button>
          </Link>
          <Link href="/about">
            <button className="px-8 py-4 bg-white dark:bg-slate-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-xl font-bold text-lg shadow-sm hover:bg-gray-50 dark:hover:bg-slate-700 transition-all duration-300 min-w-[200px]">
              Learn More
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-5xl mx-auto py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Real-time Availability", desc: "View live parking maps to find open spots instantly across multiple lots.", icon: "🗺️" },
          { title: "Secure Checkout", desc: "Guaranteed spots and automated checkout tracking for your peace of mind.", icon: "🔒" },
          { title: "Detailed History", desc: "Access comprehensive records of all your past parking allocations.", icon: "📊" }
        ].map((feature, idx) => (
          <div key={idx} className="glass-panel text-center flex flex-col items-center p-8 hover:-translate-y-2 transition-transform duration-300" style={{ animationDelay: `${idx * 0.1}s` }}>
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-3 dark:text-white">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
