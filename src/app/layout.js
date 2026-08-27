import Navbar from '@/components/Navbar';
import './globals.css';

export const metadata = {
  title: 'ParkSpace | Premium Parking Allotment',
  description: 'A modern, production-ready parking allotment system built with Next.js and MongoDB.',
  keywords: 'parking, allotment, reservation, vehicle, management',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
