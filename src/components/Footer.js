'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 mt-auto py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold mb-2">
            <span>🅿️</span>
            <span style={{ background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              ParkSpace
            </span>
          </Link>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
            Premium vehicle allotment <br className="hidden md:block" />and management system.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link>
          <Link href="/book" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Book</Link>
          <Link href="/history" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">History</Link>
          <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</Link>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-400 dark:text-gray-500">
          &copy; {new Date().getFullYear()} ParkSpace. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
