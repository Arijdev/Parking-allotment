import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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
      <body className="antialiased font-sans flex flex-col min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex-grow flex flex-col w-full" style={{ paddingTop: '100px', paddingBottom: '40px' }}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
