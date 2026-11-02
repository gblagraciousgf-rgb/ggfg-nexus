import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';
import SiteNav from '../components/site-nav';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'GGFG | Grind Grow Flourish Give',
  description: 'GGFG designs platforms, pathways, and systems that develop leaders, entrepreneurs, and changemakers to strengthen communities and expand opportunity.',
  keywords: ['GGFG', 'entrepreneurship', 'West Africa', 'founders', 'leadership'],
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: '/apple-icon.png', type: 'image/png', sizes: '180x180' }],
  },
  appleWebApp: {
    capable: true,
    title: 'GGFG',
    statusBarStyle: 'black-translucent',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
