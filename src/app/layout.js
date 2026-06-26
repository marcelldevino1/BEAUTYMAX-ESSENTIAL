import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SplashScreen from '@/components/SplashScreen';

// Memanggil font Poppins dengan berbagai ketebalan
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins' 
});

// --- KONFIGURASI SEO & METADATA ---
export const metadata = {
  title: {
    default: 'Beautymax Essential | Beauty for Every Expression',
    template: '%s | Beautymax Essential'
  },
  description: 'Beautymax Essential is a dynamic beauty company. We empower individuality through high-quality, meticulously crafted beauty solutions.',
  keywords: ['beauty', 'cosmetics', 'skincare', 'fragrance', 'beautymax essential', 'BK Cosmetics', 'ME5', 'Angela Glamor'],
  authors: [{ name: 'Beautymax Essential' }],
  creator: 'Beautymax Essential',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://beautymaxid.com',
    siteName: 'Beautymax Essential',
    title: 'Beautymax Essential | Beauty for Every Expression',
    description: 'Empowering individuality through high-quality, meticulously crafted beauty solutions.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Beautymax Essential Corporate Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beautymax Essential | Beauty for Every Expression',
    description: 'Empowering individuality through high-quality, meticulously crafted beauty solutions.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    // Memasukkan variabel poppins ke dalam tag html dan menyetel font default ke sans (yang akan kita atur ke Poppins di Tailwind)
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-surface text-on-surface antialiased overflow-x-hidden min-h-screen flex flex-col font-sans">
        <SplashScreen />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}