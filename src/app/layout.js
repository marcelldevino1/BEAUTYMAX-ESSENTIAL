import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SplashScreen from '@/components/SplashScreen';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

// --- KONFIGURASI SEO & METADATA ---
export const metadata = {
  title: {
    default: 'Beautymax Essential | Beauty for Every Expression',
    template: '%s | Beautymax Essential' // Format otomatis untuk halaman lain (contoh: About | Beautymax Essential)
  },
  description: 'Beautymax Essential is a dynamic beauty company. We empower individuality through high-quality, meticulously crafted beauty solutions.',
  keywords: ['beauty', 'cosmetics', 'skincare', 'fragrance', 'beautymax essential', 'BK Cosmetics', 'ME5', 'Angela Glamor'],
  authors: [{ name: 'Beautymax Essential' }],
  creator: 'Beautymax Essential',
  
  // Konfigurasi Open Graph (Untuk WhatsApp, Facebook, LinkedIn, dll)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://beautymaxid.com', // Ganti dengan domain aslimu nanti
    siteName: 'Beautymax Essential',
    title: 'Beautymax Essential | Beauty for Every Expression',
    description: 'Empowering individuality through high-quality, meticulously crafted beauty solutions.',
    images: [
      {
        url: '/og-image.png', // Gambar yang akan muncul saat link disebar
        width: 1200,
        height: 630,
        alt: 'Beautymax Essential Corporate Image',
      },
    ],
  },
  
  // Konfigurasi Twitter (X)
  twitter: {
    card: 'summary_large_image',
    title: 'Beautymax Essential | Beauty for Every Expression',
    description: 'Empowering individuality through high-quality, meticulously crafted beauty solutions.',
    images: ['/og-image.png'], // Sama dengan gambar Open Graph
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-surface text-on-surface antialiased overflow-x-hidden min-h-screen flex flex-col">
        <SplashScreen />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}