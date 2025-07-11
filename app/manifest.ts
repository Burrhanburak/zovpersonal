import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ZovPersonal - International Future-Oriented Personnel Placement',
    short_name: 'ZovPersonal',
    description: 'Connecting qualified professionals with international employers. Future-oriented recruitment services for sustainable success in Germany, EU countries, and beyond.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1c2706',
    icons: [
      {
        src: '/logo.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any'
      },
      {
        src: '/favicon.ico',
        sizes: '16x16 32x32',
        type: 'image/x-icon'
      }
    ],
    orientation: 'portrait',
    scope: '/',
    lang: 'en',
    categories: ['business', 'productivity', 'employment'],
    screenshots: [
      {
        src: '/zovpersonal.webp',
        sizes: '1920x1080',
        type: 'image/webp',
        form_factor: 'wide'
      }
    ]
  }
} 