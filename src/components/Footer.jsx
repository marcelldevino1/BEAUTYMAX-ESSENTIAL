"use client";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  return (
    <ScrollReveal>
      <footer className="bg-primary-container w-full py-16 md:py-24 mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-16 max-w-7xl mx-auto text-white">
          
          <div className="md:col-span-2 flex flex-col justify-between">
            <div>
              <Link href="/" className="font-serif text-2xl md:text-3xl mb-4 block hover:text-muted-gold transition-colors">BEAUTYMAX ESSENTIAL</Link>
              <p className="text-sm text-on-surface-variant max-w-sm mt-4 leading-relaxed">Beauty for every expression. Empowering individuality through high-quality, meticulously crafted solutions.</p>
            </div>
            <p className="text-xs uppercase tracking-widest opacity-40 mt-12">© {new Date().getFullYear()} BEAUTYMAX ESSENTIAL.</p>
          </div>
          
          <div className="flex flex-col space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-gold mb-2">Explore</h4>
            <Link className="text-sm text-on-surface-variant hover:text-muted-gold transition-colors w-max" href="/">Home</Link>
            <Link className="text-sm text-on-surface-variant hover:text-muted-gold transition-colors w-max" href="/about">About Us</Link>
            <Link className="text-sm text-on-surface-variant hover:text-muted-gold transition-colors w-max" href="/brands">Our Brands</Link>
            <Link className="text-sm text-on-surface-variant hover:text-muted-gold transition-colors w-max" href="/contact">Contact</Link>
          </div>
          
          <div className="flex flex-col space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-gold mb-2">Connect</h4>
            
            {/* Real Instagram Logo SVG */}
            <a className="text-sm text-on-surface-variant hover:text-muted-gold transition-colors w-max flex items-center gap-3 group" href="https://instagram.com/bkcosmetics.idn" target="_blank" rel="noopener noreferrer">
              <svg className="w-4 h-4 text-muted-gold group-hover:text-white transition-colors fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              Instagram
            </a>
            
            {/* Real TikTok Logo SVG */}
            <a className="text-sm text-on-surface-variant hover:text-muted-gold transition-colors w-max flex items-center gap-3 group" href="https://tiktok.com/@bkcosmetics.idn" target="_blank" rel="noopener noreferrer">
              <svg className="w-4 h-4 text-muted-gold group-hover:text-white transition-colors fill-current" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              TikTok
            </a>
            
            {/* Real LinkedIn Logo SVG */}
            <a className="text-sm text-on-surface-variant hover:text-muted-gold transition-colors w-max flex items-center gap-3 group" href="https://www.linkedin.com/company/pt-beautymax-essential-indonesia/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
              <svg className="w-4 h-4 text-muted-gold group-hover:text-white transition-colors fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>

            {/* Email Icon (Tetap pakai bawaan karena sudah standar yang bagus) */}
            <a className="text-sm text-on-surface-variant hover:text-muted-gold transition-colors w-max flex items-center gap-3 mt-4 pt-4 border-t border-outline-variant/20 group" href="mailto:help@jk.beautymaxid.com">
              <span className="material-symbols-outlined text-[16px] text-muted-gold group-hover:text-white transition-colors">mail</span>
              help@jk.beautymaxid.com
            </a>
            
          </div>
        </div>
      </footer>
    </ScrollReveal>
  );
}