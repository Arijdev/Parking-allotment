'use client';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="flex flex-col flex-grow w-full items-center py-12 px-6">
      
      <div className="w-full max-w-4xl flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center" style={{ background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          About ParkSpace
        </h1>

        <div className="glass-panel w-full mb-10" style={{ animationDelay: '0s' }}>
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-lg">
            At ParkSpace, we believe that finding a parking spot shouldn't be the hardest part of your day. 
            Our mission is to streamline the vehicle allotment process, bringing transparency, speed, and 
            efficiency to modern parking management.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
            Whether you are managing a commercial lot or simply looking for a guaranteed spot before you arrive, 
            our platform provides real-time updates and seamless booking experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-12">
          <div className="glass-panel" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-bold mb-3 text-blue-600 dark:text-blue-400 flex items-center gap-2">
              <span>🚀</span> Modern Technology
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Built with Next.js and MongoDB, ParkSpace leverages the latest in web technology to deliver 
              a lightning-fast, highly responsive user interface that works perfectly across all your devices.
            </p>
          </div>
          
          <div className="glass-panel" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold mb-3 text-purple-600 dark:text-purple-400 flex items-center gap-2">
              <span>🎨</span> Premium Design
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We prioritize aesthetic excellence. From our glassmorphic interfaces to our smooth animations 
              and dynamic dark mode, we ensure that every interaction feels premium and intuitive.
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-500 dark:text-gray-400 mb-6 font-medium">Ready to experience the difference?</p>
          <Link href="/book">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold shadow-md transition-colors">
              Book a Spot Today
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
