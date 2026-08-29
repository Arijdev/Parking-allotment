'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="logo">
          <span>🅿️</span>
          <span style={{ 
            background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>ParkSpace</span>
        </Link>
        <div className="nav-links">
          <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>
            Home
          </Link>
          <Link href="/book" className={`nav-link ${pathname === '/book' ? 'active' : ''}`}>
            Book Spot
          </Link>
          <Link href="/history" className={`nav-link ${pathname === '/history' ? 'active' : ''}`}>
            History
          </Link>
          <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>
            About
          </Link>
          
          {mounted && (
            <button 
              className="theme-toggle"
              onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle Theme"
            >
              {currentTheme === 'dark' ? '☀️' : '🌙'}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
