import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'GGFG | Grind Grow Flourish Give',
    short_name: 'GGFG',
    description: 'Building people, strengthening communities, and expanding opportunity.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0B2833',
    theme_color: '#0B2833',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}