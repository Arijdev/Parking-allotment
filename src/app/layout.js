import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';

export const metadata = {
  title: 'ParkSpace | Premium Parking Allotment',
  description: 'A modern, production-ready parking allotment system built with Next.js, Tailwind CSS, and MongoDB.',
  keywords: 'parking, allotment, reservation, vehicle, management',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="pt-20">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
